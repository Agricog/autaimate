import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const channels = [
  {
    title: 'Missed call text-back',
    desc: 'You miss a call while you\'re working. TradGo picks up, plays a short voice message in your tone, and texts the customer within seconds. The AI takes over from there — finds out what they need, gives a ballpark, keeps them warm until you\'re free.',
  },
  {
    title: 'WhatsApp enquiries',
    desc: 'Same AI agent, responding instantly to WhatsApp messages. Customers get an answer at ten at night or six in the morning, before they move on to the next tradesman on the search results.',
  },
  {
    title: 'Website chat widget',
    desc: 'One line of code on your existing site. Same agent handling enquiries from visitors — finding out postcode, scope, urgency, and getting it into your dashboard before you\'ve seen the email notification.',
  },
]

const differentiators = [
  {
    title: 'Keep your number. Keep your marketing.',
    desc: 'Van signage, business cards, Google Business Profile, existing website — none of it changes. You set call forwarding on your phone so unanswered calls go to TradGo. That\'s the entire setup.',
  },
  {
    title: 'Sounds like you, not a bot.',
    desc: 'The AI is trained on your tone and the way you talk to customers. No "Please hold while I transfer you to a relevant department" nonsense. Just the way a decent tradesman actually speaks.',
  },
  {
    title: 'You approve every price that goes out.',
    desc: 'Ballpark quotes are drafted by the AI and sent to your dashboard for approval. Edit, approve, or reject with a tap. The customer gets a professional reply with a number you\'ve signed off on — not a guess.',
  },
  {
    title: '£59/month. Cancel anytime.',
    desc: '14-day free trial. No annual contract, no setup fee, no "sorry, you\'re locked in for twelve months." Because you shouldn\'t have to pay for software you\'ve stopped using.',
  },
]

const flowSteps = [
  { num: '1', title: 'Phone rings', desc: 'You\'re up a ladder, in a loft, or elbow-deep in a fuse board. Can\'t answer.' },
  { num: '2', title: 'Call forwards', desc: 'After X rings, the call goes to TradGo. You set that once on your phone and forget.' },
  { num: '3', title: 'AI answers', desc: 'Short voice message to the caller, then an instant text back in your tone.' },
  { num: '4', title: 'Conversation happens', desc: 'AI asks what they need, gets postcode, gives a ballpark price if you\'ve pre-approved it.' },
  { num: '5', title: 'You review and finish', desc: 'Back in the van, check your dashboard, approve the quote, take the job. They never booked the next guy.' },
]

const faqs = [
  {
    q: 'Do I have to change my phone number?',
    a: 'No. You keep your existing number on the van, the cards, Google Business Profile and everywhere else. You just set call forwarding on your phone so unanswered calls divert to TradGo. That\'s the only change.',
  },
  {
    q: 'Will the customer know they\'re talking to AI?',
    a: 'The short voice message sounds like you — warm, brief, honest. The text conversation uses your tone and phrases. Most customers experience it as a responsive tradesman who texts back fast. You\'re not deceiving anyone — you\'re just answering quickly instead of missing them.',
  },
  {
    q: 'How is this different from an answerphone or answering service?',
    a: 'An answerphone loses the customer the moment they hear "leave a message." An answering service hands them to someone who doesn\'t know your prices or your area. TradGo has an actual conversation, qualifies the enquiry, gives a ballpark, and keeps them engaged until you\'re free. The customer gets answers, not a callback promise.',
  },
  {
    q: 'What happens with pricing quotes?',
    a: 'The AI drafts ballpark quotes based on the job description and pricing rules you\'ve set up. Every quote with a number on it lands in your dashboard for approval before it\'s sent to the customer. You can edit, approve or reject. Nothing goes out with a price you haven\'t signed off on.',
  },
  {
    q: 'What about emergencies — out-of-hours callouts?',
    a: 'You set the rules. TradGo can flag urgent jobs, escalate after-hours enquiries to your phone by SMS, or just take the details and let you decide in the morning. The workflow is shaped around how you actually run your business, not a generic template.',
  },
  {
    q: 'Can I really cancel anytime?',
    a: 'Yes. Monthly rolling, no annual lock-in, no cancellation fee. If it\'s not paying for itself in saved jobs, stop. We\'d rather earn your £59 every month than trap you for a year.',
  },
  {
    q: 'How long does setup take?',
    a: 'Under an hour. Call forwarding on your phone is a two-minute job. Adding the website widget is one line of code, or we\'ll help if you\'ve never touched code before. WhatsApp business setup is the slowest bit, and even that\'s done in a sitting.',
  },
  {
    q: 'What about review requests?',
    a: 'There\'s a one-tap button on completed jobs to send a Google review request to the customer. Manual, because fake review clusters get flagged — but dead easy when the job\'s gone well and the moment is right.',
  },
]

