import Link from "next/link";
import { CODES_LAST_UPDATED, getActiveCodes, getCodesStats } from "@/data/codes";

export default function Hero() {
    const activeCodes = getActiveCodes();
    const stats = getCodesStats(activeCodes);
    const totalRollsAndSpins = stats.clanRolls + stats.clanSpins;

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden h-[90vh]">
            {/* Background Image Layer */}
            {/* Background Image Layer removed to show global background */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-center items-center relative z-10 pt-20">
                <div className="max-w-5xl text-center space-y-12">
                    {/* Badge */}
	                    <div className="flex justify-center">
	                        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-cursed-purple-bright bg-cursed-purple/10 border border-cursed-purple/20 backdrop-blur-md hover:bg-cursed-purple/20 transition-colors cursor-default select-none shadow-[0_0_15px_rgba(168,85,247,0.2)]">
	                            <span className="relative flex h-2 w-2 mr-2">
	                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cursed-purple-bright opacity-75"></span>
	                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cursed-purple-bright"></span>
	                            </span>
	                            Codes updated: {CODES_LAST_UPDATED}
	                        </div>
	                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl leading-tight">
                        UNLEASH YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cursed-purple via-white to-cursed-red animate-pulse-slow">
                            CURSED ENERGY
                        </span>
                    </h1>

                    {/* Description - Cleaned up to remove boxy container */}
                    <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                        Dominate <strong>Jujutsu Zero</strong> on Roblox. Access the latest active codes,
                        tier lists, and strategy guides to become the strongest sorcerer.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-6 items-center justify-center">
                        <Link
                            href="#codes"
                            className="group relative px-10 py-5 bg-cursed-purple text-white font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.4)] border border-cursed-purple-bright"
                        >
                            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full duration-500 transition-transform skew-x-12 origin-left" />
                            <span className="relative flex items-center gap-2 tracking-wide">
                                GET CODES
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </span>
                        </Link>
                        <Link href="/tier-list" className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] tracking-wide">
                            VIEW TIER LIST
                        </Link>
                    </div>
                </div>

                {/* Stats Row - Added more separation */}
                <div className="mt-24 grid grid-cols-3 gap-12 border-t border-white/5 pt-12 max-w-2xl w-full mx-auto text-center">
                    <div className="group hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white text-glow group-hover:text-cursed-purple-bright transition-colors">
                            {activeCodes.length}
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">Active Codes</div>
                    </div>
                    <div className="group hover:-translate-y-1 transition-transform duration-300 delay-75">
                        <div className="text-4xl font-bold text-white text-glow group-hover:text-cursed-purple-bright transition-colors">
                            {stats.lumens.toLocaleString("en-US")}
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">Total Lumens</div>
                    </div>
                    <div className="group hover:-translate-y-1 transition-transform duration-300 delay-150">
                        <div className="text-4xl font-bold text-white text-glow group-hover:text-cursed-purple-bright transition-colors">
                            {totalRollsAndSpins.toLocaleString("en-US")}
                        </div>
                        <div className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">
                            Rolls / Spins
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
