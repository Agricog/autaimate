import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const faqs = [
  {
    q: 'Are the TradeCalcs calculators BS 7671 compliant?',
    a: 'Yes. Every calculator is built against the latest BS 7671 (IET Wiring Regulations, 18th Edition including Amendment 2) — cable sizing, voltage drop, maximum circuit length, Zs values, disconnection times and more all follow the regulations as written. We update the tools when amendments are published.',
  },
  {
    q: 'Is TradeCalcs free to use?',
    a: 'Yes, the calculators are free. The platform is supported by ads, which keeps it available to every electrician in the UK without a subscription or login.',
  },
  {
    q: 'Which calculations are included?',
    a: 'Cable sizing, voltage drop, maximum circuit length, earth fault loop impedance (Zs), disconnection time verification, prospective fault current, conduit capacity, and unit conversions used on UK electrical installations. More are added as electricians request them.',
  },
  {
    q: 'Does it work on phones and tablets?',
    a: 'Yes. TradeCalcs is a Progressive Web App (PWA), so it works on any modern browser on phones, tablets, laptops and desktops. You can add it to your home screen so it behaves like a native app without going through an app store.',
  },
  {
    q: 'Who is TradeCalcs for?',
    a: 'UK electricians, electrical contractors, trainees working towards 18th Edition qualifications, and anyone signing off electrical installation work against BS 7671. Also used by assessors, trainers and domestic installers.',
  },
  {
    q: 'Can I trust the results for certification?',
    a: 'The calculators apply the BS 7671 formulas correctly, but the responsibility for the design and certification of an installation always rests with the qualified electrician. TradeCalcs is a working tool — not a replacement for competence, site inspection or the full design process.',
  },
]

const calcs = [
  { name: 'Cable Sizing Calculator', desc: 'Select the correct CSA for the load, installation method and ambient conditions.' },
  { name: 'Voltage Drop Calculator', desc: 'Verify volt drop against BS 7671 Appendix 4 limits for the circuit run.' },
  { name: 'Maximum Circuit Length', desc: 'Work out the longest run that still meets Zs and volt drop requirements.' },
  { name: 'Zs Earth Fault Loop', desc: 'Compare measured Zs against the BS 7671 maximum for the protective device.' },
  { name: 'Disconnection Time', desc: 'Check automatic disconnection is achieved in the required time for the circuit type.' },
  { name: 'Prospective Fault Current', desc: 'Calculate PFC from the supply characteristics for circuit design and breaker selection.' },
  { name: 'Conduit Fill', desc: 'Work out conduit and trunking capacity for the cables being installed.' },
  { name: 'Unit Conversions', desc: 'Amps, watts, volts, kVA, kW — the everyday conversions electricians actually need.' },
]

export default function TradeCalcsPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TradeCalcs',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description:
        'Free BS 7671-compliant electrical calculators for UK electricians. Cable sizing, voltage drop, Zs, disconnection times and more.',
      url: 'https://tradecalcs.co.uk',
      offers: {
        '@type': 'Offer',
        price: '0',
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
        { '@type': 'ListItem', position: 3, name: 'TradeCalcs', item: 'https://autaimate.com/products/tradecalcs' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="TradeCalcs | Free BS 7671 Calculator for UK Electricians"
        description="Free BS 7671-compliant calculators for UK electricians. Cable sizing, voltage drop, Zs, disconnection times, maximum circuit length — fast, mobile-ready, and accurate against the 18th Edition."
        canonical="/products/tradecalcs"
        keywords="BS 7671 calculator, cable sizing calculator UK, voltage drop calculator, 18th edition calculator, UK electrician app, free electrical calculator, Zs calculator, disconnection time calculator"
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
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-yellow-500/15 border border-yellow-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full pulse-dot" />
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">BS 7671 · 18th Edition</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Free BS 7671 calculators for{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">UK electricians.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cable sizing, voltage drop, Zs, disconnection times, maximum circuit length — the calculations you do every day, built against the latest IET Wiring Regulations. No login. No subscription. Works on your phone on site.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tradecalcs.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open TradeCalcs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              The calculations UK electricians <span className="text-orange-500">actually use.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Built from real on-site work — not a rewrite of a textbook. If it's something you calculate on a job, it's here.
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

        {/* Why it exists */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-center">
            Why we built <span className="text-orange-500">TradeCalcs.</span>
          </h2>
          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>
              Most electrical calculators online are either locked behind a subscription, built for US wiring (which doesn't apply here), or pulled straight from a textbook with no thought for how you actually use them in a van or up a ladder.
            </p>
            <p>
              TradeCalcs is the opposite. It's mobile-first, because that's where you are. It's BS 7671, because that's what governs your work. It's free, because every UK electrician should have the basics to hand without paying a subscription for sums they did in college.
            </p>
            <p>
              If you want something more — voice-driven certification, photo evidence, audit-proof job packs — that's what <Link to="/products/certvoice" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">CertVoice</Link> and <a href="https://workproof.co.uk" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">WorkProof</a> are for.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
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
