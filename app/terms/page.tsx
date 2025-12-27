import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service - Jujutsu Zero Fan Site',
    description: 'Terms of Service for using the Jujutsu Zero fan site.',
    alternates: {
        canonical: '/terms',
    },
}

export default function TermsOfService() {
    return (
        <div className="bg-cursed-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Terms of Service</h1>

                    <div className="text-base leading-7 text-gray-400 space-y-6">
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>

	                        <section>
	                            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
	                            <p>
	                                By accessing and using JujutsuZero.app (“the Site”), you agree to comply with and be bound by these Terms of Service.
	                                If you do not agree to these terms, please do not use our website.
	                            </p>
	                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Disclaimer</h2>
                            <p>
                                JujutsuZero.app is a fan-made website. We are <strong>not affiliated, endorsed, sponsored, or specifically approved by Roblox Corporation, Gege Akutami, or the official rights holders of Jujutsu Kaisen.</strong>
                                <br />
                                All game images, content, and trademarks are property of their respective owners. We are providing this content for educational and informational purposes only.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Use of Content</h2>
                            <p>
                                The codes and guides provided on this site are gathered from public sources. We make no guarantee about the validity or expiration of any Roblox codes, as they are controlled by the game developers.
                            </p>
                        </section>

	                        <section>
	                            <h2 className="text-xl font-semibold text-white mb-3">4. User Conduct</h2>
	                            <p>
	                                You agree not to use the site for any unlawful purpose. You must not attempt to disrupt the site’s operation or scrape content without permission.
	                            </p>
	                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
                            <p>
                                In no event shall JujutsuZero.app be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Your continued use of the site after any changes indicates your acceptance of the new Terms of Service.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
