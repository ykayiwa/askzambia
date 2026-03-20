import { createSession, getSessions } from "@/lib/db/queries";
import { z } from "zod";

export async function GET() {
  try {
    const sessions = await getSessions();
    return Response.json(sessions);
  } catch (error) {
    console.error("Sessions GET error:", error);
    return Response.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

const CreateSessionSchema = z.object({
  title: z.string().min(1).max(200).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title } = CreateSessionSchema.parse(body);
    const session = await createSession(title);
    return Response.json(session);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: "Invalid request format", code: "VALIDATION_ERROR" },
        { status: 400 }
      );
    }
    console.error("Sessions POST error:", error);
    return Response.json(
      { error: "Internal server error", code: "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}
