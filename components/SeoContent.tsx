import Link from "next/link";

export default function SeoContent() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/pattern-bg.png)",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
          opacity: 0.1,
        }}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-gray-300 text-sm leading-relaxed">
        <h2 className="text-2xl font-bold text-white mb-6">
          Jujutsu Zero Codes: How They Work (and How We Update This Page)
        </h2>

        <p className="mb-4">
          Looking for the newest <strong>Jujutsu Zero codes</strong>? This page is built to help you
          find active rewards quickly, understand how redemption works, and avoid common issues that
          make codes fail. We keep the list organized (active vs expired) so you can copy a code,
          redeem it, and get back to grinding.
        </p>
        <p className="mb-4">
          Need more than codes? Browse our{" "}
          <Link href="/wiki" className="text-white hover:underline">
            Jujutsu Zero Wiki
          </Link>{" "}
          for clans, cursed techniques, tier list guidance, and party/co-op basics.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">What are Jujutsu Zero codes?</h3>
        <p className="mb-4">
          <strong>Jujutsu Zero codes</strong> are free promotional strings released by the game’s
          developers to celebrate events, milestones (likes, visits, member counts), patches, and
          seasonal updates. When you redeem them in-game, you can receive items such as spins, rolls,
          Lumens, or other limited-time rewards. If you play regularly, checking for new{" "}
          <strong>Jujutsu Zero codes</strong> is one of the easiest ways to keep your account
          progressing without extra grinding.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">
          Where to redeem Jujutsu Zero codes (menu labels can change)
        </h3>
        <p className="mb-4">
          Because the UI can shift after patches, we avoid duplicating step-by-step instructions in
          multiple places. Instead, use the walkthrough in the{" "}
          <Link href="#codes" className="text-white hover:underline">
            Codes section above
          </Link>{" "}
          (with a visual guide), then follow the exact wording you see in your current game build.
          That’s the most reliable way to redeem <strong>Jujutsu Zero codes</strong> without
          confusion.
        </p>
        <p className="mb-4">
          Quick tips: paste (don’t type) to preserve capitalization, redeem right after a fresh
          update in a new server if something looks outdated, and never use third-party “code
          generators” or login links. Real <strong>Jujutsu Zero codes</strong> are redeemed only
          inside the game.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">How we label active vs expired codes</h3>
        <p className="mb-4">
          To keep this page useful, we separate <strong>Jujutsu Zero codes</strong> into two
          categories. “Active” means the code is expected to redeem for a reward in the current
          version, while “Expired” means it no longer redeems (or has been replaced). If a code stops
          working after a hotfix, it gets moved to expired so you don’t waste time testing it.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">Why a code might not work</h3>
        <p className="mb-4">
          Even when a code looks correct, <strong>Jujutsu Zero codes</strong> can fail for a few
          normal reasons. The most common is expiration—developers often disable codes after a short
          time. Another frequent issue is formatting: an extra space, the wrong capitalization, or a
          missing character will invalidate the code. Finally, some codes only work after reaching a
          certain point in the game (for example, completing a tutorial or rejoining after an update).
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>
            You already redeemed it on your account (most <strong>Jujutsu Zero codes</strong> are
            one-time use).
          </li>
          <li>The code is expired or replaced after a hotfix.</li>
          <li>Server lag: rejoin and try again after a minute.</li>
          <li>Typing/pasting error (check for O vs 0, I vs l).</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">When do new Jujutsu Zero codes release?</h3>
        <p className="mb-4">
          New <strong>Jujutsu Zero codes</strong> usually appear around updates, event launches, and
          community milestones. If there’s a big patch, a holiday event, or a major “likes/visits”
          milestone, that’s often when you’ll see fresh codes. We aim to keep this page current by
          reviewing updates and community announcements, then validating which codes are still active.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">Best practices: redeem fast, redeem smart</h3>
        <p className="mb-4">
          If you want to get maximum value from <strong>Jujutsu Zero codes</strong>, redeem them as
          soon as you see them. Many rewards (like spins or rolls) are most useful when you already
          have a plan—decide whether you’re rolling for a Clan, chasing a technique, or saving
          currency for later. Also, don’t forget to check the “expired” list: it helps you avoid
          wasting time testing old codes that no longer work.
        </p>

        <h3 className="text-lg font-semibold text-white mt-10 mb-3">FAQ: Jujutsu Zero codes</h3>
        <div className="mt-4 space-y-4 text-gray-400">
          <div className="rounded-xl border border-gray-700/60 bg-black/20 p-4">
            <p className="font-semibold text-white mb-2">Do Jujutsu Zero codes expire?</p>
            <p>
              Yes. Most <strong>Jujutsu Zero codes</strong> are time-limited. If a code is no longer
              redeemable, it’s moved to the expired list so you can focus on what still works.
            </p>
          </div>
          <div className="rounded-xl border border-gray-700/60 bg-black/20 p-4">
            <p className="font-semibold text-white mb-2">Are there special event codes?</p>
            <p>
              Seasonal events often come with unique rewards. During major updates, you’ll usually
              see new <strong>Jujutsu Zero codes</strong> tied to the event theme or patch notes.
            </p>
          </div>
          <div className="rounded-xl border border-gray-700/60 bg-black/20 p-4">
            <p className="font-semibold text-white mb-2">Can I use codes on multiple accounts?</p>
            <p>
              Typically, codes apply per account. Each account can redeem a given code once—so if
              you switch accounts, you may be able to redeem the same{" "}
              <strong>Jujutsu Zero codes</strong> again on that other account (while they’re still active).
            </p>
          </div>
        </div>

        <p className="mt-10 text-gray-500">
          Need help or want to report a broken code? Visit{" "}
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>{" "}
          or review our{" "}
          <Link href="/privacy" className="text-white hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-white hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
