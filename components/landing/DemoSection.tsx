export function DemoSection() {
  return (
    <section className="mx-auto max-w-[860px] px-6 py-24">
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-[#f0faf4] px-3 py-1 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#198754]">
          See it in action
        </span>
        <h2 className="text-[2.1rem] font-extrabold leading-tight tracking-[-0.025em] text-[#0f1f14]">
          A conversation with AskZambia
        </h2>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-white/[0.06] bg-[#0f1a10] shadow-[0_24px_64px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.1)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-[18px] py-[14px]">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="ml-4 flex items-center gap-1.5 rounded-md bg-white/[0.06] px-3.5 py-[5px] text-[0.78rem] text-white/[0.45]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            askzambia.com
          </div>
        </div>

        {/* Chat body */}
        <div className="flex flex-col gap-5 p-6 sm:p-8">
          {/* User message */}
          <div className="flex flex-row-reverse items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8621C] text-[0.72rem] font-bold text-white">
              YK
            </div>
            <div className="max-w-[80%] rounded-[14px] rounded-br-[4px] bg-[#E8621C]/[0.14] px-4 py-3 text-[0.875rem] leading-relaxed text-[#ffddc9]">
              What do I need to register a small business in Lusaka?
            </div>
          </div>

          {/* AI message */}
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#198754] text-[0.72rem] font-bold text-white">
              AZ
            </div>
            <div className="max-w-[80%] rounded-[14px] rounded-bl-[4px] bg-[#198754]/[0.12] px-4 py-3 text-[0.875rem] leading-relaxed text-[#c8e6d5]">
              To register a small business in Lusaka, complete these steps with{" "}
              <strong className="text-[#5ec99a]">PACRA</strong>:
              <br /><br />
              <strong className="text-[#5ec99a]">1.</strong> Reserve a name online at pacra.org.zm (K50)
              <br />
              <strong className="text-[#5ec99a]">2.</strong> Submit registration form + certified NRC/passport copies
              <br />
              <strong className="text-[#5ec99a]">3.</strong> Pay registration fee — <strong className="text-[#5ec99a]">K525</strong> for a private company
              <br />
              <strong className="text-[#5ec99a]">4.</strong> Obtain your <strong className="text-[#5ec99a]">TPIN</strong> from ZRA for tax purposes
              <br /><br />
              The full process typically takes <strong className="text-[#5ec99a]">1–3 business days</strong> online.
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {["PACRA Guidelines 2025", "ZRA Registration Portal"].map((src) => (
                  <span key={src} className="inline-flex items-center gap-[5px] rounded-[5px] bg-[#198754]/[0.18] px-[9px] py-[3px] text-[0.72rem] font-semibold text-[#7dd3a8]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
