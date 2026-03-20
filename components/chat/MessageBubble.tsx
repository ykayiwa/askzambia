"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SourceCitation } from "./SourceCitation";
import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ title: string; url: string | null; snippet: string }>;
}

function ActionBar({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AskZambia",
          text: content,
        });
      } catch {
        // user cancelled share
      }
    } else {
      await navigator.clipboard.writeText(content);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="mt-1.5 flex gap-1">
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-400 transition-colors hover:bg-[#f0faf4] hover:text-[#198754]"
      >
        {copied ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
        {copied ? "Copied" : "Copy"}
      </button>
      <button
        onClick={handleShare}
        className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-400 transition-colors hover:bg-[#f0faf4] hover:text-[#198754]"
      >
        {shared ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        )}
        {shared ? "Copied link" : "Share"}
      </button>
    </div>
  );
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
        <ActionBar content={content} />
      </div>
    </div>
  );
}
