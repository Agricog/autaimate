import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const reconChecks = [
  { title: 'Entry and exit points', desc: 'Primary, secondary and emergency routes identified with line of sight and distance notes.' },
  { title: 'Cover and concealment', desc: 'Natural and constructed cover positions, dead ground, and channelled approaches.' },
  { title: 'Crowd flow and choke points', desc: 'Likely congestion zones, bottlenecks, and movement patterns at expected timing.' },
  { title: 'Lighting conditions', desc: 'Daylight cover, street lighting distribution, dark zones and venue interior lighting quality.' },
  { title: 'Vehicle considerations', desc: 'Drop-off, pickup, parking availability, and turnaround options at the location.' },
  { title: 'Communications coverage', desc: 'Known signal dead zones, radio reach, and comms relay considerations for the detail.' },
]

const steps = [
  { num: '1', title: 'Walk the site', desc: 'Photograph the venue, approach routes, interior, and any points worth flagging.' },
  { num: '2', title: 'Upload the photos', desc: 'Drop them into DetailRecon from your phone, tablet or laptop. No special kit.' },
  { num: '3', title: 'AI analyses', desc: 'Security considerations extracted from each image — line of sight, cover, flow, light.' },
  { num: '4', title: 'PDF generated', desc: 'A professional advance recon pack is produced in minutes — not three hours with a template.' },
  { num: '5', title: 'Send or brief', desc: 'Forward to the principal, the team, or use it in the pre-detail briefing. Done.' },
]

const faqs = [
  {
    q: 'Who is DetailRecon for?',
    a: 'Close protection operators, CP companies, executive protection teams, security consultants and event security professionals doing advance reconnaissance work. Anyone who writes recon packs for clients as part of the job.',
  },
  {
    q: 'What does each report cost?',
    a: '£29.99 per report. Pay as you go — no subscription, no annual contract, no minimum usage. Run one report or a hundred, the cost scales with the work.',
  },
  {
    q: 'What kind of photos work best?',
    a: 'Wide shots of approaches and entry points, interior shots that show sightlines and exit routes, details that would be flagged in a hand-written recon. The AI reads what you\'d read — there\'s no special technique to learn.',
  },
  {
    q: 'Will the reports stand up to client scrutiny?',
    a: 'The output is a structured PDF written in the language of advance work — sections for entry/exit, cover, crowd flow, lighting, vehicles and comms. It looks professional because it reads professionally. If you\'d send your own write-up to a client, this one is ready too.',
  },
  {
    q: 'Does it replace the walk?',
    a: 'No. Nothing replaces being on the ground. DetailRecon replaces the three hours of typing and template wrestling that comes after the walk. You still do the recon. You just stop paying for it with your evening.',
  },
  {
    q: 'How discreet is the software?',
    a: 'Your photos and reports are handled with appropriate discretion. The generated PDFs don\'t carry intrusive branding — they look like your recon pack, not an advertisement. Client-facing work stays client-facing.',
  },
]

export default function DetailReconPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'DetailRecon',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'AI-powered advance reconnaissance reports for close protection. Upload venue and route photos, get a professional recon pack in minutes.',
      url: 'https://detailrecon.com',
      offers: {
        '@type': 'Offer',
        price: '29.99',
        priceCurrency: 'GBP',
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
        { '@type': 'ListItem', position: 3, name: 'DetailRecon', item: 'https://autaimate.com/products/detailrecon' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="DetailRecon | AI Advance Reconnaissance Reports for Close Protection"
        description="Upload venue and route photos. DetailRecon's AI generates a professional advance recon PDF in minutes — entry/exit, cover, crowd flow, lighting. Built for UK close protection operators. £29.99 per report, no subscription."
        canonical="/products/detailrecon"
        keywords="close protection software, CP recon software, advance reconnaissance app, bodyguard recon report, AI security recon, close protection recon app, executive protection software, CP advance planning app, security reconnaissance UK"
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
            <li className="text-white/70">DetailRecon</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-purple-500/15 border border-purple-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-purple-400 rounded-full pulse-dot" />
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">Close Protection · Advance Work</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Advance recon reports{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-400 bg-clip-text text-transparent">in minutes, not hours.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            DetailRecon turns venue and route photos into professional advance reconnaissance PDFs for close protection work. Entry/exit, cover, crowd flow, lighting, comms — all flagged by AI, formatted the way clients expect. £29.99 per report. No subscription.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://detailrecon.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open DetailRecon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>
        </section>

        {/* What gets flagged */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              What a DetailRecon report <span className="text-orange-500">covers.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The same considerations a seasoned CPO would flag on the walk — structured into a report that reads like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reconChecks.map((c) => (
              <div key={c.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-purple-500/[0.06] hover:border-purple-500/30 transition-all">
                <h3 className="font-display text-base font-bold text-purple-400 uppercase tracking-wide mb-2">{c.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              From walk to PDF <span className="text-orange-500">in five steps.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              You still do the recon. The admin is what gets automated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-purple-500/[0.06] hover:border-purple-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-sm font-bold text-purple-400 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
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
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-purple-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-purple-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            More advance work. Less admin.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            £29.99 per report. Pay as you go. Get the paperwork down to minutes so the rest of the day is yours.
          </p>
          <a href="https://detailrecon.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open DetailRecon
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
