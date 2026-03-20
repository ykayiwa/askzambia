"use client";

import { useRouter } from "next/navigation";

const TOPICS = [
  {
    icon: "⚖️",
    title: "Laws & Constitution",
    description: "Constitutional rights, Acts of Parliament, legal framework",
    query: "What are my rights under the Zambian constitution?",
  },
  {
    icon: "🏛️",
    title: "Government Services",
    description: "Business registration, tax filing, immigration, permits",
    query: "How do I register a business in Zambia?",
  },
  {
    icon: "🌍",
    title: "Tourism & Travel",
    description: "National parks, Victoria Falls, safari, accommodation",
    query: "What national parks can I visit in Zambia?",
  },
  {
    icon: "💰",
    title: "Economy & Finance",
    description: "GDP, trade data, banking, Kwacha exchange rates",
    query: "What is Zambia's current GDP?",
  },
  {
    icon: "🏥",
    title: "Health",
    description: "Public health, hospitals, disease prevention, guidelines",
    query: "Where can I find healthcare services in Zambia?",
  },
  {
    icon: "🎓",
    title: "Education",
    description: "Schools, universities, examinations, scholarships",
    query: "What universities are in Zambia?",
  },
  {
    icon: "🥁",
    title: "Culture & Heritage",
    description: "Ethnic groups, traditions, languages, ceremonies",
    query: "How many ethnic groups are in Zambia?",
  },
  {
    icon: "📋",
    title: "Immigration",
    description: "Visas, passports, work permits, residency",
    query: "What are the requirements for a work permit in Zambia?",
  },
];

export function TopicsGrid() {
  const router = useRouter();

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#0f1f14]">Explore by Topic</h2>
          <p className="mt-2 text-sm text-gray-500">Choose a category to get started</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOPICS.map((topic) => (
            <button
              key={topic.title}
              onClick={() => router.push(`/chat?q=${encodeURIComponent(topic.query)}`)}
              className="group rounded-2xl border border-[#e0e8e0] bg-white p-5 text-left transition-all hover:border-[#198754]/30 hover:shadow-md hover:shadow-[#198754]/5"
            >
              <span className="text-2xl">{topic.icon}</span>
              <h3 className="mt-2 text-sm font-bold text-[#0f1f14] group-hover:text-[#198754]">
                {topic.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {topic.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
