import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, FileText, Shield, Eye, MapPin, CheckCircle2, ChevronRight, PoundSterling, Clock, AlertTriangle } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const FAQS = [
  {
    q: 'What is DetailRecon?',
    a: 'DetailRecon is an AI-powered reconnaissance reporting tool for UK close protection operatives and security teams. Upload advance photos of a venue, route, or location and DetailRecon generates a professional recon PDF in minutes — covering entry and exit points, cover positions, crowd flow, lighting, and other operational considerations.',
  },
  {
    q: 'Who is DetailRecon built for?',
    a: 'Close protection operatives, executive protection teams, security consultancies, event security leads, and private investigators running advance work. Anyone who currently spends hours writing up recon reports from site photos will get hours of their week back.',
  },
  {
    q: 'How much does DetailRecon cost?',
    a: 'DetailRecon is priced per report at £29.99. No subscription, no monthly fee, no lock-in. You pay only for the recons you actually need.',
  },
  {
    q: 'What kind of analysis does the AI perform?',
    a: 'DetailRecon analyses uploaded photos for operational features relevant to close protection: entry and exit points, natural cover and concealment positions, crowd flow and bottleneck areas, lighting conditions and sightlines, vehicle access routes, and environmental features that could affect a principal\'s movement through the space.',
  },
  {
    q: 'Does DetailRecon replace an operative\'s judgement?',
    a: 'No. DetailRecon is a tool that accelerates the reporting process, not the decision-making process. The AI surfaces observations from the photos to give the operative a structured starting point — the operative reviews, amends, and signs off every section before the PDF is finalised.',
  },
  {
    q: 'How quickly are reports generated?',
    a: 'Minutes rather than hours. Upload the photos, let the AI analyse, review the extracted observations, and export a branded PDF. Typical recon that used to take an afternoon now takes a coffee break.',
  },
  {
    q: 'Is the data secure?',
    a: 'Yes. Photos and reports are processed on UK/EU infrastructure with encryption in transit and at rest. Reports and source photos can be auto-deleted after export on request. DetailRecon is built for an industry where discretion is non-negotiable.',
  },
  {
    q: 'Can I brand the reports with my company details?',
    a: 'Yes. Reports can carry your company branding — logo, colours, operative name and credentials — so they go out to your principal or client looking like your own professional output, not a generic AI export.',
  },
  {
    q: 'What happens to my photos after the report is generated?',
    a: 'You control retention. Photos can be kept in your DetailRecon account for reference on recurring venues, or auto-deleted after the PDF is exported. Client data handling matches the confidentiality expected in the industry.',
  },
  {
    q: 'Can multiple operatives collaborate on one recon?',
    a: 'Yes. A team can upload photos from different vantage points, and the platform consolidates the analysis into a single report. Useful for larger venues or multi-day principal movements where one operative can\'t be in every location.',
  },
  {
    q: 'What photo formats does DetailRecon accept?',
    a: 'Standard phone photo formats (JPEG, HEIC, PNG) and drone imagery. Minimum resolution guidance is provided in-app — most modern phone cameras exceed it without effort.',
  },
  {
    q: 'Who built DetailRecon?',
    a: 'DetailRecon is built by Autaimate, a UK product studio. It is one of several AI-assisted niche products in the portfolio, built specifically for the UK security industry and priced so that independent operatives can afford to use it — not only large corporate teams.',
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
      '@id': 'https://autaimate.com/products/detailrecon#webpage',
      url: 'https://autaimate.com/products/detailrecon',
      name: 'DetailRecon | AI Reconnaissance Reports for UK Close Protection | Autaimate',
      description: 'DetailRecon turns advance photos into professional close protection recon reports in minutes. £29.99 per report. No subscription, no lock-in.',
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
        { '@type': 'ListItem', position: 3, name: 'DetailRecon', item: 'https://autaimate.com/products/detailrecon' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'DetailRecon',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'AI-powered reconnaissance reporting platform for UK close protection operatives and security teams.',
      url: 'https://detailrecon.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '29.99',
        description: '£29.99 per report. Pay-as-you-go. No subscription required.',
      },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      featureList: [
        'AI analysis of advance recon photos',
        'Entry and exit point identification',
        'Cover and concealment assessment',
        'Crowd flow and bottleneck analysis',
        'Lighting and sightline review',
        'Branded PDF report generation',
        'Team collaboration on multi-location recons',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to generate a close protection recon report with DetailRecon',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Conduct the advance', text: 'Take photos of the venue, route, or location. Standard phone photos work; drone imagery is supported.' },
        { '@type': 'HowToStep', position: 2, name: 'Upload to DetailRecon', text: 'Drag the photos into a new recon in DetailRecon. Tag each with its location or direction if needed.' },
        { '@type': 'HowToStep', position: 3, name: 'Run the AI analysis', text: 'DetailRecon analyses the photos for operational features — entry/exit, cover, crowd flow, lighting, sightlines.' },
        { '@type': 'HowToStep', position: 4, name: 'Review the observations', text: 'Structured observations appear per image. Amend, add, or remove anything before sign-off.' },
        { '@type': 'HowToStep', position: 5, name: 'Export the branded PDF', text: 'Generate a professional recon PDF branded to your company. Ready to send to the principal or client.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/products/detailrecon#article',
      headline: 'DetailRecon: Hours of Advance Reporting Reduced to Minutes',
      description: 'How AI-assisted analysis of advance photography is changing recon reporting for UK close protection operatives.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-02-10',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/products/detailrecon#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'DetailRecon Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Close protection (CP)', description: 'Personal security work providing protection to an individual principal.' },
        { '@type': 'DefinedTerm', name: 'Advance work', description: 'Reconnaissance conducted before a principal\'s movement to identify risks and plan the route and positions.' },
        { '@type': 'DefinedTerm', name: 'Cover position', description: 'A position providing concealment or physical cover during a threat response.' },
        { '@type': 'DefinedTerm', name: 'Sightline', description: 'A line of visual contact between two points, used to assess observation opportunities and risks.' },
        { '@type': 'DefinedTerm', name: 'Crowd flow', description: 'The direction and density of pedestrian movement through a venue — a key operational factor in public-facing protection work.' },
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

export default function DetailReconPage() {
  return (
    <Layout>
      <SEO
        title="DetailRecon | AI Reconnaissance Reports for UK Close Protection | Autaimate"
        description="DetailRecon turns advance photos into professional close protection recon reports in minutes. £29.99 per report. No subscription, no lock-in."
        canonical="https://autaimate.com/products/detailrecon"
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
          <li className="text-white/90">DetailRecon</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-400/20 text-slate-300 text-xs font-medium mb-6">
          <Shield className="w-3 h-3" /> Close protection · £29.99/report · Pay-as-you-go
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Recon reports in <span className="text-orange-400">minutes,</span> not afternoons.
        </h1>
        <p className="text-xl text-white/75 max-w-3xl mb-8">
          DetailRecon is an AI reconnaissance reporting tool for UK close protection operatives. Upload advance photos — DetailRecon surfaces entry and exit points, cover, crowd flow, lighting, and sightlines, and generates a branded PDF recon report before your coffee goes cold. £29.99 per report. No subscription.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://detailrecon.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            Open DetailRecon <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
            Talk to us
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-gradient-to-br from-slate-500/10 via-transparent to-orange-500/10 border border-white/10">
          <div className="text-xs uppercase tracking-wider text-slate-300 mb-2">Quick Answer</div>
          <p className="text-lg text-white/90">
            DetailRecon is a UK close protection tool that turns advance reconnaissance photos into a professional branded recon PDF in minutes. AI-assisted analysis, operative sign-off, £29.99 per report, no subscription.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Advance work eats hours that should be operational</h2>
        <div className="grid md:grid-cols-2 gap-8 text-white/75">
          <div>
            <p className="mb-4">
              Every CP operative knows the same pattern: you do the advance at a venue, take a hundred photos, then spend the afternoon at a laptop writing it up. Reviewing each image, noting operational features, structuring the report to the format the principal expects, cross-referencing back to photos you took three hours ago.
            </p>
            <p>
              A proper recon report is detailed work. It has to be. But the current process leaves operatives spending as much time at a keyboard as they do on the ground.
            </p>
          </div>
          <div>
            <p className="mb-4">
              DetailRecon removes the typing, not the thinking. You upload the photos, the AI does the first pass — flagging entry points, cover positions, crowd flow, lighting conditions, sightlines. You review every observation, amend what needs amending, add what the AI missed, and sign off.
            </p>
            <p>
              The operative is still the author of the report. DetailRecon just removes the blank-page staring and the admin.
            </p>
          </div>
        </div>
      </section>

      {/* What it analyses */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What DetailRecon looks for</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: MapPin, t: 'Entry & exit points', d: 'Primary, secondary, and emergency routes in and out. Vehicle access, pedestrian access, staff-only routes.' },
            { i: Shield, t: 'Cover & concealment', d: 'Physical cover and natural concealment positions across the space — relevant for both protective positioning and threat response.' },
            { i: Eye, t: 'Crowd flow', d: 'Direction and density of pedestrian movement, bottlenecks, chokepoints, and areas where a principal might be exposed to unscreened proximity.' },
            { i: AlertTriangle, t: 'Lighting & sightlines', d: 'Lighting conditions at different times of day, observed sightlines, areas of poor visibility, camera coverage where evident.' },
            { i: Camera, t: 'Environmental features', d: 'Vehicle access routes, loading areas, service corridors, rooftops, and terrain features that affect operational planning.' },
            { i: FileText, t: 'Structured output', d: 'Every observation is organised against the relevant photo, with location tagging and severity flags where appropriate.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <f.i className="w-6 h-6 text-orange-400 mb-3" />
              <div className="font-semibold text-lg mb-2">{f.t}</div>
              <p className="text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How DetailRecon works</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: '1', t: 'Do the advance', d: 'Walk the venue, take photos. Phone or drone.' },
            { n: '2', t: 'Upload', d: 'Drag photos into a new recon. Tag locations as needed.' },
            { n: '3', t: 'AI analysis', d: 'DetailRecon produces structured observations per image.' },
            { n: '4', t: 'Operative review', d: 'You amend, add, remove, and sign off. Your judgement is the final word.' },
            { n: '5', t: 'Branded PDF', d: 'Export the recon report with your company branding. Ready to send.' },
          ].map((s) => (
            <div key={s.n} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-orange-400 font-bold text-2xl mb-2">{s.n}</div>
              <div className="font-semibold mb-2">{s.t}</div>
              <p className="text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operative in control */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-7 h-7 text-orange-400" />
            <h2 className="text-2xl md:text-3xl font-bold">The operative is always the author</h2>
          </div>
          <p className="text-white/75 mb-3">
            DetailRecon is a tool that speeds up reporting. It is not — and will never be — a substitute for operator judgement. Every observation surfaced by the AI is reviewed by the operative before the report is finalised. You amend what needs amending. You add what the AI missed. You sign off as the author.
          </p>
          <p className="text-white/75">
            The discipline of close protection does not change because AI entered the workflow. Attention to detail, local knowledge, threat assessment, and operator experience remain where they have always been — with the operative. DetailRecon just stops the admin eating the day.
          </p>
        </div>
      </section>

      {/* Operational scenarios */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Where DetailRecon earns its keep</h2>
        <div className="grid md:grid-cols-2 gap-6 text-white/75">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Venue advances for public appearances</div>
            <p>Corporate events, award ceremonies, book signings, press appearances. A thorough photo-based recon turns into a structured report the same day, giving the principal's team clarity before the arrival walk-through.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Hotel and residence surveys</div>
            <p>New hotel stays, temporary residences, holiday accommodation. Capture the standard survey shots and let DetailRecon structure the recon output — lobby, corridors, room access, fire exits, service routes.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Route and approach reconnaissance</div>
            <p>Driveway approaches, drop-off points, pedestrian last-mile. Photos from multiple vantage points get consolidated into a coherent picture of the approach — not a disconnected photo dump.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="font-semibold text-white mb-2">Event and conference venues</div>
            <p>Stages, green rooms, press pens, crowd flow. Large venues with many zones benefit most — DetailRecon organises observations by zone so nothing is missed and the report stays navigable.</p>
          </div>
        </div>
      </section>

      {/* Photo guidance */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Getting the most from DetailRecon</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            The quality of the report is a function of the quality of the photos. The AI can only analyse what it can see. A quick walk-through with a dozen blurry shots produces a thin recon; a deliberate advance with good coverage produces a report you're proud to attach your name to.
          </p>
          <p>
            In practice, most operatives already shoot enough photos — the difference DetailRecon makes is in the processing, not the capture. Your existing advance workflow doesn't need to change. Same camera, same methodology, same operational discipline. The time saving comes after the walk-through, not during it.
          </p>
          <p>
            For complex venues, team uploads work well: two operatives walking different zones, uploading separately, consolidated into one report. The platform keeps track of who contributed what, which helps the final sign-off and any follow-up questions from the client.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-500/20 to-orange-500/20 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <PoundSterling className="w-6 h-6 text-orange-400" />
            <div className="text-3xl font-bold">29.99 / report</div>
          </div>
          <p className="text-white/80 mb-4">Pay per recon. No subscription, no monthly fee, no lock-in. You pay only for what you actually produce.</p>
          <ul className="grid md:grid-cols-2 gap-2 text-white/80">
            {['AI analysis of uploaded photos', 'Unlimited photos per recon', 'Branded PDF export', 'Multi-operative collaboration', 'Encrypted UK/EU storage', 'Optional auto-delete on export'].map((f) => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> {f}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/60 mt-4">Volume discounts are available for larger security firms running recons weekly. Contact us for a bulk quote.</p>
      </section>

      {/* Security */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-orange-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Discretion is non-negotiable</h2>
          </div>
          <p className="text-white/75 mb-3">
            Close protection work depends on confidentiality. DetailRecon runs on UK/EU infrastructure with encryption in transit and at rest. Photos and reports can be auto-deleted after export. Accounts are locked to named operatives — no shared logins, no team-wide visibility unless you configure it.
          </p>
          <p className="text-white/75">
            GDPR data subject rights are supported. Data export and erasure on request. We treat the data handling side of this product with the same care the industry treats physical security.
          </p>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Built by a UK studio that builds niche products for UK industries</h2>
          <p className="text-white/75 mb-4">
            DetailRecon is built by Autaimate. We don't build everything-for-everyone platforms. We build single-purpose products that solve one specific industry problem properly. DetailRecon is our product for the UK close protection industry, priced and built so that independent operatives and small firms can use it — not only the large corporate teams.
          </p>
          <p className="text-white/75 mb-4">
            Our founder spent 40 years in UK construction and trades before founding the studio. The discipline of that background — getting things right the first time, understanding the difference between a neat job and a safe one — is what we apply to every product we ship.
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
          <Link to="/products/inspectvoice" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">InspectVoice</div>
            <p className="text-sm text-white/70">Another fieldwork-to-PDF product — BS EN 1176 playground inspection, voice-first.</p>
          </Link>
          <Link to="/products/snaglog" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">SnagLog</div>
            <p className="text-sm text-white/70">AI-powered photo-to-PDF workflow for property snagging reports.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Commission a niche product</div>
            <p className="text-sm text-white/70">Got a security-industry workflow that needs its own tool? See how a new product gets built.</p>
          </Link>
          <Link to="/" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">See all Autaimate products</div>
            <p className="text-sm text-white/70">The full portfolio of niche SaaS products for UK industries.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-slate-500/20 to-orange-500/20 border border-white/10 text-center">
          <Clock className="w-10 h-10 text-orange-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Get your afternoons back</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Advance work on the ground. Reporting in minutes. £29.99 per recon. No subscription, no lock-in — you pay only for the reports you actually produce.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://detailrecon.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
              Open DetailRecon <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
