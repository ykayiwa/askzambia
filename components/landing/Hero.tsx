"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SUGGESTIONS = [
  { label: "Constitutional rights", query: "What are my rights under the Zambian constitution?" },
  { label: "Register a business", query: "How do I register a business in Zambia?" },
  { label: "Tourism guide", query: "Best places to visit in Zambia?" },
  { label: "Economic data", query: "What is Zambia's GDP in 2024?" },
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
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(25,135,84,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 90% 80%, rgba(232,98,28,0.06) 0%, transparent 60%),
          #ffffff
        `,
      }}
    >
      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#198754]/20 bg-[#f0faf4] px-[18px] py-[7px] text-[0.8rem] font-semibold text-[#146c43]">
        <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#198754]" />
        Africa&apos;s First National AI Knowledge Platform
      </div>

      {/* Heading */}
      <h1 className="max-w-[820px] text-[clamp(2.6rem,6.5vw,4.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0f1f14]">
        Ask anything about{" "}
        <span className="bg-gradient-to-br from-[#198754] to-[#CE6B2C] bg-clip-text text-transparent">
          Zambia
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-6 max-w-[540px] text-[1.15rem] leading-[1.7] text-[#64748b]">
        Get instant, accurate answers about Zambia&apos;s laws, history, tourism, economy, culture,
        and government — powered by verified national data sources.
      </p>

      {/* Search */}
      <form onSubmit={handleSubmit} className="mt-9 w-full max-w-[680px]">
        <div className="flex items-center rounded-2xl border-[1.5px] border-[#e2e8f0] bg-white p-[6px] pl-4 shadow-[0_4px_32px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.04)] transition-all focus-within:border-[#198754] focus-within:shadow-[0_4px_32px_rgba(25,135,84,0.14),0_1px_4px_rgba(0,0,0,0.04)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What would you like to know about Zambia?"
            className="min-h-[44px] flex-1 bg-transparent px-2 text-base text-[#0f1f14] placeholder-[#b8c4cc] outline-none"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="flex min-h-[44px] shrink-0 items-center gap-2 rounded-[11px] bg-[#198754] px-6 text-[0.95rem] font-semibold text-white transition-all hover:bg-[#146c43] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            <span className="hidden sm:inline">Ask Zambia</span>
          </button>
        </div>
      </form>

      {/* Suggestions */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.label}
            onClick={() => router.push(`/chat?q=${encodeURIComponent(s.query)}`)}
            className="min-h-[36px] rounded-full border border-[#e2e8f0] bg-white px-4 py-[9px] text-[0.82rem] text-[#64748b] transition-all hover:-translate-y-px hover:border-[#198754] hover:bg-[#f0faf4] hover:text-[#198754]"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-14 flex w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        {[
          { num: "10,000+", label: "Government\ndocuments" },
          { num: "73+", label: "Ethnic cultures\ndocumented" },
          { num: "60 yrs", label: "National history\ncovered" },
        ].map((stat, i) => (
          <div key={stat.num} className={`relative flex-1 py-5 text-center ${i > 0 ? "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-px before:bg-[#e2e8f0]" : ""}`}>
            <div className="bg-gradient-to-br from-[#198754] to-[#CE6B2C] bg-clip-text text-2xl font-extrabold leading-tight text-transparent">
              {stat.num}
            </div>
            <div className="mt-1 whitespace-pre-line text-[0.73rem] font-medium leading-snug text-[#94a3b8]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
