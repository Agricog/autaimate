import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const faqs = [
  {
    q: 'What is a snagging report?',
    a: 'A snagging report is a written record of defects, incomplete work or quality issues found during a property inspection — typically on new builds, renovation handovers or end-of-tenancy walks. It documents each issue with photos, severity, location and the trade responsible so it can be fixed.',
  },
  {
    q: 'How does SnagLog use AI?',
    a: 'You photograph the defect. The AI identifies what the issue is, categorises severity (major, moderate or minor), assigns it to the right trade, and writes a clean professional description. You get a fully-formatted PDF snagging report in minutes instead of spending an evening typing up your phone notes.',
  },
  {
    q: 'Who uses SnagLog?',
    a: 'Professional snagging inspectors, new-build buyers running their own snag list, landlords documenting end-of-tenancy condition, site managers on handover, and small developers managing punch lists across multiple plots.',
  },
  {
    q: 'Does it work offline on site?',
    a: 'SnagLog is a Progressive Web App optimised for site use. It works on any phone or tablet browser, and you can add it to your home screen. You need connectivity for the AI to process photos, but you can capture a full walk and let the report build as connection returns.',
  },
  {
    q: 'Is the PDF report professional enough to send to a developer?',
    a: 'Yes. The output is a structured PDF with your branding, a property summary, categorised defects, photo evidence, severity ratings and trade assignments. It stands up as a formal record in disputes and handover meetings.',
  },
  {
    q: 'How much does SnagLog cost?',
    a: 'Snagging reports are priced per report, not per subscription. Pay as you go — run one, run a hundred, the cost scales with your workload rather than a monthly fee you waste in quiet months. Pricing details on the live app.',
  },
]

const steps = [
  { num: '1', title: 'Walk the property', desc: 'Open SnagLog on your phone. Photograph defects as you find them — no forms, no typing.' },
  { num: '2', title: 'AI categorises', desc: 'Each photo is analysed. Issue type, severity, and the trade responsible are detected automatically.' },
  { num: '3', title: 'Review the list', desc: 'Scan through the generated entries, add notes where useful, re-order if you want a different walk-through.' },
  { num: '4', title: 'Download the PDF', desc: 'Professional snagging report, ready to send to the developer, landlord, client or solicitor.' },
]

export default function SnagLogPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SnagLog',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description:
        'AI-powered snagging app for UK property inspections. Photograph defects, the AI categorises and writes the report, download the PDF.',
      url: 'https://app.snaglog.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '19.99',
      },
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
        { '@type': 'ListItem', position: 3, name: 'SnagLog', item: 'https://autaimate.com/products/snaglog' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="SnagLog | AI Snagging App for UK Property Inspections"
        description="AI-powered snagging app. Photograph defects, SnagLog categorises severity and trade, and generates a professional PDF snagging report. Built for UK new builds, handovers and tenancy reports."
        canonical="/products/snaglog"
        keywords="snagging app UK, AI snagging report, property snagging software, snagging report app, new build snagging, property inspection app, snagging PDF generator, end of tenancy report app"
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
            <li className="text-white/70">SnagLog</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-teal-500/15 border border-teal-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal-400 rounded-full pulse-dot" />
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">AI Snagging · UK</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Walk the property.{' '}
            <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-orange-400 bg-clip-text text-transparent">The snagging report writes itself.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Photograph a defect. SnagLog's AI identifies the issue, categorises severity, assigns the trade, and drops it into a structured PDF report. What used to be an evening of typing is now done by the time you're back in the van.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.snaglog.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open SnagLog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              How SnagLog <span className="text-orange-500">works.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Four steps. No typing. No template wrestling. No late-night write-ups.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-teal-500/[0.08] hover:border-teal-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-base font-bold text-orange-500 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Built for anyone who walks a property <span className="text-orange-500">and writes it up.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Professional snagging inspectors', desc: 'Run more jobs in a week. The report is done by the time the walk is done.' },
              { title: 'New build buyers', desc: 'Don\'t miss the two-year defect window. Get a builder-grade snagging list you can send straight to the developer.' },
              { title: 'Landlords and letting agents', desc: 'End-of-tenancy condition reports with photo evidence, severity and timestamps — deposit disputes become simple.' },
              { title: 'Site managers and developers', desc: 'Handover punch lists and plot-by-plot snag tracking without spreadsheets or WhatsApp chaos.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-teal-400 mb-2">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
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
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-teal-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-teal-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            Get your evenings back.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Pay per report. No subscription. The job's done when the job's done.
          </p>
          <a href="https://app.snaglog.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open SnagLog
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
