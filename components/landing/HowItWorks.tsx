const STEPS = [
  {
    step: "1",
    title: "Ask your question",
    description: "Type any question about Zambia in natural language — English, Bemba, Nyanja, or Tonga.",
  },
  {
    step: "2",
    title: "AI searches verified sources",
    description: "Our AI retrieves information from official government databases, legal archives, and curated national datasets.",
  },
  {
    step: "3",
    title: "Get a cited answer",
    description: "Receive a clear, accurate response with source citations so you can verify the information yourself.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-[#e2e8f0] bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-[920px]">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#f0faf4] px-3 py-1 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#198754]">
            How it works
          </span>
          <h2 className="text-[2.1rem] font-extrabold leading-tight tracking-[-0.025em] text-[#0f1f14]">
            Verified answers in seconds
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[1.05rem] leading-relaxed text-[#64748b]">
            AskZambia uses retrieval-augmented AI to search official Zambian data sources and deliver trustworthy, cited answers.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-[calc(16.66%+12px)] right-[calc(16.66%+12px)] top-6 hidden h-px bg-gradient-to-r from-[#d1e7dd] via-[#198754] to-[#d1e7dd] sm:block" />
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#198754] text-[1.05rem] font-extrabold text-white shadow-[0_0_0_6px_#f8fafc,0_0_0_7px_#e2e8f0]">
                {s.step}
              </div>
              <h3 className="mb-[9px] text-base font-bold text-[#0f1f14]">{s.title}</h3>
              <p className="text-[0.87rem] leading-relaxed text-[#64748b]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
