import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, CheckCircle2, Shield, Clock, Code2, ChevronRight, HardHat, Wrench } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const CONSTRUCTION_PRODUCTS = [
  { name: 'TradeCalcs', to: '/products/tradecalcs', desc: 'Free BS 7671 calculators for UK electricians — cable sizing, voltage drop, circuit design.', tag: 'Electrical' },
  { name: 'CertVoice', to: '/products/certvoice', desc: 'Voice-first BS 7671 electrical certificates — finish the paperwork on site.', tag: 'Electrical' },
  { name: 'TradGo', to: '/products/tradgo', desc: 'AI agent that catches missed calls, WhatsApp, and website chat while you\'re on the tools.', tag: 'Trades' },
  { name: 'SnagLog', to: '/products/snaglog', desc: 'AI-powered snagging reports for property inspectors, builders, and handover teams.', tag: 'Inspection' },
  { name: 'InspectVoice', to: '/products/inspectvoice', desc: 'BS EN 1176 playground inspection — voice-first, offline, on-device PDF.', tag: 'Inspection' },
  { name: 'WorkProof', ext: 'https://workproof.co.uk', desc: 'On-site proof-of-work documentation for trades — photos, notes, timestamps, audit trail.', tag: 'Trades' },
  { name: 'EquipSafety', ext: 'https://equipsafety.co.uk', desc: 'QR-based multilingual equipment safety — scan, train, log. Compliance in workers\' languages.', tag: 'H&S' },
  { name: 'LeadFortress', ext: 'https://leadfortress.co.uk', desc: 'Omnichannel lead capture for UK service businesses — phone, SMS, WhatsApp, web, email.', tag: 'Lead capture' },
  { name: 'ClearProof', ext: 'https://clearproof.co.uk', desc: 'Multilingual H&S comprehension — proves workers understood the induction, not just signed it.', tag: 'H&S' },
]

