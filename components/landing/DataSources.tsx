const SOURCES = [
  {
    name: "Government of\nZambia (GRZ)",
    iconBg: "#e8f5e9",
    iconColor: "#198754",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "ZamStats — Central\nStatistical Office",
    iconBg: "#e3f2fd",
    iconColor: "#1565C0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: "Zambia Legal\nInformation Institute",
    iconBg: "#e8eaf6",
    iconColor: "#3949AB",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "National Assembly\nof Zambia",
    iconBg: "#fff8e1",
    iconColor: "#E65100",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Bank of\nZambia",
    iconBg: "#f3e5f5",
    iconColor: "#6A1B9A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    name: "Zambia Tourism\nAgency",
    iconBg: "#e0f7fa",
    iconColor: "#00838F",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function DataSources() {
  return (
    <section id="sources" className="border-y border-[#e2e8f0] bg-[#f8fafc] px-6 py-24 scroll-mt-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-11 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#f0faf4] px-3 py-1 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#198754]">
            Trusted knowledge
          </span>
          <h2 className="text-[2.1rem] font-extrabold leading-tight tracking-[-0.025em] text-[#0f1f14]">
            Powered by official data sources
          </h2>
          <p className="mx-auto mt-3 max-w-[500px] text-[1.05rem] leading-relaxed text-[#64748b]">
            Every answer is grounded in verified, authoritative Zambian data.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {SOURCES.map((source) => (
            <div
              key={source.name}
              className="flex items-center gap-3 rounded-[14px] border-[1.5px] border-[#e2e8f0] bg-white px-[22px] py-4 text-[0.84rem] font-semibold leading-snug text-[#0f1f14] transition-all hover:border-[#198754] hover:shadow-[0_4px_16px_rgba(25,135,84,0.08)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]"
                style={{ background: source.iconBg, color: source.iconColor }}
              >
                {source.icon}
              </div>
              <div className="whitespace-pre-line">{source.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
