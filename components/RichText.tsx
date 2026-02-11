import { PortableText } from '@portabletext/react'

interface RichTextProps {
  content: any[]
}

export default function RichText({ content }: RichTextProps) {
  if (!content) return null
  return (
    <div className="prose prose-lg prose-primary max-w-none">
      <PortableText value={content} />
    </div>
  )
}
