"use client";

import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

const SUGGESTIONS = [
  {
    text: "What are my rights under the Zambian constitution?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: "#198754",
    bg: "#f0faf4",
  },
  {
    text: "How do I register a business in Zambia?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    text: "What is the income tax rate for individuals?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    text: "How do I apply for a Zambian passport?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <circle cx="12" cy="11" r="3" />
        <path d="M7 21v-1a5 5 0 0 1 10 0v1" />
      </svg>
    ),
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    text: "What national parks can I visit in Zambia?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    color: "#059669",
    bg: "#ecfdf5",
  },
  {
    text: "What are the requirements for a work permit?",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 pb-8">
      {/* Hero area */}
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-5 rounded-2xl bg-gradient-to-br from-[#f0faf4] to-[#e8f5e9] p-4 shadow-sm">
          <ZambiaFlag size={48} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-[#0f1f14] sm:text-[1.7rem]">
          What would you like to know?
        </h2>
        <p className="mt-2 max-w-sm text-center text-[0.9rem] leading-relaxed text-[#64748b]">
          Ask anything about Zambia&apos;s laws, government, economy, tourism, culture, or education.
        </p>
      </div>

      {/* Suggestion cards */}
      <div className="grid w-full max-w-[640px] grid-cols-1 gap-2.5 sm:grid-cols-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.text}
            onClick={() => onSelect(s.text)}
            className="group flex items-start gap-3 rounded-xl border border-[#e8ecf0] bg-white px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-[1px] hover:border-[#198754]/25 hover:shadow-[0_4px_16px_rgba(25,135,84,0.06)]"
          >
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
              style={{ backgroundColor: s.bg, color: s.color }}
            >
              {s.icon}
            </span>
            <span className="text-[0.85rem] leading-snug text-[#334155] transition-colors group-hover:text-[#0f1f14]">
              {s.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
