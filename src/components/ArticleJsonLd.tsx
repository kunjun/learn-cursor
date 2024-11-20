import { Article } from 'schema-dts'

interface ArticleJsonLdProps {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  url: string
}

export function ArticleJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    url: url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
