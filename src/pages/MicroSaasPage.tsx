import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import MicroSaasContent from '../components/MicroSaasContent'

/**
 * SEO wrapper page for /micro-saas route
 * Implements all 15 points of the Autaimate SEO Achievement Framework
 */
export default function MicroSaasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pageUrl = 'https://autaimate.com/micro-saas'
  const ogImage = 'https://autaimate.com/og-micro-saas-builds.jpg'
  const siteName = 'Autaimate'
  const authorName = 'Autaimate'
  const pageTitle = 'Custom Micro-SaaS Builds in 4 Weeks | From £8,500 | Autaimate'
  const pageDescription = 'Get a fully deployed micro-SaaS product built in 4 weeks. 11+ products shipped across 11 industries. React, TypeScript, Railway. Full code ownership. Fixed price from £8,500.'

  // Quick Answer Box content (120-160 chars) — Point 14
  const quickAnswer = 'Autaimate builds custom micro-SaaS products in 4 weeks from £8,500. 11+ products shipped. Full code ownership. React + TypeScript + Railway.'

  // JSON-LD Structured Data — Point 11 (all 8 schema types)
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://autaimate.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Micro-SaaS Builds',
            'item': pageUrl
          }
        ]
      },
      // 2. SoftwareApplication (represents the service/product)
      {
        '@type': 'SoftwareApplication',
        'name': 'Autaimate Micro-SaaS Build Service',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'AggregateOffer',
          'lowPrice': '8500',
          'highPrice': '18500',
          'priceCurrency': 'GBP',
          'offerCount': 3
        },
        'creator': {
          '@type': 'Organization',
          'name': 'Autaimate'
        },
        'description': 'Custom micro-SaaS products built in 4 weeks using React, TypeScript, and Railway. Full code ownership included.'
      },
      // 3. FAQPage — Point 13
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do I know you can build something for my industry?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Autaimate has built products for shooting clubs, architects, laboratories, construction, care homes, and AI chatbots across 11 different industries. The key is that you have the domain expertise — Autaimate understands the workflow and builds the tool.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What if I want changes after handover?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You own the code completely. You can hire any developer to make changes, keep Autaimate on a maintenance retainer (£500–£1,500/month), or make simple changes yourself through the GitHub web interface.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What if the project takes longer than 4 weeks?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The fixed price includes reasonable scope. If requirements change mid-project, timeline and cost adjustments are discussed. Autaimate has delivered 11 projects and knows how to scope correctly.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I need technical knowledge to work with Autaimate?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Everything is explained in plain English. You need to know your business problem, not how to code. All maintenance is done through web interfaces — GitHub for files, Railway for deployment, SmartSuite for data.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you guarantee my idea will work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Autaimate builds the tool, but market validation is the client\'s responsibility. Week 1 validation helps identify red flags, but the client knows their market best. Autaimate builds the tool — clients validate the business.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens if I am not happy with the result?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Weekly check-ins during the build phase ensure you see progress and give feedback continuously. By handoff, there should be no surprises. If something is not right, it is fixed before final delivery.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What tech stack do Autaimate products use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'All products are built with React 18, TypeScript, Vite, and Tailwind CSS for the frontend. Backend uses SmartSuite or Node.js. Hosting on Railway with GitHub for code management. Optional integrations include Stripe, Clerk authentication, Twilio, and WhatsApp.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much does a micro-SaaS build cost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fixed pricing: Basic (simple tools) from £8,500, Standard (multi-feature apps) from £12,500, Premium (complex platforms with integrations) from £18,500. Payment terms are 50% upfront, 50% on delivery. Optional maintenance retainers from £500/month.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I need to use a terminal or command line?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Everything is managed through web interfaces: edit files directly in the GitHub web interface, Railway deploys automatically when changes are saved, and SmartSuite handles data management. Everything is visual and accessible.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can Autaimate sign an NDA?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Autaimate is happy to sign a standard NDA before the discovery call.'
            }
          }
        ]
      },
      // 4. HowTo
      {
        '@type': 'HowTo',
        'name': 'How to Get a Custom Micro-SaaS Product Built',
        'description': 'A 5-week process to go from idea to deployed micro-SaaS product with full code ownership.',
        'totalTime': 'P35D',
        'estimatedCost': {
          '@type': 'MonetaryAmount',
          'currency': 'GBP',
          'value': '8500-18500'
        },
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Book a Discovery Call',
            'text': 'Schedule a 30-minute call to discuss your business, the specific problem, required features, and which pricing tier makes sense.'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Receive a Proposal',
            'text': 'Within 24 hours you receive specific deliverables, timeline, and a fixed price quote. Payment terms: 50% upfront, 50% on delivery.'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Validation and Planning (Week 1)',
            'text': '2-hour kickoff call to understand your business, spec out features (must-haves vs nice-to-haves), and validate the build is achievable in 4 weeks.'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Building Phase (Weeks 2-4)',
            'text': 'MVP built using Claude AI with clean React/TypeScript code. Weekly 30-minute check-ins to show progress and incorporate feedback.'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Handoff and Training (Week 5)',
            'text': 'Receive live deployed app on Railway, full GitHub repository ownership, complete documentation, and 1-hour training walkthrough.'
          }
        ]
      },
      // 5. Article
      {
        '@type': 'Article',
        'headline': pageTitle,
        'description': pageDescription,
        'author': {
          '@type': 'Organization',
          'name': authorName,
          'url': 'https://autaimate.com'
        },
        'publisher': {
          '@type': 'Organization',
          'name': siteName,
          'url': 'https://autaimate.com'
        },
        'datePublished': '2026-01-15',
        'dateModified': '2026-02-08',
        'mainEntityOfPage': pageUrl,
        'image': ogImage
      },
      // 6. Organization
      {
        '@type': 'Organization',
        'name': 'Autaimate',
        'url': 'https://autaimate.com',
        'description': 'Automation consulting and custom micro-SaaS development for UK businesses. Specialising in construction, trades, property, and regulated industries.',
        'foundingDate': '2023',
        'areaServed': {
          '@type': 'Country',
          'name': 'United Kingdom'
        },
        'knowsAbout': [
          'Micro-SaaS Development',
          'React Development',
          'TypeScript',
          'UK Business Automation',
          'Construction Technology',
          'Trade Industry Software',
          'AI-Assisted Development'
        ],
        'sameAs': [
          'https://autaimate.com'
        ]
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
          'url': 'https://autaimate.com'
        },
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.hero h1', '.hero-sub', '.quick-answer']
        },
        'significantLink': [
          'https://shootsync.co.uk',
          'https://approv.co.uk',
          'https://cranequote.co.uk',
          'https://clearproof.co.uk',
          'https://leadfortress.co.uk',
          'https://autoreplychat.com',
          'https://app.snaglog.co.uk',
          'https://detailrecon.co.uk'
        ]
      },
      // 8. DefinedTermSet
      {
        '@type': 'DefinedTermSet',
        'name': 'Micro-SaaS Development Terms',
        'hasDefinedTerm': [
          {
            '@type': 'DefinedTerm',
            'name': 'Micro-SaaS',
            'description': 'A small, focused Software as a Service product targeting a specific niche market or solving a particular business problem.'
          },
          {
            '@type': 'DefinedTerm',
            'name': 'MVP',
            'description': 'Minimum Viable Product — the simplest version of a product with enough features to validate the concept with real users.'
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Full Code Ownership',
            'description': 'The client receives complete access to all source code, GitHub repository, and documentation with no vendor lock-in.'
          },
          {
            '@type': 'DefinedTerm',
            'name': 'Railway Deployment',
            'description': 'A cloud hosting platform that automatically builds and deploys applications from GitHub repositories without requiring terminal access.'
          }
        ]
      }
    ]
  }

  return (
    <>
      <Helmet>
        {/* ═══ Points 1-5: Core Meta Tags ═══ */}

        {/* Point 1: Title Tag (55-60 chars) */}
        <title>{pageTitle}</title>

        {/* Point 2: Meta Description (150-160 chars) */}
        <meta
          name="description"
          content={pageDescription}
        />

        {/* Point 3: Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Point 4: Robots Meta */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Point 5: Viewport Meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />

        {/* ═══ Points 6-10: Open Graph & Social ═══ */}

        {/* Point 6: OG Title */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />

        {/* Point 7: OG Description */}
        <meta property="og:description" content={pageDescription} />

        {/* Point 8: OG Image (1200x630px) */}
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Autaimate Micro-SaaS Build Service — 11+ products shipped across 11 industries" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_GB" />

        {/* Point 9: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Point 10: Author & Brand (E-E-A-T signals) */}
        <meta name="author" content={authorName} />
        <meta name="publisher" content={siteName} />
        <meta name="copyright" content={`© 2026 ${siteName}`} />
        <link rel="author" href="https://autaimate.com" />

        {/* ═══ Point 11: JSON-LD Structured Data (all 8 schemas) ═══ */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Additional SEO signals */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <html lang="en-GB" />
      </Helmet>

      {/* Point 14: Quick Answer Box (hidden visually, accessible to crawlers) */}
      <div className="quick-answer sr-only" aria-hidden="false">
        {quickAnswer}
      </div>

      {/* Point 12: Content structure rendered in component (H1 unique, H2-H4 hierarchy, 2500+ words) */}
      {/* Point 13: FAQ blocks with schema (10 FAQs above) */}
      {/* Point 15: Internal linking handled in component */}
      <MicroSaasContent />
    </>
  )
}
