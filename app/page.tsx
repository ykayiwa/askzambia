import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TopicsGrid } from "@/components/landing/TopicsGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { StatsBar } from "@/components/landing/StatsBar";
import { DataSources } from "@/components/landing/DataSources";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <TopicsGrid />
      <HowItWorks />
      <DataSources />
      <Footer />
    </div>
  );
}
