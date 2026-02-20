import { WhyChoose } from '@/types/sanity'
import RichText from './RichText'

interface WhyChooseSectionProps {
  whyChoose: WhyChoose
}

export default function WhyChooseSection({ whyChoose }: WhyChooseSectionProps) {
  return (
    <section id="why-choose" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          {whyChoose.title}
        </h2>
        <div className="text-primary text-lg">
          <RichText content={whyChoose.content} />
        </div>
      </div>
    </section>
  )
}
