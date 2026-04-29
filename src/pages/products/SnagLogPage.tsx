import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const faqs = [
  {
    q: 'What is a snagging report?',
    a: 'A snagging report is a written record of defects, incomplete work or quality issues found during a property inspection — typically on new builds, renovation handovers or end-of-tenancy walks. It documents each issue with photos, severity, location and the trade responsible so it can be fixed, disputed or tracked to resolution.',
  },
  {
    q: 'How does SnagLog use AI?',
    a: 'You photograph the defect. The AI identifies what the issue is, categorises severity (major, moderate or minor), assigns it to the right trade, and writes a clean professional description. You get a fully-formatted PDF snagging report in minutes instead of spending an evening typing up your phone notes. The AI was trained on real UK snagging reports — it recognises the defects a professional inspector would flag.',
  },
  {
    q: 'Who uses SnagLog?',
    a: 'Professional snagging inspectors, new-build buyers running their own snag list, landlords documenting end-of-tenancy condition, site managers on handover, and small developers managing punch lists across multiple plots. Also used by chartered surveyors as a first-pass tool before a more formal inspection.',
  },
  {
    q: 'Does SnagLog work offline on site?',
    a: 'SnagLog is a Progressive Web App optimised for site use. It works on any phone or tablet browser, and you can add it to your home screen. You need connectivity for the AI to process photos, but you can capture a full walk and let the report build as connection returns. The photos are held locally until the AI can process them, so a weak signal does not block the walk.',
  },
  {
    q: 'Is the PDF report professional enough to send to a developer?',
    a: 'Yes. The output is a structured PDF with your branding, a property summary, categorised defects, photo evidence, severity ratings and trade assignments. It stands up as a formal record in disputes and handover meetings. Many professional inspectors use the SnagLog output directly without further editing.',
  },
  {
    q: 'How much does SnagLog cost?',
    a: 'Snagging reports are priced per report, not per subscription. Pay as you go — run one, run a hundred, the cost scales with your workload rather than a monthly fee you waste in quiet months. Typical price is around £19.99 per report. Volume pricing available for commercial inspectors running multiple reports a week.',
  },
  {
    q: 'Can SnagLog handle multi-plot developments?',
    a: 'Yes. For developers tracking punch lists across an estate, you can run a separate report per plot and aggregate them by development. Each report stays under its own address and defect chain so nothing gets mixed up between plots. Site managers use this pattern for tracking handover progress across dozens of units.',
  },
  {
    q: 'What kinds of defects does the AI recognise?',
    a: 'Common UK new-build and property defects: cracked or damaged finishes, paint defects, mis-aligned or damaged fixtures, incomplete trim work, grout and sealant failures, cosmetic damage, mechanical defects on fittings, drainage and waste issues flagged in photos, and structural concerns visible at inspection time. For anything the AI is uncertain about, you can add a free-text note which is included in the report.',
  },
  {
    q: 'How accurate is the AI categorisation?',
    a: 'The AI reliably categorises obvious defect types. Edge cases and unusual issues can be adjusted by you before the PDF is generated — every detected item is editable, and you can reclassify severity, change the assigned trade, or add context. The AI gets you to 90% done in seconds; the remaining 10% is your professional judgement.',
  },
  {
    q: 'Can I customise the PDF layout and branding?',
    a: 'Yes. You can add your logo, business name, contact details, and a header statement. The body of the report follows a consistent structure (property details, summary, defect-by-defect breakdown with photos) — that consistency is part of what makes it stand up as evidence.',
  },
  {
    q: 'How does SnagLog compare to a professional snagging survey?',
    a: 'A professional chartered surveyor doing a full snag survey charges several hundred pounds and delivers a detailed written report. SnagLog is built for the DIY snagger or trade professional who wants to run inspections more often, for less money, with output that still looks professional. Different tools for different jobs.',
  },
  {
    q: 'Does SnagLog store my defect data?',
    a: 'Your reports and photos are stored securely in your account. You can return to past reports, re-download PDFs, and reference historic snag lists. Photos are held in encrypted storage and are never shared with third parties or used for AI training beyond your own account.',
  },
  {
    q: 'Can I export the defect list to another format?',
    a: 'The primary output is PDF for formal use, but the defect list can also be exported as CSV for import into project management tools or developer snag trackers. This is particularly useful for site managers coordinating remediation across multiple trades and plots where another system is already in use for task tracking.',
  },
]

