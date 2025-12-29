import type { Metadata } from "next";
import Link from "next/link";

type StatRow = {
  name: string;
  description: string;
  examples: string[];
};

type Clan = {
  name: string;
  buffs: string[];
};

type ClanGrade = {
  grade: string;
  rarityLabel: string;
  dropRate: string;
  clans: Clan[];
};

type Technique = {
  name: string;
  grade: string;
  summary: string;
  unlocks: string[];
};

const LAST_UPDATED = "Dec 29, 2025";

const CONTROLS: Array<{ action: string; key: string }> = [
  { action: "Shift Lock", key: "CTRL" },
  { action: "Dash / Dodge", key: "Q" },
  { action: "Super Dash", key: "E" },
  { action: "Map", key: "M" },
  { action: "Lock On", key: "MMB" },
];

const STAT_TREES: StatRow[] = [
  {
    name: "Offense",
    description:
      "Boosts melee/weapon damage and crit performance. Great for reliable early-game farming.",
    examples: ["Attack bonus", "Crit rate", "Crit damage", "Cooldown reduction"],
  },
  {
    name: "Sorcery",
    description:
      "Improves cursed technique power and your cursed energy economy (pool + regen).",
    examples: ["Cursed energy", "Cursed energy regeneration", "Technique damage"],
  },
  {
    name: "Vitality",
    description:
      "Improves survivability and mobility—especially useful for bosses and harder raids.",
    examples: ["Health", "Damage reduction", "Stamina", "Air jumps"],
  },
];

const GAME_FEATURES: string[] = [
  "Clans (rarity + stat modifiers)",
  "Skill trees / stats",
  "Cursed techniques (mastery unlocks)",
  "Weapons",
  "Ranks / progression",
  "Raids / dungeons",
];

const CLAN_GRADES: ClanGrade[] = [
  {
    grade: "Grade 3",
    rarityLabel: "Common",
    dropRate: "70.5%",
    clans: [
      { name: "Itadori", buffs: ["ATK +20%", "HP -10%"] },
      { name: "Fujiwara", buffs: ["ATK +12%", "DR +10%", "HP -5%"] },
      { name: "Miwa", buffs: ["HP +20%", "CER -10%"] },
    ],
  },
  {
    grade: "Grade 2",
    rarityLabel: "Uncommon",
    dropRate: "27.78%",
    clans: [
      { name: "Nanami", buffs: ["CR +10%", "ATK +10%", "HP -10%"] },
      { name: "Kugisaki", buffs: ["CD +25%", "HP +20%", "CE -10%"] },
      { name: "Inumaki", buffs: ["ATK +20%", "CE +35%", "HP -10%"] },
      { name: "Todo", buffs: ["ATK +25%", "CD +30%", "DR -5%"] },
    ],
  },
  {
    grade: "Grade 1",
    rarityLabel: "Rare",
    dropRate: "1.45%",
    clans: [
      { name: "Fushiguro", buffs: ["ATK +45%", "CDR +10%", "CE -15%"] },
      { name: "Abe", buffs: ["ATK +30%", "CE +55%", "CER -10%"] },
      { name: "Okkotsu", buffs: ["CR +10%", "CER +35%", "CE -10%"] },
      { name: "Kamo", buffs: ["CD +40%", "DR +20%", "HP -15%"] },
    ],
  },
  {
    grade: "Special Grade",
    rarityLabel: "Very Rare",
    dropRate: "0.25%",
    clans: [
      { name: "Zen'in", buffs: ["ATK +35%", "CR +15%", "CDR +30%", "CE -20%"] },
      { name: "Gojo", buffs: ["ATK +25%", "CR +15%", "CD +50%"] },
      { name: "Geto", buffs: ["ATK +40%", "CER +35%", "CDR +20%", "HP -20%"] },
    ],
  },
  {
    grade: "???",
    rarityLabel: "Ultra Rare",
    dropRate: "0.02%",
    clans: [
      { name: "Sukuna", buffs: ["ATK +50%", "CR +25%", "CD +85%", "CDR +25%"] },
      { name: "Tengen", buffs: ["HP +150%", "CD +115%", "CR +15%", "CE +50%"] },
    ],
  },
];

