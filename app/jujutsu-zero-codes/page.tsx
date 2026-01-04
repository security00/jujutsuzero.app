import type { Metadata } from "next";
import Link from "next/link";
import CodeList from "@/components/CodeList";
import SeoContent from "@/components/SeoContent";
import { CODES_LAST_UPDATED } from "@/data/codes";

export const metadata: Metadata = {
  title: "Jujutsu Zero Codes - Active & Expired (Updated Daily)",
  description:
    "All working Jujutsu Zero codes in one place: active + expired lists, how to redeem, and tips if a code isn’t working.",
  alternates: {
    canonical: "/jujutsu-zero-codes",
  },
  openGraph: {
    title: "Jujutsu Zero Codes - Active & Expired",
    description:
      "Get the latest working Jujutsu Zero codes, learn how to redeem them, and avoid common redemption issues.",
    url: "/jujutsu-zero-codes",
  },
};

export default function JujutsuZeroCodesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jujutsu Zero Codes",
    description:
      "Active and expired Jujutsu Zero codes with a quick redeem walkthrough and troubleshooting tips.",
    url: "https://jujutsuzero.app/jujutsu-zero-codes",
    isPartOf: {
      "@type": "WebSite",
      name: "Jujutsu Zero",
      url: "https://jujutsuzero.app",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://jujutsuzero.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Codes",
          item: "https://jujutsuzero.app/jujutsu-zero-codes",
        },
      ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl py-12 sm:py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-cursed-purple uppercase">
              Codes
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white text-glow">
              Jujutsu Zero Codes
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Copy the newest working codes, redeem for free rewards, and avoid expired codes.
              Updated: <span className="text-gray-200 font-semibold">{CODES_LAST_UPDATED}</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="#codes"
                className="px-6 py-3 bg-cursed-purple text-white font-bold rounded-xl border border-cursed-purple-bright hover:scale-[1.02] transition-transform"
              >
                View Active Codes
              </Link>
              <Link
                href="/spin-calculator"
                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                Spin Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CodeList />
      <SeoContent />
    </>
  );
}
