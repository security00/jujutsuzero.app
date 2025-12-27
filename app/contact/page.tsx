import type { Metadata } from 'next'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Contact Us - Jujutsu Zero Fan Site',
    description: 'Contact information for the Jujutsu Zero fan site.',
    alternates: {
        canonical: '/contact',
    },
}

export default function Contact() {
    return (
        <div className="bg-cursed-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h1>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        Have questions, suggestions, or found a bug? We'd love to hear from you.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200/10 lg:mx-0 lg:flex lg:max-w-none bg-gray-900/50">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Get in touch</h3>
                        <p className="mt-6 text-base leading-7 text-gray-400">
                            For general inquiries, business proposals, or DMCA notices, please email us directly. We aim to respond to all legitimate inquiries within 48 hours.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-cursed-purple text-glow">Support Email</h4>
                            <div className="h-px flex-auto bg-gray-100/10" />
                        </div>
                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3 items-center">
                                <svg className="h-6 w-5 flex-none text-cursed-purple" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                                </svg>
                                <a href="mailto:support@jujutsuzero.app" className="hover:text-white transition-colors">support@jujutsuzero.app</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
