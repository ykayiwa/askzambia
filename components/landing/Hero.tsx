"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const QUICK_QUESTIONS = [
  "What are my constitutional rights?",
  "How to register a business?",
  "Zambia tax rates",
  "Apply for a passport",
  "National parks to visit",
  "Work permit requirements",
];

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/chat?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0faf4] to-white px-4 pb-16 pt-20 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d1e7dd] px-4 py-1.5 text-xs font-semibold text-[#198754]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#198754]" />
          Africa&apos;s First National AI Knowledge Platform
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0f1f14] sm:text-5xl">
          Ask anything about{" "}
          <span className="text-[#198754]">Zambia</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
          Get instant, accurate answers about laws, government services, tourism,
          economy, culture, and more — powered by verified Zambian sources.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          <div className="flex items-center gap-2 rounded-2xl border border-[#e0e8e0] bg-white px-4 py-2.5 shadow-lg shadow-[#198754]/5 focus-within:border-[#198754]/40 focus-within:ring-2 focus-within:ring-[#198754]/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about Zambia's laws, services, tourism..."
              className="flex-1 bg-transparent text-sm text-[#0f1f14] placeholder-gray-400 outline-none"
            />
            <button
              type="submit"
              disabled={!query.trim()}
              className="rounded-xl bg-[#198754] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#146c43] disabled:opacity-40"
            >
              Ask
            </button>
          </div>
        </form>

        <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => router.push(`/chat?q=${encodeURIComponent(q)}`)}
              className="rounded-full border border-[#e0e8e0] bg-white px-3.5 py-1.5 text-xs text-gray-600 transition-all hover:border-[#198754]/30 hover:bg-[#f0faf4] hover:text-[#198754]"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
