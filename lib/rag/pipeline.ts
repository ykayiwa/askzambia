import OpenAI from "openai";
import { retrieveChunks } from "@/lib/rag/retriever";
import { rerankChunks } from "@/lib/rag/reranker";
import type { RetrievedChunk } from "@/types/sources";

let _openai: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  }
  return _openai;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await getOpenAI().embeddings.create({
    model: process.env.EMBEDDING_MODEL ?? "text-embedding-3-small",
    input: text.replace(/\n/g, " "),
  });
  return response.data[0].embedding;
}

export async function runRAGPipeline(
  query: string,
  category?: string
): Promise<{ context: string; sources: RetrievedChunk[] }> {
  const rawChunks = await retrieveChunks(query, category);
  const rankedChunks = rerankChunks(rawChunks);

  if (rankedChunks.length === 0) {
    return {
      context:
        "No relevant documents found in the AskZambia knowledge base for this query.",
      sources: [],
    };
  }

  const context = rankedChunks
    .map((c) => `[${c.source_name}]\n${c.content}`)
    .join("\n\n---\n\n");

  return { context, sources: rankedChunks };
}

export function detectCategory(query: string): string | undefined {
  const lower = query.toLowerCase();

  const categoryKeywords: Record<string, string[]> = {
    law: ["law", "constitution", "act", "legal", "rights", "court", "legislation", "bill"],
    government: ["register", "business", "tax", "passport", "visa", "permit", "immigration", "pacra", "zra"],
    tourism: ["visit", "park", "tourism", "hotel", "safari", "victoria falls", "travel"],
    economy: ["gdp", "inflation", "economy", "trade", "export", "import", "kwacha", "bank"],
    health: ["health", "hospital", "clinic", "disease", "medical", "doctor", "hiv", "malaria"],
    education: ["school", "university", "education", "exam", "grade", "student", "teacher"],
    culture: ["culture", "tradition", "ethnic", "tribe", "language", "music", "dance", "ceremony"],
  };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return category;
    }
  }

  return undefined;
}
