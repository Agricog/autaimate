import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const playgroundProducts = [
  {
    name: 'InspectVoice',
    desc: 'Offline-first PWA for playground and public space asset inspections. Voice dictation on-site, AI extracts structured defect data, BS EN 1176-compliant PDF generated on-device — before you\'re back in the van.',
    href: 'https://inspectvoice.co.uk',
    external: true,
    accent: 'text-violet-400',
  },
]

const problems = [
  {
    title: 'Write-ups that take longer than the inspection.',
    desc: 'You walked the site. Photographed the faults. Noted the defects. Two hours on-site, four hours that evening typing it up, cross-referencing BS EN 1176 clauses, formatting photos, drafting recommendations. The paperwork is the job — and the job is twice as long as it looks.',
  },
  {
    title: 'Signal drops and the notebook gets wet.',
    desc: 'Routine and operational inspections happen in real weather and real fields. Half the time there\'s no 4G. Any "cloud-first" platform that needs connectivity to record a defect has made your day harder, not easier.',
  },
  {
    title: 'Reports that don\'t cite the standard.',
    desc: 'When a local authority or insurer reviews an inspection, they look for the clauses. "Impact attenuation non-compliant" means nothing without "BS EN 1176 clause 4.2". Inspections that don\'t cite the standards properly get picked apart.',
  },
  {
    title: 'Legacy software priced like you run a council.',
    desc: 'The established inspection platforms charge what councils can afford — not what an independent inspection company or single LA team should pay. Annual contracts, enterprise pricing, training fees for software that still expects a desk.',
  },
]

const differentiators = [
  {
    title: 'Offline-first, genuinely.',
    desc: 'Full inspection capture with zero connectivity. Works in the middle of a field, in a school playground without WiFi, on any iPad or Android tablet. Syncs when it gets a signal. No "please connect to continue."',
  },
  {
    title: 'PDF generated on-device.',
    desc: 'The moment the inspection is complete, the report is ready. No server round-trip. No queue behind other inspectors. Walk to the van, email the client, drive to the next site.',
  },
  {
    title: 'AI that understands a defect.',
    desc: 'Voice dictation is turned into structured defect data — equipment type, location, nature of fault, BS EN clause, severity — not a paragraph of transcription you then have to fill in forms from.',
  },
  {
    title: 'Roughly a third the price.',
    desc: 'Compared to the legacy players, InspectVoice is priced around a third of what you\'d expect. Monthly flexibility. No annual lock-in. Cancel when you want — because software you keep because you\'re stuck with it is a bad relationship.',
  },
]

const workflowSteps = [
  { num: '1', title: 'Open InspectVoice', desc: 'On your iPad, at the site. No login chase, no sync-spinner.' },
  { num: '2', title: 'Walk and dictate', desc: 'Describe each defect as you find it. Equipment, fault, severity, standard clause.' },
  { num: '3', title: 'AI extracts', desc: 'Voice becomes structured data. Fields populate. Nothing is retyped.' },
  { num: '4', title: 'Photos attach', desc: 'Each image binds to the defect it belongs to. No scrolling through camera roll later.' },
  { num: '5', title: 'PDF on-device', desc: 'Inspection finishes, report is ready. Email it before you leave the site.' },
]

const customBuildFeatures = [
  'Fixed price. Clear scope. No open-ended consultancy fees.',
  'Typically live in 4 weeks.',
  'Shaped around your SOPs, not a generic inspection template.',
  'Role-based access for inspectors, reviewers and client-facing output.',
  'Export formats matched to local authority and contract expectations.',
  'Mobile and tablet-first — built for inspectors on-site, not desks in offices.',
]

export default function ForPlaygroundInspectorsPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Playground & Public Space Asset Inspection Software UK',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Offline-first inspection software and custom automation for UK playground and public space inspection',
      description:
        'BS EN 1176-compliant inspection software for UK playground inspection companies and local authorities. Offline PWA with voice-driven defect capture and on-device PDF generation. Fixed-price custom builds also available.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK playground inspection companies, local authority inspection teams and public space asset managers',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Inspection software by Autaimate',
      itemListElement: playgroundProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.href,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autaimate.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Playground Inspectors', item: 'https://autaimate.com/for/playground-inspectors' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Playground Inspection Software UK | InspectVoice Offline PWA | Autaimate"
        description="Offline-first BS EN 1176 inspection software for UK playground inspection companies and local authorities. Voice-driven defect capture, AI extraction, on-device PDF. Roughly a third the cost of legacy platforms. No annual lock-in."
        canonical="/for/playground-inspectors"
        keywords="playground inspection software UK, BS EN 1176 inspection app, offline playground inspection software, RPII inspection software, voice inspection app, public space inspection software, local authority playground inspection, asset inspection PWA, play inspection company alternative, iPad playground inspection app"
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
            <li className="text-white/70">For Playground Inspectors</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-violet-500/15 border border-violet-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full pulse-dot" />
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-wider">BS EN 1176 · Offline-First · PWA</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Inspection software for UK fields{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-orange-400 bg-clip-text text-transparent">without a 4G signal.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            InspectVoice is an offline-first PWA for playground and public space asset inspections. Voice-driven defect capture, AI that extracts structured data from what you said, and BS EN 1176-compliant PDF reports generated on-device. Built for inspection companies and local authorities that work in real weather, not office lighting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://inspectvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              See InspectVoice
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#custom-build" className="btn-secondary">Build something custom</a>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Monthly pricing · No annual lock-in · Roughly a third the cost of the legacy name
          </p>
        </section>

        {/* Differentiators */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              What makes InspectVoice <span className="text-orange-500">different.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Built by people who understand that inspectors work where signal doesn't reach and deadlines don't wait.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-violet-400 mb-3">{d.title}</h3>
                <p className="text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The problems */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Where inspection companies <span className="text-orange-500">lose the week.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The walk takes a couple of hours. The paperwork takes the rest of the day. Then the next day. Then the weekend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-violet-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Site walk to signed PDF, <span className="text-orange-500">without leaving the site.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Five steps. The whole inspection — including the paperwork — done before the kettle boils back at the office.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {workflowSteps.map((s) => (
              <div key={s.num} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-violet-500/[0.06] hover:border-violet-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-sm font-bold text-violet-400 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Built specifically <span className="text-orange-500">for UK inspection work.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-violet-400 mb-2">UK playground inspection companies</h3>
              <p className="text-white/60 leading-relaxed">
                Independent inspection businesses covering parish councils, schools, housing associations and private sites. Consistency across inspectors, fewer evening write-ups, more sites per week.
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-violet-400 mb-2">Local authority inspection teams</h3>
              <p className="text-white/60 leading-relaxed">
                In-house teams covering routine and operational inspections across council play areas and public spaces. Audit-ready documentation, comparable year-on-year records, standard templates across the whole team.
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-violet-400 mb-2">Public space asset managers</h3>
              <p className="text-white/60 leading-relaxed">
                Benches, bins, shelters, outdoor gym equipment, skate parks — InspectVoice handles any inspectable public asset, not just play equipment. One platform across a portfolio.
              </p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-violet-400 mb-2">Active in the field, not in beta</h3>
              <p className="text-white/60 leading-relaxed">
                Currently in live use with a UK inspection company in Cornwall — real inspectors, real sites, real weather. Not a proof-of-concept waiting for its first customer.
              </p>
            </div>
          </div>
        </section>

        {/* Product callout */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-3xl mx-auto scroll-mt-20">
          <div className="grid gap-6">
            {playgroundProducts.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-violet-500/[0.06] hover:border-violet-500/30 transition-all"
              >
                <h3 className={`font-display text-xl font-bold uppercase tracking-wide mb-3 ${p.accent}`}>{p.name}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Custom build */}
        <section id="custom-build" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Or build something <span className="text-orange-500">for your team.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Larger inspection operations have their own SOPs, their own client reporting formats, their own QA workflows. Off-the-shelf software forces a compromise. We build around your operation instead. Fixed price. You own the code.
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
            The inspection ends. The paperwork does too.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            More sites in a day. Less admin in a week. Built in the UK for inspectors who work where the signal doesn't reach.
          </p>
          <a href="https://inspectvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            See InspectVoice
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
