"use client";

import { useState, useRef, useEffect } from "react";

interface SearchBarProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
  autoFocus?: boolean;
}

export function SearchBar({ onSubmit, isLoading, autoFocus }: SearchBarProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSubmit(trimmed);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  };

  return (
    <div className="border-t border-[#e0e8e0] bg-white px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border border-[#e0e8e0] bg-[#f8f9fa] px-4 py-2.5 focus-within:border-[#198754]/40 focus-within:ring-2 focus-within:ring-[#198754]/10">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Ask anything about Zambia..."
          rows={1}
          className="max-h-[150px] min-h-[24px] flex-1 resize-none bg-transparent text-sm text-[#0f1f14] placeholder-gray-400 outline-none"
          disabled={isLoading}
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || isLoading}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#198754] text-white transition-all hover:bg-[#146c43] disabled:opacity-40 disabled:hover:bg-[#198754]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="mt-1.5 text-center text-[10px] text-gray-400">
        AskZambia provides information from verified sources. Always verify critical details.
      </p>
    </div>
  );
}
