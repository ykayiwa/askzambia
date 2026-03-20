"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const SUGGESTIONS = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Constitutional rights",
    query: "What are my rights under the Zambian constitution?",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "Register a business",
    query: "How do I register a business in Zambia?",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    label: "Work permits",
    query: "What are the requirements for a work permit in Zambia?",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    label: "Tourism guide",
    query: "Best places to visit in Zambia?",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Economic data",
    query: "What is Zambia's current GDP and economic outlook?",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    label: "Education system",
    query: "How does the education system work in Zambia?",
  },
];

export function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const toSlug = (text: string) => {
    const slug = text.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
    const id = Math.random().toString(36).slice(2, 7);
    return `${slug}-${id}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/chat?q=${toSlug(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "56px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = Math.min(scrollHeight, 120) + "px";
    }
  }, [query]);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 pt-32 text-center"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(25,135,84,0.10) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 90% 80%, rgba(232,98,28,0.05) 0%, transparent 60%),
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

      {/* Search Area — ChatGPT / Perplexity style */}
      <div className="mt-10 w-full max-w-[720px]">
        <form onSubmit={handleSubmit}>
          <div
            className={`relative rounded-2xl border bg-white transition-all duration-300 ${
              isFocused
                ? "border-[#198754]/40 shadow-[0_0_0_3px_rgba(25,135,84,0.08),0_8px_40px_rgba(0,0,0,0.08)]"
                : "border-[#e2e8f0] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            }`}
          >
            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about laws, business, tourism, economy, culture..."
              rows={1}
              className="w-full resize-none rounded-2xl bg-transparent px-5 pb-3 pt-[18px] text-[1.05rem] leading-[1.6] text-[#0f1f14] placeholder-[#a0aec0] outline-none"
              style={{ minHeight: "56px", maxHeight: "120px" }}
            />

            {/* Bottom bar with hint + submit */}
            <div className="flex items-center justify-between border-t border-[#f1f5f9] px-4 py-2.5">
              <div className="flex items-center gap-1.5 text-[0.75rem] text-[#94a3b8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <span className="hidden sm:inline">Answers sourced from verified Zambian data</span>
                <span className="sm:hidden">Verified sources</span>
              </div>
              <button
                type="submit"
                disabled={!query.trim()}
                className={`flex items-center gap-2 rounded-xl px-5 py-2 text-[0.875rem] font-semibold transition-all duration-200 ${
                  query.trim()
                    ? "bg-[#198754] text-white shadow-sm hover:bg-[#146c43] active:scale-[0.97]"
                    : "bg-[#f1f5f9] text-[#94a3b8] cursor-not-allowed"
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                <span>Ask</span>
              </button>
            </div>
          </div>
        </form>

        {/* Suggestion chips */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              onClick={() => router.push(`/chat?q=${toSlug(s.query)}`)}
              className="group flex items-center gap-1.5 rounded-full border border-[#e8ecf0] bg-white/80 px-3.5 py-2 text-[0.8rem] text-[#64748b] backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-[#198754]/30 hover:bg-[#f0faf4] hover:text-[#198754] hover:shadow-[0_2px_8px_rgba(25,135,84,0.08)]"
            >
              <span className="opacity-50 transition-opacity group-hover:opacity-80">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 flex w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#e8ecf0] bg-white/80 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
        {[
          { num: "90+", label: "Verified\nsources" },
          { num: "73+", label: "Ethnic cultures\ncovered" },
          { num: "7", label: "Knowledge\ncategories" },
        ].map((stat, i) => (
          <div key={stat.num} className={`relative flex-1 py-5 text-center ${i > 0 ? "before:absolute before:left-0 before:top-4 before:bottom-4 before:w-px before:bg-[#e8ecf0]" : ""}`}>
            <div className="bg-gradient-to-br from-[#198754] to-[#146c43] bg-clip-text text-[1.75rem] font-extrabold leading-tight text-transparent">
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
