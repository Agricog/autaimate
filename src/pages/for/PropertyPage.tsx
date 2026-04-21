import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const propertyProducts = [
  {
    name: 'SnagLog',
    desc: 'AI snagging reports for new builds, handovers and end-of-tenancy condition reports.',
    href: '/products/snaglog',
    external: false,
    accent: 'text-teal-400',
  },
  {
    name: 'Approv',
    desc: 'One-click client approvals via email. Landlords, vendors and committees sign off without another login.',
    href: 'https://approv.co.uk',
    external: true,
    accent: 'text-sky-400',
  },
  {
    name: 'LeadFortress',
    desc: 'Capture valuation requests, viewing enquiries and tenancy leads across phone, web, SMS and WhatsApp — in one inbox.',
    href: 'https://leadfortress.co.uk',
    external: true,
    accent: 'text-orange-400',
  },
  {
    name: 'ClearProof',
    desc: 'Multilingual tenant and staff safety briefings with comprehension verification. Proof they understood, not just signed.',
    href: 'https://clearproof.co.uk',
    external: true,
    accent: 'text-lime-400',
  },
]

const problems = [
  {
    title: 'Tenancy admin that eats the week.',
    desc: 'Inventories, check-ins, check-outs, deposit disputes, EICR scheduling, gas safety chasing, referencing. Every tenancy carries a paperwork tail that compounds across a portfolio.',
  },
  {
    title: 'Deposit disputes without evidence.',
    desc: 'When it comes to the deposit scheme, the landlord or agent with photo-timestamped, audit-trailed condition reports wins. Everyone else loses — regardless of what actually happened.',
  },
  {
    title: 'Ten systems, none talking to each other.',
    desc: 'CRM in one place, inventories in another, maintenance requests in a third, compliance reminders in a spreadsheet. Data re-entry costs hours every week and introduces errors.',
  },
  {
    title: 'Compliance dates that catch you out.',
    desc: 'EICRs expire. Gas certificates expire. EPCs expire. Managing that across fifty, a hundred, or three hundred units manually is how fines happen.',
  },
]

const customBuildFeatures = [
  'Fixed price. Clear scope. You know the final cost before we start.',
  'Typically live in 4 weeks from kick-off.',
  'You own the code. No licence lock-in.',
  'Secure, GDPR-compliant infrastructure from day one.',
  'Integrates with SmartSuite, Twilio, WhatsApp, Stripe, Clerk, your existing CRM.',
  'Built by people who understand UK property, not US SaaS.',
]

export default function ForPropertyPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Property Automation Software & Custom Builds',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Custom automation software for UK property and lettings',
      description:
        'Ready-to-use automation tools and fixed-price custom software builds for UK landlords, letting agents, property managers and developers.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK property, lettings and estate agency businesses',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Property software by Autaimate',
      itemListElement: propertyProducts.map((p, i) => ({
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
        { '@type': 'ListItem', position: 2, name: 'For Property', item: 'https://autaimate.com/for/property' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Property Automation Software UK | Custom Builds for Letting Agents & Landlords | Autaimate"
        description="Automation software and custom-built tools for UK landlords, letting agents, property managers and developers. Ready-made apps for inventories, approvals and compliance — plus fixed-price custom builds in 4 weeks."
        canonical="/for/property"
        keywords="property management automation UK, letting agent software UK, custom property software, property inspection app UK, landlord software UK, bespoke letting agent software, property compliance automation UK, UK property tech, estate agent automation"
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
            <li className="text-white/70">For Property</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-sky-500/15 border border-sky-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-sky-400 rounded-full pulse-dot" />
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-wider">UK Property & Lettings</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Automation for UK property businesses{' '}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-orange-400 bg-clip-text text-transparent">that actually runs a portfolio.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ready-made apps for inventories, condition reports, client approvals and lead capture — plus fixed-price custom builds for whatever your operation actually needs. Built for UK landlords, letting agents and property managers, not American property-tech imports.
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
              Where UK property operations <span className="text-orange-500">bleed time.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The problems scale with your portfolio. The admin doesn't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-sky-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products for property */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Ready-made tools <span className="text-orange-500">for property.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Four of our products apply directly to landlords, letting agents and property managers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyProducts.map((p) => {
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
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-sky-500/[0.06] hover:border-sky-500/30 transition-all"
                >
                  {Inner}
                </a>
              ) : (
                <Link
                  key={p.name}
                  to={p.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-sky-500/[0.06] hover:border-sky-500/30 transition-all"
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
              The ready-made tools don't quite fit? That usually means you've built a way of working worth protecting. We wrap custom automation around your process on a fixed-price basis, and you own the code when it ships.
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
            Made in the UK, for UK property.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Not a US property-tech platform with the serial numbers filed off. Real software for the way the UK market actually works.
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