const TECHNIQUES: Technique[] = [
  {
    name: "Exploding Flesh",
    grade: "Grade 3",
    summary: "Detonate body parts as bombs for area damage.",
    unlocks: ["Lv 1: Atomic Press (R)", "Lv 10: Final Trick (C)", "Lv 20: Flesh Firebomb (F)"],
  },
  {
    name: "Straw Doll",
    grade: "Grade 3",
    summary: "Levitate nails imbued with cursed energy and strike targets at range.",
    unlocks: ["Lv 1: Nail Gun (R)", "Lv 5: Resonance (C)", "Lv 15: Piercing Rain (F)"],
  },
  {
    name: "Cursed Speech",
    grade: "Grade 2",
    summary: "Empower words with cursed energy to force actions and disrupt enemies.",
    unlocks: ["Lv 1: Move (R)", "Lv 15: Crumble (C)", "Lv 20: Combust (F)"],
  },
  {
    name: "Ratio",
    grade: "Grade 2",
    summary: "Create weak points and collapse cursed energy inward on hit.",
    unlocks: ["Lv 1: Fraction (F)", "Lv 10: Split Barrage (C)", "Lv 20: Dividing Lunge (R)"],
  },
  {
    name: "Star Rage",
    grade: "Grade 1",
    summary: "Explosive cursed energy surges with strong scaling at higher mastery.",
    unlocks: ["Lv 1: Punch (R)", "Lv 15: Bullet (C)", "Lv 30: Densify (F)", "Lv 55: Black Hole (X)"],
  },
  {
    name: "Blood Manipulation",
    grade: "Grade 1",
    summary: "Control blood for ranged pressure and versatile patterns.",
    unlocks: ["Lv 1: Piercing Blood (X)", "Lv 15: Blood Orbs (C)", "Lv 30: Blood Whip (F)", "Lv 50: Blood Rain (R)"],
  },
  {
    name: "Disaster Flames",
    grade: "Special Grade",
    summary: "Create and manipulate flames/lava for high AoE pressure.",
    unlocks: ["Lv 1: Molten Ray (R)", "Lv 25: Flame Fields (C)", "Lv 50: Meteor Smash (F)", "Lv 75: Maximum: Meteor (X)"],
  },
  {
    name: "Limitless",
    grade: "Special Grade",
    summary: "Manipulate space; unlocks powerful late-game abilities (incl. Domain).",
    unlocks: [
      "Lv 1: Red (X)",
      "Lv 25: Lapse: Blue (R)",
      "Lv 50: Maximum Blue (F)",
      "Lv 75: Hollow Purple (C)",
      "Lv 100: Domain Expansion: Ultimate Void (T)",
    ],
  },
  {
    name: "Shrine",
    grade: "Special Grade",
    summary: "Sukuna-style slashing kit with heavy damage patterns.",
    unlocks: ["Lv 1: Dismantle (F)", "Lv 25: Cleave (R)", "Lv 50: Web Slam (X)", "Lv 75: Fuga (C)"],
  },
];

export const metadata: Metadata = {
  title: "Jujutsu Zero Wiki - Clans, Techniques, Tier Lists & Party Guide",
  description:
    "Jujutsu Zero Wiki hub: learn clans, cursed techniques, progression tips, party/co-op basics, and where to find the latest active codes.",
  alternates: {
    canonical: "/wiki",
  },
  openGraph: {
    title: "Jujutsu Zero Wiki - Clans, Techniques, Tier Lists & Party Guide",
    description:
      "Jujutsu Zero Wiki hub covering clans, cursed techniques, tier lists, party/co-op, and links to the latest codes.",
    url: "/wiki",
  },
};

