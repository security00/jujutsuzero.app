"use client";

import { useState } from "react";
import Image from "next/image";

type Code = {
    code: string;
    reward: string;
    status: "Active" | "Expired";
};

const MOCK_CODES: Code[] = [
    // Active Codes
    { code: "oopsMBgg", reward: "15 Clan Rolls + 750 Festive Lumens", status: "Active" },
    { code: "XMAS", reward: "3500 Lumens + 35 Clan Spins + 1250 Festive Lumens", status: "Active" },
    { code: "90smthKmembersYAY", reward: "1500 Lumens + 25 Clan Spins + 750 Festive Lumens", status: "Active" },
    { code: "80Kmembers", reward: "3500 Lumens + 50 Clan Rolls", status: "Active" },
    { code: "20KLIKES", reward: "3500 Lumens + 35 Clan Rolls", status: "Active" },
    { code: "CHARM", reward: "1 Basic Charm", status: "Active" },
    { code: "smallfixPATCH", reward: "1500 Lumens + 3 XP Vows + 15 Clan Rolls", status: "Active" },
    // Expired Codes
    { code: "FREECLANSPINSYES", reward: "1000 Clan Rolls", status: "Expired" },
    { code: "BETAout", reward: "200 Clan Rolls + 3500 Lumens", status: "Expired" },
    { code: "67kmemberscodeasabonus", reward: "67 Clan Rolls", status: "Expired" },
    { code: "shutdown200821", reward: "20 Clan Rolls", status: "Expired" },
];

export default function CodeList() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
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
                </div>

                <div className="mt-16 bg-cursed-gray/70 backdrop-blur-md rounded-2xl border border-gray-600 p-8 shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-500 pb-2">Active Codes</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {MOCK_CODES.filter(c => c.status === "Active").map((code) => (
                            <div key={code.code} className="relative group bg-gray-800/90 p-4 rounded-lg border border-gray-600 hover:border-cursed-purple transition-all shadow-lg hover:shadow-cursed-purple/30">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-mono font-bold text-lg text-cursed-purple-dark text-white group-hover:text-glow transition-all">{code.code}</span>
                                    <span className="px-2 py-1 text-xs font-semibold text-green-400 bg-green-400/10 rounded-full border border-green-400/20">
                                        Active
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">{code.reward}</p>
                                <button
                                    onClick={() => copyToClipboard(code.code)}
                                    className="w-full py-2 bg-white/5 hover:bg-cursed-purple hover:text-white text-gray-300 rounded text-sm font-medium transition-colors"
                                >
                                    {copied === code.code ? "Copied!" : "Copy Code"}
                                </button>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-500 mb-6 mt-12 border-b border-gray-800 pb-2">Expired Codes</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 opacity-60">
                        {MOCK_CODES.filter(c => c.status === "Expired").map((code) => (
                            <div key={code.code} className="bg-gray-900/30 p-4 rounded-lg border border-gray-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-mono font-bold text-lg text-gray-500 line-through">{code.code}</span>
                                    <span className="px-2 py-1 text-xs font-semibold text-red-900 bg-red-900/10 rounded-full border border-red-900/20">
                                        Expired
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{code.reward}</p>
                            </div>
                        ))}
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
	                                            On the main menu, tap the{" "}
	                                            <span className="text-white font-semibold">shop</span> tab.
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
