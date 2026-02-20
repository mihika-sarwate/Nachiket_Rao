import { Approach } from '@/types/sanity'
import RichText from './RichText'

interface ApproachSectionProps {
  approach: Approach
}

export default function ApproachSection({ approach }: ApproachSectionProps) {
  return (
    <section id="approach" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-heading text-primary text-center mb-16">
          {approach.title}
        </h2>
        <div className="text-primary text-lg">
          <RichText content={approach.content} />
        </div>
      </div>
    </section>
  )
}
