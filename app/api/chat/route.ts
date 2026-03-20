import { streamText } from "ai";
import { llm } from "@/lib/ai/provider";
import { runRAGPipeline, detectCategory } from "@/lib/rag/pipeline";
import { ASKZAMBIA_SYSTEM_PROMPT } from "@/lib/prompts/system";
import { TOPIC_PROMPTS } from "@/lib/prompts/templates";
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
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = RequestSchema.parse(body);
    const lastMessage = messages[messages.length - 1].content;

    const category = detectCategory(lastMessage);
    const { context, sources } = await runRAGPipeline(lastMessage, category);

    let systemPrompt = ASKZAMBIA_SYSTEM_PROMPT.replace("{context}", context);
    if (category && TOPIC_PROMPTS[category]) {
      systemPrompt += `\n\nADDITIONAL GUIDANCE: ${TOPIC_PROMPTS[category]}`;
    }

    const result = streamText({
      model: llm,
      system: systemPrompt,
      messages,
      maxOutputTokens: 1024,
      temperature: 0.1,
    });

    return result.toTextStreamResponse({
      headers: {
        "X-Sources": JSON.stringify(
          sources.map((s) => ({
            title: s.source_name,
            url: s.source_url,
            snippet: s.content.slice(0, 200),
          }))
        ),
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
