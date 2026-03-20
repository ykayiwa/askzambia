import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#e0e8e0] bg-[#f5f7f5]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#198754]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#198754]">AskZambia</span>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-gray-500">
            Africa&apos;s first national AI knowledge platform. Powered by verified Zambian sources.
            Aligned with Zambia&apos;s National AI Strategy 2024-2026.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/" className="transition-colors hover:text-[#198754]">Home</Link>
            <Link href="/chat" className="transition-colors hover:text-[#198754]">Chat</Link>
          </div>
          <p className="text-[10px] text-gray-400">
            &copy; {new Date().getFullYear()} AskZambia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
