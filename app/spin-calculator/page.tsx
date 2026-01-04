import type { Metadata } from "next";
import Link from "next/link";
import SpinCalculator from "@/components/SpinCalculator";

export const metadata: Metadata = {
  title: "Jujutsu Zero Spin Calculator - Rolls Needed for 50/90/99%",
  description:
    "Calculate how many spins/rolls you need for a target chance in Jujutsu Zero. Includes quick presets for common rarity rates and links to active codes.",
  alternates: {
    canonical: "/spin-calculator",
  },
  openGraph: {
    title: "Jujutsu Zero Spin Calculator",
    description:
      "How many rolls do you need to hit your target chance? Use presets, compare 50/90/99%, and redeem codes for more rolls.",
    url: "/spin-calculator",
  },
};

export default function SpinCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jujutsu Zero Spin Calculator",
    description:
      "Spin calculator for Jujutsu Zero: estimate rolls needed for a target chance based on drop rate.",
    url: "https://jujutsuzero.app/spin-calculator",
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
          name: "Spin Calculator",
          item: "https://jujutsuzero.app/spin-calculator",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl py-12 sm:py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-cursed-purple uppercase">
              Tools
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white text-glow">
              Jujutsu Zero Spin Calculator
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Use this calculator to estimate how many spins/rolls you need to reach 50%, 90%, or
              99% odds for a drop. Great for planning rerolls before you spend your currency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/jujutsu-zero-codes"
                className="px-6 py-3 bg-cursed-purple text-white font-bold rounded-xl border border-cursed-purple-bright hover:scale-[1.02] transition-transform"
              >
                Get Latest Codes
              </Link>
              <Link
                href="/tier-list"
                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                View Tier List
              </Link>
            </div>
          </div>

          <SpinCalculator />
        </div>
      </div>
    </>
  );
}
