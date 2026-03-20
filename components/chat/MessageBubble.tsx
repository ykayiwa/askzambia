"use client";

import { SourceCitation } from "./SourceCitation";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ title: string; url: string | null; snippet: string }>;
}

export function MessageBubble({ role, content, sources }: MessageProps) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[#198754] px-4 py-3 text-sm leading-relaxed text-white">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#d1e7dd]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <div className="min-w-0 max-w-[85%]">
        <div className="rounded-2xl rounded-tl-md bg-[#f8fdf8] border border-[#e0e8e0] px-4 py-3 text-sm leading-relaxed text-[#0f1f14]">
          <div className="prose prose-sm prose-green max-w-none whitespace-pre-wrap">
            {content}
          </div>
        </div>
        {sources && sources.length > 0 && <SourceCitation sources={sources} />}
      </div>
    </div>
  );
}
