import { Settings } from '@/types/sanity'

interface FooterProps {
  settings: Settings
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xl font-heading mb-2">{settings.websiteName}</p>
        <p className="text-sm opacity-90 mb-6">{settings.tagline}</p>

        {settings.socialLinks && settings.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-6 mb-6">
            {settings.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-opacity-80 transition-colors text-2xl"
                title={link.platform}
              >
                {link.platform === 'instagram' ? '📸' :
                  link.platform === 'facebook' ? '👍' :
                    link.platform === 'twitter' ? '🐦' :
                      link.platform === 'linkedin' ? (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      ) :
                        link.platform === 'youtube' ? '▶️' : '🔗'}
              </a>
            ))}
          </div>
        )}

        <p className="text-sm opacity-75">
          © {currentYear} {settings.websiteName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
