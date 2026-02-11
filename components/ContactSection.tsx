import ContactForm from './ContactForm'
import { ContactInfo, Settings } from '@/types/sanity'

interface ContactSectionProps {
  contactInfo: ContactInfo
  settings: Settings
}

export default function ContactSection({ contactInfo, settings }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col justify-center">
            {settings.calendlyLink && (
              <div className="mb-8 text-center">
                <a
                  href={settings.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors text-center shadow-md"
                >
                  Book Consultation
                </a>
              </div>
            )}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-semibold text-primary mb-1 text-lg">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:underline text-lg"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-semibold text-primary mb-1 text-lg">Phone</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary hover:underline text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-primary mb-1 text-lg">Address</h3>
                  <p className="text-primary whitespace-pre-line text-lg">
                    {contactInfo.address || 'Address not available'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
