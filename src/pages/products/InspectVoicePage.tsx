import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Mic, WifiOff, FileText, Zap, Shield, CheckCircle2, ChevronRight, PoundSterling, Tablet, MapPin } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const FAQS = [
  {
    q: 'What is InspectVoice?',
    a: 'InspectVoice is a BS EN 1176-compliant playground and public space asset inspection platform for UK inspection companies and local authorities. Inspectors dictate defects on site — the platform uses AI to extract structured data from the audio and generates professional PDF inspection reports automatically.',
  },
  {
    q: 'Is InspectVoice offline-first?',
    a: 'Yes. InspectVoice is a progressive web app built offline-first. Inspectors can dictate defects, tag photos, and draft reports in fields with no mobile signal. Work syncs and finalises automatically when a connection returns.',
  },
  {
    q: 'Which standards does InspectVoice support?',
    a: 'InspectVoice is built around BS EN 1176 — the European Standard for playground equipment and surfacing. Report templates align with the structure required by the standard, and the platform supports the full inspection regime: routine visual, operational, and annual main inspections.',
  },
  {
    q: 'Can InspectVoice be used for non-playground assets?',
    a: 'Yes. While BS EN 1176 playground inspection is the core use case, InspectVoice also handles public space assets — benches, bins, shelters, outdoor gym equipment, skate parks, and similar street furniture. Any asset where an inspector records condition and defects can be covered.',
  },
  {
    q: 'How does voice-to-defect extraction work?',
    a: 'The inspector dictates what they see as they see it: equipment, component, defect, severity, and recommended action. InspectVoice\'s AI recognises BS EN 1176 inspection terminology and structures the dictation into defect records against the correct asset. The inspector reviews the extracted data before the PDF is generated.',
  },
  {
    q: 'Does the PDF generate on device?',
    a: 'Yes. When the inspection is complete, InspectVoice generates the PDF report on the iPad or phone itself — before the inspector leaves the site. No waiting for a cloud service to process, no back-office admin bottleneck.',
  },
  {
    q: 'How much does InspectVoice cost compared to legacy platforms?',
    a: 'InspectVoice is priced at roughly a third of the cost of the legacy name in UK playground inspection software, with no annual lock-in. Monthly flexibility means you pay only while you need it.',
  },
  {
    q: 'Who is currently using InspectVoice?',
    a: 'InspectVoice is in live use with a UK inspection company based in Cornwall, with inspectors using iPads in the field for routine playground inspection work.',
  },
  {
    q: 'What hardware do inspectors need?',
    a: 'A modern iPad or Android tablet is ideal because of the larger screen for photo review and report layout. InspectVoice also runs on phones for walk-round inspections. No specialist hardware, no dedicated scanners, no clunky ruggedised devices required.',
  },
  {
    q: 'How are photos handled?',
    a: 'Photos are taken directly in the app, tagged against the relevant defect or asset, and embedded in the PDF report at the correct positions. Photos are stored offline first and synced to secure UK-region storage when online.',
  },
  {
    q: 'Is the data secure and GDPR-compliant?',
    a: 'Yes. Data is stored in UK/EU region infrastructure, encrypted in transit and at rest. Local authority clients often have specific data-handling requirements and InspectVoice accommodates those as standard.',
  },
  {
    q: 'Can I switch from another inspection platform?',
    a: 'Yes. We support CSV import of existing asset registers from most legacy platforms and can assist with initial setup. Migration is usually completed within a day for a typical inspection portfolio.',
  },
]

const SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://autaimate.com/#organization',
      name: 'Autaimate',
      url: 'https://autaimate.com',
      logo: 'https://autaimate.com/logo.png',
      sameAs: ['https://www.linkedin.com/company/autaimate'],
      email: 'hello@autaimate.com',
      telephone: '+44-7501-439406',
      founder: {
        '@type': 'Person',
        name: 'Mick',
        jobTitle: 'Founder',
        description: '40 years in UK construction and trades before founding Autaimate',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://autaimate.com/products/inspectvoice#webpage',
      url: 'https://autaimate.com/products/inspectvoice',
      name: 'InspectVoice | BS EN 1176 Playground Inspection App | Autaimate',
      description: 'InspectVoice is a voice-first BS EN 1176 playground inspection PWA. Offline-ready, AI-powered defect extraction, on-device PDF — at roughly a third the cost of the legacy platform.',
      isPartOf: { '@id': 'https://autaimate.com/#website' },
      inLanguage: 'en-GB',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['#quick-answer', 'h1'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autaimate.com/' },
        { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://autaimate.com/#products' },
        { '@type': 'ListItem', position: 3, name: 'InspectVoice', item: 'https://autaimate.com/products/inspectvoice' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'InspectVoice',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description: 'Voice-first BS EN 1176 playground and public space asset inspection platform for UK inspection companies and local authorities.',
      url: 'https://inspectvoice.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        description: 'Monthly subscription, no annual lock-in. Priced at approximately one-third of the legacy UK competitor.',
      },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      featureList: [
        'Voice dictation of defects',
        'AI-powered defect extraction',
        'Offline-first PWA operation',
        'On-device PDF generation',
        'BS EN 1176 aligned report templates',
        'Photo capture and tagging',
        'Asset register management',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to run a BS EN 1176 playground inspection with InspectVoice',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Load the site', text: 'Open the asset register for the playground or public space. Works offline — no signal needed.' },
        { '@type': 'HowToStep', position: 2, name: 'Dictate as you walk', text: 'Speak what you see — equipment, component, defect, severity. InspectVoice recognises BS EN 1176 terminology.' },
        { '@type': 'HowToStep', position: 3, name: 'Photograph defects', text: 'Tap to take a photo; it auto-tags to the current dictated defect and the correct asset.' },
        { '@type': 'HowToStep', position: 4, name: 'Review the extract', text: 'Structured defect records appear in a form. Correct, reorder, or add actions before sign-off.' },
        { '@type': 'HowToStep', position: 5, name: 'Generate the PDF', text: 'On-device PDF generation — the report is ready before you leave the site.' },
        { '@type': 'HowToStep', position: 6, name: 'Sync when back online', text: 'Finalised reports sync to the asset register and are available to the inspection company or local authority office.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/products/inspectvoice#article',
      headline: 'InspectVoice: Voice-First Playground Inspection That Works in a Field Without a Signal',
      description: 'Why offline-first design, AI defect extraction, and on-device PDF generation make InspectVoice the first real alternative to the legacy UK playground inspection platform.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-03-10',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/products/inspectvoice#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'InspectVoice Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'BS EN 1176', description: 'The European Standard for playground equipment and surfacing, adopted by BSI — governs inspection of UK playgrounds.' },
        { '@type': 'DefinedTerm', name: 'RPII', description: 'Register of Play Inspectors International — the UK certification body for playground inspectors.' },
        { '@type': 'DefinedTerm', name: 'Routine visual inspection', description: 'Frequent inspection (often weekly) to identify obvious hazards from vandalism, wear, or weather.' },
        { '@type': 'DefinedTerm', name: 'Operational inspection', description: 'Monthly or quarterly inspection to check equipment operation and wear.' },
        { '@type': 'DefinedTerm', name: 'Annual main inspection', description: 'Detailed yearly inspection establishing overall safety of equipment, foundations, and surfacing.' },
        { '@type': 'DefinedTerm', name: 'PWA', description: 'Progressive Web App — installs to a device home screen and works offline without an app store.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function InspectVoicePage() {
  return (
    <Layout>
      <SEO
        title="InspectVoice | BS EN 1176 Playground Inspection App | Autaimate"
        description="Voice-first BS EN 1176 playground inspection PWA. Offline-ready, AI defect extraction, on-device PDF — at roughly a third the cost of the legacy platform."
        canonical="https://autaimate.com/products/inspectvoice"
        ogImage="https://autaimate.com/og-image.jpg"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(SCHEMA_GRAPH)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-8 text-sm text-white/60">
        <ol className="flex items-center gap-2">
          <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li><Link to="/#products" className="hover:text-orange-400">Products</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-white/90">InspectVoice</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-6">
          <Mic className="w-3 h-3" /> BS EN 1176 · Offline-first · On-device PDF
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Playground inspection that works in a <span className="text-orange-400">field without a signal.</span>
        </h1>
        <p className="text-xl text-white/75 max-w-3xl mb-8">
          InspectVoice is a voice-first BS EN 1176 inspection platform for UK inspection companies and local authority teams. Dictate defects on site, let AI structure the data, generate the PDF on the iPad before you leave — at roughly a third the cost of the legacy name, with no annual lock-in.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://inspectvoice.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            Open InspectVoice <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
            Book a demo
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-orange-500/10 border border-white/10">
          <div className="text-xs uppercase tracking-wider text-emerald-300 mb-2">Quick Answer</div>
          <p className="text-lg text-white/90">
            InspectVoice is a UK voice-first BS EN 1176 playground inspection app. Offline-first, AI-powered defect extraction, on-device PDF generation — built for UK inspection companies and local authorities, at about a third the cost of the legacy platform.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The post-inspection admin problem</h2>
        <div className="grid md:grid-cols-2 gap-8 text-white/75">
          <div>
            <p className="mb-4">
              Ask any RPII inspector where their day really goes. It's not walking playgrounds — that's the job they trained for. It's the hours at the laptop afterwards, transcribing notebook scribbles, matching photos to defects, formatting reports to the template the local authority wants, and chasing sync on a clunky cloud tool that was never built for fieldwork.
            </p>
            <p>
              A normal day ends up half inspection, half paperwork. For a busy inspection company that's a massive constraint on how many sites get covered in a week.
            </p>
          </div>
          <div>
            <p className="mb-4">
              The legacy UK platform for this work is expensive, desktop-biased, and locked into annual contracts. It wasn't designed around the reality of a tablet in a field with no 4G signal. Inspectors work around it, not with it.
            </p>
            <p>
              InspectVoice was built to close the gap. Voice dictation on the iPad as you walk the site, AI that turns what you said into structured defect records, and an on-device PDF ready to issue before you leave. The admin happens during the inspection, not after it.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How InspectVoice works</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: '1', t: 'Load the site', d: 'Pull up the asset register. Works fully offline.' },
            { n: '2', t: 'Dictate as you walk', d: 'Speak defects as you see them. BS EN 1176 terms recognised.' },
            { n: '3', t: 'Extract structured data', d: 'AI turns dictation into defect records against the correct asset.' },
            { n: '4', t: 'Generate the PDF', d: 'On-device PDF before you leave the site.' },
            { n: '5', t: 'Sync when online', d: 'Report syncs to the register. Office has it in seconds.' },
          ].map((s) => (
            <div key={s.n} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-orange-400 font-bold text-2xl mb-2">{s.n}</div>
              <div className="font-semibold mb-2">{s.t}</div>
              <p className="text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What makes InspectVoice different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { i: WifiOff, t: 'Offline-first PWA', d: 'Most inspection platforms are cloud-only. A rural park with no 4G breaks them. InspectVoice was designed around the opposite assumption: assume no signal, and work fine.' },
            { i: Mic, t: 'Voice to structured data', d: 'Not just transcription. Dictation is parsed into defects, severities, asset references, and recommended actions — the stuff that actually makes it into the report.' },
            { i: FileText, t: 'On-device PDF generation', d: 'The final PDF is built on the device, not in a cloud queue. You leave the site with the inspection closed, not with "report pending."' },
            { i: PoundSterling, t: 'Roughly a third of legacy pricing', d: 'Priced for the independent inspection firm and the small local authority team, not for head-office procurement. No annual lock-in.' },
            { i: Tablet, t: 'Built for iPads', d: 'Designed for the device inspectors actually carry in the field, not repurposed from a desktop web app.' },
            { i: Shield, t: 'UK data residency', d: 'Data stored in UK/EU infrastructure, encrypted in transit and at rest. Local authority data handling requirements met.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <f.i className="w-6 h-6 text-orange-400 mb-3" />
              <div className="font-semibold text-lg mb-2">{f.t}</div>
              <p className="text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Who InspectVoice is built for</h2>
        <div className="grid md:grid-cols-3 gap-6 text-white/75">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">UK playground inspection companies</div>
            <p>Independent firms covering routine, operational, and annual main inspections for councils, schools, and housing associations. Fieldwork efficiency is the game — InspectVoice adds hours back to every inspector's week.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Local authority play teams</div>
            <p>In-house inspection teams managing council-owned play assets. Standardised reports, an audit trail that stands up to scrutiny, and pricing that won't draw awkward questions from procurement.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Public space asset managers</div>
            <p>Benches, bins, shelters, outdoor gyms, skate parks, park furniture — anywhere a council or estate needs defect records and condition reports, InspectVoice handles the workflow.</p>
          </div>
        </div>
      </section>

      {/* Competitive positioning */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The first serious alternative to the legacy platform</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            UK playground inspection software has been dominated by a single expensive incumbent for years. It's cloud-only. It's desktop-biased. It locks firms into annual contracts. And because there was no real alternative, inspection companies put up with it.
          </p>
          <p>
            InspectVoice is the alternative. Designed ground-up around the iPad, offline fields, and the voice-first workflow modern inspectors want. Priced at about a third of the cost. Monthly billing, no lock-in. Switch in, try it for a month, see if it fits. If it doesn't, walk away.
          </p>
          <p>
            We're not going to spend this page slagging off a competitor by name — it's not our style. But if you're reading this because you've been looking for any alternative to the existing option, you've found it.
          </p>
        </div>
      </section>

      {/* The inspection regime */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built around the full BS EN 1176 inspection regime</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            BS EN 1176 requires three types of inspection: routine visual checks (often weekly), operational inspections (monthly to quarterly), and an annual main inspection that goes into equipment, foundations, and surfacing in depth. Each has its own report template, its own level of detail, and its own audit expectation.
          </p>
          <p>
            InspectVoice handles all three. Switch the inspection type when you load the site and the report template adjusts — a weekly visual is brief and focused on obvious hazards; the annual main is comprehensive and carries structural observations. The voice dictation adapts accordingly, prompting for the level of detail required by the inspection type rather than forcing the inspector to remember what goes where.
          </p>
          <p>
            For inspection companies running multiple regimes across a portfolio of sites, this matters. One tool covers every job type — you don't need different software for weekly visuals and annual mains. And because the asset register is shared across inspection types, a defect flagged on a weekly visual stays visible on the next operational inspection so it doesn't slip through.
          </p>
        </div>
      </section>

      {/* Fieldwork efficiency */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The fieldwork efficiency argument</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            Talk to any inspection company owner and they'll tell you the constraint on the business is inspector-hours. More inspections per inspector per week means more revenue without hiring. And the quickest way to get more inspections out of the same team is to remove the admin bottleneck that currently eats the afternoon.
          </p>
          <p>
            Inspectors using InspectVoice typically add one to two extra sites a day compared to the old notebook-plus-desktop-software workflow. Over a year across a team of five, that's a significant capacity uplift without touching headcount. The tool pays for itself many times over in recovered inspection hours.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl md:text-3xl font-bold">In live use in Cornwall</h2>
          </div>
          <p className="text-white/75">
            InspectVoice is currently in live use with a UK inspection company in Cornwall, with inspectors working daily from iPads in the field. That active pilot is where the voice model, offline reliability, and PDF output have been hardened against real fieldwork — not against a spec sheet.
          </p>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Built by a studio that builds voice-first tools for trades</h2>
          <p className="text-white/75 mb-4">
            InspectVoice is built by Autaimate. It's one of a family of voice-first products in the portfolio — its sibling is <Link to="/products/certvoice" className="text-orange-400 underline">CertVoice</Link>, which applies the same voice-to-report pattern to BS 7671 electrical certification. Both products share the same principles: dictate on site, structure the data, PDF before you leave.
          </p>
          <p className="text-white/75 mb-4">
            Our founder spent 40 years in UK construction and trades. The reason these products fit fieldwork is that they were designed by someone who has done fieldwork, not by a developer designing from a requirements document.
          </p>
          <p className="text-white/60 text-sm">
            — Mick, Autaimate founder. <a href="https://www.linkedin.com/company/autaimate" className="underline hover:text-orange-400">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently asked questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 rounded-xl bg-white/5 border border-white/10">
              <summary className="cursor-pointer font-semibold flex items-center justify-between">
                {f.q}
                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition" />
              </summary>
              <p className="mt-3 text-white/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">Where to go next</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/products/certvoice" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">CertVoice</div>
            <p className="text-sm text-white/70">The sibling voice-first product — BS 7671 electrical certificates for UK sparkies.</p>
          </Link>
          <Link to="/products/snaglog" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">SnagLog</div>
            <p className="text-sm text-white/70">AI-powered snagging reports — the property inspection cousin to InspectVoice.</p>
          </Link>
          <Link to="/for/construction" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Software for UK construction & trades</div>
            <p className="text-sm text-white/70">Every Autaimate product built for the built environment, in one place.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Commission a niche product</div>
            <p className="text-sm text-white/70">Got a fieldwork process that needs its own tool? See how a new product gets built.</p>
          </Link>
          <Link to="/products/tradgo" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">TradGo</div>
            <p className="text-sm text-white/70">AI agent for catching missed calls and enquiries while you're out on site.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-orange-500/20 border border-white/10 text-center">
          <Zap className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Put the evenings back where they belong</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            No more laptop nights writing up playgrounds. Dictate, review, PDF, leave the site with the job closed. At a third the cost of the legacy platform.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://inspectvoice.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
              Open InspectVoice <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
