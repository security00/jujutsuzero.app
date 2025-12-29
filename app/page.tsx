import Hero from "../components/Hero";
import CodeList from "../components/CodeList";
import FeatureGrid from "../components/FeatureGrid";
import SeoContent from "../components/SeoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jujutsu Zero Codes - Active & Expired (Updated Daily)",
  description:
    "All working Jujutsu Zero codes in one place: active + expired lists, how to redeem, and tips if a code isn’t working.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jujutsu Zero Codes - Active & Expired",
    description:
      "Get the latest working Jujutsu Zero codes, learn how to redeem them, and avoid common redemption issues.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <CodeList />
      <FeatureGrid />
      <SeoContent />
    </div>
  );
}
