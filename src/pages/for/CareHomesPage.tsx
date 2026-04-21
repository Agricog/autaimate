import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const careProducts = [
  {
    name: 'EquipSafety',
    desc: 'QR-code equipment safety for care homes. Multilingual instructions, training records, CQC-ready audit trail.',
    href: 'https://equipsafety.co.uk',
    external: true,
    accent: 'text-pink-400',
  },
  {
    name: 'ClearProof',
    desc: 'Multilingual H&S comprehension verification. Prove that staff — including agency and international — actually understood the safety brief.',
    href: 'https://clearproof.co.uk',
    external: true,
    accent: 'text-lime-400',
  },
]

const problems = [
  {
    title: 'CQC audits that arrive when they arrive.',
    desc: 'When an inspector asks for the evidence, "it was on a sheet somewhere" does not pass. You need an audit trail you can produce on demand — not assemble retrospectively.',
  },
  {
    title: 'Multilingual staff, English-only paperwork.',
    desc: 'Your staff may come from a dozen countries. Your equipment manuals, safety briefings and induction paperwork are in English. Signatures on forms they couldn\'t fully read are not safety — they\'re a liability.',
  },
  {
    title: 'Agency staff, different every shift.',
    desc: 'A new agency carer walks in. By the time they leave, they\'ve used a hoist, a profiling bed, a stand-aid — equipment they may or may not have been trained on. Proving they were briefed, in a language they understood, is the difference between compliant and exposed.',
  },
  {
    title: 'Paper records that don\'t survive a coffee.',
    desc: 'Training records in a ring-binder, safety checks on clipboards, incident reports in a drawer. Paper is where compliance goes to die — and where CQC findings come from.',
  },
]

const customBuildFeatures = [
  'Fixed price. Scoped around your setting, not a generic care platform.',
  'Typically live in 4 weeks.',
  'Data Protection Act and GDPR compliant from day one — essential for care settings.',
  'Encryption at rest, role-based access, full audit logging.',
  'Multilingual by design, not as a plug-in afterthought.',
  'Integrates with your existing rota, HR and incident reporting.',
]

export default function ForCareHomesPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Care Home Automation Software & CQC Compliance Tools',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Custom automation and compliance software for UK care homes',
      description:
        'CQC-aware automation tools and fixed-price custom software for UK care homes, domiciliary care providers and supported living services.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK care home operators and CQC-regulated providers',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Care sector software by Autaimate',
      itemListElement: careProducts.map((p, i) => ({
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
        { '@type': 'ListItem', position: 2, name: 'For Care Homes', item: 'https://autaimate.com/for/care-homes' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Care Home Software UK | CQC Compliance Automation | Autaimate"
        description="Automation software and custom-built compliance tools for UK care homes. Multilingual equipment safety, CQC-ready audit trails, and fixed-price custom builds in 4 weeks. Built for the UK care sector."
        canonical="/for/care-homes"
        keywords="care home software UK, CQC compliance software, care home automation, CQC equipment safety app, multilingual care home software, care sector automation UK, care home audit trail software, custom care home software UK, domiciliary care software"
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
            <li className="text-white/70">For Care Homes</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-pink-500/15 border border-pink-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-pink-400 rounded-full pulse-dot" />
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-wider">UK Care Sector · CQC</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Compliance software that makes CQC inspections{' '}
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-orange-400 bg-clip-text text-transparent">a formality.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Multilingual equipment safety, training audit trails, and custom automation built for UK care homes, domiciliary care and supported living. Your next inspection should be proof of compliance — not a scramble to assemble it.
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
              Where care home compliance <span className="text-orange-500">breaks down.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Not because managers aren't trying — because the tools are wrong.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-pink-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products for care homes */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Ready-made tools <span className="text-orange-500">for care settings.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Two of our products are built specifically for the CQC-regulated care sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careProducts.map((p) => {
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
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-pink-500/[0.06] hover:border-pink-500/30 transition-all"
                >
                  {Inner}
                </a>
              ) : (
                <Link
                  key={p.name}
                  to={p.href}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-pink-500/[0.06] hover:border-pink-500/30 transition-all"
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
              Or build something <span className="text-orange-500">for your setting.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Care providers have processes shaped by residents, staff mix and regulator history — generic platforms flatten all of that. We build around the specifics. Fixed price, clear scope, you own the code.
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
            Evidence-led compliance. Built for UK care.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            When the inspector asks, you answer with data — not a sinking feeling.
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
