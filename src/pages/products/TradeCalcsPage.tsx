import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const faqs = [
  {
    q: 'Are the TradeCalcs calculators BS 7671 compliant?',
    a: 'Yes. Every calculator is built against the latest BS 7671 (IET Wiring Regulations, 18th Edition including Amendment 2) — cable sizing, voltage drop, maximum circuit length, Zs values, disconnection times and more all follow the regulations as written. We update the tools when amendments are published so calculations stay current with the standard.',
  },
  {
    q: 'Is TradeCalcs free to use?',
    a: 'Yes, the calculators are free. The platform is supported by ads, which keeps it available to every electrician in the UK without a subscription or login. No trials, no upgrade prompts — the tools work the same whether you use them once a year or ten times a day.',
  },
  {
    q: 'Which calculations are included?',
    a: 'Cable sizing, voltage drop, maximum circuit length, earth fault loop impedance (Zs), disconnection time verification, prospective fault current, conduit and trunking capacity, and the everyday unit conversions used on UK electrical installations. New calculators are added as electricians request them.',
  },
  {
    q: 'Does TradeCalcs work on phones and tablets?',
    a: 'Yes. TradeCalcs is a Progressive Web App (PWA), so it works on any modern browser on phones, tablets, laptops and desktops. You can add it to your home screen so it behaves like a native app without going through an app store. It also works on site when you have a signal — and caches the interface for fast loading.',
  },
  {
    q: 'Who is TradeCalcs for?',
    a: 'UK electricians, electrical contractors, trainees working towards 18th Edition qualifications, and anyone signing off electrical installation work against BS 7671. Also widely used by assessors, trainers, and domestic installers who need a quick reference during inspections or training sessions.',
  },
  {
    q: 'Can I trust the results for certification purposes?',
    a: 'The calculators apply the BS 7671 formulas correctly, but the responsibility for the design and certification of an installation always rests with the qualified electrician. TradeCalcs is a working tool — not a replacement for competence, site inspection, or the full design process. Treat it the way you would a good slide rule or calculator — it does the arithmetic, you do the engineering.',
  },
  {
    q: 'Does TradeCalcs store my calculation history?',
    a: 'No, TradeCalcs is a stateless tool. It does not store your calculations, does not require login, and does not track individual electricians. This is deliberate — the calculators are a reference, not a record-keeping system. For documented electrical certification with a full audit trail, use CertVoice (voice-first EICR, EIC and Minor Works) which is built specifically for certification and compliance documentation.',
  },
  {
    q: 'Can I use TradeCalcs without an internet connection?',
    a: 'The initial load requires connectivity so the PWA can install. After that, the core calculators work on cached data — you can run calculations without signal. Anything that relies on live data updates (for example, if we publish amendments to cable tables) will sync the next time you are online.',
  },
  {
    q: 'How does TradeCalcs compare to commercial electrical design software?',
    a: 'Full commercial design packages cost hundreds or thousands of pounds and are built for specification engineers doing complex system designs. TradeCalcs is built for working electricians who need fast, accurate calculations for everyday installation work. Different job, different tool, different price point — free rather than licensed.',
  },
  {
    q: 'What happens when BS 7671 is updated?',
    a: 'Calculators are updated to match amendments as they are published. When IET releases a significant amendment (like Amendment 2 in 2022), we review every calculator against the new text and update the formulas, tables, and validation rules. The changes go live without you needing to update anything — it is a PWA, not an app store download.',
  },
  {
    q: 'Is there a way to report a bug or suggest a new calculator?',
    a: 'Yes. Feedback goes to the Autaimate team and gets reviewed. The most-requested calculators get prioritised for the next release. Most of the current tool set came from electrician requests — if you need something the site does not cover, tell us and it usually ends up built.',
  },
  {
    q: 'Does TradeCalcs cover three-phase installations?',
    a: 'Yes. Cable sizing, voltage drop, PFC and disconnection time calculators all handle both single-phase and three-phase installations. The interface asks for the system type up front and applies the correct formulas automatically — so you do not have to remember which equation changes with phase count.',
  },
]