const steps = [
  { num: '1', title: 'Walk the property', desc: 'Open SnagLog on your phone. Photograph defects as you find them. No forms, no typing, no paper.' },
  { num: '2', title: 'AI categorises',    desc: 'Each photo is analysed. Issue type, severity, and the trade responsible are detected automatically.' },
  { num: '3', title: 'Review the list',   desc: 'Scan through the generated entries, add notes where useful, reorder if you want a different walk-through.' },
  { num: '4', title: 'Download the PDF',  desc: 'Professional snagging report, ready to send to the developer, landlord, client or solicitor.' },
]

const audiences = [
  { title: 'Professional snagging inspectors', desc: 'Run more jobs in a week. The report is done by the time the walk is done. What used to take an evening of typing is now finished before you get back to the van. Professional inspectors running SnagLog routinely double their weekly job capacity without cutting quality on reports.' },
  { title: 'New build buyers', desc: 'Do not miss the two-year defect window. Get a builder-grade snagging list you can send straight to the developer — without paying £400 for a professional survey. For most UK new-build buyers, the SnagLog report pays for itself on the first defect the developer fixes that you would otherwise have missed.' },
  { title: 'Landlords and letting agents', desc: 'End-of-tenancy condition reports with photo evidence, severity and timestamps. Deposit disputes become simple, because the evidence was captured at the time and formatted properly. The UK deposit schemes routinely accept photo-timestamped SnagLog reports as supporting evidence in dispute adjudication.' },
  { title: 'Site managers and developers', desc: 'Handover punch lists and plot-by-plot snag tracking without spreadsheets or WhatsApp chaos. Each plot gets its own report, aggregated at the development level for management review. Reduces the post-handover "what did we miss" scramble to near zero.' },
]

const differentiators = [
  {
    title: 'Photos become the report.',
    desc: 'You do not type descriptions, classify severity, or assign trades manually. You point the camera and tap. The AI writes the entry, categorises it, and puts it in the right section of the report. What takes other apps an hour of form-filling takes SnagLog about as long as a walk.',
  },
  {
    title: 'UK-focused, not a translated US app.',
    desc: 'SnagLog knows UK new-build defects, UK trades, UK handover processes, and UK deposit dispute workflows. It is not a US construction app with the imperial units changed. The terminology, the severity definitions, and the trade assignments all reflect how UK property inspections actually work.',
  },
  {
    title: 'Pay per report, not per subscription.',
    desc: 'Run one report in January and eighty in November? You pay for eighty reports in November and one in January. No wasted subscription fees in quiet months. No commitment when you do not need it. No "you only get 10 reports this month" artificial caps.',
  },
  {
    title: 'Output that stands up in disputes.',
    desc: 'The PDF is structured — property summary, defect categories, photo evidence, severity, trade assigned, timestamp. That structure is deliberate. When a report ends up in a deposit dispute, a handover dispute, or a legal process, a clearly-formatted PDF with photo evidence is the version that holds up.',
  },
]

const provenancePoints = [
  { title: 'Built for real handover walks.', desc: 'The defect categories, severity ratings and trade assignments come from real UK inspection reports — not a US construction template. Every interface choice reflects what actually happens on a walk: cold fingers, phone in one hand, bright sun making the screen hard to read.' },
  { title: 'Used daily on UK properties.', desc: 'SnagLog is in active use generating real snagging reports for real UK property inspections. Professional inspectors, new-build buyers and landlords are running live reports through the system every week — the product is not a beta, it is production software earning its keep.' },
  { title: 'UK-hosted and UK-focused.', desc: 'Hosted on UK-friendly infrastructure with UK data residency. Built for UK property conventions, UK trades, and UK deposit scheme requirements. Not a repurposed international app with the wrong defect taxonomy.' },
]

const relatedPages = [
  { title: 'Property & Lettings products', desc: 'All Autaimate products built for UK landlords, letting agents and property managers.', href: '/for/property' },
  { title: 'WorkProof — court-grade photo evidence', desc: 'GPS-locked, time-stamped, tamper-proof evidence packs for compliance and legal use.', href: 'https://workproof.co.uk', external: true },
  { title: 'Approv — one-click client approvals', desc: 'Send snagging reports to landlords or vendors and get approval via email without another login.', href: 'https://approv.co.uk', external: true },
  { title: 'LeadFortress — multi-channel lead capture', desc: 'Catch valuation requests and viewing enquiries across phone, SMS, WhatsApp and web.', href: 'https://leadfortress.co.uk', external: true },
]

