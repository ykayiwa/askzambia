const SOURCES = [
  { name: "Constitution of Zambia", org: "Constitute Project", icon: "⚖️" },
  { name: "Acts of Parliament", org: "Zambia Laws", icon: "📜" },
  { name: "Business Registration", org: "PACRA", icon: "🏢" },
  { name: "Tax Information", org: "ZRA", icon: "💰" },
  { name: "Immigration Services", org: "Immigration Dept.", icon: "🛂" },
  { name: "National Statistics", org: "ZamStats", icon: "📊" },
  { name: "Financial Reports", org: "Bank of Zambia", icon: "🏦" },
  { name: "Health Guidelines", org: "Ministry of Health", icon: "🏥" },
];

export function DataSources() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#0f1f14]">Verified Data Sources</h2>
          <p className="mt-2 text-sm text-gray-500">
            Every answer is grounded in official Zambian sources
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SOURCES.map((source) => (
            <div
              key={source.name}
              className="rounded-xl border border-[#e0e8e0] bg-white p-4 text-center transition-colors hover:border-[#198754]/20"
            >
              <span className="text-2xl">{source.icon}</span>
              <p className="mt-2 text-xs font-bold text-[#0f1f14]">{source.name}</p>
              <p className="mt-0.5 text-[10px] text-gray-400">{source.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
