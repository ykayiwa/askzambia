"use client";

import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

const SUGGESTIONS = [
  { text: "What are my rights under the Zambian constitution?", icon: "⚖️" },
  { text: "How do I register a business in Zambia?", icon: "🏢" },
  { text: "What is the income tax rate for individuals?", icon: "💰" },
  { text: "How do I apply for a Zambian passport?", icon: "🛂" },
  { text: "What national parks can I visit in Zambia?", icon: "🌍" },
  { text: "What are the requirements for a work permit?", icon: "📋" },
];

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-12">
      <ZambiaFlag size={56} />
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#0f1f14]">Ask anything about Zambia</h2>
        <p className="mt-1 text-sm text-gray-500">Get instant, verified answers from official sources</p>
      </div>
      <div className="grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s.text}
            onClick={() => onSelect(s.text)}
            className="flex items-center gap-2.5 rounded-xl border border-[#e0e8e0] bg-white px-4 py-3 text-left text-sm text-[#0f1f14] transition-all hover:border-[#198754]/30 hover:bg-[#f0faf4]"
          >
            <span className="shrink-0 text-base">{s.icon}</span>
            <span className="line-clamp-2">{s.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
