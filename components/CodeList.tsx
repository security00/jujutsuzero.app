"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    CODES_LAST_UPDATED,
    formatReward,
    getActiveCodes,
    getCodesStats,
    getExpiredCodes,
    getReleaseHistory,
} from "@/data/codes";

export default function CodeList() {
    const [copied, setCopied] = useState<string | null>(null);
    const [showExpired, setShowExpired] = useState(false);
    const [query, setQuery] = useState("");

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
        }
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    const activeCodes = getActiveCodes();
    const expiredCodes = getExpiredCodes();
    const releaseHistory = getReleaseHistory();
    const activeStats = getCodesStats(activeCodes);
    const totalRollsAndSpins = activeStats.clanRolls + activeStats.clanSpins;

    const normalizedQuery = query.trim().toLowerCase();
    const filteredActiveCodes = normalizedQuery
        ? activeCodes.filter((c) => c.code.toLowerCase().includes(normalizedQuery))
        : activeCodes;
    const filteredExpiredCodes = normalizedQuery
        ? expiredCodes.filter((c) => c.code.toLowerCase().includes(normalizedQuery))
        : expiredCodes;
    const filteredReleaseHistory = normalizedQuery
        ? releaseHistory.filter((c) => c.code.toLowerCase().includes(normalizedQuery))
        : releaseHistory;

    const formatIsoDate = (iso: string) => {
        const date = new Date(`${iso}T00:00:00.000Z`);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });
    };

    return (
        <div id="codes" className="py-24 sm:py-32 relative isolate">
            {/* Transparent background to let body global-bg show through */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow-red">
                        Jujutsu Zero Codes
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        Updated daily. Click to copy and redeem in-game instantly.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        Last updated: <span className="text-gray-300">{CODES_LAST_UPDATED}</span>
                    </p>
                </div>

                <div className="mt-16 bg-cursed-gray/70 backdrop-blur-md rounded-2xl border border-gray-600 p-8 shadow-2xl">
	                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
	                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
	                            <span className="px-3 py-1 rounded-full border border-gray-700 bg-black/20">
	                                {activeCodes.length} Active
	                            </span>
	                            <span className="px-3 py-1 rounded-full border border-gray-700 bg-black/20">
	                                {activeStats.lumens.toLocaleString("en-US")} Total Lumens
	                            </span>
                            <span className="px-3 py-1 rounded-full border border-gray-700 bg-black/20">
                                {totalRollsAndSpins.toLocaleString("en-US")} Total Clan Rolls/Spins
                            </span>
                            {activeStats.festiveLumens ? (
                                <span className="px-3 py-1 rounded-full border border-gray-700 bg-black/20">
                                    {activeStats.festiveLumens.toLocaleString("en-US")} Festive Lumens
                                </span>
                            ) : null}
                        </div>

	                        <div className="flex items-center gap-4 text-sm">
	                            <Link href="/spin-calculator" className="text-white hover:underline">
	                                Spin calculator →
	                            </Link>
	                            <Link href="#history" className="text-white hover:underline">
	                                Release history →
	                            </Link>
	                        </div>
	                    </div>

                        <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                            <div className="text-sm text-gray-400">
                                {normalizedQuery ? (
                                    <p>
                                        Showing{" "}
                                        <span className="text-gray-200 font-semibold">{filteredActiveCodes.length}</span>{" "}
                                        of{" "}
                                        <span className="text-gray-200 font-semibold">{activeCodes.length}</span>{" "}
                                        active codes.
                                    </p>
                                ) : (
                                    <p>Tip: Search is case-insensitive. Paste codes exactly to avoid typos.</p>
                                )}
                            </div>
                            <div className="relative w-full sm:max-w-sm">
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search codes (e.g. XMAS)"
                                    aria-label="Search codes"
                                    className="w-full rounded-xl border border-gray-700 bg-black/30 px-4 py-3 pr-24 text-white outline-none focus:border-cursed-purple placeholder:text-gray-600"
                                />
                                {query ? (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg border border-gray-700 bg-black/30 px-3 py-1.5 text-xs text-gray-200 hover:bg-black/40 transition-colors"
                                    >
                                        Clear
                                    </button>
                                ) : null}
                            </div>
                        </div>

	                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-500 pb-2">
                            Active Codes
                        </h3>
	                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	                        {filteredActiveCodes.map((code) => (
	                            <div key={code.code} className="relative group bg-gray-800/90 p-4 rounded-lg border border-gray-600 hover:border-cursed-purple transition-all shadow-lg hover:shadow-cursed-purple/30">
	                                <div className="flex justify-between items-center mb-2">
	                                    <span className="font-mono font-bold text-lg text-white group-hover:text-glow transition-all break-all">{code.code}</span>
	                                    <span className="px-2 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full border border-green-400/20">
                                        Active
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    {formatReward(code.rewards)}
                                    {code.note ? (
                                        <span className="text-gray-500"> — {code.note}</span>
                                    ) : null}
	                                </p>
	                                <button
	                                    onClick={() => copyToClipboard(code.code)}
	                                    aria-label={`Copy code ${code.code}`}
	                                    className="w-full py-2 bg-white/5 hover:bg-cursed-purple hover:text-white text-gray-300 rounded text-sm font-medium transition-colors"
	                                >
	                                    {copied === code.code ? "Copied!" : "Copy Code"}
	                                </button>
	                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <button
                            type="button"
	                            onClick={() => setShowExpired((v) => !v)}
	                            className="w-full flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-black/20 px-4 py-3 text-left text-sm text-gray-300 hover:bg-black/30 transition-colors"
	                        >
	                            <span>
	                                {showExpired ? "Hide" : "Show"} Expired Codes{" "}
                                    {normalizedQuery ? (
                                        <>
                                            ({filteredExpiredCodes.length} of {expiredCodes.length})
                                        </>
                                    ) : (
                                        <>({expiredCodes.length})</>
                                    )}
	                            </span>
	                            <span className="font-mono text-gray-500">{showExpired ? "−" : "+"}</span>
	                        </button>
	                    </div>

	                    {showExpired && filteredExpiredCodes.length ? (
	                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 opacity-70">
	                            {filteredExpiredCodes.map((code) => (
		                                <div key={code.code} className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
		                                    <div className="flex justify-between items-center mb-2">
		                                        <span className="font-mono font-bold text-lg text-gray-500 line-through break-all">
		                                            {code.code}
		                                        </span>
		                                        <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-900/10 rounded-full border border-red-900/20">
		                                            Expired
		                                        </span>
		                                    </div>
		                                    <p className="text-sm text-gray-600 mb-3">{formatReward(code.rewards)}</p>
		                                </div>
		                            ))}
		                        </div>
		                    ) : null}

	                        {showExpired && normalizedQuery && !filteredExpiredCodes.length ? (
	                            <div className="mt-6 rounded-xl border border-gray-800 bg-black/20 p-4 text-sm text-gray-400">
	                                No expired codes match{" "}
	                                <span className="font-mono text-gray-200 break-all">{query}</span>. Try a
	                                shorter keyword, or clear the search.
	                            </div>
	                        ) : null}
	                        {!filteredActiveCodes.length && normalizedQuery ? (
	                            <div className="mt-6 rounded-xl border border-gray-800 bg-black/20 p-4 text-sm text-gray-400">
	                                No active codes match{" "}
	                                <span className="font-mono text-gray-200 break-all">{query}</span>. Try a
                                shorter keyword, or clear the search.
                            </div>
                        ) : null}

	                    <div id="history" className="mt-16 pt-12 border-t border-gray-700">
	                        <div className="flex items-center justify-between gap-4 flex-wrap">
	                            <h3 className="text-2xl font-bold text-white text-glow">Codes Release History</h3>
	                            <Link href="#codes" className="text-sm text-white hover:underline">
                                Back to codes ↑
                            </Link>
                        </div>
		                        <p className="mt-3 text-sm text-gray-400">
		                            A quick timeline of recent code drops so you can see what’s newest first.
		                        </p>
		                        {filteredReleaseHistory.length ? (
		                            <div className="mt-8 grid gap-3">
		                                {filteredReleaseHistory.map((entry) => (
		                                    <div
		                                        key={`${entry.releasedAt}-${entry.code}`}
		                                        className="rounded-xl border border-gray-800 bg-black/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
		                                    >
		                                        <div>
		                                            <p className="text-xs text-gray-500">
		                                                {entry.releasedAt ? formatIsoDate(entry.releasedAt) : "Unknown date"}
		                                            </p>
		                                            <p className="mt-1 font-mono font-bold text-white break-all">{entry.code}</p>
		                                            <p className="mt-1 text-sm text-gray-400">
		                                                {formatReward(entry.rewards)}
		                                                {entry.note ? (
		                                                    <span className="text-gray-500"> — {entry.note}</span>
		                                                ) : null}
		                                            </p>
		                                        </div>
		                                        <button
		                                            onClick={() => copyToClipboard(entry.code)}
		                                            aria-label={`Copy code ${entry.code}`}
		                                            className="sm:w-40 py-2 bg-white/5 hover:bg-cursed-purple hover:text-white text-gray-300 rounded text-sm font-medium transition-colors"
		                                        >
		                                            {copied === entry.code ? "Copied!" : "Copy Code"}
		                                        </button>
		                                    </div>
		                                ))}
		                            </div>
		                        ) : (
		                            <div className="mt-8 rounded-xl border border-gray-800 bg-black/20 p-4 text-sm text-gray-400">
		                                No release history entries match{" "}
		                                <span className="font-mono text-gray-200 break-all">{query}</span>. Try a
		                                shorter keyword, or clear the search.
		                            </div>
		                        )}
	                    </div>

                    <div className="mt-16 pt-12 border-t border-gray-700">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 text-glow">How to Redeem Jujutsu Zero Codes</h3>
                                <div className="space-y-4 text-gray-300">
	                                    <p className="text-sm text-gray-400 italic mb-4">
	                                        To redeem your codes in Jujutsu Zero, you’ll need to play through the tutorial mission first. After this, you’ll land in the lobby area, and the game will reload the main menu. Here’s how to redeem your rewards once you’ve done that.
	                                    </p>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-cursed-purple flex items-center justify-center font-bold text-white">1</div>
                                        <p>Launch <span className="text-white font-semibold">Jujutsu Zero</span> in Roblox.</p>
                                    </div>
	                                    <div className="flex gap-4">
	                                        <div className="flex-none w-8 h-8 rounded-full bg-cursed-purple flex items-center justify-center font-bold text-white">2</div>
	                                        <p>
	                                            On the main menu, open the{" "}
	                                            <span className="text-white font-semibold">Codes</span>{" "}
	                                            button (or{" "}
	                                            <span className="text-white font-semibold">Shop → Codes</span>{" "}
	                                            depending on your current UI).
	                                        </p>
	                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-cursed-purple flex items-center justify-center font-bold text-white">3</div>
                                        <p>Input your code.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-none w-8 h-8 rounded-full bg-cursed-purple flex items-center justify-center font-bold text-white">4</div>
                                        <p><span className="text-white font-semibold">Redeem</span> your rewards.</p>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-4">
                                        Every time you play the game after completing the first mission, you can access the codes tab from the main menu.
                                    </p>
                                </div>
                            </div>
	                            <div className="relative">
	                                <div className="absolute -inset-1 bg-gradient-to-r from-cursed-purple to-cursed-red rounded-xl blur opacity-30"></div>
	                                <Image
	                                    src="/redeem-guide.png"
	                                    alt="How to Redeem Codes in Jujutsu Zero"
	                                    width={1024}
	                                    height={574}
	                                    className="relative rounded-xl border border-gray-700 shadow-2xl w-full h-auto"
	                                />
	                            </div>
	                        </div>
	                    </div>
                </div>
            </div>
        </div>
    );
}
