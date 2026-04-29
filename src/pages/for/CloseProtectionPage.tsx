import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const cpProducts = [
  {
    name: 'DetailRecon',
    desc: 'AI-generated advance reconnaissance reports. Upload venue and route photos, get a professional PDF recon pack in minutes.',
    href: 'https://detailrecon.com',
    external: true,
  },
]

const problems = [
  {
    title: 'Advance recon that takes the afternoon.',
    desc: 'Site visit, photos, notes, back to the hotel, three hours in a document template. By the time the recon pack is ready for the principal, it\'s cost more than the assignment is worth.',
  },
  {
    title: 'Reports that look different every operator.',
    desc: 'One CPO uses a Word template from 2018. Another uses Google Docs. Another writes it in Notes. Clients notice. Tender panels notice. It costs you contracts.',
  },
  {
    title: 'Photos in one place, notes in another.',
    desc: 'A thousand phone photos per job. Notes scattered across apps. Stitching the advance pack together is the slowest part of the work — and nobody wants to pay for slow.',
  },
  {
    title: 'Generic security software doesn\'t get CP.',
    desc: 'Corporate security platforms are built for guarding, not advance work. The workflow, the outputs, the language — none of it matches how close protection actually operates.',
  },
]

const customBuildFeatures = [
  'Fixed price. Clear scope. No bloat.',
  'Typically live in 4 weeks.',
  'Discreet hosting infrastructure — no promotional noise on client-facing outputs.',
  'Encryption at rest, role-based access for team deployments.',
  'Export formats that match your existing SOPs and client expectations.',
  'Built around your operating pattern, not a generic security template.',
]

export default function ForCloseProtectionPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Close Protection Software & Custom Builds',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Custom automation software for close protection operators and companies',
      description:
        'Reconnaissance automation tools and fixed-price custom software for close protection operatives, executive protection teams and CP companies.',
      audience: {
        '@type': 'Audience',
        audienceType: 'Close protection operators, security consultants and CP companies',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Close protection software by Autaimate',
      itemListElement: cpProducts.map((p, i) => ({
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
        { '@type': 'ListItem', position: 2, name: 'For Close Protection', item: 'https://autaimate.com/for/close-protection' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Close Protection Software | AI Recon & Custom Builds | Autaimate"
        description="Reconnaissance automation and custom-built software for close protection operators and companies. AI advance recon reports in minutes, plus fixed-price custom builds in 4 weeks. Built for CP, not corporate guarding."
        canonical="/for/close-protection"
        keywords="close protection software, CP recon software, advance planning app, bodyguard report software, security reconnaissance app UK, custom close protection software UK, CP advance report automation, executive protection software, close protection recon app"
        schemas={schemas}
      />
      <Layout>
        <div className="cosmic-bg" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate">
            <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-ink">For Close Protection</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-teal-soft border border-teal/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal rounded-full pulse-dot" />
            <span className="text-teal text-sm font-semibold uppercase tracking-wider">Close Protection · Advance Work</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight text-ink">
            Software for close protection{' '}
            <span className="text-teal">not corporate guarding.</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate mb-10 max-w-3xl mx-auto leading-relaxed">
            AI-powered advance reconnaissance reports in minutes instead of hours. Plus fixed-price custom builds for CP companies that need their own operating tools — SOP-matched, discreet, and built around the way your team actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#custom-build" className="btn-primary">
              Build something custom
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#products" className="btn-secondary">See DetailRecon</a>
          </div>
        </section>

        {/* The problems */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              Where CP work <span className="text-teal">loses hours.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              The principal doesn't see the advance work. But they do see the paperwork — and how fast you move to the next assignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white border border-sand rounded-2xl shadow-card">
                <h3 className="font-display text-lg font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-slate leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products for CP */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-3xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              Built specifically <span className="text-teal">for CP.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              One tool, one job, done properly.
            </p>
          </div>

          <div className="grid gap-6">
            {cpProducts.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white border border-sand rounded-2xl shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all"
              >
                <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-3 text-teal">{p.name}</h3>
                <p className="text-slate leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Custom build */}
        <section id="custom-build" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 tracking-tight text-ink">
              Or build something <span className="text-teal">for your operation.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto leading-relaxed">
              Every CP company has its own SOPs, its own client expectations, its own way of running advances and briefings. Generic software won't wrap around that. Custom builds from Autaimate will — fixed price, fixed scope, and your code stays yours.
            </p>
          </div>

          <div className="bg-white border border-sand rounded-3xl shadow-card p-8 lg:p-12 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              {customBuildFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-ink leading-relaxed">{f}</span>
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
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-ink">
            More advance work. Less admin.
          </h2>
          <p className="text-slate text-lg mb-10 max-w-xl mx-auto">
            Get the paperwork down to minutes so the rest of the day can be spent on the job.
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