const FAQS = [
  {
    q: 'Which Autaimate products are built for construction and trades?',
    a: 'Nine Autaimate products are directly built for UK construction, trades, and the built environment: TradeCalcs, CertVoice, TradGo, SnagLog, InspectVoice, WorkProof, EquipSafety, LeadFortress, and ClearProof. Each solves a specific niche problem — together they cover electrical compliance, fieldwork reporting, lead capture, H&S, and inspection workflows.',
  },
  {
    q: 'Is this a consultancy or a product studio?',
    a: 'A product studio. Autaimate builds niche SaaS products for UK industries. Every product in the construction category started as one customer\'s problem. Fixed-price commissioning is how new products get born — but the output is always a product you can own, not a consultancy engagement.',
  },
  {
    q: 'What does a commission cost and how long does it take?',
    a: 'Fixed-price, typically around four weeks from kick-off to live product. Exact pricing depends on scope — a focused single-workflow tool is different from a multi-user platform. We quote the whole job up front so there are no surprises.',
  },
  {
    q: 'Do I own the code after a commission?',
    a: 'Yes. Commissioned products ship with the code owned by the customer. You are not locked into us for hosting, maintenance, or future development — though we\'re available for all three if you want us.',
  },
  {
    q: 'Why build for construction specifically?',
    a: 'Our founder spent 40 years in UK construction and trades before building software. That means the products are designed by someone who has been on the tools — they fit how construction work actually happens, not how a developer from outside the industry imagines it happens.',
  },
  {
    q: 'Are the products UK-only?',
    a: 'The products are designed around UK standards (BS 7671, BS EN 1176, UK GDPR, UK trade practices) but several work anywhere. If you\'re outside the UK and interested in one of the products, get in touch — most can be adapted for other regions.',
  },
  {
    q: 'Do you work with one-person businesses or only larger firms?',
    a: 'Both. TradeCalcs is free and used by sole-trader sparkies. InspectVoice is used by full inspection companies. TradGo is priced for single-van trades. EquipSafety scales to multi-site care operators. The portfolio is deliberately built to be accessible to independents as well as firms.',
  },
  {
    q: 'Are the products GDPR-compliant?',
    a: 'Yes. Every Autaimate product runs on UK/EU infrastructure with encryption in transit and at rest, data export and erasure on request, and audit trails where the regulated use case requires them.',
  },
  {
    q: 'Can you integrate with my existing job management or CRM software?',
    a: 'Often yes. Most of our products can export structured data and accept structured input. Direct integrations with specific UK trade platforms (Payaca, ServiceM8, Commusoft, etc.) can be built as part of a commission.',
  },
  {
    q: 'What if the product I need doesn\'t exist yet?',
    a: 'That\'s how every product in this portfolio started. If you\'ve got a construction or trades workflow that needs its own tool, talk to us about a commission. Four weeks and a fixed price later, you\'ve got a product.',
  },
  {
    q: 'How do I get a demo?',
    a: 'Every live product has its own landing page with a demo link. Get in touch if you want a walkthrough with the team — we\'d rather show you the thing than send a sales deck.',
  },
  {
    q: 'Do you offer support after go-live?',
    a: 'Yes. Products on monthly subscription include UK support as standard. For commissioned builds, we offer ongoing support contracts tailored to the product — you\'re not abandoned on day one.',
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
      '@id': 'https://autaimate.com/for/construction#webpage',
      url: 'https://autaimate.com/for/construction',
      name: 'Software for UK Construction & Trades | Autaimate',
      description: 'Nine niche SaaS products built for UK construction and trades. Electrical compliance, fieldwork reporting, lead capture, H&S, and inspection — plus fixed-price commissions when the tool you need doesn\'t exist yet.',
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
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://autaimate.com/#industries' },
        { '@type': 'ListItem', position: 3, name: 'Construction', item: 'https://autaimate.com/for/construction' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Autaimate products for UK construction and trades',
      itemListElement: CONSTRUCTION_PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.to ? `https://autaimate.com${p.to}` : p.ext,
      })),
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Autaimate Construction Portfolio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: 'A portfolio of niche SaaS products for UK construction, trades, and the built environment — covering electrical compliance, fieldwork reporting, lead capture, H&S, and inspection.',
      url: 'https://autaimate.com/for/construction',
      publisher: { '@id': 'https://autaimate.com/#organization' },
    },
    {
      '@type': 'HowTo',
      name: 'How to commission a new Autaimate product for a UK construction workflow',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Describe the problem', text: 'Tell us the specific workflow you need a tool for — the niche problem, not a generic brief.' },
        { '@type': 'HowToStep', position: 2, name: 'Fixed-price scope', text: 'We scope the build, quote a fixed price, and agree a 4-week-ish timeline. No hourly rates.' },
        { '@type': 'HowToStep', position: 3, name: 'Build and review', text: 'We build the product. You review as it progresses — no big reveal at the end.' },
        { '@type': 'HowToStep', position: 4, name: 'Ship and hand over', text: 'The live product ships. Code is yours. Infrastructure is yours. Ongoing support available if you want it.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/for/construction#article',
      headline: 'Software for UK Construction & Trades: Nine Products Built on the Tools',
      description: 'Why the Autaimate construction portfolio covers specific workflows other software ignores — and how new products get born from customer problems.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-02-01',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/for/construction#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'UK Construction Software Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'BS 7671', description: 'The British Standard for electrical installations — the IET Wiring Regulations.' },
        { '@type': 'DefinedTerm', name: 'BS EN 1176', description: 'The European Standard for playground equipment and surfacing, adopted by BSI.' },
        { '@type': 'DefinedTerm', name: 'Snagging', description: 'The process of identifying defects in a newly built or refurbished property before handover.' },
        { '@type': 'DefinedTerm', name: 'Toolbox talk', description: 'A short, on-site safety briefing given to workers before a shift or task.' },
        { '@type': 'DefinedTerm', name: 'Fixed-price commission', description: 'A software build with scope, price, and timeline agreed up front — no hourly billing and no surprises.' },
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

export default function ConstructionPage() {
  return (
    <Layout>
      <SEO
        title="Software for UK Construction & Trades | Autaimate"
        description="Nine niche SaaS products for UK construction and trades. Electrical compliance, fieldwork reporting, lead capture, H&S, inspection — plus fixed-price commissions."
        canonical="https://autaimate.com/for/construction"
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
          <li><Link to="/#industries" className="hover:text-orange-400">Industries</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-white/90">Construction</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-medium mb-6">
          <HardHat className="w-3 h-3" /> For UK construction, trades & inspection
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Nine niche SaaS products. Built <span className="text-orange-400">on the tools.</span>
        </h1>
        <p className="text-xl text-white/75 max-w-3xl mb-8">
          Autaimate builds niche SaaS products for UK construction and trades — electrical compliance, fieldwork reporting, lead capture, H&S, inspection. Nine products live today. The tenth might be the one you commission when you've got a workflow the generic software doesn't cover.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            See the products <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
            Commission a new one
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-teal-500/10 border border-white/10">
          <div className="text-xs uppercase tracking-wider text-orange-300 mb-2">Quick Answer</div>
          <p className="text-lg text-white/90">
            Autaimate is a UK product studio with nine niche SaaS products for construction and trades — covering electrical calculation and certification, snagging, playground inspection, H&S, lead capture, and missed-call AI. Fixed-price commissions available for workflows not yet built.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">The construction portfolio</h2>
        <p className="text-white/70 mb-10">Nine products, each built for a specific problem in the industry.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONSTRUCTION_PRODUCTS.map((p) => (
            p.to ? (
              <Link key={p.name} to={p.to} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-lg text-white">{p.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">{p.tag}</span>
                </div>
                <p className="text-white/70 text-sm mb-3">{p.desc}</p>
                <div className="text-orange-400 text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></div>
              </Link>
            ) : (
              <a key={p.name} href={p.ext} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition" rel="noopener noreferrer">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-lg text-white">{p.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">{p.tag}</span>
                </div>
                <p className="text-white/70 text-sm mb-3">{p.desc}</p>
                <div className="text-orange-400 text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">Visit site <ArrowRight className="w-3 h-3" /></div>
              </a>
            )
          ))}
        </div>
      </section>

      {/* Why niche */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why niche beats generic in construction software</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            Generic construction software tries to be everything for everyone. One platform, forty features, priced at £200/month, and most of the features are irrelevant to any individual firm. You pay for a scaffolding module you'll never open. The electrical side is an afterthought. The snagging workflow assumes you're a 50-person firm, not a one-van operator.
          </p>
          <p>
            The Autaimate approach is the opposite. Each product does one thing for one industry niche, and does it better than any all-in-one platform could. TradeCalcs is for BS 7671 electrical calculations — not for every trade under the sun. InspectVoice is for BS EN 1176 playground inspection — not generic "maintenance management." TradGo is for the missed call every tradesman loses — not a multi-industry customer service platform.
          </p>
          <p>
            Because each product is focused, it's cheaper, faster to learn, easier to use, and more likely to actually get used day to day. That's the commercial argument for niche software, and it's why independent trades, small firms, and the teams inside local authorities come to us instead of the big vendors.
          </p>
        </div>
      </section>

      {/* Commission section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-teal-500/20 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Every product here started as one customer's problem</h2>
          <p className="text-white/80 mb-4">
            TradeCalcs, SnagLog, CertVoice, TradGo, WorkProof, InspectVoice — every product in the construction portfolio started life as one UK customer describing a specific workflow that needed a tool. We built the tool, shipped it, and turned it into a product that now serves the whole industry.
          </p>
          <p className="text-white/80 mb-6">
            If you've got a workflow that isn't covered yet — the bit of your operation that still runs on spreadsheets, or the manual process eating your admin budget — that's how the next product gets born. Fixed-price. Typically around four weeks. You own the code at the end.
          </p>
          <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            Commission the next one <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* The fieldwork pattern */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The fieldwork pattern that runs through the portfolio</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            Look across the construction products and you'll see the same pattern repeated: dictate or capture on site, let the software structure the data, generate the PDF before you leave the job. CertVoice does it for electrical certification. InspectVoice does it for playground inspection. SnagLog does it for property snagging. WorkProof does it for proof-of-work documentation.
          </p>
          <p>
            That pattern exists because the real bottleneck in construction and trades admin isn't the fieldwork — it's the evening paperwork. Hours at a kitchen table, laptop open, trying to make sense of notebook scribbles from six hours earlier. Every one of the products above was designed to kill that evening-paperwork loop, and they all do it the same way: front-load the structured capture, automate the output.
          </p>
          <p>
            This is the kind of cross-product thinking you only get when the studio has been building in the same industry long enough to see the patterns. Generic construction software doesn't have this pattern because it doesn't understand the pattern exists.
          </p>
        </div>
      </section>

      {/* Compliance landscape */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the UK compliance landscape</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            UK construction has its own compliance landscape — BS 7671 for electrical, BS EN 1176 for playgrounds, CDM 2015 for construction safety, CQC for regulated care environments, Building Safety Act post-Grenfell, UK GDPR for any data handling. The standards and regulations that apply to a UK trade or inspection firm are not the same as the American equivalents, and generic American construction software consistently fails to meet them.
          </p>
          <p>
            Every Autaimate product is designed with the relevant UK compliance landscape in mind. TradeCalcs aligns with BS 7671. CertVoice outputs to BS 7671 certificate format. InspectVoice aligns with BS EN 1176. EquipSafety works for CQC environments. ClearProof addresses the comprehension side of UK H&S duty of care. This is what it means to build for a specific country and industry — not just translate prices into pounds.
          </p>
        </div>
      </section>

      {/* Electrical focus */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">A particular focus on UK electrical work</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            The electrical trade gets specific attention in the Autaimate portfolio because it's one of the most compliance-heavy trades in UK construction and one of the most poorly served by existing software. TradeCalcs covers the day-to-day calculations — cable sizing, voltage drop, earth fault loop impedance, adiabatic equation. CertVoice handles the certification output that ties every job off with proper BS 7671 paperwork. Together they cover the design-side and compliance-side of an electrician's week.
          </p>
          <p>
            For electrical firms specifically, pairing TradeCalcs with CertVoice is a common setup — one engineer does the design calculation in TradeCalcs in the morning, the site engineer tests and certifies with CertVoice in the afternoon, and the whole job is documented properly by the time the van leaves the kerb. No kitchen-table admin, no lost paperwork, full BS 7671 compliance.
          </p>
          <p>
            If your firm does a lot of EICRs, the volume saving from CertVoice alone often covers the subscription in the first week. If you do periodic inspection reports for landlords, housing associations, or commercial estates, the PDF-on-site workflow changes what's possible in a working day.
          </p>
        </div>
      </section>

      {/* Trades served */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trades and disciplines we build for</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-white/80">
          {['Electricians', 'Heating engineers', 'Plumbers', 'Gas Safe engineers', 'Builders', 'Roofers', 'Decorators', 'Playground inspectors', 'Property inspectors', 'Snagging specialists', 'Fire safety assessors', 'H&S consultants', 'Construction managers', 'Site managers', 'Facilities teams', 'Local authority maintenance'].map((t) => (
            <div key={t} className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
              <CheckCircle2 className="w-4 h-4 text-orange-400 inline mr-2" />{t}
            </div>
          ))}
        </div>
        <p className="text-white/70 mt-6 max-w-3xl">
          If you don't see your trade in the list, that doesn't mean we can't build for you. It just means we haven't yet. Commission a product and you'll be the first.
        </p>
      </section>

      {/* Commission features */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How a commission works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: Hammer, t: 'Fixed price, up front', d: 'You know what it costs before we start. No hourly billing, no scope creep.' },
            { i: Clock, t: 'Typically 4 weeks', d: 'From kick-off to live product. Small enough to ship, useful enough to keep.' },
            { i: Code2, t: 'You own the code', d: 'GitHub repository handed over. No vendor lock-in, no hostage data.' },
            { i: Shield, t: 'GDPR & security built in', d: 'UK/EU hosting, encryption, auth, audit trails. The professional defaults from day one.' },
            { i: Wrench, t: 'Modern infrastructure', d: 'React, TypeScript, SmartSuite, Railway, Cloudflare, Stripe, Clerk. Stable, documented, maintainable.' },
            { i: CheckCircle2, t: 'Integrations on request', d: 'Hook into your existing job management, CRM, or accounting software as part of the build.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <f.i className="w-6 h-6 text-orange-400 mb-3" />
              <div className="font-semibold text-lg mb-2">{f.t}</div>
              <p className="text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Forty years in construction. Then the software.</h2>
          <p className="text-white/75 mb-4">
            The reason Autaimate products fit construction workflows is that they were designed by someone who has spent 40 years in UK construction and trades. The founder has been on the tools, run sites, dealt with inspectors, lost jobs to missed calls, written certificates at the kitchen table at 10pm. That background shows up everywhere — in the language the products use, the decisions about what to include, the understanding of what "compliant" actually feels like on a Tuesday morning.
          </p>
          <p className="text-white/75 mb-4">
            The products are built on a modern stack — React, TypeScript, SmartSuite, Railway — but the sensibility behind them is trades, not tech. That's the bit generic construction software gets wrong, and it's the bit we get right.
          </p>
          <p className="text-white/75 mb-4">
            That background also shapes the commercial approach. Pricing designed so independents can afford to use it. Fixed-price commissions because tradespeople know what "time and materials" looks like when it's applied to a job that should be fixed. Code ownership because no trade wants to be locked into a supplier who could put the prices up next year.
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
          <Link to="/for/property" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Software for UK property</div>
            <p className="text-sm text-white/70">Adjacent industry hub — products for landlords, letting agents, and property managers.</p>
          </Link>
          <Link to="/for/care-homes" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Software for UK care homes</div>
            <p className="text-sm text-white/70">CQC-focused products for regulated care operators.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Commission a niche product</div>
            <p className="text-sm text-white/70">Fixed price, typically 4 weeks, you own the code at the end.</p>
          </Link>
          <Link to="/products/tradecalcs" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">TradeCalcs</div>
            <p className="text-sm text-white/70">Our free BS 7671 calculator platform — a good way to see what we build.</p>
          </Link>
          <Link to="/" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Back to the full portfolio</div>
            <p className="text-sm text-white/70">Every Autaimate product across every industry.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-orange-500/20 to-teal-500/20 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Got a workflow the generic software doesn't fit?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            That's how nine construction products got built. The tenth might be yours. Fixed price. Typically four weeks. You own the code at the end.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
              Commission a product <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:border-orange-400 text-white font-semibold transition">
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
