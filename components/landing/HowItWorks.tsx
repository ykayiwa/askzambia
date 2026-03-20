const STEPS = [
  {
    step: "1",
    title: "Ask Your Question",
    description: "Type any question about Zambia — laws, services, tourism, economy, or culture.",
  },
  {
    step: "2",
    title: "AI Searches Verified Sources",
    description: "Our AI searches through official Zambian documents, laws, and government data.",
  },
  {
    step: "3",
    title: "Get Cited Answers",
    description: "Receive accurate answers with source citations you can verify yourself.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-[#f5f7f5] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-[#0f1f14]">How It Works</h2>
          <p className="mt-2 text-sm text-gray-500">Three simple steps to verified knowledge</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#198754] text-lg font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 text-sm font-bold text-[#0f1f14]">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
