import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical: string              // path only, e.g. '/products/tradecalcs'
  keywords?: string
  ogImage?: string               // defaults to /og-image.jpg
  ogType?: 'website' | 'article'
  schemas?: Record<string, unknown>[]
  noindex?: boolean
}

const SITE = 'https://autaimate.com'

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  schemas = [],
  noindex = false,
}: SEOProps) {
  const fullUrl = `${SITE}${canonical}`
  const fullImage = ogImage.startsWith('http') ? ogImage : `${SITE}${ogImage}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Autaimate" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
