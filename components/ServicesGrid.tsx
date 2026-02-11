import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Service } from '@/types/sanity'
import RichText from './RichText'

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section id="services" className="py-20 px-4 bg-white bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service) => (
            <div
              key={service._id}
              className="w-full max-w-2xl text-center"
            >
              {service.image && (
                <div className="mb-6 relative h-64 w-full">
                  <Image
                    src={urlFor(service.image).width(800).height(600).url()}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
              {service.icon && (
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
              )}
              <h3 className="text-3xl font-heading text-primary mb-6">
                {service.title}
              </h3>
              <div className="text-primary prose prose-lg prose-primary mx-auto">
                {service.description && <RichText content={service.description} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
