'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Settings } from '@/types/sanity'

interface NavbarProps {
    settings: Settings
}

export default function Navbar({ settings }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

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

    const defaultNavLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'My Mission', href: '#mission' },
        { name: 'Why Choose', href: '#why-choose' },
        { name: 'My Approach', href: '#approach' },
        { name: 'Myths & Facts', href: '#myths-facts' },
        { name: 'Packages', href: '#packages' },
        { name: 'Individual Healing', href: '#individual-healing' },
        { name: 'Healing Modalities', href: '#modalities' },
        { name: 'Newsletter', href: '#newsletter' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ]

    const navLinks = settings.mainMenu && settings.mainMenu.length > 0
        ? settings.mainMenu.map(item => ({ name: item.title || 'Untitled', href: item.link || '#' }))
        : defaultNavLinks

    // Split links for desktop view
    const VISIBLE_COUNT = 5
    const visibleLinks = navLinks.slice(0, VISIBLE_COUNT)
    const moreLinks = navLinks.slice(VISIBLE_COUNT)

    // Handle click outside dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="w-full px-6 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
                        {settings.logo && (
                            <div className="relative h-12 w-12">
                                <Image
                                    src={urlFor(settings.logo).width(100).height(100).url()}
                                    alt={settings.websiteName || 'Logo'}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                        )}
                        <span className="font-heading text-2xl font-bold text-primary tracking-wide">
                            {settings.websiteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-6">
                        {visibleLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary font-medium text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-2 transition-all hover:text-opacity-80 whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* More Dropdown */}
                        {moreLinks.length > 0 && (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-1 text-primary font-medium text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-2 transition-all hover:text-opacity-80 focus:outline-none"
                                >
                                    More ▾
                                </button>
                                {/* Dropdown Content */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 top-full pt-4 w-64 animate-fade-in">
                                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 max-h-[70vh] overflow-y-auto">
                                            {moreLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="block px-6 py-3 text-sm text-primary hover:bg-yellow-50 transition-colors border-b border-gray-50 last:border-0"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden xl:flex items-center gap-4">
                        {settings.socialLinks?.map((link, index) => {
                            const icon = socialIcons[link.platform as keyof typeof socialIcons] || '🔗'
                            return (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl hover:scale-110 transition-transform text-primary"
                                    title={link.platform}
                                >
                                    {icon}
                                </a>
                            )
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            <span className="text-3xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="xl:hidden fixed inset-0 top-[80px] bg-white z-40 overflow-y-auto pb-20 animate-fade-in">
                    <div className="px-6 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 rounded-xl text-lg font-medium text-primary hover:bg-yellow-50 transition-colors border-b border-gray-50 last:border-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Social Links */}
                        <div className="flex justify-center gap-8 pt-8 pb-4">
                            {settings.socialLinks?.map((link, index) => {
                                const icon = socialIcons[link.platform as keyof typeof socialIcons] || '🔗'
                                return (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-3xl hover:scale-110 transition-transform"
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
