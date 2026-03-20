"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChatWindow } from "@/components/chat/ChatWindow";
import type { ChatMessage } from "@/types/chat";
import Link from "next/link";

interface SessionItem {
  id: string;
  title: string | null;
  created_at: string;
}

function ChatContent() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sessions, setSessions] = useState<SessionItem[]>([]);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content,
      };

      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const sourcesHeader = response.headers.get("X-Sources");
        const sources = sourcesHeader ? JSON.parse(sourcesHeader) : [];

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        const assistantMsg: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "",
          sources,
        };

        setMessages([...newMessages, assistantMsg]);

        let fullContent = "";
        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullContent += chunk;
            setMessages((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last.role === "assistant") {
                updated[updated.length - 1] = {
                  ...last,
                  content: fullContent,
                };
              }
              return updated;
            });
          }
        }
      } catch (error) {
        console.error("Chat error:", error);
        const errorMsg: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I apologize, but I encountered an error processing your request. Please try again.",
        };
        setMessages([...newMessages, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  useEffect(() => {
    const q = searchParams.get("q");
    if (q && messages.length === 0) {
      sendMessage(q);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetch("/api/sessions")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setSessions(data);
      })
      .catch(() => {});
  }, []);

  const groupSessions = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const todayStr = today.toDateString();
    const yesterdayStr = yesterday.toDateString();

    const groups: Record<string, SessionItem[]> = {
      Today: [],
      Yesterday: [],
      Previous: [],
    };

    for (const s of sessions) {
      const d = new Date(s.created_at).toDateString();
      if (d === todayStr) groups.Today.push(s);
      else if (d === yesterdayStr) groups.Yesterday.push(s);
      else groups.Previous.push(s);
    }

    return groups;
  };

  const grouped = groupSessions();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[264px] flex-shrink-0 border-r border-[#e0e8e0] bg-[#f5f7f5] transition-transform lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="border-b border-[#e0e8e0] p-4">
            <Link href="/" className="mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#198754]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-[#198754]">AskZambia</span>
                <span className="block text-[9.5px] font-semibold uppercase tracking-wider text-gray-500">National AI Platform</span>
              </div>
            </Link>
            <button
              onClick={() => {
                setMessages([]);
                setSidebarOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#198754] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#146c43]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
              New Chat
            </button>
          </div>

          {/* Session history */}
          <div className="flex-1 overflow-y-auto p-2">
            {Object.entries(grouped).map(
              ([label, items]) =>
                items.length > 0 && (
                  <div key={label} className="mb-4">
                    <p className="px-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {label}
                    </p>
                    {items.map((s) => (
                      <div
                        key={s.id}
                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-[#0f1f14] transition-colors hover:bg-[#198754]/10"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gray-400">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className="truncate">{s.title ?? "New conversation"}</span>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>

          {/* Sidebar footer */}
          <div className="border-t border-[#e0e8e0] p-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#198754]" />
              <div className="text-[11px] text-gray-500">
                <strong className="block text-[11.5px] text-[#0f1f14]">Knowledge Base Active</strong>
                Verified Zambian sources
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#e0e8e0] bg-white px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#f0faf4] lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-[#0f1f14]">
              {messages.length > 0
                ? messages[0].content.slice(0, 50) + (messages[0].content.length > 50 ? "..." : "")
                : "New conversation"}
            </span>
          </div>
        </div>

        <ChatWindow messages={messages} isLoading={isLoading} onSend={sendMessage} />
      </main>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense>
      <ChatContent />
    </Suspense>
  );
}
