import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

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

const steps = [
  { num: '1', title: 'Open InspectVoice', desc: 'On your iPad, at the site. No login chase, no sync-spinner.' },
  { num: '2', title: 'Walk and dictate', desc: 'Describe each defect as you find it — equipment, fault, severity, standard clause.' },
  { num: '3', title: 'AI extracts', desc: 'Voice becomes structured data. Fields populate. Nothing is retyped.' },
  { num: '4', title: 'Photos attach', desc: 'Each image binds to the defect it belongs to. No scrolling through camera roll later.' },
  { num: '5', title: 'PDF on-device', desc: 'Inspection finishes, report is ready. Email it before you leave the site.' },
]

const audiences = [
  {
    title: 'UK playground inspection companies',
    desc: 'Independent inspection businesses covering parish councils, schools, housing associations and private sites. Consistency across inspectors, fewer evening write-ups, more sites per week.',
  },
  {
    title: 'Local authority inspection teams',
    desc: 'In-house teams covering routine and operational inspections across council play areas and public spaces. Audit-ready documentation, comparable year-on-year records, standard templates across the whole team.',
  },
  {
    title: 'Public space asset managers',
    desc: 'Benches, bins, shelters, outdoor gym equipment, skate parks — InspectVoice handles any inspectable public asset, not just play equipment. One platform across a portfolio.',
  },
  {
    title: 'Active in the field, not in beta',
    desc: 'Currently in live use with a UK inspection company in Cornwall — real inspectors, real sites, real weather. Not a proof-of-concept waiting for its first customer.',
  },
]

const faqs = [
  {
    q: 'Is it really offline-first or is that marketing?',
    a: 'It\'s genuine. A full inspection — every defect, every photo, every note — captures without a signal. The PDF generates on-device. Nothing is lost if the site has no 4G. Data syncs back to your account when you\'re back in range.',
  },
  {
    q: 'Which standards does InspectVoice support?',
    a: 'Primarily BS EN 1176 for play equipment and related public space assets. The AI understands the clauses, the defect classifications and the inspection terminology. If your inspections cite other standards, we can train the AI on those too.',
  },
  {
    q: 'How does the AI defect extraction work?',
    a: 'You dictate normally — "module six, cracked weld on the upright support, classified as major, clause 4.2.8.2." The AI pulls out the equipment, the fault, the location, the severity and the clause, and populates the structured form. You review before the report generates.',
  },
  {
    q: 'Which devices does it run on?',
    a: 'It\'s a PWA, so any modern iPad or Android tablet. Also runs on laptops and desktops for office review. No app store install — add it to the home screen and it behaves like a native app.',
  },
  {
    q: 'How much does it cost compared to the legacy platforms?',
    a: 'Roughly a third of what the established name charges. Monthly billing, no annual lock-in. For the precise figure, the pricing sits on the InspectVoice site where it\'s easier to keep current.',
  },
  {
    q: 'Can multiple inspectors use it across a team?',
    a: 'Yes — multi-inspector accounts are supported, with each inspector capturing on their own device and the data aggregating in the central account. Consistency across the team without asking everyone to use the same notebook format.',
  },
]

export default function InspectVoicePage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'InspectVoice',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description:
        'Offline-first PWA for BS EN 1176 playground and public space asset inspections. Voice-driven defect capture, AI extraction, on-device PDF generation. Built for UK inspection companies and local authorities.',
      url: 'https://inspectvoice.co.uk',
      publisher: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autaimate.com/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://autaimate.com/#products' },
        { '@type': 'ListItem', position: 3, name: 'InspectVoice', item: 'https://autaimate.com/products/inspectvoice' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="InspectVoice | Offline-First BS EN 1176 Playground Inspection PWA"
        description="Voice-driven BS EN 1176 inspection software for UK playground inspection companies and local authorities. Works offline, AI extracts defect data, PDFs generate on-device. Roughly a third the cost of legacy platforms. No lock-in."
        canonical="/products/inspectvoice"
        keywords="playground inspection software UK, BS EN 1176 inspection app, offline playground inspection software, voice inspection app, RPII inspection software, public space inspection software, iPad playground inspection app, play inspection company alternative"
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
            <li><Link to="/#products" className="hover:text-orange-500">Products</Link></li>
            <li>/</li>
            <li className="text-white/70">InspectVoice</li>
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
            InspectVoice is an offline-first PWA for playground and public space asset inspections. Voice-driven defect capture, AI that extracts structured data from what you said, and BS EN 1176-compliant PDF reports generated on-device. Built for inspection companies and local authorities that work in real weather.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://inspectvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open InspectVoice
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
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
              Built by people who understand that inspectors work where signal doesn\'t reach and deadlines don\'t wait.
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
            {steps.map((s) => (
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
            {audiences.map((a) => (
              <div key={a.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-violet-400 mb-2">{a.title}</h3>
                <p className="text-white/60 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-violet-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            The inspection ends. The paperwork does too.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            More sites in a day. Less admin in a week. Built in the UK for inspectors who work where the signal doesn\'t reach.
          </p>
          <a href="https://inspectvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open InspectVoice
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
