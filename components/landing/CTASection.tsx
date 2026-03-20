import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 text-center text-white"
      style={{
        background: "linear-gradient(150deg, #198754 0%, #146c43 55%, #0f5132 100%)",
      }}
    >
      <h2 className="relative text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold tracking-[-0.025em]">
        Start asking. Start knowing.
      </h2>
      <p className="relative mx-auto mb-10 mt-4 max-w-[480px] text-[1.1rem] leading-relaxed opacity-85">
        AskZambia is free for every citizen, visitor, and friend of Zambia. Your national knowledge, at your fingertips.
      </p>
      <Link
        href="/chat"
        className="relative inline-flex min-h-[56px] items-center gap-2.5 rounded-xl bg-white px-10 py-[17px] text-base font-bold text-[#146c43] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-[3px] hover:shadow-[0_10px_32px_rgba(0,0,0,0.22)]"
      >
        Ask Your First Question
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  );
}