const calcs = [
  { name: 'Cable Sizing Calculator',    desc: 'Select the correct cross-sectional area for the load, installation method and ambient conditions. Handles both single-phase and three-phase.' },
  { name: 'Voltage Drop Calculator',    desc: 'Verify volt drop against BS 7671 Appendix 4 limits for the circuit run. Takes account of cable length, current, and conductor resistance.' },
  { name: 'Maximum Circuit Length',     desc: 'Work out the longest run that still meets Zs and volt drop requirements simultaneously. Prevents the "passes one, fails the other" trap.' },
  { name: 'Zs Earth Fault Loop',        desc: 'Compare measured Zs against the BS 7671 maximum for the protective device, with automatic temperature correction for 80% rule compliance.' },
  { name: 'Disconnection Time',         desc: 'Check automatic disconnection is achieved in the required time for the circuit type — 0.4s or 5s depending on the circuit and installation method.' },
  { name: 'Prospective Fault Current',  desc: 'Calculate PFC from the supply characteristics for circuit design and breaker selection. Essential for specifying breaking capacity.' },
  { name: 'Conduit Fill',               desc: 'Work out conduit and trunking capacity for the cables being installed. Follows BS 7671 recommended fill ratios.' },
  { name: 'Unit Conversions',           desc: 'Amps, watts, volts, kVA, kW, power factor — the everyday conversions electricians actually need, without the ads of generic calculator sites.' },
]

const differentiators = [
  {
    title: 'Built for the van, not the office.',
    desc: 'Every calculator is mobile-first. Large tap targets, no tiny desktop-only forms, no hunting for the submit button with cold fingers. Works in a roof space, up a ladder, kneeling on a fuse board — wherever you actually do the work.',
  },
  {
    title: 'UK regulations, not US wiring.',
    desc: 'TradeCalcs follows BS 7671 exclusively. No NEC equivalents, no imperial units, no calculators that assume 120V residential circuits. If the input boxes and the formulas match what you were tested on for the 18th Edition, it is the right tool.',
  },
  {
    title: 'No subscription. No login. No upsell.',
    desc: 'You do not need to create an account, provide an email, or agree to a trial. Open the site, pick the calculator, run the numbers. The ads are there to keep it free — we would rather have the tool used than fenced behind a paywall that nobody needs for basic calculations.',
  },
  {
    title: 'Updates tracked to the regulations.',
    desc: 'When the IET publishes amendments, the calculators get updated. We review every tool against the new text and patch formulas, tables, and validation rules. You do not have to reinstall anything — the PWA updates itself.',
  },
]

const provenancePoints = [
  {
    title: 'Built by someone who knows what goes wrong on site.',
    desc: 'Autaimate\u2019s founder spent 40 years in UK construction and trades before building TradeCalcs. The calculator list reflects what working electricians actually reach for — not what a textbook author thought they ought to need.',
  },
  {
    title: 'Used daily across the UK.',
    desc: 'TradeCalcs is not a concept demo or portfolio piece. It is actively used by working electricians across the UK every day. If a calculator was wrong, we would hear about it — which is why the ones that stay in the toolkit are the ones that stand up to site use.',
  },
  {
    title: 'Ad-supported, not data-harvesting.',
    desc: 'The ads keep the service free. That is the business model — not selling user data, not serving electricians as a captive audience to some larger platform. No logins, no tracking, no newsletter signup required.',
  },
]

const relatedPages = [
  { title: 'CertVoice — voice-first electrical certification', desc: 'If you need BS 7671-compliant EICR, EIC and Minor Works certificates with a full audit trail, not just calculations.', href: '/products/certvoice' },
  { title: 'WorkProof — court-grade photo evidence', desc: 'GPS-locked, time-stamped, tamper-proof audit packs for NICEIC and compliance inspections.', href: 'https://workproof.co.uk', external: true },
  { title: 'TradGo — AI missed-call agent', desc: 'Catch the customers calling while you are working. In your voice, with your approval on every quote.', href: '/products/tradgo' },
  { title: 'Construction & Trades products', desc: 'All Autaimate products built for UK construction, trades and site businesses.', href: '/for/construction' },
]

