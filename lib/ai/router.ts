import { createOpenAI } from "@ai-sdk/openai";

const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY!,
  baseURL: "https://api.deepseek.com",
});

const HIGH_STAKES_CATEGORIES = ["law", "government", "health"];

export function selectModel(category?: string) {
  if (HIGH_STAKES_CATEGORIES.includes(category ?? "")) {
    return deepseek("deepseek-chat");
  }
  return deepseek(process.env.LLM_MODEL ?? "deepseek-chat");
}
