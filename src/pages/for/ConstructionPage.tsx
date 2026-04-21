import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const constructionProducts = [
  {
    name: 'TradeCalcs',
    desc: 'Free BS 7671 calculators for UK electricians. Cable sizing, voltage drop, Zs.',
    href: '/products/tradecalcs',
    external: false,
    accent: 'text-yellow-400',
  },
  {
    name: 'CertVoice',
    desc: 'Voice-first EICR, EIC and Minor Works certificates. Speak it, sign it.',
    href: '/products/certvoice',
    external: false,
    accent: 'text-rose-400',
  },
  {
    name: 'TradGo',
    desc: 'AI agent that catches missed calls, WhatsApp and web chat enquiries in your voice. 14-day free trial.',
    href: '/products/tradgo',
    external: false,
    accent: 'text-amber-400',
  },
  {
    name: 'SnagLog',
    desc: 'AI snagging reports for site handover, new builds and end-of-tenancy.',
    href: '/products/snaglog',
    external: false,
    accent: 'text-teal-400',
  },
  {
    name: 'WorkProof',
    desc: 'GPS-locked, time-stamped, tamper-proof photo evidence for electricians.',
    href: 'https://workproof.co.uk',
    external: true,
    accent: 'text-cyan-400',
  },
  {
    name: 'LeadFortress',
    desc: 'Six-channel lead capture for trades. Phone, SMS, WhatsApp, web in one inbox.',
    href: 'https://leadfortress.co.uk',
    external: true,
    accent: 'text-orange-400',
  },
  {
    name: 'CraneQuote',
    desc: 'Crane hire calculators. Sizing, hire costs, contract comparison, project budgets.',
    href: 'https://cranequote.co.uk',
    external: true,
    accent: 'text-amber-400',
  },
  {
    name: 'InspectVoice',
    desc: 'Voice-to-report for playground inspectors. BS EN 1176-compliant, offline-first.',
    href: '/products/inspectvoice',
    external: false,
    accent: 'text-violet-400',
  },
  {
    name: 'ClearProof',
    desc: 'Multilingual H&S comprehension verification. Prove understanding, not just signatures.',
    href: 'https://clearproof.co.uk',
    external: true,
    accent: 'text-lime-400',
  },
]

const problems = [
  {
    title: 'Paperwork that eats the evening.',
    desc: 'You finished the job at 4pm. You finished typing it up at 9pm. Certificates, reports, quotes, compliance — the admin tail on every job is longer than the job itself.',
  },
  {
    title: 'Software built for office workers.',
    desc: 'You\'re not at a desk. You\'re in a loft. In a trench. Up a ladder. Every construction app designed by someone who\'s never been on a site treats site workers as an afterthought.',
  },
  {
    title: 'Enterprise pricing for SMB pain.',
    desc: 'The serious construction software vendors want £500 a month and a six-month onboarding. You\'ve got three vans and a subcontractor — you need tools priced for that reality.',
  },
  {
    title: 'Compliance without an audit trail.',
    desc: 'BS 7671, CDM, CQC, CHAS, SMAS, CSCS — the acronyms stack up. When something goes wrong, the question is whether you can prove what you did, when you did it, and who saw it.',
  },
]

const commissionFeatures = [
  'Fixed price. Clear scope. No time-and-materials meter running.',
  'Typically live in 4 weeks from kick-off.',
  'You own the code and the product — not a licence we can revoke.',
  'Secure, modern infrastructure — not legacy PHP from a template shop.',
  'GDPR, auth, encryption and audit trails baked in from day one.',
  'Integrates with SmartSuite, Twilio, WhatsApp, Stripe, Clerk, what you already use.',
]

export default function ForConstructionPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Construction Automation Software for UK Trades',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Niche SaaS products for UK construction and trades',
      description:
        'A portfolio of niche SaaS products built by Autaimate for UK construction, trades and site-based businesses — with new products commissioned when an industry has a gap the existing tools don\'t cover.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK construction and trades businesses',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Construction products by Autaimate',
      itemListElement: constructionProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.external ? p.href : `https://autaimate.com${p.href}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autaimate.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Construction', item: 'https://autaimate.com/for/construction' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Construction Software UK | Niche Products for Trades & Site | Autaimate"
        description="Niche SaaS products for UK construction, trades and site-based businesses — BS 7671 calculators, voice-first certification, snagging, missed-call AI, lead capture, photo evidence. Built by people who've been on the tools."
        canonical="/for/construction"
        keywords="construction software UK, software for UK trades, construction SaaS UK, site management software UK, electrician software UK, trades automation UK, construction compliance software, UK construction tech, trades app UK"
        schemas={schemas}
      />
      <Layout>
        <div className="cosmic-bg" />
        <div className="stars" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/40">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li>/</li>
            <li className="text-white/70">For Construction</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-orange-500/15 border border-orange-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full pulse-dot" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">UK Construction & Trades</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Niche software built by people{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">who\'ve been on the tools.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Nine Autaimate products serve UK construction and trades — BS 7671 calculators, voice-first certification, missed-call AI, snagging, crane hire, playground inspection, photo evidence, lead capture and multilingual H&S. Every one started as a specific problem from a specific business. 40 years of construction experience behind the portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              Browse the products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#commission" className="btn-secondary">Commission the next one</a>
          </div>
        </section>

        {/* The problems */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              What slows UK construction businesses <span className="text-orange-500">down.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We\'ve lived it. Every product in the portfolio exists because one of these problems bit hard enough to build the solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-orange-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products for construction */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Products built <span className="text-orange-500">for the trade.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Nine niche products across calculations, certification, reporting, lead capture, inspection and evidence. Each one solves a specific problem — none of them try to be everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionProducts.map((p) => {
              const Inner = (
                <>
                  <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-3 ${p.accent}`}>{p.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </>
              )
              return p.external ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.04] hover:border-orange-500/30 transition-all"
                >
                  {Inner}
                </a>
              ) : (
                <Link
                  key={p.name}
                  to={p.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.04] hover:border-orange-500/30 transition-all"
                >
                  {Inner}
                </Link>
              )
            })}
          </div>
        </section>

        {/* Commission the next one */}
        <section id="commission" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Every product here started as <span className="text-orange-500">one customer\'s problem.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              TradeCalcs. SnagLog. CertVoice. TradGo. WorkProof. InspectVoice. Every product in the Autaimate portfolio started as a specific gap a UK business asked us to close — and became a niche SaaS product that serves an industry. If your operation has a gap the existing tools don\'t cover, that gap could be the next product we build.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 lg:p-12 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              {commissionFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/micro-saas" className="btn-primary">
              How a new product gets built
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/#contact" className="btn-secondary">Talk to us</Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            Built in the UK. For UK construction.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            No offshore build teams. No generic SaaS. Just niche products that understand what you do.
          </p>
          <Link to="/#contact" className="btn-primary">
            Start a conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </section>
      </Layout>
    </>
  )
}
