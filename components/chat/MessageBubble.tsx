"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { SourceCitation } from "./SourceCitation";
import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

interface MessageProps {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ title: string; url: string | null; snippet: string }>;
}

function ShareMenu({ content, onClose }: { content: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const snippet = content.length > 200 ? content.slice(0, 200) + "..." : content;
  const url = typeof window !== "undefined" ? window.location.href : "https://askzambia.com";
  const text = encodeURIComponent(`${snippet}\n\n— via AskZambia`);
  const encodedUrl = encodeURIComponent(url);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => { setCopied(false); onClose(); }, 1500);
  };

  return (
    <div ref={ref} className="absolute bottom-full left-0 z-50 mb-2 w-[280px] rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      <p className="mb-3 text-xs font-semibold text-[#0f1f14]">Share this answer</p>
      <div className="flex justify-center gap-5">
        {/* Copy link */}
        <button onClick={handleCopyLink} className="flex flex-col items-center gap-1.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white transition-colors hover:bg-[#f0faf4]">
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            )}
          </div>
          <span className="text-[10px] font-medium text-gray-500">{copied ? "Copied!" : "Copy link"}</span>
        </button>

        {/* X (Twitter) */}
        <a
          href={`https://x.com/intent/tweet?text=${text}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white transition-colors hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0f1f14">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-gray-500">X</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white transition-colors hover:bg-blue-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-gray-500">Facebook</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white transition-colors hover:bg-blue-50">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-gray-500">LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:?subject=${encodeURIComponent("Check this out from AskZambia")}&body=${text}%0A%0A${encodedUrl}`}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2e8f0] bg-white transition-colors hover:bg-gray-50">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-gray-500">Email</span>
        </a>
      </div>
    </div>
  );
}

function ActionBar({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-1.5 flex gap-1">
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
        onClick={() => setShowShare(!showShare)}
        className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-400 transition-colors hover:bg-[#f0faf4] hover:text-[#198754]"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        Share
      </button>
      {showShare && <ShareMenu content={content} onClose={() => setShowShare(false)} />}
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
