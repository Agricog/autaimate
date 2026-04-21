import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const faqs = [
  {
    q: 'What certificates does CertVoice produce?',
    a: 'EICR (Electrical Installation Condition Report), EIC (Electrical Installation Certificate) and Minor Works Certificate — the three BS 7671 documents UK electricians issue most. Every output is structured against the model forms in the Regulations, not a generic template.',
  },
  {
    q: 'How does voice-first actually work?',
    a: 'You speak your findings on site — circuit, measurement, observation, code. CertVoice extracts the relevant information and drops it into the correct fields. You don\'t have to recite in a particular order and you don\'t have to touch a keyboard with dirty hands or while holding a torch.',
  },
  {
    q: 'Is it actually BS 7671 compliant?',
    a: 'The forms follow the BS 7671 model certificates. Coding is against the current IET classification (C1, C2, C3, FI), disconnection times are checked against the table values, and Zs values are compared to the published maxima. The document you sign is the document the assessor expects to see.',
  },
  {
    q: 'What happens to my voice data?',
    a: 'Voice is processed for transcription and field extraction — nothing more. It\'s not used to train models, not sold on to third parties, and certificate data is encrypted at rest. GDPR is baked in from day one, not added after someone complains.',
  },
  {
    q: 'Does it work without a signal on site?',
    a: 'Voice capture is buffered locally when there\'s no signal. Processing happens when you reconnect — which is almost always by the time you\'re back in the van. The report is ready to finalise before you get home.',
  },
  {
    q: 'Can it handle multiple circuits on one job?',
    a: 'Yes. You dictate as you work through the board, and each circuit is added to the test results schedule. Periodic inspections with thirty-plus circuits take the length of the inspection itself, not twice that with a write-up afterwards.',
  },
]

const problems = [
  {
    title: 'The inspection is the fast bit.',
    desc: 'You did the walk, the dead tests, the live tests — three hours. Then it\'s another two hours in the van typing it all out, trying to remember which circuit had what reading, which observation was C2 and which was C3.',
  },
  {
    title: 'A torch, a meter, and a biro.',
    desc: 'Writing in a notebook, transcribing later, mis-copying a figure, issuing a certificate with a typo that comes back on you. All because certification was designed for a desk and you work up a ladder.',
  },
  {
    title: 'Generic apps don\'t know electrical.',
    desc: 'Most voice apps are glorified dictation. CertVoice understands C1, C2, C3, FI, Zs, R1+R2, insulation resistance, polarity, earth electrode. The vocabulary of the trade, not a best guess from a general model.',
  },
]

export default function CertVoicePage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CertVoice',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description:
        'Voice-first BS 7671 certification for UK electricians. Dictate findings on site and CertVoice builds compliant EICR, EIC and Minor Works certificates.',
      url: 'https://certvoice.co.uk',
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
        { '@type': 'ListItem', position: 3, name: 'CertVoice', item: 'https://autaimate.com/products/certvoice' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="CertVoice | Voice-First BS 7671 EICR & EIC Certificate App"
        description="Speak your findings on site. CertVoice builds BS 7671-compliant EICR, EIC and Minor Works certificates for UK electricians. Voice-first inspection reporting — no keyboard, no evening write-ups."
        canonical="/products/certvoice"
        keywords="EICR voice app, voice electrical certificate app, BS 7671 voice reporting, EIC generator app, minor works voice app, electrician voice to report, voice first EICR, UK electrician reporting app"
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
            <li className="text-white/70">CertVoice</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-rose-500/15 border border-rose-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-rose-400 rounded-full pulse-dot" />
            <span className="text-rose-400 text-sm font-semibold uppercase tracking-wider">Voice-First · BS 7671</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Speak the findings.{' '}
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-orange-400 bg-clip-text text-transparent">The certificate builds itself.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            CertVoice turns your voice into BS 7671-compliant EICR, EIC and Minor Works certificates. Dictate on site — circuit, reading, observation, code — and the right information lands in the right field. No keyboard. No 9pm write-up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://certvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try CertVoice
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>
        </section>

        {/* The problem */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Why certification is <span className="text-orange-500">broken.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Most electrical software was built by developers who've never stood on a ladder in a roof space with a meter and a torch in their mouth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-rose-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What CertVoice does */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-center">
            Speak like an <span className="text-orange-500">electrician.</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 text-center max-w-2xl mx-auto">
            CertVoice is trained on the vocabulary of UK electrical inspection — not generic dictation.
          </p>
          <div className="space-y-5 text-white/70 text-lg leading-relaxed">
            <p>
              You talk the way you'd talk to an apprentice. "Circuit 4, ring final, 2.5 twin and earth, Zs at the furthest point 0.52, R1+R2 0.81, insulation resistance above 299 megohm on all combinations, one observation, C3, plastic CU." CertVoice extracts the circuit, the measurements, the observation, the code — and fills the correct boxes on the correct schedule.
            </p>
            <p>
              When you're done, the certificate is ready. Review it, sign it, issue it. The whole inspection — including the paperwork — is finished in the time it used to take just to walk the board.
            </p>
            <p>
              Pair CertVoice with <a href="https://workproof.co.uk" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">WorkProof</a> for photographic evidence your assessor can't dispute, or <Link to="/products/tradecalcs" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">TradeCalcs</Link> for the BS 7671 calculations behind the results.
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
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-rose-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-rose-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            The job's done when the job's done.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            No evening write-ups. No transcription errors. No missing observations because you forgot by the time you got home.
          </p>
          <a href="https://certvoice.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Try CertVoice
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
