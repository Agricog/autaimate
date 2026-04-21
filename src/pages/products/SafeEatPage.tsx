import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const steps = [
  { num: '1', title: 'Diner scans the QR', desc: 'On the table, in the menu, on the door — wherever suits. No app. No login.' },
  { num: '2', title: 'They select allergens', desc: 'Fourteen recognised allergens, plus dietary preferences. Takes seconds.' },
  { num: '3', title: 'The menu filters', desc: 'Only dishes that are safe for them appear. Nothing to cross-reference. Nothing to ask the waiter.' },
  { num: '4', title: 'You get the audit trail', desc: 'Every interaction logged. EHO inspections become a conversation, not a panic.' },
  { num: '5', title: 'They come back', desc: 'Opt-in diner database, review prompts, targeted emails. Loyal customers turned into repeat bookings.' },
]

const benefits = [
  {
    title: 'Allergy diners are loyal.',
    desc: 'One in three UK adults lives with someone who has a food allergy or intolerance. The venues that look after them are the ones they bring their family, their mates and their workmates to — week after week.',
  },
  {
    title: 'Natasha\'s Law, handled.',
    desc: 'Allergen information is accurate, accessible and always current — because it\'s tied to your menu, not a laminated sheet that was right three months ago. One source of truth, automatically updated.',
  },
  {
    title: 'EHO visits become a conversation.',
    desc: 'When environmental health asks how you manage allergens, you show them the system. Process. Evidence. A running audit trail they can inspect live, not a consultant\'s folder somewhere in the office.',
  },
  {
    title: 'A retention engine, not just compliance.',
    desc: 'SafeEat captures opted-in allergy diners, prompts reviews at the right moment, and runs targeted emails for quiet weeks. The compliance tool that also fills tables on a wet Tuesday.',
  },
]

const faqs = [
  {
    q: 'How much does SafeEat cost?',
    a: '£29.99 a month. Rolling monthly, no annual contract. If the 30-day inspection-ready guarantee isn\'t met, the next three months are on us. Designed so tight-margin independents can actually afford it.',
  },
  {
    q: 'What\'s the 30-day inspection-ready guarantee?',
    a: 'Within 30 days of signing up, your allergen management and audit trail should be ready to show an EHO officer. If it isn\'t, the next three months of SafeEat are free. We believe in the system enough to back it.',
  },
  {
    q: 'Do diners need to download an app?',
    a: 'No. They scan the QR code on the table with their phone camera — same as they\'d scan any QR menu. Everything runs in the browser. No app store, no login, no account creation. One in ten seconds of friction and they\'re gone.',
  },
  {
    q: 'How does it integrate with our menu?',
    a: 'Your menu lives in SafeEat with allergen data tied to each dish. When the kitchen changes a recipe — new supplier, different sauce — you update once, and every customer-facing touchpoint (QR menu, printouts, staff reference) reflects the change. No "we forgot to update the PDF" moments.',
  },
  {
    q: 'What about staff training?',
    a: 'The audit trail covers allergen-related customer interactions, which is the part EHO inspectors care most about. For wider food safety training records, SafeEat pairs well with our other products — or the generic platforms you already use.',
  },
  {
    q: 'Where is SafeEat built?',
    a: 'In Cornwall, by people who understand independent hospitality. It\'s not a repurposed US restaurant-tech platform with UK bolt-ons — it was built for UK venues, UK allergen rules, and UK EHO expectations from day one.',
  },
  {
    q: 'Can I really cancel anytime?',
    a: 'Yes. Monthly billing, no lock-in, no exit fee. If it stops being worth £29.99 a month to you, cancel. We\'d rather earn your subscription every month than trap you for a year.',
  },
]

export default function SafeEatPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SafeEat',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description:
        'QR-powered allergen and customer retention system for independent UK food venues. Diners scan, select allergens, and see the menu filtered to what\'s safe — with an EHO audit trail and opt-in diner database built in.',
      url: 'https://safeeat.co.uk',
      offers: {
        '@type': 'Offer',
        price: '29.99',
        priceCurrency: 'GBP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '29.99',
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
        { '@type': 'ListItem', position: 3, name: 'SafeEat', item: 'https://autaimate.com/products/safeeat' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="SafeEat | QR Allergen Menu & Customer Retention for UK Food Venues"
        description="QR-powered allergen system for UK restaurants, pubs and cafes. Diners scan, select allergens, see safe menu. EHO audit trail, opt-in diner database, 30-day inspection-ready guarantee. £29.99/month, built in Cornwall."
        canonical="/products/safeeat"
        keywords="restaurant allergen software UK, QR allergen menu, Natasha's Law software, EHO audit trail software, pub allergen system, cafe compliance software, customer retention restaurant, allergy menu app UK, independent restaurant software"
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
            <li className="text-white/70">SafeEat</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-red-500/15 border border-red-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-400 rounded-full pulse-dot" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">UK Restaurants · Pubs · Cafés</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Allergy diners are the most loyal customers{' '}
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">in hospitality.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            The venues that look after them are the ones that fill up on a wet Tuesday in November. SafeEat turns allergen compliance into a customer retention engine — QR-powered menus, EHO audit trail, and a diner database that brings them back. Built in Cornwall for independent UK food venues.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://safeeat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open SafeEat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#products" className="btn-secondary">See all products</Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            £29.99/month · 30-day inspection-ready guarantee · Built in Cornwall
          </p>
        </section>

        {/* How SafeEat works */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              How SafeEat <span className="text-orange-500">works.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Five steps from QR scan to repeat booking. Nothing for the diner to install. Nothing new for the kitchen to learn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-red-500/[0.06] hover:border-red-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-sm font-bold text-red-400 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee callout */}
        <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/30 rounded-3xl p-8 lg:p-10 text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight">
              30-day inspection-ready guarantee.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              If SafeEat doesn\'t have you inspection-ready within 30 days, the next three months are on us. Built in Cornwall, for venues that take allergies seriously — because the ones who do are the ones that last.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Why independent venues <span className="text-orange-500">choose SafeEat.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Compliance that doesn\'t feel like punishment. Retention that doesn\'t feel like marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-red-400 mb-3">{b.title}</h3>
                <p className="text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-500/30 transition-colors">
                <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-red-400 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            Fill up on a wet Tuesday in November.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            The venues that look after allergy diners are the venues that stay open. £29.99 a month to start. Thirty days to prove it works.
          </p>
          <a href="https://safeeat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Open SafeEat
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </section>
      </Layout>
    </>
  )
}