export default function WikiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Jujutsu Zero Wiki",
    description:
      "Wiki hub for Jujutsu Zero: clans, cursed techniques, tier lists, party/co-op, and links to the latest codes.",
    url: "https://jujutsuzero.app/wiki",
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
          name: "Wiki",
          item: "https://jujutsuzero.app/wiki",
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
              Database & Guides
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white text-glow">
              Jujutsu Zero Wiki
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Looking for a real <strong>Jujutsu Zero wiki</strong> experience? This hub is designed
              to match how players search: quick answers first, then deeper sections on clans,
              cursed techniques, tier lists, and party/co-op.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: <span className="text-gray-300">{LAST_UPDATED}</span> (stats and drop
              rates can change after patches).
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/#codes"
                className="px-6 py-3 bg-cursed-purple text-white font-bold rounded-xl border border-cursed-purple-bright hover:scale-[1.02] transition-transform"
              >
                View Latest Codes
              </Link>
              <Link
                href="#toc"
                className="px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                Browse Wiki Sections
              </Link>
            </div>
          </div>

          <div
            id="toc"
            className="mt-16 bg-cursed-gray/70 backdrop-blur-md rounded-2xl border border-gray-700 p-8 shadow-2xl"
          >
            <h2 className="text-xl font-bold text-white mb-6">Quick Index</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <Link href="#overview" className="text-gray-300 hover:text-white hover:underline">
                Game overview (features)
              </Link>
              <Link href="#clans" className="text-gray-300 hover:text-white hover:underline">
                Clans (rarity, rolls, picks)
              </Link>
              <Link href="#techniques" className="text-gray-300 hover:text-white hover:underline">
                Cursed Techniques (how they work)
              </Link>
              <Link href="#stats" className="text-gray-300 hover:text-white hover:underline">
                Stats / Skill Trees
              </Link>
              <Link href="#tier-lists" className="text-gray-300 hover:text-white hover:underline">
                Tier Lists (how to interpret)
              </Link>
              <Link href="#party" className="text-gray-300 hover:text-white hover:underline">
                Party / Co-op basics
              </Link>
              <Link href="#progression" className="text-gray-300 hover:text-white hover:underline">
                Progression & beginner tips
              </Link>
              <Link href="#controls" className="text-gray-300 hover:text-white hover:underline">
                Controls (PC)
              </Link>
              <Link href="#faq" className="text-gray-300 hover:text-white hover:underline">
                FAQ
              </Link>
            </div>
          </div>

          <section
            id="overview"
            className="mt-16 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Game Overview</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <strong>Jujutsu Zero</strong> is a Roblox action RPG/battleground-style experience
              where you build a character around a clan + technique, then progress through quests,
              upgrades, and endgame challenges.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {GAME_FEATURES.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 rounded-full border border-gray-700/70 bg-black/30 text-gray-200 text-xs"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-gray-700/60 bg-black/30 p-4 text-gray-400 text-sm">
              Fastest early boost: redeem current{" "}
              <Link href="/#codes" className="text-white hover:underline">
                codes
              </Link>{" "}
              before you start rerolling or grinding.
            </div>
          </section>

          <section
            id="clans"
            className="mt-16 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Clans</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              In <strong>Jujutsu Zero</strong>, your clan is one of the biggest account-defining
              rolls. Most players searching “jujutsu zero wiki” are really trying to answer: “Which
              clan should I aim for, and how rare is it?” We keep this section focused on practical
              decisions (what to chase vs what to keep) rather than walls of lore.
            </p>
            <div className="mt-8 grid gap-4">
              {CLAN_GRADES.map((group) => (
                <div
                  key={group.grade}
                  className="rounded-2xl border border-gray-800 bg-black/30 p-6"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-white font-bold">
                        {group.grade}{" "}
                        <span className="text-gray-500 font-normal">• {group.rarityLabel}</span>
                      </p>
                      <p className="text-xs text-gray-500">Drop rate: {group.dropRate}</p>
                    </div>
                    <Link href="/tier-list#clans" className="text-sm text-white hover:underline">
                      See tier list →
                    </Link>
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {group.clans.map((clan) => (
                      <div
                        key={clan.name}
                        className="rounded-xl border border-gray-800 bg-black/20 p-4"
                      >
                        <p className="text-white font-semibold">{clan.name}</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-400">
                          {clan.buffs.map((buff) => (
                            <li key={buff}>{buff}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-gray-700/60 bg-black/30 p-4 text-gray-400 text-sm">
              Tip: clan rerolls often have a “pity” style system in-game. If you’re rerolling, redeem{" "}
              <Link href="/#codes" className="text-white hover:underline">
                codes
              </Link>{" "}
              first so you don’t waste rolls. You can also use our{" "}
              <Link href="/spin-calculator" className="text-white hover:underline">
                spin calculator
              </Link>{" "}
              to estimate how many rolls you need for a target chance.
            </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Note: balancing changes fast. If a clan feels weaker/stronger after an update, treat
              any tier label as temporary and prioritize what fits your playstyle.
            </p>
          </section>

          <section
            id="techniques"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Cursed Techniques</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Techniques define your combat more than anything else. You typically roll techniques
              with in-game currency and unlock additional moves by leveling mastery. In many builds,
              you can equip two techniques at a time.
            </p>
            <div className="mt-8 grid gap-4">
              {["Grade 3", "Grade 2", "Grade 1", "Special Grade"].map((grade) => (
                <div key={grade} className="rounded-2xl border border-gray-800 bg-black/30 p-6">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-white font-bold">{grade}</p>
                    <Link
                      href="/tier-list#techniques"
                      className="text-sm text-white hover:underline"
                    >
                      See tier list →
                    </Link>
                  </div>

                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {TECHNIQUES.filter((t) => t.grade === grade).map((technique) => (
                      <details
                        key={technique.name}
                        className="rounded-xl border border-gray-800 bg-black/20 p-4"
                      >
                        <summary className="cursor-pointer select-none">
                          <span className="text-white font-semibold">{technique.name}</span>
                          <span className="block text-sm text-gray-400 mt-1">{technique.summary}</span>
                        </summary>
                        <ul className="mt-3 space-y-1 text-sm text-gray-400 list-disc pl-5">
                          {technique.unlocks.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-gray-700/60 bg-black/30 p-4 text-gray-400 text-sm">
              Quick pick rule: farming favors uptime + AoE; bosses/PvP favor tools (mobility, CC,
              safety windows).
            </div>
          </section>

          <section
            id="stats"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Stats / Skill Trees</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              As you level up, you earn stat points to invest into skill trees. Most builds boil
              down to choosing one main tree to scale early, then patching weaknesses later.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {STAT_TREES.map((row) => (
                <div key={row.name} className="rounded-2xl border border-gray-800 bg-black/30 p-6">
                  <p className="text-white font-bold">{row.name}</p>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{row.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {row.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-3 py-1 rounded-full border border-gray-700/70 bg-black/30 text-gray-200 text-xs"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="tier-lists"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Tier Lists</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Tier lists are helpful when you’re short on rerolls, but they’re often misread. Use
              tier lists as a shortcut for “what’s broadly strong right now”, then validate with
              your goal (speed farming, PvP, solo bossing, party play).
            </p>
            <div className="mt-6 rounded-xl border border-gray-700/60 bg-black/30 p-4 text-gray-400 text-sm">
              Want a full breakdown? See our{" "}
              <Link href="/tier-list" className="text-white hover:underline">
                Jujutsu Zero Tier List
              </Link>{" "}
              for clans and techniques.
            </div>
            <div className="mt-6 rounded-xl border border-gray-700/60 bg-black/30 p-4 text-gray-400 text-sm">
              Want the fastest power spike? Combine a good clan/technique with free rewards from{" "}
              <Link href="/#codes" className="text-white hover:underline">
                Jujutsu Zero codes
              </Link>
              .
            </div>
          </section>

          <section
            id="party"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Party / Co-op</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Queries like “jujutsu zero party” usually come from players trying to farm faster or
              clear harder content. In general, parties shine when you split roles: one player
              focuses on consistent damage, another brings crowd control, and someone handles
              survivability / revives.
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              If you’re adding friends, keep your builds complementary—stacking the same strengths
              often leads to shared weaknesses (for example, all burst and no sustain).
            </p>
          </section>

          <section
            id="progression"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Progression & Beginner Tips</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Most “wiki” searches happen right after players start the game. If you’re brand new,
              focus on three wins: finish the tutorial, redeem current codes, and lock in a build
              you can farm with consistently.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-400 text-sm">
              <li>
                Redeem codes early (many are time-limited) — see the{" "}
                <Link href="/#codes" className="text-white hover:underline">
                  codes list
                </Link>
                .
              </li>
              <li>
                Don’t chase “perfect” rolls immediately; chase stability (a build you can use).
              </li>
              <li>Save rerolls until you understand what your build lacks.</li>
            </ul>
          </section>

          <section
            id="controls"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">Controls (PC)</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Keybinds can change between updates. If something feels off, check your in-game
              settings first.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {CONTROLS.map((control) => (
                <div
                  key={control.action}
                  className="rounded-xl border border-gray-800 bg-black/30 p-4 flex items-center justify-between gap-4"
                >
                  <span className="text-gray-200">{control.action}</span>
                  <span className="font-mono text-white px-3 py-1 rounded-lg border border-gray-700 bg-black/30">
                    {control.key}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="faq"
            className="mt-8 bg-black/20 rounded-2xl border border-gray-800 p-8"
          >
            <h2 className="text-2xl font-bold text-white">FAQ</h2>
            <div className="mt-6 space-y-4 text-gray-400">
              <div className="rounded-xl border border-gray-700/60 bg-black/30 p-4">
                <p className="font-semibold text-white mb-2">
                  Why can’t I find the exact “Jujutsu Zero wiki” page I need?
                </p>
                <p>
                  Different players mean different things by “wiki”. Use the index above to jump to
                  the section you actually need (clans, techniques, tier lists, party).
                </p>
              </div>
              <div className="rounded-xl border border-gray-700/60 bg-black/30 p-4">
                <p className="font-semibold text-white mb-2">Do codes and tier lists change often?</p>
                <p>
                  Yes—codes expire, and balance updates can shift what’s top-tier. Check back after
                  patches and always verify inside your current game version.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 text-center text-sm text-gray-500">
            Looking for active rewards? Jump back to{" "}
            <Link href="/#codes" className="text-white hover:underline">
              Jujutsu Zero Codes
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
}