export default function TradGoPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TradGo',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description:
        'AI agent for UK electricians and trades. Catches missed calls, WhatsApp messages and website chat enquiries — responds in the tradesman\'s voice and tone, with human approval on every quoted price.',
      url: 'https://tradgo.co.uk',
      offers: {
        '@type': 'Offer',
        price: '59',
        priceCurrency: 'GBP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '59',
          priceCurrency: 'GBP',
          unitText: 'MONTH',
        },
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
        { '@type': 'ListItem', position: 3, name: 'TradGo', item: 'https://autaimate.com/products/tradgo' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="TradGo | AI Missed Call & Chat Agent for UK Electricians & Trades"
        description="TradGo catches the customers you can't get to while you're working. Missed calls, WhatsApp and website chat — one AI agent in your voice, with human approval on every quote. £59/month, 14-day free trial, cancel anytime."
        canonical="/products/tradgo"
        keywords="missed call text back UK, AI agent for electricians, AI receptionist tradesmen, electrician missed call software, tradesman answering service UK, WhatsApp automation trades, website chat for tradesmen, AI chatbot for electricians, trade business lead capture, missed call conversion UK"
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
            <li className="text-white/70">TradGo</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500/15 border border-amber-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full pulse-dot" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">AI Agent · UK Trades</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Missed the call?{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">TradGo didn't.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            The customer who called while you were up a ladder just rang the next electrician. TradGo is the AI agent that catches them first — missed call text-back, WhatsApp, and website chat, all in your tone, with you approving every price before it goes out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://tradgo.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try TradGo free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            £59/month · 14-day free trial · Cancel anytime · Keep your existing phone number
          </p>
        </section>

        {/* Three channels */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Three channels. <span className="text-orange-500">One inbox.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Customers don\'t care how they reach you — as long as someone replies fast. TradGo makes sure that happens on every channel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {channels.map((c) => (
              <div key={c.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-amber-500/[0.06] hover:border-amber-500/30 transition-all">
                <h3 className="font-display text-lg font-bold text-amber-400 mb-3">{c.title}</h3>
                <p className="text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Why TradGo <span className="text-orange-500">actually works.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Because it respects how you already run your business — and the customer\'s time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-amber-400 mb-3">{d.title}</h3>
                <p className="text-white/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              What happens when <span className="text-orange-500">the phone rings.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From ringing phone to approved quote, without leaving the job you\'re on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {flowSteps.map((s) => (
              <div key={s.num} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-amber-500/[0.06] hover:border-amber-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-sm font-bold text-amber-400 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing callout */}
        <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 rounded-3xl p-8 lg:p-10 text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight">
              £59 a month. Catch one job. It\'s paid for itself.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Fourteen-day free trial. Rolling monthly after that — no contract, no hidden charges, no annual lock-in. Cancel with a tap the day it stops working for you.
            </p>
            <a href="https://tradgo.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start the 14-day free trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-amber-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-amber-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            The next missed call is the one that costs you the job.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Two weeks free. Keep your number, keep your website, keep doing the work you\'re already doing. Let TradGo handle the rest.
          </p>
          <a href="https://tradgo.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Start the free trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
