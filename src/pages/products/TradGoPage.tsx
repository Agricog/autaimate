import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneMissed, MessageSquare, MessageCircle, Bot, CheckCircle2, Shield, Zap, Star, ChevronRight, PoundSterling } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const FAQS = [
  {
    q: 'What is TradGo?',
    a: 'TradGo is an AI agent for UK electricians and trades that catches the customers you can\'t get to while you\'re working. It handles missed calls, WhatsApp messages, and website chat from one inbox, replies in your voice, and holds customers warm until you\'re free.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. You keep the same number on your van, cards, Google listing, and Facebook page. TradGo slots in behind your existing number using call forwarding on unanswered calls. Setup takes minutes, not days.',
  },
  {
    q: 'How does missed call text-back work?',
    a: 'When you don\'t pick up a call, TradGo answers with a short voice message explaining you\'re on a job and will be in touch. It then texts the caller within seconds, asks what they need, and starts a conversation. The AI handles the rest until you\'re free to take over.',
  },
  {
    q: 'Does the AI really sound like me?',
    a: 'Yes. TradGo is trained on the way you talk — your phrases, your tone, the specifics of your trade. It doesn\'t read a generic corporate script. Customers report feeling like they\'re chatting with the tradesman, not a call centre.',
  },
  {
    q: 'Can TradGo give customers prices?',
    a: 'Yes, but only prices you\'ve approved. Every pricing response is surfaced to your dashboard before it\'s sent. You can edit, approve, or reject in one tap. No rogue quotes, no AI cocking up your margins.',
  },
  {
    q: 'Which channels does TradGo cover?',
    a: 'Three channels, one inbox: missed-call text-back on your landline or mobile, WhatsApp Business responses, and a website chat widget you drop into your existing site with one line of code. Same AI across all three.',
  },
  {
    q: 'How much does TradGo cost?',
    a: 'Fifty-nine pounds a month. Fourteen-day free trial. Cancel anytime. One job caught from a missed call pays for the year.',
  },
  {
    q: 'What does the website chat widget need?',
    a: 'One line of code pasted into your site. Works on WordPress, Wix, Squarespace, Shopify, and any hand-coded site. No plugin to configure, no CMS lock-in. If you can edit your site, you can install the widget.',
  },
  {
    q: 'Does TradGo book jobs into my calendar?',
    a: 'It can propose times based on slots you define, then push confirmed bookings into your calendar (Google, Apple, Outlook). You keep final say — TradGo drafts, you approve.',
  },
  {
    q: 'Does TradGo ask for Google reviews?',
    a: 'Yes. There\'s a manual Google review request button on the dashboard. When you\'ve finished a job and the customer is happy, tap the button and TradGo sends a polite review request with your review link. No auto-spam — you pick the moment.',
  },
  {
    q: 'What about GDPR and customer data?',
    a: 'TradGo is built on EU-region infrastructure with encryption in transit and at rest. Conversations are stored against the customer record for your audit trail, but can be deleted on request. Standard GDPR data subject rights supported.',
  },
  {
    q: 'Is TradGo just for electricians?',
    a: 'It\'s built around trades — electricians, plumbers, heating engineers, builders, roofers, gas safe engineers. The voice training and pricing logic work for any trade where customers call for a ballpark and then book. If you\'re unsure, contact us and we\'ll tell you straight.',
  },
  {
    q: 'What happens if TradGo gets it wrong?',
    a: 'Because every pricing message requires your sign-off before it leaves the dashboard, the AI can\'t commit you to anything you haven\'t approved. For non-price responses, the conversation is logged and you can jump in at any point. The human is always the final word.',
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
      '@id': 'https://autaimate.com/products/tradgo#webpage',
      url: 'https://autaimate.com/products/tradgo',
      name: 'TradGo | AI Agent for UK Electricians & Trades | Autaimate',
      description: 'TradGo catches the customers you miss while working. Missed-call text-back, WhatsApp, and website chat — all in your voice. £59/month, 14-day free trial.',
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
        { '@type': 'ListItem', position: 3, name: 'TradGo', item: 'https://autaimate.com/products/tradgo' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'TradGo',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: 'AI agent for UK electricians and trades. Missed-call text-back, WhatsApp, and website chat in one inbox.',
      url: 'https://tradgo.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '59',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '59',
          priceCurrency: 'GBP',
          unitText: 'MONTH',
        },
        description: '£59 per month. 14-day free trial. Cancel anytime.',
      },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      featureList: [
        'Missed call text-back with voice greeting',
        'WhatsApp Business auto-response',
        'Website chat widget (one line of code)',
        'AI trained on your voice and tone',
        'Pricing approval workflow',
        'Google review request button',
        'Unified inbox across all channels',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to set up TradGo on your trade business',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Sign up', text: 'Start the 14-day free trial at tradgo.co.uk. No card needed to begin.' },
        { '@type': 'HowToStep', position: 2, name: 'Train the voice', text: 'Answer a short onboarding so TradGo picks up your tone, key phrases, and trade-specific wording.' },
        { '@type': 'HowToStep', position: 3, name: 'Divert unanswered calls', text: 'Set your phone to forward unanswered calls to the TradGo number. Takes minutes on any UK mobile.' },
        { '@type': 'HowToStep', position: 4, name: 'Connect WhatsApp', text: 'Link your WhatsApp Business number so TradGo can reply to WhatsApp enquiries.' },
        { '@type': 'HowToStep', position: 5, name: 'Drop the chat widget in', text: 'Paste one line of code into your website. Works on WordPress, Wix, Squarespace, Shopify, and plain HTML.' },
        { '@type': 'HowToStep', position: 6, name: 'Approve prices from the dashboard', text: 'Every pricing response waits for your tap before it sends. Get back to the customer in seconds without losing control.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/products/tradgo#article',
      headline: 'TradGo: The AI Agent That Catches the Customers You Miss While Working',
      description: 'How TradGo converts missed calls, WhatsApp messages, and website enquiries into booked jobs without the tradesman typing a reply.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-03-15',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/products/tradgo#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'TradGo Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Missed call text-back', description: 'An automated SMS sent to a caller whose call was not answered, turning a missed call into a live conversation.' },
        { '@type': 'DefinedTerm', name: 'AI agent', description: 'A software assistant that holds a conversation with a customer on behalf of a business, within rules and approvals set by the owner.' },
        { '@type': 'DefinedTerm', name: 'Unified inbox', description: 'A single interface that combines messages from multiple channels — phone, WhatsApp, web chat — into one thread per customer.' },
        { '@type': 'DefinedTerm', name: 'Call forwarding', description: 'A network feature where unanswered calls are automatically sent to another number.' },
        { '@type': 'DefinedTerm', name: 'Pricing approval', description: 'A workflow where any message containing a price must be signed off by the business owner before being sent to the customer.' },
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

export default function TradGoPage() {
  return (
    <Layout>
      <SEO
        title="TradGo | AI Agent for UK Electricians & Trades | Autaimate"
        description="TradGo catches the customers you miss while working. Missed-call text-back, WhatsApp, and website chat — all in your voice. £59/month, 14-day free trial."
        canonical="https://autaimate.com/products/tradgo"
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
          <li className="text-ink">TradGo</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft border border-teal/20 text-teal text-xs font-medium mb-6">
          <Bot className="w-3 h-3" /> AI agent · Missed calls · WhatsApp · Web chat
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink">
          You can't answer the phone <span className="text-teal">up a ladder.</span>
        </h1>
        <p className="text-xl text-slate max-w-3xl mb-8">
          TradGo does. It picks up the missed calls, the WhatsApp messages, and the enquiries coming off your website — replies in your voice, keeps customers warm, and lines up jobs while you're elbow-deep in a fuse board. £59 a month. Catch one job and it's paid for itself.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://tradgo.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
            Start 14-day free trial <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
            Ask us a question
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="text-xs uppercase tracking-wider text-teal mb-2 font-semibold">Quick Answer</div>
          <p className="text-lg text-ink">
            TradGo is an AI agent for UK electricians and trades. It handles missed calls, WhatsApp, and website chat in your voice — turning enquiries you'd otherwise lose into booked jobs. £59/month, 14-day free trial.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">The cost of a missed call</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate">
          <div>
            <p className="mb-4">
              The average trade business in the UK misses a third of its inbound calls. That's not laziness — that's physics. You can't answer the phone when you're on a stepladder or pulling cable through a ceiling. By the time you call back, the customer has already rung the next sparky on Google and booked them in.
            </p>
            <p>
              Every missed call that doesn't come back is a job lost. Over a year, that's thousands of pounds gone to a competitor who was luckier with timing, not better at the trade.
            </p>
          </div>
          <div>
            <p className="mb-4">
              The old fix is an answering service. Expensive. Generic. Scripted like a call centre. The customer knows within ten seconds they're talking to someone who has no idea what an RCD is. They hang up and try the next name on the list.
            </p>
            <p>
              TradGo is the modern fix. An AI agent trained on your voice that replies within seconds, sounds like you, and — crucially — never quotes a price without your sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* Three channels */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">Three channels. One inbox. Your voice.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <PhoneMissed className="w-8 h-8 text-teal mb-3" />
            <div className="font-semibold text-lg mb-2 text-ink">Missed call text-back</div>
            <p className="text-slate">Unanswered calls get a short voice message from TradGo, then an SMS within seconds. The AI keeps the conversation going until you're free.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <MessageSquare className="w-8 h-8 text-teal mb-3" />
            <div className="font-semibold text-lg mb-2 text-ink">WhatsApp Business</div>
            <p className="text-slate">Plug your WhatsApp Business number into TradGo and the same AI agent handles enquiries the moment they land. No app-switching for the customer.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <MessageCircle className="w-8 h-8 text-teal mb-3" />
            <div className="font-semibold text-lg mb-2 text-ink">Website chat widget</div>
            <p className="text-slate">One line of code dropped into your existing site. Visitors get instant replies, you get leads captured 24/7 without building a new website.</p>
          </div>
        </div>
      </section>

      {/* Keep your number */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-ink">You keep your number. Nothing changes on the van.</h2>
          <p className="text-slate mb-3">
            The thing tradesmen worry about with any phone tech is being told to change their number. Decades of customers know your mobile. It's on the van, the business cards, the Google listing, your Facebook page, the fridge magnet you handed out in 2012. Changing it is out of the question.
          </p>
          <p className="text-slate">
            TradGo doesn't touch your number. You set call forwarding on your phone so unanswered calls divert to TradGo, and that's the whole setup. Customers still ring the number they've always rung. You still answer it when you can. TradGo only steps in when you can't.
          </p>
        </div>
      </section>

      {/* Approval workflow */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Every price needs your sign-off</h2>
        <div className="space-y-4 text-slate max-w-4xl">
          <p>
            The fear with any AI handling customer conversations is that it gives the wrong price. Quotes £200 for a job that should be £600. Commits you to a callout rate you'd never have offered. Turns a polite enquiry into a binding quote before you've seen the job.
          </p>
          <p>
            TradGo blocks that completely. Any response containing a price — ballpark, callout fee, hourly rate, anything numeric with a pound sign — is held in your dashboard for approval before it sends. You tap approve, edit, or reject. Customer gets the reply in seconds either way because the AI can hold the conversation with holding-pattern messages ("let me get you a proper figure on that, bear with me").
          </p>
          <p>
            The AI is fast. You're in control. Those two things are not mutually exclusive if the software is built properly.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-teal" />
            <h2 className="text-2xl md:text-3xl font-bold text-ink">Google reviews, on your terms</h2>
          </div>
          <p className="text-slate mb-3">
            Reviews win jobs. Most review software is auto-spam — a pushy email the moment a job's invoiced, whether the customer's happy or not. That's how you get one-star reviews from people who didn't want to be chased.
          </p>
          <p className="text-slate">
            TradGo has a manual Google review request button on the dashboard. Job finished, customer happy, you press the button. Polite, personal, timed by you. The customer gets your review link and leaves a proper five-star review because you asked at the right moment — not because a robot spammed them at 9pm.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Pricing</h2>
        <div className="p-8 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="flex items-center gap-2 mb-2">
            <PoundSterling className="w-6 h-6 text-teal" />
            <div className="text-3xl font-bold text-ink">59 / month</div>
          </div>
          <p className="text-slate mb-4">14-day free trial. No card needed to start. Cancel anytime.</p>
          <ul className="grid md:grid-cols-2 gap-2 text-ink">
            {['All three channels (calls, WhatsApp, web chat)', 'AI trained on your voice', 'Pricing approval workflow', 'Unified inbox', 'Google review request button', 'UK support'].map((f) => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> {f}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-slate mt-4">Catch one missed job a month and TradGo is paid for. Most trades catch that in the first week.</p>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Built for UK trades</h2>
        <div className="grid md:grid-cols-3 gap-4 text-slate">
          {['Electricians', 'Plumbers', 'Heating engineers', 'Gas Safe engineers', 'Builders & general trades', 'Roofers', 'Locksmiths', 'Decorators', 'Landscapers'].map((t) => (
            <div key={t} className="p-4 rounded-xl bg-white border border-sand shadow-card">
              <CheckCircle2 className="w-5 h-5 text-teal mb-2" />
              <div className="font-semibold text-ink">{t}</div>
            </div>
          ))}
        </div>
        <p className="text-slate mt-6 max-w-3xl">
          The common thread: one-van or small-team operations where customers ring for a ballpark, the guv'nor is on the tools, and a missed call is a job lost. If that's you, TradGo is built for you.
        </p>
      </section>

      {/* Security & GDPR */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-teal" />
            <h2 className="text-2xl md:text-3xl font-bold text-ink">GDPR and data, sorted properly</h2>
          </div>
          <p className="text-slate mb-3">
            TradGo runs on EU-region infrastructure. Conversations are encrypted in transit and at rest. Customer records are tied to your account and can be exported or deleted on request, which keeps you on the right side of GDPR without you having to think about it.
          </p>
          <p className="text-slate">
            WhatsApp integration uses the official WhatsApp Business API — no grey-area third-party scrapers. SMS goes through UK-licensed carriers. Web chat data never leaves our infrastructure and isn't shared with ad networks.
          </p>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <h2 className="text-3xl font-bold mb-4 text-ink">Built for trades by someone who's been on the tools</h2>
          <p className="text-slate mb-4">
            TradGo comes out of Autaimate. Our founder spent 40 years in UK construction and trades before building software. The reason TradGo sounds like a sparky on the phone instead of a call-centre script is that it was designed by someone who picked up the phone on a job for four decades.
          </p>
          <p className="text-slate mb-4">
            TradGo isn't a repurposed American chatbot with a UK flag on the homepage. It's built in the UK for UK trades, with UK phone networks, UK carriers, and UK GDPR requirements in mind from day one.
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
            <p className="text-sm text-slate">Free BS 7671 calculators for UK electricians and heating engineers.</p>
          </Link>
          <Link to="/products/certvoice" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">CertVoice</div>
            <p className="text-sm text-slate">Voice-first BS 7671 electrical certificates — finish the paperwork on site.</p>
          </Link>
          <Link to="/products/snaglog" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">SnagLog</div>
            <p className="text-sm text-slate">AI-powered snagging reports for property inspectors and builders.</p>
          </Link>
          <Link to="/for/construction" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Software for UK construction & trades</div>
            <p className="text-sm text-slate">Every Autaimate product built for the industry, in one place.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Commission a niche product</div>
            <p className="text-sm text-slate">Got a trade problem that needs its own software? See how it gets built.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-teal-soft border border-teal/20 text-center">
          <Zap className="w-10 h-10 text-teal mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-ink">Stop losing jobs to the next sparky on Google</h2>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            TradGo picks up what you can't. Start the free trial — no card, no lock-in, fourteen days to see it work on your actual business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://tradgo.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
              Start 14-day free trial <ArrowRight className="w-4 h-4" />
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
