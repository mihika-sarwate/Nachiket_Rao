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
                      link.platform === 'linkedin' ? '💼' :
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