export default function SnagLogPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SnagLog',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description: 'AI-powered snagging app for UK property inspections. Photograph defects, AI categorises and writes the report, download the PDF.',
      url: 'https://app.snaglog.co.uk',
      offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '19.99' },
      publisher: { '@type': 'Organization', name: 'Autaimate', url: 'https://autaimate.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Autaimate',
      url: 'https://autaimate.com',
      logo: 'https://autaimate.com/logo.png',
      sameAs: ['https://uk.linkedin.com/in/mickstevenson'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'SnagLog | AI Snagging App for UK Property Inspections | Autaimate',
      description: 'AI-powered snagging app. Photograph defects, SnagLog categorises severity and trade, and generates a professional PDF snagging report. UK-focused.',
      url: 'https://autaimate.com/products/snaglog',
      inLanguage: 'en-GB',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer', 'h1'] },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to generate a snagging report with SnagLog',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Walk the property', text: 'Open SnagLog on your phone and photograph each defect as you find it.' },
        { '@type': 'HowToStep', position: 2, name: 'AI categorises',    text: 'The AI identifies issue type, severity and trade responsible for each photo.' },
        { '@type': 'HowToStep', position: 3, name: 'Review the list',   text: 'Scan through the generated entries, add notes, and reclassify if needed.' },
        { '@type': 'HowToStep', position: 4, name: 'Download the PDF',  text: 'Download the formatted snagging report PDF ready to send or file.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'SnagLog — AI-powered snagging reports for UK property inspections',
      description: 'Photograph defects. The AI writes the snagging report. Built for UK new builds, handovers, and end-of-tenancy walks.',
      author: { '@type': 'Person', name: 'Mick Stevenson', url: 'https://uk.linkedin.com/in/mickstevenson' },
      publisher: { '@type': 'Organization', name: 'Autaimate', logo: { '@type': 'ImageObject', url: 'https://autaimate.com/logo.png' } },
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      mainEntityOfPage: 'https://autaimate.com/products/snaglog',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'SnagLog glossary',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Snagging report', description: 'A structured document of defects, incomplete work or quality issues found during a property inspection.' },
        { '@type': 'DefinedTerm', name: 'Two-year defect window', description: 'The period after a UK new-build handover in which developers are obligated to fix defects. Missing this window leaves the buyer with the bill.' },
        { '@type': 'DefinedTerm', name: 'Punch list', description: 'A construction management term for the remaining items needing completion before sign-off on a development or plot.' },
        { '@type': 'DefinedTerm', name: 'End-of-tenancy condition report', description: 'A documented record of property condition at the end of a tenancy, used to resolve deposit disputes.' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="SnagLog | AI Snagging App for UK Property Inspections | Autaimate"
        description="AI snagging app for UK property. Photograph defects, SnagLog categorises and generates a professional PDF report. New builds, handovers, end-of-tenancy."
        canonical="/products/snaglog"
        keywords="snagging app UK, AI snagging report, property snagging software, snagging report app, new build snagging, property inspection app, snagging PDF generator, end of tenancy report app"
        schemas={schemas}
      />
      <Layout>
        <div className="cosmic-bg" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate">
            <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/#products" className="hover:text-teal transition-colors">Products</Link></li>
            <li>/</li>
            <li className="text-ink">SnagLog</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-teal-soft border border-teal/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-teal rounded-full pulse-dot" />
            <span className="text-teal text-sm font-semibold uppercase tracking-wider">AI Snagging &middot; UK Property</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight text-ink">
            Walk the property.{' '}
            <span className="text-teal">The snagging report writes itself.</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate mb-10 max-w-3xl mx-auto leading-relaxed">
            Photograph a defect. SnagLog\u2019s AI identifies the issue, categorises severity, assigns the trade, and drops it into a structured PDF report. What used to be an evening of typing is now done by the time you are back in the van.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.snaglog.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open SnagLog
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>

          <p className="mt-8 text-sm text-slate">Pay per report &middot; From £19.99 &middot; No subscription</p>
        </section>

        {/* Quick Answer */}
        <section className="px-6 lg:px-12 max-w-4xl mx-auto mb-20">
          <div id="quick-answer" className="bg-teal-soft border border-teal/20 rounded-3xl p-8 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal mb-3">Quick Answer</div>
            <p className="text-lg lg:text-xl text-ink leading-relaxed">
              SnagLog is an AI-powered snagging app for UK property inspections. Photograph defects, the AI writes the report, download a professional PDF. Pay per report, no subscription, from around £19.99.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              How SnagLog <span className="text-teal">works.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Four steps. No typing. No template wrestling. No late-night write-ups.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-8 bg-white border border-sand rounded-2xl shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-base font-bold text-ink uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center text-ink">
            Built for anyone who walks a property <span className="text-teal">and writes it up.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((item) => (
              <div key={item.title} className="p-6 bg-white border border-sand rounded-2xl shadow-card">
                <h3 className="font-display text-lg font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              Why SnagLog works <span className="text-teal">differently.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Most property inspection apps make you do the typing. SnagLog does the typing for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8 bg-white border border-sand rounded-2xl shadow-card">
                <h3 className="font-display text-lg font-bold text-ink mb-3">{d.title}</h3>
                <p className="text-slate leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Provenance */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              Built for UK property, <span className="text-teal">by the UK.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {provenancePoints.map((p) => (
              <div key={p.title} className="p-6 bg-white border border-sand rounded-2xl shadow-card">
                <h3 className="font-display text-base font-bold text-teal mb-3">{p.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-slate mt-8">
            Written by <a href="https://uk.linkedin.com/in/mickstevenson" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark underline underline-offset-4">Mick Stevenson</a>, Founder of Autaimate.
          </div>
        </section>

        {/* Types of snags */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">
              The kinds of defects SnagLog <span className="text-teal">picks up.</span>
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              A run-down of what UK property inspectors actually find on walks, and how SnagLog categorises each one for the report.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Cosmetic and finish defects</h3>
              <p className="text-slate text-sm leading-relaxed">Paint defects, scuffed skirting, damaged trim, uneven fillers, mis-matched edges. The most common new-build findings. SnagLog classifies these as minor unless the affected area is substantial, in which case severity auto-escalates to moderate.</p>
            </div>
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Sealant and grout failures</h3>
              <p className="text-slate text-sm leading-relaxed">Failed bathroom sealant, cracked grout, gaps around fittings. Moderate severity by default — these are functional failures rather than cosmetic, and they need remediation to prevent water ingress. Assigned to the relevant trade (tiler, plumber or general builder) based on context.</p>
            </div>
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Fixture and fitting issues</h3>
              <p className="text-slate text-sm leading-relaxed">Mis-aligned doors, drawers that do not close, loose taps, incorrectly installed sockets. These get assigned to the relevant trade (joiner, plumber, electrician) with severity depending on whether it is a quick adjustment or a full refit.</p>
            </div>
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Structural and mechanical concerns</h3>
              <p className="text-slate text-sm leading-relaxed">Cracks wider than cosmetic, movement at junctions, damp patches, suspected drainage issues. Major severity by default — these are the findings that need urgent attention and SnagLog flags them for escalation in the report summary.</p>
            </div>
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Incomplete work</h3>
              <p className="text-slate text-sm leading-relaxed">Missing tiles, unfilled holes, unpainted areas, missing trims. Common on handover walks where the site has been rushed. Categorised as the original trade responsible and reported as punch-list items for completion.</p>
            </div>
            <div className="p-6 bg-white border border-sand rounded-2xl shadow-card">
              <h3 className="font-display text-base font-bold text-ink mb-3">Cleaning and handover readiness</h3>
              <p className="text-slate text-sm leading-relaxed">Protective film left on, building dust not cleared, adhesive residue on windows. Minor category but frequent on new-build handover. SnagLog groups these under a single "handover preparation" heading in the report so the builder can address them in one pass.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center text-ink">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 bg-white border border-sand rounded-2xl shadow-card hover:border-teal/40 transition-colors">
                <summary className="font-display text-base font-bold text-ink cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-teal text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight text-ink">Where to go <span className="text-teal">next</span></h2>
          </div>
          <div className="space-y-3">
            {relatedPages.map((r) => {
              const inner = (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink mb-1 group-hover:text-teal transition-colors">{r.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{r.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate group-hover:text-teal flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )
              const className = 'block p-6 bg-white border border-sand rounded-2xl shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all group'
              return r.external
                ? <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
                : <Link key={r.href} to={r.href} className={className}>{inner}</Link>
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-ink">
            Get your evenings back.
          </h2>
          <p className="text-slate text-lg mb-10 max-w-xl mx-auto">
            Pay per report. No subscription. The job is done when the job is done.
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
