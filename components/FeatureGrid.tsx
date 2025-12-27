import Link from "next/link";

const features = [
    {
        name: "Strategy Guides",
        description: "Detailed walkthroughs for leveling up, completing quests, and mastering your Cursed Technique.",
        href: "#guides",
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        ),
        color: "bg-cursed-purple",
    },
    {
        name: "Clan Tier List",
        description: "Ranking the best Clans (Gojo, Zenin, Kamo) based on buffs, movesets, and rarity.",
        href: "#wiki",
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
        color: "bg-cursed-red",
    },
    {
        name: "Wiki Database",
        description: "Complete database of items, bosses, locations, and Cursed Techniques found in Jujutsu Zero.",
        href: "#wiki",
        icon: (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
        ),
        color: "bg-gray-700",
    },
];

export default function FeatureGrid() {
    return (
        <div id="guides" className="py-24 sm:py-32 relative isolate">
            {/* Transparent background to let body global-bg show through */}

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-cursed-purple">Master the Game</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
                        Everything you need to become a Special Grade Sorcerer
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        From beginner tips to advanced combat mechanics, our guides cover every aspect of Jujutsu Zero to help you progress faster.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col relative pl-16 group">
                                <div className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                    {feature.icon}
                                </div>
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <Link href={feature.href} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {feature.name}
                                    </Link>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
