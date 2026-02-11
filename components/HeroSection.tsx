import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Settings } from '@/types/sanity'

interface HeroSectionProps {
  settings: Settings
}

export default function HeroSection({ settings }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {settings.logo && (
          <div className="mb-8 flex justify-center">
            <Image
              src={urlFor(settings.logo).width(200).height(200).url()}
              alt={settings.websiteName || 'Logo'}
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
          </div>
        )}
        <h1 className="text-6xl md:text-7xl font-heading text-primary mb-6">
          {settings.websiteName}
        </h1>
        <p className="text-2xl md:text-3xl text-primary mb-8 font-light">
          {settings.tagline}
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="text-xl text-primary bg-white bg-opacity-70 inline-block px-8 py-4 rounded-full shadow-md">
            Consultation: {settings.consultationCharge}
          </div>
          {settings.calendlyLink && (
            <a
              href={settings.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Consultation
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
