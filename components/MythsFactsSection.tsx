import { MythFact } from '@/types/sanity'

interface MythsFactsSectionProps {
  mythsFacts: MythFact[]
}

export default function MythsFactsSection({ mythsFacts }: MythsFactsSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          Myths & Facts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {mythsFacts.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  MYTH
                </span>
                <p className="text-lg text-gray-700 italic">{item.myth}</p>
              </div>
              <div>
                <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                  FACT
                </span>
                <p className="text-lg text-primary font-medium">{item.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
