'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Settings } from '@/types/sanity'

interface NavbarProps {
    settings: Settings
}

export default function Navbar({ settings }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const socialIcons = {
        instagram: '📸',
        facebook: '👍',
        twitter: '🐦',
        linkedin: (
            <svg className="w-6 h-6 fill-current inline-block" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
        youtube: '▶️',
    }

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Packages', href: '#packages' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        {settings.logo && (
                            <div className="relative h-12 w-12 mr-3">
                                <Image
                                    src={urlFor(settings.logo).width(100).height(100).url()}
                                    alt={settings.websiteName}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                        )}
                        <span className="font-heading text-xl font-bold text-primary">
                            {settings.websiteName}
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary hover:text-opacity-80 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {settings.socialLinks?.map((link, index) => {
                            const icon = socialIcons[link.platform as keyof typeof socialIcons] || '🔗'
                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl hover:scale-110 transition-transform"
                                    title={link.platform}
                                >
                                    {icon}
                                </a>
                            )
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary focus:outline-none"
                        >
                            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-gray-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex space-x-4 px-3 py-2 mt-4 border-t pt-4">
                            {settings.socialLinks?.map((link, index) => {
                                const icon = socialIcons[link.platform as keyof typeof socialIcons] || '🔗'
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl"
                                    >
                                        {icon}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
