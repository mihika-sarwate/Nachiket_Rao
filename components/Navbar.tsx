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
        linkedin: '💼',
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
