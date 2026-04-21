import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const restaurantProducts = [
  {
    name: 'SafeEat',
    desc: 'QR-powered allergen system for UK food venues. Diners scan, select allergens, and see the menu filtered to what\'s safe. Audit trail for EHO, and a marketing engine that brings them back.',
    href: 'https://safeeat.co.uk',
    external: true,
    accent: 'text-orange-400',
  },
  {
    name: 'LeadFortress',
    desc: 'Catch reservation requests, function bookings and private-hire enquiries across phone, web, SMS and WhatsApp — all in one inbox.',
    href: 'https://leadfortress.co.uk',
    external: true,
    accent: 'text-teal-400',
  },
  {
    name: 'AutoReplyChat',
    desc: 'AI chatbot that handles FAQs, takes bookings and captures leads 24/7. Pairs with your existing website and social channels.',
    href: 'https://autoreplychat.com',
    external: true,
    accent: 'text-blue-400',
  },
]

const problems = [
  {
    title: 'The customers walking past your door.',
    desc: 'One in three UK adults lives with someone who has a food allergy or intolerance. Most of them won\'t risk an unfamiliar menu. They\'ll walk past your window to a venue they already know is safe — or they\'ll stay home.',
  },
  {
    title: 'Natasha\'s Law and the £5,000 mistake.',
    desc: 'Allergen information has to be accurate, accessible and up to date. One mislabelled dish. One sauce swap the menu didn\'t catch. The fines are real — and the reputational damage lasts a lot longer than the penalty.',
  },
  {
    title: 'EHO visits without the audit trail.',
    desc: 'When environmental health asks how you manage allergens, "we tell the customers" doesn\'t cut it. They want process. Evidence. A system you can demonstrate in real time, not a consultant\'s folder gathering dust in the office.',
  },
  {
    title: 'The midweek problem.',
    desc: 'Friday and Saturday, every venue fills. The wet Tuesday in November is what separates the pubs that stay open from the ones that don\'t. Loyal customers — the ones who book in the quiet weeks — are the whole business.',
  },
]

const safeEatSteps = [
  { num: '1', title: 'Diner scans the QR', desc: 'On the table, in the menu, on the door — wherever suits. No app. No login.' },
  { num: '2', title: 'They select allergens', desc: 'Fourteen recognised allergens, plus dietary preferences. Takes seconds.' },
  { num: '3', title: 'The menu filters', desc: 'Only dishes that are safe for them appear. Nothing to cross-reference. Nothing to ask the waiter.' },
  { num: '4', title: 'You get the audit trail', desc: 'Every interaction logged. EHO inspections become a conversation, not a panic.' },
  { num: '5', title: 'They come back', desc: 'Opt-in diner database, review prompts, targeted emails. Loyal customers turned into repeat bookings.' },
]

const customBuildFeatures = [
  'Fixed price. No time-and-materials surprises on tight margins.',
  'Typically live in 4 weeks.',
  'Shaped around your menu, your suppliers, your service pattern.',
  'GDPR and data protection baked in — customer data safe by default.',
  'Integrates with EPOS, booking platforms, Xero and your ordering systems.',
  'Mobile-first — runs on the tablet by the pass, not a back-office PC.',
]

export default function ForRestaurantsPage() {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Allergen, Retention & Automation Software for UK Restaurants',
      provider: {
        '@type': 'Organization',
        name: 'Autaimate',
        url: 'https://autaimate.com',
      },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      serviceType: 'Allergen compliance and customer retention software for UK food venues',
      description:
        'QR-powered allergen tools, customer retention automation and fixed-price custom builds for UK restaurants, pubs, cafes and independent eateries.',
      audience: {
        '@type': 'Audience',
        audienceType: 'UK restaurants, pubs, cafes and independent food venues',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Restaurant software by Autaimate',
      itemListElement: restaurantProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.href,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autaimate.com/' },
        { '@type': 'ListItem', position: 2, name: 'For Restaurants', item: 'https://autaimate.com/for/restaurants' },
      ],
    },
  ]

  return (
    <>
      <SEO
        title="Allergen Software for UK Restaurants | SafeEat & Custom Builds | Autaimate"
        description="QR-powered allergen software and custom automation for UK restaurants, pubs and independent eateries. Natasha's Law covered, EHO audit trail built in, and a retention engine that fills tables on quiet nights."
        canonical="/for/restaurants"
        keywords="restaurant allergen software UK, QR allergen menu, Natasha's Law software, EHO audit trail software, restaurant automation UK, independent restaurant software, pub allergen system, cafe compliance software, customer retention restaurant, allergy menu app UK"
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
            <li className="text-white/70">For Restaurants</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pt-10 pb-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-orange-500/15 border border-orange-500/40 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full pulse-dot" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">UK Restaurants · Pubs · Cafés</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Allergy diners are the most loyal customers{' '}
            <span className="bg-gradient-to-r from-orange-500 via-red-400 to-yellow-400 bg-clip-text text-transparent">in hospitality.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            The venues that look after them are the ones that fill up on a wet Tuesday in November. SafeEat turns allergen compliance into a customer retention engine — QR-powered menus, EHO audit trail, and a diner database that brings them back. Plus fixed-price custom builds for whatever else your venue needs automating.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://safeeat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              See SafeEat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#custom-build" className="btn-secondary">Build something custom</a>
          </div>

          <p className="mt-8 text-sm text-white/50">
            £29.99/month · 30-day inspection-ready guarantee · Built in Cornwall
          </p>
        </section>

        {/* The problems */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Where independent venues <span className="text-orange-500">lose covers.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Four problems that compound quietly — until a bad review, an EHO visit or an empty midweek month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-display text-lg font-bold text-orange-400 mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
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
            {safeEatSteps.map((s) => (
              <div key={s.num} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.06] hover:border-orange-500/30 transition-all">
                <div className="process-number mx-auto mb-4">{s.num}</div>
                <h3 className="font-display text-sm font-bold text-orange-400 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee callout */}
        <section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/5 border border-orange-500/30 rounded-3xl p-8 lg:p-10 text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight">
              30-day inspection-ready guarantee.
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              If SafeEat doesn't have you inspection-ready within 30 days, the next three months are on us. Built in Cornwall, for venues that take allergies seriously — because the ones who do are the ones that last.
            </p>
          </div>
        </section>

        {/* Products for restaurants */}
        <section id="products" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Ready-made tools <span className="text-orange-500">for hospitality.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Three of our products apply directly to restaurants, pubs and independent eateries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {restaurantProducts.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.06] hover:border-orange-500/30 transition-all"
              >
                <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-3 ${p.accent}`}>{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Custom build */}
        <section id="custom-build" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 tracking-tight">
              Or build something <span className="text-orange-500">around your service.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Independent kitchens run their own way — menu, suppliers, pace, team. Generic hospitality platforms flatten all of it. We build custom automation shaped to how you actually run service. Fixed price. You own the code.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 lg:p-12 mb-10">
            <div className="grid md:grid-cols-2 gap-5">
              {customBuildFeatures.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/micro-saas" className="btn-primary">
              See how we build
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/#contact" className="btn-secondary">Talk to us</Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
            Fill up on a wet Tuesday in November.
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            The venues that look after allergy diners are the venues that stay open. Start with SafeEat. Or talk to us about the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://safeeat.co.uk" target="_blank" rel="noopener noreferrer" className="btn-primary">
              See SafeEat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <Link to="/#contact" className="btn-secondary">Start a conversation</Link>
          </div>
        </section>
      </Layout>
    </>
  )
}
