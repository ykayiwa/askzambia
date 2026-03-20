"use client";

import { useRouter } from "next/navigation";
import { GlowingEffect } from "@/components/ui/glow-effect";

const TOPICS = [
  {
    title: "Laws & Constitution",
    description: "Understand your rights, legal processes, and constitutional provisions in plain language.",
    query: "Zambia laws and constitution rights",
    iconBg: "#e8f5e9",
    iconColor: "#198754",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Government Services",
    description: "NRC applications, passports, tax filing, business registration, and public services.",
    query: "Zambia government services NRC passport",
    iconBg: "#fff3e0",
    iconColor: "#E8621C",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Tourism & Travel",
    description: "Victoria Falls, national parks, cultural festivals, accommodation, and travel guides.",
    query: "Zambia tourism Victoria Falls national parks",
    iconBg: "#e3f2fd",
    iconColor: "#1565C0",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Education",
    description: "School systems, university admissions, scholarships, curriculum, and exam results.",
    query: "Zambia education system UNZA schools",
    iconBg: "#fce4ec",
    iconColor: "#C62828",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Economy & Business",
    description: "GDP data, trade, investment incentives, mining sector, agriculture, and market reports.",
    query: "Zambia GDP economy copper investment",
    iconBg: "#f3e5f5",
    iconColor: "#6A1B9A",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Culture & Heritage",
    description: "Over 73 ethnic groups, traditional ceremonies, languages, music, art, and history.",
    query: "Zambia culture heritage ethnic groups ceremonies",
    iconBg: "#e0f7fa",
    iconColor: "#00838F",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description: "Health facilities, insurance, disease prevention, maternal care, and public health data.",
    query: "Zambia healthcare hospitals NHIMA health",
    iconBg: "#fff8e1",
    iconColor: "#E65100",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    description: "Energy, roads, telecom, housing, and Zambia's development projects and plans.",
    query: "Zambia infrastructure energy roads development",
    iconBg: "#e8eaf6",
    iconColor: "#3949AB",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

function TopicCard({ topic, onClick }: { topic: typeof TOPICS[number]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative rounded-2xl text-left transition-all hover:-translate-y-[3px]"
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative rounded-2xl border-[1.5px] border-[#e2e8f0] bg-white p-7 transition-colors">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ background: topic.iconBg, color: topic.iconColor }}
        >
          {topic.icon}
        </div>
        <h3 className="mb-[7px] text-base font-bold text-[#0f1f14]">{topic.title}</h3>
        <p className="text-[0.85rem] leading-relaxed text-[#64748b]">{topic.description}</p>
      </div>
    </button>
  );
}

function toSlug(text: string) {
  const slug = text.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
  const id = Math.random().toString(36).slice(2, 7);
  return `${slug}-${id}`;
}

export function TopicsGrid() {
  const router = useRouter();

  return (
    <section className="mx-auto max-w-[1120px] px-6 py-24">
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-[#f0faf4] px-3 py-1 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[#198754]">
          Explore by topic
        </span>
        <h2 className="text-[2.1rem] font-extrabold leading-tight tracking-[-0.025em] text-[#0f1f14]">
          A living encyclopedia of Zambia
        </h2>
        <p className="mx-auto mt-3 max-w-[500px] text-[1.05rem] leading-relaxed text-[#64748b]">
          From constitutional law to Victoria Falls, AskZambia covers the information that matters most to citizens and visitors.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TOPICS.map((topic) => (
          <TopicCard key={topic.title} topic={topic} onClick={() => router.push(`/chat?q=${toSlug(topic.query)}`)} />
        ))}
      </div>
    </section>
  );
}
