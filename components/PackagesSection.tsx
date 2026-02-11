import { Package } from '@/types/sanity'
import RichText from './RichText'

interface PackagesSectionProps {
  packages: Package[]
}

export default function PackagesSection({ packages }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-20 px-4 bg-white bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          My Packages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary"
            >
              <h3 className="text-3xl font-heading text-primary mb-2 text-center">
                {pkg.name}
              </h3>
              {pkg.duration && (
                <p className="text-center text-gray-600 mb-4">{pkg.duration}</p>
              )}
              {pkg.price && (
                <div className="text-4xl font-bold text-primary text-center mb-6">
                  {pkg.price}
                </div>
              )}
              {pkg.description && (
                <div className="mb-6 text-primary">
                  <RichText content={pkg.description} />
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
