"use client";

import { ZambiaFlag } from "@/components/shared/ZambiaFlag";

export default function OfflinePage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-[#fafbfc] px-6 text-center">
      <div className="mb-5 rounded-2xl bg-gradient-to-br from-[#f0faf4] to-[#e8f5e9] p-4">
        <ZambiaFlag size={48} />
      </div>
      <h1 className="text-xl font-bold text-[#0f1f14]">You&apos;re offline</h1>
      <p className="mt-2 max-w-sm text-[0.9rem] leading-relaxed text-[#64748b]">
        AskZambia needs an internet connection to answer your questions. Please check your connection and try again.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 rounded-xl bg-[#198754] px-6 py-2.5 text-[0.85rem] font-semibold text-white shadow-sm transition-all hover:bg-[#146c43] active:scale-[0.97]"
      >
        Try Again
      </button>
    </div>
  );
}
