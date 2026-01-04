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
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jujutsu Zero Codes",
    description:
      "Active and expired Jujutsu Zero codes with a redeem walkthrough and troubleshooting tips.",
    url: "https://jujutsuzero.app/",
    isPartOf: {
      "@type": "WebSite",
      name: "Jujutsu Zero",
      url: "https://jujutsuzero.app",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do Jujutsu Zero codes expire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most Jujutsu Zero codes are time-limited and can expire or be replaced after a hotfix.",
        },
      },
      {
        "@type": "Question",
        name: "Are there special event codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seasonal events and major updates often come with special codes that reward spins, rolls, or other limited-time items.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use codes on multiple accounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically codes apply per account. Each account can redeem a given code once while it is active.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col gap-12">
        <Hero />
        <CodeList />
        <FeatureGrid />
        <SeoContent />
      </div>
    </>
  );
}
