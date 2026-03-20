import { createOpenAI } from "@ai-sdk/openai";

const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY!,
  baseURL: "https://api.deepseek.com",
});

export const llm = deepseek(
  process.env.LLM_MODEL ?? "deepseek-chat"
);
