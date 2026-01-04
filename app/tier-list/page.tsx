import type { Metadata } from "next";
import Link from "next/link";

type TierGroup = {
  tier: "S" | "A" | "B" | "C";
  label: string;
  items: string[];
};

const LAST_UPDATED = "Dec 29, 2025";

const CLAN_TIERS: TierGroup[] = [
  {
    tier: "S",
    label: "Best overall",
    items: ["Sukuna", "Gojo", "Tengen", "Zen'in", "Geto"],
  },
  {
    tier: "A",
    label: "Strong picks",
    items: ["Okkotsu", "Fushiguro", "Kamo", "Abe"],
  },
  {
    tier: "B",
    label: "Solid / situational",
    items: ["Nanami", "Inumaki", "Todo", "Kugisaki"],
  },
  {
    tier: "C",
    label: "Starter-friendly / niche",
    items: ["Itadori", "Fujiwara", "Miwa"],
  },
];

const TECHNIQUE_TIERS: TierGroup[] = [
  {
    tier: "S",
    label: "Top meta",
    items: ["Limitless", "Shrine (Malevolent Shrine)"],
  },
  {
    tier: "A",
    label: "Very strong",
    items: ["Ten Shadows", "Copy", "Star Rage", "Disaster Flames"],
  },
  {
    tier: "B",
    label: "Good with practice",
    items: ["Cursed Speech", "Blood Manipulation", "Ratio"],
  },
  {
    tier: "C",
    label: "Matchup-dependent",
    items: ["Straw Doll", "Exploding Flesh"],
  },
];

export const metadata: Metadata = {
  title: `Jujutsu Zero Tier List (Clans & Techniques) - ${LAST_UPDATED}`,
  description:
    "Community-based Jujutsu Zero tier list for clans and cursed techniques, plus how to use tiers for PvE farming, bosses, and PvP.",
  alternates: {
    canonical: "/tier-list",
  },
  openGraph: {
    title: `Jujutsu Zero Tier List (Clans & Techniques) - ${LAST_UPDATED}`,
    description:
      "Clans + cursed techniques tier list for Jujutsu Zero, with quick guidance for farming and PvP.",
    url: "/tier-list",
  },
};

function TierTable({ groups }: { groups: TierGroup[] }) {
  const tierColor: Record<TierGroup["tier"], string> = {
    S: "bg-cursed-red",
    A: "bg-cursed-purple",
    B: "bg-gray-700",
    C: "bg-gray-800",
  };

  return (
    <div className="grid gap-4">
      {groups.map((group) => (
        <div
          key={group.tier}
          className="rounded-2xl border border-gray-800 bg-black/20 p-6"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-white font-black ${tierColor[group.tier]}`}
              >
                {group.tier}
              </span>
              <div>
                <p className="text-white font-bold">{group.label}</p>
                <p className="text-xs text-gray-500">Updated {LAST_UPDATED}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-gray-700/70 bg-black/30 text-gray-200 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TierListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Jujutsu Zero Tier List",
    description:
      "Tier list for Jujutsu Zero clans and cursed techniques, updated frequently as the meta changes.",
    url: "https://jujutsuzero.app/tier-list",
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
          name: "Tier List",
          item: "https://jujutsuzero.app/tier-list",
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
              Meta Snapshot
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white text-glow">
              Jujutsu Zero Tier List
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This page focuses on decisions players actually make: which <strong>clan</strong> to
              keep, which <strong>cursed technique</strong> to build around, and how to interpret
              tiers for farming vs PvP. (Last updated: {LAST_UPDATED}.)
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/jujutsu-zero-codes"
                className="px-6 py-3 bg-cursed-purple text-white font-bold rounded-xl border border-cursed-purple-bright hover:scale-[1.02] transition-transform"
              >
                Get Latest Codes
              </Link>
              <Link
                href="/wiki"
                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                Browse Wiki Hub
              </Link>
            </div>
          </div>

          <div
            id="toc"
            className="mt-16 bg-cursed-gray/70 backdrop-blur-md rounded-2xl border border-gray-700 p-8 shadow-2xl"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Index</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <Link href="#clans" className="text-gray-300 hover:text-white hover:underline">
                Clan Tier List
              </Link>
              <Link href="#techniques" className="text-gray-300 hover:text-white hover:underline">
                Technique Tier List
              </Link>
              <Link href="#how-to-use" className="text-gray-300 hover:text-white hover:underline">
                How to use tiers
              </Link>
              <Link href="#faq" className="text-gray-300 hover:text-white hover:underline">
                FAQ
              </Link>
            </div>
          </div>

          <section id="clans" className="mt-16">
            <h2 className="text-2xl font-bold text-white">Clan Tier List</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Clans are often the biggest long-term account decision. If you only care about
              consistent progress, prioritize reliability over peak ceiling—especially early game.
            </p>
            <div className="mt-8">
              <TierTable groups={CLAN_TIERS} />
            </div>
          </section>

          <section id="techniques" className="mt-16">
            <h2 className="text-2xl font-bold text-white">Cursed Technique Tier List</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Techniques define your combat flow. Farming favors speed + uptime, while PvP favors
              tools (mobility, invulnerability windows, crowd control).
            </p>
            <div className="mt-8">
              <TierTable groups={TECHNIQUE_TIERS} />
            </div>
          </section>

          <section
            id="how-to-use"
            className="mt-16 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">How to use tiers (without getting baited)</h2>
            <ul className="mt-6 list-disc pl-5 space-y-3 text-gray-400">
              <li>
                <span className="text-gray-200 font-semibold">Farming:</span> prioritize clear speed
                and low downtime (short cooldowns, wide AoE, safe combos).
              </li>
              <li>
                <span className="text-gray-200 font-semibold">Bossing:</span> prioritize survivability
                and reliable damage over burst.
              </li>
              <li>
                <span className="text-gray-200 font-semibold">PvP:</span> prioritize mobility, CC, and
                punish tools (and practice matchups).
              </li>
              <li>
                If you’re rerolling, redeem current{" "}
                <Link href="/jujutsu-zero-codes" className="text-white hover:underline">
                  Jujutsu Zero codes
                </Link>{" "}
                first so you’re not wasting resources. Then use the{" "}
                <Link href="/spin-calculator" className="text-white hover:underline">
                  spin calculator
                </Link>{" "}
                to estimate how many rolls you need.
              </li>
            </ul>
          </section>

          <section id="faq" className="mt-16">
            <h2 className="text-2xl font-bold text-white">FAQ</h2>
            <div className="mt-6 space-y-4 text-gray-400">
              <div className="rounded-xl border border-gray-700/60 bg-black/30 p-4">
                <p className="font-semibold text-white mb-2">Why does the meta feel inconsistent?</p>
                <p>
                  Updates, hotfixes, and new content can change damage numbers and cooldowns quickly.
                  Treat tiers as a snapshot, not permanent truth.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700/60 bg-black/30 p-4">
                <p className="font-semibold text-white mb-2">Can a B-tier build still be good?</p>
                <p>
                  Absolutely. Execution and comfort matter. A “lower tier” option you play well is
                  often better than a top-tier pick you can’t pilot.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center text-sm text-gray-500">
            Want more structured info? Visit the{" "}
            <Link href="/wiki" className="text-white hover:underline">
              Jujutsu Zero Wiki
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
