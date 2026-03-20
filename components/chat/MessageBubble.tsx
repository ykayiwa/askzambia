"use client";

import ReactMarkdown from "react-markdown";
import { SourceCitation } from "./SourceCitation";
import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

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
      <ZambiaFlag size={32} />
      <div className="min-w-0 max-w-[85%]">
        <div className="rounded-2xl rounded-tl-md bg-[#f8fdf8] border border-[#e0e8e0] px-4 py-3 text-sm leading-relaxed text-[#0f1f14]">
          <div className="prose prose-sm prose-green max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
        {sources && sources.length > 0 && <SourceCitation sources={sources} />}
      </div>
    </div>
  );
}
