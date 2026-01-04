import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-cursed-black/80 backdrop-blur-md border-b border-cursed-purple-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              {/* Logo placeholder - replace with actual logo if available or text */}
              <div className="flex items-center gap-2">
                 {/* Using text fallback until we are sure image loads correctly/exists */}
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cursed-purple via-white to-cursed-purple text-glow">
                  JUJUTSU ZERO
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white hover:text-glow px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Home
              </Link>
              <Link
                href="/jujutsu-zero-codes"
                className="text-gray-300 hover:text-cursed-red-bright hover:text-glow-red px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Codes
              </Link>
              <Link
                href="/#guides"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Guides
              </Link>
              <Link
                href="/tier-list"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Tier List
              </Link>
              <Link
                href="/spin-calculator"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Calculator
              </Link>
              <Link
                href="/wiki"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                Wiki
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button placeholder */}
            <button className="text-gray-300 hover:text-white p-2">
              <span className="sr-only">Open menu</span>
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
