import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Mic, FileCheck, Zap, Shield, Clock, ChevronRight } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const FAQS = [
  {
    q: 'What is CertVoice?',
    a: 'CertVoice is a voice-first UK electrical certificate platform. Electricians dictate test results on site — CertVoice turns the dictation into a compliant BS 7671 certificate PDF, automatically, before they leave the job.',
  },
  {
    q: 'Which certificates does CertVoice generate?',
    a: 'Electrical Installation Certificates (EIC), Electrical Installation Condition Reports (EICR), Minor Electrical Installation Works Certificates, and Domestic/Non-Domestic variants. All outputs align with the current edition of BS 7671.',
  },
  {
    q: 'Does CertVoice work offline?',
    a: 'Yes. The platform is built as a progressive web app with offline-first dictation. You can record, tag circuits, and draft a certificate in a loft with no signal. It syncs and finalises when the connection returns.',
  },
  {
    q: 'How accurate is the voice transcription for electrical terminology?',
    a: 'CertVoice uses a domain-tuned model that recognises UK electrical terminology, BS 7671 regulation references, circuit designations, and common test values. Every transcription is surfaced for review before the certificate is finalised.',
  },
  {
    q: 'Can I edit a certificate after dictation?',
    a: 'Yes. Every field extracted from the dictation is editable in a structured form. You approve or amend values before generating the final PDF, so the engineer always stays in control.',
  },
  {
    q: 'Does CertVoice replace my calibrated test equipment?',
    a: 'No. CertVoice is a reporting and certification platform — it captures, structures, and outputs the readings you take with calibrated equipment. Your test gear remains the source of truth for measurements.',
  },
  {
    q: 'Is the PDF output legally compliant?',
    a: 'CertVoice certificates follow the prescribed format for BS 7671 installation certificates and condition reports. You sign off as the competent person — CertVoice is the tool that prepares the paperwork to the required standard.',
  },
  {
    q: 'What data is stored and where?',
    a: 'Certificate data is held in SmartSuite on EU-region infrastructure. Audio dictations can be auto-deleted after transcription. Data is encrypted in transit and at rest. Full GDPR controls including data export and erasure on request.',
  },
  {
    q: 'How is CertVoice priced?',
    a: 'CertVoice is a monthly subscription with a free trial. Pricing scales with the number of engineers and certificates. Contact us for a current quote — there is no long-term contract.',
  },
  {
    q: 'Can multiple engineers use one account?',
    a: 'Yes. Accounts support multiple engineers with individual logins, per-engineer certificate histories, and a shared client database. Senior engineers can review and countersign certificates produced by apprentices.',
  },
  {
    q: 'Does CertVoice integrate with job management software?',
    a: 'CertVoice can export completed certificates as PDF and structured data. Direct integrations with common UK trade job management platforms can be built on request as part of a commission.',
  },
  {
    q: 'Who built CertVoice?',
    a: 'CertVoice is built by Autaimate, a UK product studio. It is one of several voice-first tools in the portfolio alongside InspectVoice for playground inspection. Our founder spent 40 years in construction and trades before building software.',
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
      '@id': 'https://autaimate.com/products/certvoice#webpage',
      url: 'https://autaimate.com/products/certvoice',
      name: 'CertVoice | Voice-First BS 7671 Electrical Certificates | Autaimate',
      description: 'CertVoice turns spoken electrical test results into BS 7671 certificates on site. Voice-to-EIC, EICR, and Minor Works — finished before you leave.',
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
        { '@type': 'ListItem', position: 3, name: 'CertVoice', item: 'https://autaimate.com/products/certvoice' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'CertVoice',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android (PWA)',
      description: 'Voice-first platform for producing BS 7671 compliant electrical certificates on site.',
      url: 'https://certvoice.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '0',
        description: 'Free trial available; monthly subscription thereafter.',
      },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      featureList: [
        'Voice-to-certificate dictation',
        'BS 7671 compliant output',
        'Offline-first PWA',
        'Multi-engineer accounts',
        'PDF generation on device',
        'Certificate history and client database',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to produce a BS 7671 electrical certificate with CertVoice',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Start a new certificate', text: 'Open CertVoice on site, select the client and certificate type — EIC, EICR, or Minor Works.' },
        { '@type': 'HowToStep', position: 2, name: 'Dictate the readings', text: 'Speak your test results circuit by circuit. CertVoice recognises BS 7671 terminology and circuit designations.' },
        { '@type': 'HowToStep', position: 3, name: 'Review the extracted data', text: 'CertVoice structures the dictation into certificate fields. Correct anything that needs it before sign-off.' },
        { '@type': 'HowToStep', position: 4, name: 'Generate the PDF', text: 'The compliant BS 7671 PDF is generated on the device — no wait for a back-office admin team.' },
        { '@type': 'HowToStep', position: 5, name: 'Issue to the client', text: 'Email, download, or log the certificate in the CertVoice history. You leave the site with the job closed.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/products/certvoice#article',
      headline: 'CertVoice: Voice-First Electrical Certificates That Finish on Site',
      description: 'How CertVoice removes evening admin from BS 7671 certification by turning dictation into a compliant PDF before the engineer leaves the job.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-03-01',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/products/certvoice#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'CertVoice Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'BS 7671', description: 'The British Standard for electrical installations — the IET Wiring Regulations.' },
        { '@type': 'DefinedTerm', name: 'EIC', description: 'Electrical Installation Certificate — issued for new electrical work.' },
        { '@type': 'DefinedTerm', name: 'EICR', description: 'Electrical Installation Condition Report — issued after periodic inspection of an existing installation.' },
        { '@type': 'DefinedTerm', name: 'Minor Works Certificate', description: 'Certificate for minor additions or alterations that do not form a new circuit.' },
        { '@type': 'DefinedTerm', name: 'PWA', description: 'Progressive Web App — installs to a home screen and works offline without an app store.' },
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

export default function CertVoicePage() {
  return (
    <Layout>
      <SEO
        title="CertVoice | Voice-First BS 7671 Electrical Certificates | Autaimate"
        description="CertVoice turns spoken electrical test results into BS 7671 certificates on site. Voice-to-EIC, EICR, and Minor Works — finished before you leave."
        canonical="https://autaimate.com/products/certvoice"
        ogImage="https://autaimate.com/og-image.jpg"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(SCHEMA_GRAPH)}</script>
      </Helmet>

      <div className="cosmic-bg" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 pt-32 text-sm text-slate">
        <ol className="flex items-center gap-2">
          <li><Link to="/" className="hover:text-teal transition-colors">Home</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li><Link to="/#products" className="hover:text-teal transition-colors">Products</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-ink">CertVoice</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft border border-teal/20 text-teal text-xs font-medium mb-6">
          <Mic className="w-3 h-3" /> Voice-first · BS 7671 compliant · Offline-ready
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink">
          Finish the <span className="text-teal">certificate</span> before you leave the site.
        </h1>
        <p className="text-xl text-slate max-w-3xl mb-8">
          CertVoice is a voice-first electrical certificate platform for UK electricians. Dictate your test results on the job — CertVoice turns what you said into a compliant BS 7671 certificate PDF before the van leaves the kerb. No evening paperwork. No Sunday admin.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://certvoice.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
            Open CertVoice <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
            Talk to us
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="text-xs uppercase tracking-wider text-teal mb-2 font-semibold">Quick Answer</div>
          <p className="text-lg text-ink">
            CertVoice is a UK voice-first electrical certificate app. Electricians dictate test results on site — it produces a compliant BS 7671 EIC, EICR, or Minor Works PDF automatically, offline, before you leave the job.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">The problem every electrician knows</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate">
          <div>
            <p className="mb-4">
              You finish the test. You pack up the kit. You get home at half six. Dinner, kids, a sit-down — and then the laptop comes out because the certificate still needs writing up. Your notebook is a mess. Half the readings are on the back of a receipt. You cross-check circuits against your head-torch photos because the scribble makes no sense six hours on.
            </p>
            <p>
              That admin is costing you evenings and weekends. And it's where mistakes get made — a transposed figure, a missed circuit, a client sitting on an outstanding certificate three weeks later because life got in the way of the paperwork.
            </p>
          </div>
          <div>
            <p className="mb-4">
              The legacy certificate software on the market makes this worse, not better. Desktop-bound. Endless form fields. No use when you're in a loft with no signal. Priced for a nationwide firm, not a one-van sparky or a small testing crew.
            </p>
            <p>
              CertVoice was built to close this gap. It's priced for the trade, it runs on the phone or tablet you already carry, and the whole job — dictation, structuring, PDF, issue — happens before you drive away.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">How CertVoice works</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: '1', t: 'Start the certificate', d: 'Pick client, install, and certificate type: EIC, EICR, or Minor Works.' },
            { n: '2', t: 'Dictate the readings', d: 'Speak circuit by circuit. BS 7671 terminology is understood — Zs, R1+R2, IR, PFC, Ze.' },
            { n: '3', t: 'Review the extract', d: 'Every value appears in a structured form. Correct anything before sign-off.' },
            { n: '4', t: 'Generate the PDF', d: 'On-device PDF, formatted to the BS 7671 template, ready to issue.' },
            { n: '5', t: 'Close the job', d: 'Email the client, log it in history, drive away with the paperwork done.' },
          ].map((s) => (
            <div key={s.n} className="p-5 rounded-xl bg-white border border-sand shadow-card">
              <div className="text-teal font-bold text-2xl mb-2">{s.n}</div>
              <div className="font-semibold mb-2 text-ink">{s.t}</div>
              <p className="text-sm text-slate">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">Built for how sparkies actually work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { i: Mic, t: 'Voice-first, not form-first', d: 'Most certificate software is a long form with a login. CertVoice reverses it. You speak, it structures. The form is for review, not for entry.' },
            { i: Zap, t: 'Offline-first PWA', d: 'Lofts, plant rooms, new-build sites in the middle of nowhere — no signal needed. CertVoice records and drafts offline, syncs when you reconnect.' },
            { i: FileCheck, t: 'BS 7671 compliant output', d: 'The PDF matches the prescribed format for EIC, EICR, and Minor Works certificates. You sign off as the competent person.' },
            { i: Shield, t: 'GDPR by design', d: 'EU-region storage, encryption in transit and at rest, auto-deletion of audio after transcription. Client data treated properly.' },
            { i: Clock, t: 'Finished on site', d: 'On-device PDF generation. No "wait for it to process." You issue the certificate before the tools are back in the van.' },
            { i: CheckCircle2, t: 'Multi-engineer accounts', d: 'Firms with apprentices or multiple testing engineers can share one account, with review and countersign for less-experienced staff.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white border border-sand shadow-card">
              <f.i className="w-6 h-6 text-teal mb-3" />
              <div className="font-semibold text-lg mb-2 text-ink">{f.t}</div>
              <p className="text-slate">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Who CertVoice is built for</h2>
        <div className="grid md:grid-cols-3 gap-6 text-slate">
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Sole-trader electricians</div>
            <p>One van, domestic and light commercial work, and no office team to write up paperwork. CertVoice gives a one-man operation the certification output of a firm with admin staff.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Small testing & inspection firms</div>
            <p>Multi-engineer teams doing EICRs day in, day out. CertVoice removes the end-of-day reporting bottleneck and standardises output across engineers of different experience levels.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Facilities & estate teams</div>
            <p>In-house maintenance electricians at schools, hospitals, housing associations, and commercial estates who need fast, compliant paperwork for their own audit trail.</p>
          </div>
        </div>
      </section>

      {/* Why voice */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Why voice beats typing for testing</h2>
        <div className="space-y-4 text-slate max-w-4xl">
          <p>
            Testing is a two-handed job. One hand on the instrument, the other on the board. A clipboard wedged under an arm, a head-torch on, safety glasses steamed up. Anyone who has tried to type test values into a phone in that posture knows it doesn't work — you end up scribbling on paper and retyping at the kitchen table.
          </p>
          <p>
            Voice changes the ergonomics completely. You read the meter, say the reading, move to the next circuit. The phone sits in a pocket or magnetic clamp. The recording keeps up with the pace of the work, not the other way round. And because the dictation happens in real time, accuracy improves — you're reading fresh values, not transcribing a smudged notebook six hours later.
          </p>
          <p>
            The structured extraction behind CertVoice is what makes voice useful rather than just novel. Generic transcription turns speech into a paragraph. CertVoice turns it into a certificate: circuit designation, cable size, protective device, Zs, R1+R2, IR, PFC, test instrument serial, signed off and PDF-ready. The model has been trained on UK electrical terminology and the structure of BS 7671 certificates specifically.
          </p>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <h2 className="text-3xl font-bold mb-4 text-ink">Built by people who've been on the tools</h2>
          <p className="text-slate mb-4">
            CertVoice is built by Autaimate. Our founder spent 40 years in UK construction and trades before founding the studio. We don't design in a Shoreditch loft and guess at what sparkies need — we build for the trade because we came from the trade.
          </p>
          <p className="text-slate mb-4">
            CertVoice sits in a family of voice-first products. Its sibling is <Link to="/products/inspectvoice" className="text-teal hover:text-teal-dark underline">InspectVoice</Link>, which applies the same voice-to-report pattern to BS EN 1176 playground inspections. The approach is the same: dictate on site, structure the data, generate the PDF before you leave.
          </p>
          <p className="text-slate text-sm">
            — Mick, Autaimate founder. <a href="https://www.linkedin.com/company/autaimate" className="text-teal hover:text-teal-dark underline">LinkedIn</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-ink">Frequently asked questions</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 rounded-xl bg-white border border-sand shadow-card">
              <summary className="cursor-pointer font-semibold flex items-center justify-between text-ink">
                {f.q}
                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition text-teal" />
              </summary>
              <p className="mt-3 text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-ink">Where to go next</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/products/tradecalcs" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">TradeCalcs</div>
            <p className="text-sm text-slate">Free BS 7671 calculators for UK electricians — cable sizing, voltage drop, circuit design.</p>
          </Link>
          <Link to="/products/inspectvoice" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">InspectVoice</div>
            <p className="text-sm text-slate">The sibling voice-first product — BS EN 1176 playground inspections with the same pattern.</p>
          </Link>
          <Link to="/for/construction" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Software for UK construction & trades</div>
            <p className="text-sm text-slate">See every Autaimate product built for the construction industry.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Commission a niche product</div>
            <p className="text-sm text-slate">Got a trade workflow that needs its own tool? See how a new product gets born.</p>
          </Link>
          <Link to="/products/tradgo" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">TradGo</div>
            <p className="text-sm text-slate">AI agent that catches missed calls, WhatsApp and web chat while you're working.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-teal-soft border border-teal/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-ink">Put the paperwork back on site where it belongs</h2>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            CertVoice is built for UK electricians who'd rather test circuits than type them. Dictate the certificate, review it, issue it — before you leave.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://certvoice.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
              Open CertVoice <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
              Ask us a question
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
