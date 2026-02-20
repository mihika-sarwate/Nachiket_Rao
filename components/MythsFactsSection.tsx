import { MythFact } from '@/types/sanity'
import RichText from './RichText'

interface MythsFactsSectionProps {
  mythsFacts: MythFact[]
}

export default function MythsFactsSection({ mythsFacts }: MythsFactsSectionProps) {
  return (
    <section id="myths-facts" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          Myths & Facts of Hypnotherapy
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Table Header - Visible on Desktop */}
          <div className="hidden md:grid md:grid-cols-2 bg-primary/10 border-b border-gray-200">
            <div className="p-6 text-2xl font-bold text-center text-primary border-r border-gray-200">
              Myths of Hypnotherapy
            </div>
            <div className="p-6 text-2xl font-bold text-center text-primary">
              Facts of Hypnotherapy
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {mythsFacts.map((item) => (
              <div key={item._id} className="grid md:grid-cols-2 group hover:bg-gray-50 transition-colors">
                {/* Myth Column */}
                <div className="p-8 md:border-r border-gray-200 relative">
                  <div className="md:hidden mb-2 text-sm font-bold text-red-500 uppercase tracking-wider">
                    Myths of Hypnotherapy
                  </div>
                  <p className="text-lg text-gray-700 italic font-medium">
                    &ldquo;{item.myth}&rdquo;
                  </p>
                </div>

                {/* Fact Column */}
                <div className="p-8 relative">
                  <div className="md:hidden mb-2 text-sm font-bold text-green-600 uppercase tracking-wider">
                    Facts of Hypnotherapy
                  </div>
                  <div className="text-gray-700 prose prose-primary max-w-none">
                    <RichText content={item.fact} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
