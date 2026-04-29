import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import MicroSaasContent from '../components/MicroSaasContent'

/**
 * SEO wrapper page for /micro-saas route
 * Product-house framing: commission a niche SaaS product
 * Implements all 15 points of the Autaimate SEO v3 framework
 */
export default function MicroSaasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pageUrl = 'https://autaimate.com/micro-saas'
  const ogImage = 'https://autaimate.com/og-micro-saas-builds.jpg'
  const siteName = 'Autaimate'
  const authorName = 'Autaimate'

  // Point 1: Title 55-60 chars, Primary | Secondary | Brand format
  const pageTitle = 'Commission a Niche UK SaaS Product | ~4 Weeks | Autaimate'

  // Point 2: Meta description 150-160 chars
  const pageDescription = 'Commission a niche UK SaaS product with Autaimate. Fixed-price from £8,500. Typically 4 weeks. You own the code. 18+ products shipped across UK industries.'

  // Point 14: Quick Answer 120-160 chars, voice-search ready
  const quickAnswer = 'Autaimate commissions niche SaaS products for UK industries. Fixed-price from £8,500. Typically 4 weeks. You own the code. 18+ products shipped.'

  // Point 11: JSON-LD structured data — all 8 required schema types
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://autaimate.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Commission a Product', 'item': pageUrl },
        ],
      },
      // 2. SoftwareApplication (the commissioning service)
      {
        '@type': 'SoftwareApplication',
        'name': 'Autaimate Product Commissioning',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'AggregateOffer',
          'lowPrice': '8500',
          'highPrice': '18500',
          'priceCurrency': 'GBP',
          'offerCount': 3,
        },
        'creator': {
          '@type': 'Organization',
          'name': 'Autaimate',
          'url': 'https://autaimate.com',
        },
        'description': 'Niche SaaS products commissioned for UK industries. Fixed-price, typically four weeks, built on React + TypeScript + Railway. Full code ownership included.',
      },
      // 3. FAQPage (Point 13)
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does "commission a product" actually mean?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It means your problem becomes the next Autaimate product. You describe a specific industry workflow that needs a tool. Autaimate builds it, fixed price, typically around four weeks. You get a live product, full code ownership, and the autonomy to run, extend, or hand off to any developer. That is the same pattern that produced TradeCalcs, SnagLog, CertVoice, InspectVoice, TradGo, SafeEat, and the rest of the portfolio.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Is this a consultancy engagement or a product?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A product. Autaimate is a product studio, not a consultancy. You walk away with working software — code, deployment, documentation, the lot — not with a report or a set of recommendations. You own it and can do what you want with it afterwards.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How do I know you can build something for my industry?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Autaimate has shipped products for shooting syndicates, architects, laboratories, construction, care homes, electricians, equestrians, playground inspectors, close protection operatives, independent restaurants, trades contractors, and more. If we can learn those industries, we can learn yours. The domain expertise is what you bring — Autaimate understands the workflow and builds the tool.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What if I want changes after handover?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You own the code completely. You can hire any developer to make changes, keep Autaimate on a maintenance retainer (£500–£1,500/month), or make simple changes yourself through the GitHub web interface.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What if the project takes longer than the agreed window?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The fixed price covers the agreed scope. If requirements change mid-project, timeline and cost adjustments are discussed before any extra work begins. Scope is locked during Week 1 validation specifically to avoid this. No scope creep, no hourly billing surprises.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Do I need technical knowledge to work with Autaimate?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Everything is explained in plain English. You need to know your industry and your problem, not how to code. All maintenance is done through web interfaces — GitHub for files, Railway for deployment, SmartSuite for data. No terminal, no command line.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can you guarantee my idea will work commercially?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Autaimate builds the tool; market validation is your responsibility. Week 1 validation helps identify red flags, but you know your market best. Autaimate builds the product — you validate the business.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What tech stack do Autaimate products use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Every product is built with React 18, TypeScript, Vite, and Tailwind CSS on the frontend. Backend uses SmartSuite or Node.js depending on requirements. Hosting on Railway with GitHub for code management. Optional integrations include Stripe, Clerk authentication, Twilio, and WhatsApp Business API.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How much does a commission cost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fixed pricing for a clearly defined scope. Three tiers: Basic from £8,500 for one focused workflow, Standard from £12,500 for multi-feature products, and Premium from £18,500 for complex platforms with integrations. Payment terms are 50% upfront, 50% on delivery. Anything outside the agreed scope is quoted separately. Optional maintenance retainers from £500/month.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Do I need to use a terminal or command line?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Everything is managed through web interfaces: edit files directly in the GitHub web interface, Railway deploys automatically when changes are saved, and SmartSuite handles data management. Everything is visual and accessible.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can Autaimate sign an NDA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Autaimate is happy to sign a standard NDA before the discovery call.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Will my commissioned product be resold to other customers?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Your commissioned product is yours — the code, the IP, and the right to run or resell it belong to you. Autaimate may, with your permission, generalise the lessons learned and build related products for other industries, but your specific product and its codebase remain your exclusive asset.',
            },
          },
        ],
      },
      // 4. HowTo
      {
        '@type': 'HowTo',
        'name': 'How to commission a niche SaaS product with Autaimate',
        'description': 'A 5-week process from first call to deployed product with full code ownership.',
        'totalTime': 'P35D',
        'estimatedCost': {
          '@type': 'MonetaryAmount',
          'currency': 'GBP',
          'value': '8500-18500',
        },
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Book a Discovery Call',
            'text': 'Schedule a 30-minute call to discuss your industry, the specific problem, the features required, and which pricing tier makes sense.',
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Receive a Proposal',
            'text': 'Within 24 hours you receive specific deliverables, timeline, and a fixed price quote. Payment terms: 50% upfront, 50% on delivery.',
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Validation and Planning (Week 1)',
            'text': 'Kickoff call to understand your industry, spec out features (must-haves vs nice-to-haves), and validate the build is deliverable in the agreed window.',
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Building Phase (Weeks 2-4)',
            'text': 'The product is built using Claude AI with clean React/TypeScript code. Weekly 30-minute check-ins show progress and incorporate feedback.',
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Handover and Training (Week 5)',
            'text': 'Live deployed product on Railway, full GitHub repository ownership, complete documentation, and a 1-hour training walkthrough.',
          },
        ],
      },
      // 5. Article
      {
        '@type': 'Article',
        'headline': pageTitle,
        'description': pageDescription,
        'author': {
          '@type': 'Organization',
          'name': authorName,
          'url': 'https://autaimate.com',
        },
        'publisher': {
          '@type': 'Organization',
          'name': siteName,
          'url': 'https://autaimate.com',
        },
        'datePublished': '2026-01-15',
        'dateModified': '2026-04-21',
        'mainEntityOfPage': pageUrl,
        'image': ogImage,
      },
      // 6. Organization
      {
        '@type': 'Organization',
        'name': 'Autaimate',
        'url': 'https://autaimate.com',
        'logo': 'https://autaimate.com/logo.png',
        'description': 'UK product studio building niche SaaS for industries that generic software forgets. Commissioned builds, fixed-price, full code ownership. Founded by a 40-year construction and trades veteran.',
        'foundingDate': '2023',
        'areaServed': { '@type': 'Country', 'name': 'United Kingdom' },
        'email': 'hello@autaimate.com',
        'telephone': '+44-7501-439406',
        'founder': {
          '@type': 'Person',
          'name': 'Mick',
          'jobTitle': 'Founder',
          'description': '40 years in UK construction and trades before founding Autaimate',
        },
        'knowsAbout': [
          'Niche SaaS Development',
          'Product Commissioning',
          'React Development',
          'TypeScript',
          'UK Construction Software',
          'Trade Industry Software',
          'AI-Assisted Development',
          'Electrical Certification Software',
          'Playground Inspection Software',
          'Compliance Evidence Tools',
          'Property Inspection Software',
          'Close Protection Software',
          'Hospitality Allergen Software',
        ],
        'sameAs': [
          'https://www.linkedin.com/company/autaimate',
        ],
      },
      // 7. WebPage with Speakable
      {
        '@type': 'WebPage',
        'name': pageTitle,
        'description': pageDescription,
        'url': pageUrl,
        'isPartOf': {
          '@type': 'WebSite',
          'name': siteName,
          'url': 'https://autaimate.com',
        },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['#quick-answer', 'h1'],
        },
        'significantLink': [
          'https://autaimate.com/products/tradecalcs',
          'https://autaimate.com/products/snaglog',
          'https://autaimate.com/products/certvoice',
          'https://autaimate.com/products/tradgo',
          'https://autaimate.com/products/safeeat',
          'https://autaimate.com/products/inspectvoice',
          'https://autaimate.com/products/detailrecon',
          'https://autaimate.com/for/construction',
          'https://autaimate.com/for/property',
          'https://autaimate.com/for/care-homes',
          'https://shootsync.co.uk',
          'https://approv.co.uk',
          'https://cranequote.co.uk',
          'https://clearproof.co.uk',
          'https://leadfortress.co.uk',
          'https://autoreplychat.com',
          'https://workproof.co.uk',
          'https://uktradeapps.co.uk',
        ],
      },
      // 8. DefinedTermSet
      {
        '@type': 'DefinedTermSet',
        'name': 'Product Commissioning Terminology',
        'hasDefinedTerm': [
          {
            '@type': 'DefinedTerm',
            'name': 'Niche SaaS',
            'description': 'A small, focused Software as a Service product targeting a specific industry niche or solving a particular business workflow problem, rather than trying to be an all-in-one platform.',
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Product commission',
            'description': 'A fixed-price, scope-bound engagement where a customer pays for a bespoke SaaS product to be built, with full code ownership transferring on delivery.',
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Product studio',
            'description': 'A studio that ships working products rather than reports or recommendations — as opposed to a consultancy, which delivers advice.',
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Full code ownership',
            'description': 'The client receives complete access to all source code, the GitHub repository, and documentation with no vendor lock-in or ongoing licensing.',
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Fixed-price scope',
            'description': 'A project arrangement where the price, deliverables, and timeline are agreed before work starts. No hourly billing and no scope creep.',
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Railway deployment',
            'description': 'A cloud hosting platform that automatically builds and deploys applications from GitHub repositories without requiring terminal or command-line access.',
          },
        ],
      },
    ],
  }

  return (
    <>
      <Helmet>
        {/* ═══ Points 1-5: Core Meta Tags ═══ */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* ═══ Points 6-9: Open Graph & Twitter ═══ */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Autaimate — commission a niche UK SaaS product" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* ═══ Point 10: Author & E-E-A-T signals ═══ */}
        <meta name="author" content={authorName} />
        <meta name="publisher" content={siteName} />
        <meta name="copyright" content={`© 2026 ${siteName}`} />
        <link rel="author" href="https://autaimate.com" />

        {/* ═══ Point 11: JSON-LD Structured Data (all 8 schemas) ═══ */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Locale signals */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <html lang="en-GB" />
      </Helmet>

      {/* Point 14: Quick Answer — visible, styled, bound to Speakable selector */}
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-0">
        <div
          id="quick-answer"
          className="p-6 rounded-2xl bg-teal-soft border border-teal/20"
        >
          <div className="text-xs uppercase tracking-wider text-teal mb-2 font-semibold">Quick Answer</div>
          <p className="text-lg text-ink">
            {quickAnswer}
          </p>
        </div>
      </div>

      {/* Main page content — all remaining SEO points handled in component */}
      <MicroSaasContent />
    </>
  )
}