export default function TradeCalcsPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TradeCalcs',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description: 'Free BS 7671-compliant electrical calculators for UK electricians. Cable sizing, voltage drop, Zs, disconnection times, PFC, conduit fill and more.',
      url: 'https://tradecalcs.co.uk',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
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
        { '@type': 'ListItem', position: 3, name: 'TradeCalcs', item: 'https://autaimate.com/products/tradecalcs' },
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
      name: 'TradeCalcs | Free BS 7671 Calculator for UK Electricians | Autaimate',
      description: 'Free BS 7671-compliant calculators for UK electricians — cable sizing, voltage drop, Zs, disconnection times. Mobile-ready PWA, no login, no subscription.',
      url: 'https://autaimate.com/products/tradecalcs',
      inLanguage: 'en-GB',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#quick-answer', 'h1'] },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to run a BS 7671 calculation in TradeCalcs',
      description: 'Four-step process for running a compliant BS 7671 calculation with TradeCalcs.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Pick the calculator', text: 'Open tradecalcs.co.uk and choose the calculator you need — cable sizing, voltage drop, Zs, and so on.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter the inputs',   text: 'Supply the circuit characteristics: voltage, current, cable type, installation method, length, ambient temperature.' },
        { '@type': 'HowToStep', position: 3, name: 'Read the result',    text: 'The calculator returns a BS 7671-correct value with a compliance indicator showing whether you are inside or outside the regulation limit.' },
        { '@type': 'HowToStep', position: 4, name: 'Apply on site',      text: 'Use the result in your design decision or certification work. The calculation is a tool — the engineering judgement is yours.' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'TradeCalcs — free BS 7671 calculators for UK electricians',
      description: 'The calculators UK electricians actually use on site, built for mobile, aligned to BS 7671 18th Edition.',
      author: { '@type': 'Person', name: 'Mick Stevenson', url: 'https://uk.linkedin.com/in/mickstevenson' },
      publisher: { '@type': 'Organization', name: 'Autaimate', logo: { '@type': 'ImageObject', url: 'https://autaimate.com/logo.png' } },
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      mainEntityOfPage: 'https://autaimate.com/products/tradecalcs',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'TradeCalcs glossary',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'BS 7671', description: 'The IET Wiring Regulations — the UK national standard for the safety of electrical installations, currently in 18th Edition.' },
        { '@type': 'DefinedTerm', name: 'Zs (earth fault loop impedance)', description: 'The total impedance of the earth fault loop from the circuit conductor to the supply transformer. Must remain below a BS 7671-defined maximum for the protective device to disconnect in time.' },
        { '@type': 'DefinedTerm', name: 'PFC (prospective fault current)', description: 'The expected current that would flow in the event of a short circuit at a given point. Used to specify breaker breaking capacity.' },
        { '@type': 'DefinedTerm', name: 'Disconnection time', description: 'The maximum time permitted for a protective device to operate during a fault, per BS 7671 — typically 0.4s or 5s depending on circuit type.' },
        { '@type': 'DefinedTerm', name: 'PWA (Progressive Web App)', description: 'A web application that installs to the device home screen and runs like a native app, without going through an app store.' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="TradeCalcs | Free BS 7671 Calculator for UK Electricians | Autaimate"
        description="Free BS 7671-compliant calculators for UK electricians — cable sizing, voltage drop, Zs, disconnection times. Mobile-ready PWA, no login, no subscription."
        canonical="/products/tradecalcs"
        keywords="BS 7671 calculator, cable sizing calculator UK, voltage drop calculator, 18th edition calculator, UK electrician app, free electrical calculator, Zs calculator, disconnection time calculator, PFC calculator, conduit fill calculator"
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
            <li className="text-white/70">TradeCalcs</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-12 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-yellow-500/15 border border-yellow-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full pulse-dot" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">BS 7671 &middot; 18th Edition &middot; Free</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Free BS 7671 calculators for{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">UK electricians.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cable sizing, voltage drop, Zs, disconnection times, maximum circuit length, PFC, conduit fill. The calculations you do every day, built against the latest IET Wiring Regulations. No login. No subscription. Works on your phone on site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tradecalcs.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open TradeCalcs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="px-6 lg:px-12 max-w-4xl mx-auto mb-20">
          <div id="quick-answer" className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 rounded-3xl p-8 lg:p-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-3">Quick Answer</div>
            <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
              TradeCalcs is a free PWA offering BS 7671-compliant electrical calculators for UK electricians — cable sizing, voltage drop, Zs, disconnection times and more. No login, ad-supported, built for site use.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              The calculations UK electricians <span className="text-orange-500">actually use.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Built from real on-site work, not a rewrite of a textbook. If it is something you calculate on a job, it is here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calcs.map((c) => (
              <div key={c.name} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-yellow-500/[0.06] hover:border-yellow-500/30 transition-all">
                <h3 className="font-display text-base font-bold text-yellow-400 uppercase tracking-wide mb-2">{c.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Why TradeCalcs is built <span className="text-orange-500">differently.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Most electrical calculators online are either locked behind a subscription, built for US wiring, or pulled from a textbook with no thought for how you actually use them. TradeCalcs is the opposite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-yellow-400 mb-3">{d.title}</h3>
                <p className="text-white/70 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why we built it */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-center">
            Why we built <span className="text-orange-500">TradeCalcs.</span>
          </h2>
          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>
              Most electrical calculators online are either locked behind a subscription, built for US wiring (which does not apply here), or pulled straight from a textbook with no thought for how you actually use them in a van or up a ladder.
            </p>
            <p>
              TradeCalcs is the opposite. It is mobile-first, because that is where you are. It is BS 7671, because that is what governs your work. It is free, because every UK electrician should have the basics to hand without paying a subscription for sums they did in college.
            </p>
            <p>
              If you want something more &mdash; voice-driven certification, photo evidence, audit-proof job packs &mdash; that is what <Link to="/products/certvoice" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">CertVoice</Link> and <a href="https://workproof.co.uk" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">WorkProof</a> are for. TradeCalcs covers the arithmetic. Those cover the certification.
            </p>
          </div>
        </section>

        {/* Provenance */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Built by someone who knows <span className="text-orange-500">the site.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {provenancePoints.map((p) => (
              <div key={p.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-base font-bold text-yellow-400 mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-white/50 mt-8">
            Written by <a href="https://uk.linkedin.com/in/mickstevenson" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4">Mick Stevenson</a>, Founder of Autaimate.
          </div>
        </section>

        {/* Common mistakes */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Common BS 7671 calculation mistakes <span className="text-orange-500">TradeCalcs catches.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The pitfalls that trip up both trainees and experienced electricians. The calculators flag them automatically so you do not sign off something that will come back on you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-base font-bold text-yellow-400 mb-3">Forgetting the 80% rule on measured Zs</h3>
              <p className="text-white/60 text-sm leading-relaxed">Published Zs values in BS 7671 are for conductors at 70 degrees C. On a cold install the measurement will be lower than the eventual warm value. The rule of thumb is the measured Zs should be no more than 80% of the published maximum to allow for heating. TradeCalcs applies this correction automatically when you enter a measured value.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-base font-bold text-yellow-400 mb-3">Volt drop passes but Zs fails</h3>
              <p className="text-white/60 text-sm leading-relaxed">A long cable run can satisfy BS 7671 Appendix 4 volt drop limits while still exceeding the maximum Zs for the protective device. Both checks must pass independently. TradeCalcs runs both and tells you which one is pulling the run length down so you know exactly where the constraint is.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-base font-bold text-yellow-400 mb-3">Wrong disconnection time for the circuit type</h3>
              <p className="text-white/60 text-sm leading-relaxed">BS 7671 requires 0.4s disconnection on final circuits up to 63A in TN systems, and 5s on distribution circuits. Using the wrong target silently causes installations to pass calculations they should fail. TradeCalcs asks what the circuit is and applies the correct target.</p>
            </div>
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-base font-bold text-yellow-400 mb-3">Current capacity corrected for ambient and grouping</h3>
              <p className="text-white/60 text-sm leading-relaxed">A 32A cable rating on a tag does not mean 32A in every installation. Ambient temperature above 30 degrees, bunching with other circuits, and thermal insulation all reduce the true capacity. TradeCalcs prompts for these factors and applies the correction — so the sized cable actually carries what you think it does.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-yellow-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-yellow-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">Where to go <span className="text-orange-500">next</span></h2>
          </div>
          <div className="space-y-3">
            {relatedPages.map((r) => {
              const inner = (
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">{r.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-yellow-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )
              const className = 'block p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-yellow-500/[0.04] hover:border-yellow-500/30 transition-all group'
              return r.external
                ? <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
                : <Link key={r.href} to={r.href} className={className}>{inner}</Link>
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            Ready when you are.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            No signup. No email. Open it, use it, bookmark it.
          </p>
          <a href="https://tradecalcs.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open TradeCalcs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
