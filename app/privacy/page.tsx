import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy - Jujutsu Zero Fan Site',
    description: 'Privacy Policy for the Jujutsu Zero fan site.',
    alternates: {
        canonical: '/privacy',
    },
}

export default function PrivacyPolicy() {
    return (
        <div className="bg-cursed-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">Privacy Policy</h1>

                    <div className="text-base leading-7 text-gray-400 space-y-6">
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
                            <p>
                                Welcome to JujutsuZero.app ("we," "our," or "us"). We are committed to respecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">2. Information Collection</h2>
                            <p>
                                We do not collect any personal identifiable information (PII) from users. We do not require registration to use our site.
                                However, we may use third-party analytics tools (like Google Analytics) that collect non-personal information such as:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages you access</li>
                                <li>Time spent on pages</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">3. Cookies</h2>
                            <p>
                                We may use cookies to improve your experience. Completing tasks or saving preferences (like dark mode) may strictly necessary technical cookies.
                                You can disable cookies through your browser settings, though some site features may not function properly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Links</h2>
                            <p>
                                Our site may contain links to third-party websites (e.g., Roblox, YouTube, Discord). We are not responsible for the privacy practices or content of these third-party sites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">5. Children's Privacy</h2>
                            <p>
                                Our website is a general audience site and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-3">6. Updates</h2>
                            <p>
                                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
