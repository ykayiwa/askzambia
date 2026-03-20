import { streamText } from "ai";
import { llm } from "@/lib/ai/provider";
import { runRAGPipeline, detectCategory } from "@/lib/rag/pipeline";
import { ASKZAMBIA_SYSTEM_PROMPT } from "@/lib/prompts/system";
import { TOPIC_PROMPTS } from "@/lib/prompts/templates";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  createSession,
  saveMessage,
  updateSessionTitle,
} from "@/lib/db/queries";
import { z } from "zod";

const RequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(50),
  sessionId: z.string().uuid().optional(),
});

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      return Response.json(
        { error: "Unauthorized", code: "UNAUTHORIZED" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { messages, sessionId } = RequestSchema.parse(body);
    const lastMessage = messages[messages.length - 1].content;

    const category = detectCategory(lastMessage);
    const { context, sources } = await runRAGPipeline(lastMessage, category);

    let systemPrompt = ASKZAMBIA_SYSTEM_PROMPT.replace("{context}", context);
    if (category && TOPIC_PROMPTS[category]) {
      systemPrompt += `\n\nADDITIONAL GUIDANCE: ${TOPIC_PROMPTS[category]}`;
    }

    // Create or reuse session
    let currentSessionId = sessionId;
    if (!currentSessionId) {
      // Create new session with title from first message
      const title =
        lastMessage.length > 80
          ? lastMessage.slice(0, 77) + "..."
          : lastMessage;
      const chatSession = await createSession(session.user.id, title);
      currentSessionId = chatSession.id;
    }

    // Save user message
    await saveMessage(currentSessionId, "user", lastMessage);

    const result = streamText({
      model: llm,
      system: systemPrompt,
      messages,
      maxOutputTokens: 1024,
      temperature: 0.1,
      onFinish: async ({ text }) => {
        try {
          // Save assistant message with sources
          const sourcesData = sources
            .filter((s) => s.source_url)
            .map((s) => ({
              title: s.source_name,
              url: s.source_url as string,
            }));
          await saveMessage(
            currentSessionId!,
            "assistant",
            text,
            sourcesData.length > 0 ? sourcesData : undefined
          );
        } catch (err) {
          console.error("Failed to save assistant message:", err);
        }
      },
    });

    return result.toTextStreamResponse({
      headers: {
        "X-Sources": encodeURIComponent(
          JSON.stringify(
            sources.map((s) => ({
              title: s.source_name,
              url: s.source_url,
            }))
          )
        ),
        "X-Session-Id": currentSessionId,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Invalid request format", code: "VALIDATION_ERROR" },
        { status: 400 }
      );
    }
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
