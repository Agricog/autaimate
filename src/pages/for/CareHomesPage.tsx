import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, CheckCircle2, Shield, Clock, Code2, ChevronRight, Globe2, Wrench, Users } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const CARE_PRODUCTS = [
  { name: 'EquipSafety', ext: 'https://equipsafety.co.uk', desc: 'QR-based multilingual equipment safety for care homes. Scan equipment, get training in your language, track compliance for CQC.', tag: 'CQC compliance' },
  { name: 'ClearProof', ext: 'https://clearproof.co.uk', desc: 'Multilingual H&S comprehension — proves care staff understood the induction, RAMS, and toolbox talks, in their own language.', tag: 'H&S' },
]

const FAQS = [
  {
    q: 'Which Autaimate products are built for UK care homes?',
    a: 'Two products sit directly in the UK care sector: EquipSafety for QR-based multilingual equipment safety and training, and ClearProof for proving health and safety comprehension. Both address specific problems that CQC-regulated care operators face around evidencing compliance with a multilingual workforce.',
  },
  {
    q: 'Why multilingual specifically?',
    a: 'The UK care sector employs a highly multilingual workforce. A genuine comprehension check — the kind CQC inspectors want to see evidence of — cannot rely on English-only documents being signed. EquipSafety and ClearProof are built on that reality from day one, with content delivered in the staff member\'s preferred language before any sign-off is requested.',
  },
  {
    q: 'How does EquipSafety work in a care home setting?',
    a: 'Every piece of equipment — hoists, slings, bed rails, shower chairs, specialist mattresses — gets a QR code. Staff scan before use, see safety instructions and training content in their preferred language, and the platform logs who accessed what and when. CQC inspections become a straightforward evidence-check rather than a scramble.',
  },
  {
    q: 'Does ClearProof replace toolbox talks and inductions?',
    a: 'No. It augments them. You still deliver the talk or induction; ClearProof adds the comprehension check afterwards. Staff see the content in their preferred language and answer scenario-based questions to prove they understood — not just that they were present.',
  },
  {
    q: 'Is the data CQC-ready?',
    a: 'Yes. Both products generate a full audit trail — timestamped interactions, language used, questions answered, evidence of comprehension — formatted to present cleanly to an inspector. That\'s the core design goal: if CQC asks to see the evidence, you can hand it over in minutes, not days.',
  },
  {
    q: 'What does pricing look like for a care home?',
    a: 'EquipSafety is around £199/month as a starting point. ClearProof pricing is finalised based on the number of staff and content modules. Both are designed to be affordable for independent care operators — not only for the big national groups.',
  },
  {
    q: 'How long does implementation take?',
    a: 'A typical care home is live within a week or two — QR codes printed and deployed to equipment, initial content uploaded, staff onboarded with their preferred languages. Our team supports the first rollout so you\'re not left to figure it out alone.',
  },
  {
    q: 'Can I commission a care-specific product?',
    a: 'Yes. If you have a specific care workflow that needs a tool — medication tracking, visitor management, relative communications, specific regulatory reporting — talk to us about a commission. Fixed-price, typically around four weeks, you own the code at the end.',
  },
  {
    q: 'Is this GDPR-compliant for staff personal data?',
    a: 'Yes. Both products run on UK/EU infrastructure, encrypt data in transit and at rest, and support UK GDPR data subject rights including export and erasure. Staff data is treated with the same care the sector applies to resident data.',
  },
  {
    q: 'Does EquipSafety integrate with our existing equipment register?',
    a: 'In most cases yes — equipment registers from common UK care management platforms can be imported. For other registers, a one-off data migration is part of the onboarding. Direct real-time integration with a specific care system can be built as part of a commission.',
  },
  {
    q: 'Which languages are supported?',
    a: 'The products support all the common first languages of UK care staff — including Polish, Romanian, Filipino (Tagalog), Portuguese, Spanish, Hindi, Urdu, Bengali, Punjabi, Nepalese, and others. New languages are added on request.',
  },
  {
    q: 'How do I get a demo?',
    a: 'Both products have demo options. Get in touch via the main contact form and we\'ll arrange a walkthrough tailored to your care setting — residential, nursing, domiciliary, supported living, or specialist. A demo takes about 30 minutes.',
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
      '@id': 'https://autaimate.com/for/care-homes#webpage',
      url: 'https://autaimate.com/for/care-homes',
      name: 'Software for UK Care Homes | Autaimate',
      description: 'Niche SaaS for UK care home operators — CQC-ready equipment safety, multilingual H&S comprehension, and bespoke commissions for care workflows.',
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
        { '@type': 'ListItem', position: 3, name: 'Care Homes', item: 'https://autaimate.com/for/care-homes' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Autaimate products for UK care homes',
      itemListElement: CARE_PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.ext,
      })),
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Autaimate Care Portfolio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: 'A portfolio of niche SaaS products for UK care home operators — covering equipment safety, multilingual H&S comprehension, and CQC evidencing.',
      url: 'https://autaimate.com/for/care-homes',
      publisher: { '@id': 'https://autaimate.com/#organization' },
    },
    {
      '@type': 'HowTo',
      name: 'How to commission a new Autaimate product for a UK care workflow',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Describe the workflow', text: 'Tell us the specific care process that needs a tool — the CQC-adjacent workflow, the compliance gap, or the operational headache.' },
        { '@type': 'HowToStep', position: 2, name: 'Fixed-price scope', text: 'We scope the build, quote a fixed price, and agree a roughly 4-week timeline.' },
        { '@type': 'HowToStep', position: 3, name: 'Build and review', text: 'We build the product. You review progress as it happens — no surprise reveal.' },
        { '@type': 'HowToStep', position: 4, name: 'Ship and hand over', text: 'The live product ships. Code is yours. Infrastructure is yours. Ongoing support available.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/for/care-homes#article',
      headline: 'Software for UK Care Homes: Multilingual Compliance Built for a Multilingual Workforce',
      description: 'Why evidencing CQC compliance in a multilingual care setting needs purpose-built tools — and how Autaimate products close the gap.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-02-18',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/for/care-homes#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'UK Care Sector Software Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'CQC', description: 'Care Quality Commission — the independent regulator of health and adult social care in England.' },
        { '@type': 'DefinedTerm', name: 'RAMS', description: 'Risk Assessment and Method Statement — a document combining risk assessment and working method for a task.' },
        { '@type': 'DefinedTerm', name: 'Toolbox talk', description: 'A short, focused safety briefing delivered on site — standard practice in care and construction settings.' },
        { '@type': 'DefinedTerm', name: 'Moving and handling', description: 'The set of techniques and equipment used to transfer residents safely in a care setting.' },
        { '@type': 'DefinedTerm', name: 'Multilingual comprehension', description: 'Verifying that a worker has understood a safety instruction in the language they actually read fluently, not only in English.' },
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

export default function CareHomesPage() {
  return (
    <Layout>
      <SEO
        title="Software for UK Care Homes | Autaimate"
        description="Niche SaaS for UK care home operators — CQC-ready equipment safety, multilingual H&S comprehension, and bespoke commissions for care workflows."
        canonical="https://autaimate.com/for/care-homes"
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
          <li className="text-white/90">Care Homes</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-medium mb-6">
          <Heart className="w-3 h-3" /> For UK CQC-regulated care operators
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Compliance built for a <span className="text-orange-400">multilingual workforce.</span>
        </h1>
        <p className="text-xl text-white/75 max-w-3xl mb-8">
          UK care homes are staffed by a workforce that speaks dozens of first languages. Generic English-only training and compliance tools don't evidence real comprehension — and CQC knows it. Autaimate's care portfolio is built for the reality of the sector: training and sign-off in the staff member's own language, with an audit trail to prove it.
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
        <div id="quick-answer" className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10 border border-white/10">
          <div className="text-xs uppercase tracking-wider text-pink-300 mb-2">Quick Answer</div>
          <p className="text-lg text-white/90">
            Autaimate builds niche SaaS for UK CQC-regulated care providers — two live products covering multilingual equipment safety and H&S comprehension, with fixed-price commissions available for specific care workflows.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">The care portfolio</h2>
        <p className="text-white/70 mb-10">Two products, both built for the realities of CQC-regulated operation with a multilingual workforce.</p>
        <div className="grid md:grid-cols-2 gap-5">
          {CARE_PRODUCTS.map((p) => (
            <a key={p.name} href={p.ext} className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition" rel="noopener noreferrer">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-lg text-white">{p.name}</div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">{p.tag}</span>
              </div>
              <p className="text-white/70 text-sm mb-3">{p.desc}</p>
              <div className="text-orange-400 text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">Visit site <ArrowRight className="w-3 h-3" /></div>
            </a>
          ))}
        </div>
      </section>

      {/* The CQC evidence problem */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">The CQC evidence problem most care operators know</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            CQC inspections have moved over time from "did you write the policy" to "can you evidence that staff understood and applied it." The bar is higher now. An inspector doesn't just want to see your manual handling policy — they want to see evidence that the Filipino care assistant on the night shift actually understood it, in a language she genuinely reads, before she transferred a resident on her first shift.
          </p>
          <p>
            Most generic training platforms can't produce that evidence. They're English-only, or they offer a token Google-translated version that no-one actually used. Signed records are not comprehension records. A signature on an English document from a worker whose first language is Polish is evidence of attendance, not understanding.
          </p>
          <p>
            EquipSafety and ClearProof were both built to close that gap. Content in the staff member's preferred language, comprehension checks before sign-off, full audit trail. The result isn't just better training — it's evidence that stands up to CQC scrutiny.
          </p>
        </div>
      </section>

      {/* Why multilingual matters */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-7 h-7 text-orange-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Multilingual isn't a nice-to-have. It's the whole point.</h2>
          </div>
          <p className="text-white/75 mb-3">
            The UK care sector is one of the most linguistically diverse workforces in the country. Polish, Romanian, Filipino, Portuguese, Spanish, Hindi, Urdu, Bengali, Punjabi, Nepalese — every care home has a mix. Many staff speak English well enough for shift-floor communication but not well enough to absorb the specifics of a formal safety document under time pressure.
          </p>
          <p className="text-white/75">
            Treating English as the only language for safety-critical content isn't just unrealistic — it's unsafe. EquipSafety and ClearProof treat multilingual delivery as the baseline, not an add-on. That's the difference between compliance theatre and compliance that actually works on a real shift.
          </p>
        </div>
      </section>

      {/* Why niche */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why niche beats generic in care software</h2>
        <div className="space-y-4 text-white/75 max-w-4xl">
          <p>
            Most care compliance software comes from one of two places: either a generic training platform that bolted on a care module as an afterthought, or a head-office tool designed for the largest national groups and priced accordingly. Neither fits the reality of an independent care operator running one or two homes with a multilingual staff team.
          </p>
          <p>
            Autaimate's approach is single-purpose. EquipSafety exists to handle equipment safety for a multilingual workforce in a CQC-regulated setting. ClearProof exists to prove comprehension of H&S material, properly. Neither tries to be a full care management platform. That narrow focus is what makes them genuinely useful — and genuinely affordable.
          </p>
          <p>
            If you need a full care management platform, the portfolio doesn't replace that. What it does is fill the specific gaps — the evidencing, compliance, and comprehension bits — that the big platforms either don't do well or charge too much for.
          </p>
        </div>
      </section>

      {/* Commission section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Every product here started as one provider's problem</h2>
          <p className="text-white/80 mb-4">
            EquipSafety started with a care home operator who was tired of explaining to CQC that, yes, the Polish HCA had been trained on the hoist, despite the signed English paperwork. ClearProof started with a provider who wanted proper comprehension evidence without running live translator sessions for every induction.
          </p>
          <p className="text-white/80 mb-6">
            If your care operation has a gap — the bit still running on spreadsheets, the compliance process that keeps coming up in inspections, the workflow you'd automate if only the software existed — that's how the next Autaimate care product gets born. Fixed-price commission, typically around four weeks, you own the code at the end.
          </p>
          <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
            Commission the next one <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Commission features */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How a commission works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: Heart, t: 'Fixed price, up front', d: 'You know what it costs before we start. No hourly billing, no scope creep, no surprises.' },
            { i: Clock, t: 'Typically 4 weeks', d: 'From kick-off to live product. Focused enough to ship, useful enough to keep in production.' },
            { i: Code2, t: 'You own the code', d: 'GitHub repository handed over at completion. No vendor lock-in, no hostage data.' },
            { i: Shield, t: 'GDPR & security built in', d: 'UK/EU hosting, encryption, auth, audit trails. The professional defaults from day one.' },
            { i: Wrench, t: 'Modern infrastructure', d: 'React, TypeScript, SmartSuite, Railway, Cloudflare, Stripe, Clerk. Stable, documented, maintainable.' },
            { i: CheckCircle2, t: 'Integrations on request', d: 'Hook into your existing care management or HR system as part of the build.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <f.i className="w-6 h-6 text-orange-400 mb-3" />
              <div className="font-semibold text-lg mb-2">{f.t}</div>
              <p className="text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we serve */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Care settings we build for</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-white/75">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Users className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Residential care homes</div>
            <p>Independent and group-operated residential settings. Equipment safety evidence, H&S comprehension, and bespoke workflows for residential-specific processes.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Heart className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Nursing homes</div>
            <p>Higher-acuity settings with more complex equipment and stricter clinical compliance needs. Moving and handling evidence, medication-related workflows, nursing induction content.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Globe2 className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Domiciliary care</div>
            <p>Home care providers with lone-working staff across geography. Multilingual remote briefings, equipment guidance in the home, audit trails when the team isn\'t in one building.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Users className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Supported living</div>
            <p>Independent supported living providers with specific safeguarding and compliance needs. Tools that respect the independence of the service user and the duty of care to them.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Heart className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Specialist care providers</div>
            <p>Dementia, learning disability, mental health, and complex needs settings. Specialist content, bespoke workflows, and commission options when off-the-shelf doesn\'t fit.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <Shield className="w-6 h-6 text-orange-400 mb-3" />
            <div className="font-semibold text-white mb-2">Care groups & multi-site operators</div>
            <p>Operators running several homes under one governance structure. Consistent evidencing across sites, group-level reporting, and commissioning options for group-specific processes.</p>
          </div>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Built with real care providers, not for an abstract sector</h2>
          <p className="text-white/75 mb-4">
            EquipSafety and ClearProof weren't built from a requirements document written in a head office. They were built with UK care providers who had specific, practical problems with compliance evidence for a multilingual workforce. That partnership shapes how the products work — which languages are prioritised, which types of equipment are flagged, which inspection scenarios the audit trail is designed to address.
          </p>
          <p className="text-white/75 mb-4">
            Autaimate's founder spent 40 years in UK construction and trades before building software. That doesn't make us care specialists, but it does mean we understand compliance, evidencing, and multilingual workforces — because all three are features of UK construction too. We brought those same instincts to the care sector and worked with real providers to make them fit.
          </p>
          <p className="text-white/75 mb-4">
            The products are priced so independent care providers can afford them. We didn't want a portfolio that only the big groups could use — that misses the providers who most need help evidencing compliance, which is often the single-home operator with a small back office.
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
          <Link to="/for/construction" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Software for UK construction & trades</div>
            <p className="text-sm text-white/70">Adjacent portfolio hub — nine products for UK construction, trades, and inspection.</p>
          </Link>
          <Link to="/for/property" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Software for UK property</div>
            <p className="text-sm text-white/70">Adjacent portfolio hub — four products for landlords, agents, and property managers.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Commission a niche product</div>
            <p className="text-sm text-white/70">Fixed price, typically 4 weeks, you own the code at the end.</p>
          </Link>
          <Link to="/" className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 transition">
            <div className="font-semibold mb-1">Back to the full portfolio</div>
            <p className="text-sm text-white/70">Every Autaimate product across every industry.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Your care workflow, not in the portfolio?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Two products live today. The third is the one you commission because the generic platform doesn't fit UK care realities. Fixed price. Typically four weeks. You own the code at the end.
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
