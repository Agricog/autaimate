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
    desc: 'Voice-to-report for playground inspectors. BS EN 1176/1177 compliant.',
    href: 'https://inspectvoice.co.uk',
    external: true,
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

const customBuildFeatures = [
  'Fixed price. Clear scope. No £40k surprise invoices.',
  'Typically live in 4 weeks from kick-off.',
  'You own the code. Not us. Not a licence.',
  'Built on secure, modern infrastructure — not legacy PHP.',
  'GDPR, auth, encryption and audit trails baked in from day one.',
  'Integrates with SmartSuite, Twilio, WhatsApp, Stripe, Clerk.',
]

export default function ForConstructionPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Construction Automation Software & Custom Builds',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      serviceType: 'Custom automation software for UK construction and trades',
      description:
        'Ready-to-use automation tools and fixed-price custom software builds for UK construction, trades and regulated industries.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK construction and trades businesses',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Construction software by Autaimate',
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
        title="Construction Automation Software UK | Custom Builds for Trades | Autaimate"
        description="Automation software and custom-built tools for UK construction, trades and site businesses. Ready-made apps for electricians, inspectors and site teams — plus fixed-price custom builds in 4 weeks."
        canonical="/for/construction"
        keywords="construction automation software UK, software for UK construction trades, custom automation construction, trades software UK, construction SaaS UK, site management software UK, electrician software UK, construction compliance software, fixed price construction software, bespoke construction app UK"
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
            Automation software built by people{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">who've been on the tools.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ready-made apps for UK electricians, site managers, inspectors and trades — plus fixed-price custom builds for the automation your business actually needs. 40 years of construction experience behind every tool.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#custom-build" className="btn-primary">
              Build something custom
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#products" className="btn-secondary">Browse the tools</a>
          </div>
        </section>

        {/* The problems */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              What's slowing UK construction businesses <span className="text-orange-500">down.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We've lived it. We build software for it.
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
              Ready-made tools <span className="text-orange-500">for the trade.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Eight of our products are built specifically for UK construction and trades. Use what fits. Skip what doesn't.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Custom build */}
        <section id="custom-build" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Or build something <span className="text-orange-500">bespoke.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              None of the ready-made tools fit exactly? Good — that's usually the sign of a business doing something worth automating. We build custom construction software on a fixed-price, fixed-scope basis. You own the code when it ships.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 lg:p-12 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              {customBuildFeatures.map((f) => (
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
              See how we build
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
            No offshore build teams. No generic SaaS. Just software that understands what you do.
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
