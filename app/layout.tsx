import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Therapy & Counseling Services',
  description: 'Professional therapy and counseling services for mental health and wellness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/magnolia-script"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
