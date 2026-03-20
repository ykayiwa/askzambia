const STATS = [
  { value: "8+", label: "Verified Sources" },
  { value: "500+", label: "Knowledge Chunks" },
  { value: "7", label: "Topic Categories" },
  { value: "4", label: "Languages Supported" },
];

export function StatsBar() {
  return (
    <section className="border-y border-[#e0e8e0] px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-[#198754]">{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
