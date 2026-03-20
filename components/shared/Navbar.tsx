import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e0e8e0] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#198754]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-[#198754]">AskZambia</span>
            <span className="block text-[9.5px] font-semibold uppercase tracking-wider text-gray-500">National AI Platform</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="rounded-lg bg-[#198754] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#146c43]"
          >
            Start Asking
          </Link>
        </div>
      </div>
    </nav>
  );
}
