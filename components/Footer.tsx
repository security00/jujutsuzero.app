import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-cursed-black border-t border-cursed-purple-dark/30 mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cursed-purple to-white">
                            JUJUTSU ZERO
                        </span>
                        <p className="mt-2 text-sm text-gray-400 max-w-xs">
                            Your ultimate source for Jujutsu Zero Roblox codes, guides, and community updates.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Jujutsu Zero Fan Site. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                        This site is not affiliated with Roblox, Gege Akutami, or the official Jujutsu Kaisen franchise.
                        All game content and trademarks are property of their respective owners.
                    </p>
                </div>
            </div>
        </footer>
    );
}
