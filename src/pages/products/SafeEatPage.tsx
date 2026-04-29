import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, QrCode, Mail, BarChart3, Shield, CheckCircle2, Star, ChevronRight, PoundSterling, Utensils, HeartHandshake } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const FAQS = [
  {
    q: 'What is SafeEat?',
    a: 'SafeEat is a QR-powered allergen and customer retention system for independent UK food venues. Customers scan a code at the table, select their allergens, and see the menu filtered to what is safe to eat — before they order. Venues get a complete EHO-ready audit trail and a database of opted-in allergy diners for retention marketing.',
  },
  {
    q: 'How does SafeEat protect us during an EHO inspection?',
    a: 'Every allergen interaction is timestamped and logged against the menu version in use that day. When an Environmental Health Officer asks for evidence of your allergen process, you hand them a full audit trail showing exactly what information each diner was given and when. That is the level of due diligence inspectors want to see post-Natasha\'s Law.',
  },
  {
    q: 'Is SafeEat Natasha\'s Law compliant?',
    a: 'SafeEat is built around the allergen information requirements that apply to UK food businesses, including the PPDS rules introduced by Natasha\'s Law. It gives diners clear, accurate allergen information before they order and keeps the audit trail that proves you did.',
  },
  {
    q: 'Do customers need to download an app?',
    a: 'No. SafeEat runs in any phone browser. The diner scans the QR on the table, selects their allergens on a web page, and browses the filtered menu. Zero friction, zero app-store downloads, works on any phone made in the last decade.',
  },
  {
    q: 'What does it cost?',
    a: '£29.99 per month. No setup fee, no long-term contract. We back it with a 30-day inspection-ready guarantee: if SafeEat doesn\'t get your allergen process to a standard you can defend in an EHO inspection within 30 days, you get three months free.',
  },
  {
    q: 'How long does setup take?',
    a: 'A typical independent pub or café is live within a few hours. You upload your menu, tag allergens against dishes, get your QR codes printed, and place them on tables. Our team supports you through the first setup — you are not left to figure it out alone.',
  },
  {
    q: 'Can I update the menu myself?',
    a: 'Yes. The venue dashboard lets you update dishes, adjust allergens, mark specials, and take items off sale in real time. Changes are live within seconds of you saving them.',
  },
  {
    q: 'How does the customer database work?',
    a: 'Diners who scan can opt in to hear from the venue. You build an owned, GDPR-compliant database of customers who have told you exactly which allergens they have. That is an extraordinarily valuable marketing asset — allergy diners are the most loyal customers in hospitality because safe venues are hard to find.',
  },
  {
    q: 'What about review prompts?',
    a: 'SafeEat automatically triggers a review prompt at the right moment in the diner\'s visit — after they\'ve eaten safely, not before. You choose which platform (Google, TripAdvisor, or both). Polite, well-timed, and not the spammy post-invoice chase other systems use.',
  },
  {
    q: 'Does SafeEat integrate with my till or booking system?',
    a: 'SafeEat runs alongside your existing till and booking system, not through them. That keeps setup simple and avoids breaking whatever is already working. Custom integrations with specific till systems can be built as a commission.',
  },
  {
    q: 'What are the weekly insight reports?',
    a: 'Every Monday you get a short report showing which allergens your diners most commonly have, which dishes are most filtered out, conversion to bookings from email campaigns, and review momentum. It\'s the commercial picture of your allergy diner base in one scroll.',
  },
  {
    q: 'Who built SafeEat?',
    a: 'SafeEat is built in Cornwall by Autaimate, a UK product studio. It was built for independent pubs, cafés, and restaurants — the kind of venues that take their regulars seriously and want to be the place a family with allergies can go without fear.',
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
      '@id': 'https://autaimate.com/products/safeeat#webpage',
      url: 'https://autaimate.com/products/safeeat',
      name: 'SafeEat | QR Allergen & Retention System for UK Food Venues | Autaimate',
      description: 'SafeEat filters your menu for allergies, keeps an EHO audit trail, and turns allergy diners into regulars. £29.99/month. Built in Cornwall for independent venues.',
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
        { '@type': 'ListItem', position: 3, name: 'SafeEat', item: 'https://autaimate.com/products/safeeat' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SafeEat',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web (any device)',
      description: 'QR-powered allergen and customer retention system for independent UK food venues.',
      url: 'https://safeeat.co.uk',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: '29.99',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '29.99',
          priceCurrency: 'GBP',
          unitText: 'MONTH',
        },
        description: '£29.99 per month. 30-day inspection-ready guarantee — three months free if we do not deliver.',
      },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      featureList: [
        'QR code allergen menu filtering',
        'Full EHO audit trail',
        'Customer database of opted-in allergy diners',
        'Targeted email marketing',
        'Automated review prompts',
        'Weekly insight reports',
        'Real-time menu editor',
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How SafeEat protects a food venue and grows its regulars',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Customer scans the table QR', text: 'The diner scans your table QR with their phone camera. No app, no download.' },
        { '@type': 'HowToStep', position: 2, name: 'Select allergens', text: 'They tick the allergens that apply to their party. SafeEat supports the full UK allergen list.' },
        { '@type': 'HowToStep', position: 3, name: 'Filtered menu appears', text: 'The menu instantly shows only what is safe for them to eat. No guesswork. No awkward questions.' },
        { '@type': 'HowToStep', position: 4, name: 'Every interaction is logged', text: 'The scan, the allergens selected, the menu version shown, and the timestamp are all logged. Full EHO audit trail.' },
        { '@type': 'HowToStep', position: 5, name: 'They opt in to hear from you', text: 'If they loved the meal, they opt in to your database. You now have a permissioned allergy diner who knows you can look after them.' },
        { '@type': 'HowToStep', position: 6, name: 'They come back', text: 'Targeted email marketing, review prompts at the right moment, and weekly insight reports turn that one scan into a regular.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/products/safeeat#article',
      headline: 'SafeEat: Why Allergy Diners Are the Most Loyal Customers in Hospitality',
      description: 'How SafeEat turns the hardest-to-please diners into the most loyal — and gives independent UK food venues an EHO-ready audit trail in the process.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-02-20',
      dateModified: '2026-04-21',
      mainEntityOfPage: { '@id': 'https://autaimate.com/products/safeeat#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'SafeEat Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Natasha\'s Law', description: 'The UK law requiring full ingredient labelling on Prepacked for Direct Sale (PPDS) food, in force since October 2021.' },
        { '@type': 'DefinedTerm', name: 'EHO', description: 'Environmental Health Officer — the local authority inspector responsible for food safety compliance at UK food venues.' },
        { '@type': 'DefinedTerm', name: 'PPDS', description: 'Prepacked for Direct Sale — food packaged on the premises before the customer selects it.' },
        { '@type': 'DefinedTerm', name: 'Allergen audit trail', description: 'A time-stamped, immutable log proving what allergen information was given to each customer on each visit.' },
        { '@type': 'DefinedTerm', name: 'Allergy diner', description: 'A customer with one or more food allergies or intolerances that restrict their menu choices.' },
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

export default function SafeEatPage() {
  return (
    <Layout>
      <SEO
        title="SafeEat | QR Allergen & Retention System for UK Food Venues | Autaimate"
        description="SafeEat filters your menu for allergies, keeps an EHO audit trail, and turns allergy diners into regulars. £29.99/month. Built in Cornwall for independent venues."
        canonical="https://autaimate.com/products/safeeat"
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
          <li className="text-ink">SafeEat</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft border border-teal/20 text-teal text-xs font-medium mb-6">
          <Utensils className="w-3 h-3" /> £29.99/month · Built in Cornwall · 30-day guarantee
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink">
          Allergy diners are the most <span className="text-teal">loyal customers</span> in hospitality.
        </h1>
        <p className="text-xl text-slate max-w-3xl mb-8">
          The venues that look after them are the ones that fill up on a wet Tuesday in November. SafeEat is how you become one of those venues — a QR-powered allergen menu that makes dining safe, an EHO audit trail that keeps you compliant, and a retention system that turns allergy diners into regulars.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="https://safeeat.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
            See SafeEat <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
            Book a demo
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="text-xs uppercase tracking-wider text-teal mb-2 font-semibold">Quick Answer</div>
          <p className="text-lg text-ink">
            SafeEat is a UK QR allergen system for independent pubs, cafés, and restaurants. Diners scan, select allergens, see a filtered menu, and opt in to come back. You get Natasha's-Law-ready compliance and a customer database of loyal regulars. £29.99/month.
          </p>
        </div>
      </section>

      {/* The insight */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">The insight most venues miss</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate">
          <div>
            <p className="mb-4">
              An allergy diner doesn't just pick a restaurant. They commit to it. Finding somewhere safe to eat with a severe allergy is genuinely stressful, and once a family has found a venue that treats allergens seriously, they don't shop around. They come back. They bring the grandparents. They book the birthday. They leave reviews that say "finally, somewhere we can all eat."
            </p>
            <p>
              That's why the venues looking after allergy diners properly are the ones full on a wet Tuesday in November, while the place down the road with the bigger menu is half empty.
            </p>
          </div>
          <div>
            <p className="mb-4">
              The problem is the system most venues use for allergens is a laminated sheet, a verbal conversation with a flustered waiter, and a hope that everyone remembers what was said if anything goes wrong. That's not a compliance strategy post-Natasha's Law. And it's not a growth strategy either.
            </p>
            <p>
              SafeEat fixes both. Compliance becomes automatic. Growth becomes compound.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">How SafeEat works</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { n: '1', t: 'Scan the QR', d: 'Diner scans the table code with their phone. No app.' },
            { n: '2', t: 'Select allergens', d: 'They tick what they have. Full UK allergen list supported.' },
            { n: '3', t: 'Filtered menu', d: 'Menu shows only what is safe to order. No awkward questions.' },
            { n: '4', t: 'Audit logged', d: 'Scan, allergens, menu version, timestamp — all saved for EHO.' },
            { n: '5', t: 'Opt in', d: 'If they loved it, they join your allergy diner database.' },
            { n: '6', t: 'They come back', d: 'Targeted emails, review prompts, insight reports — they become regulars.' },
          ].map((s) => (
            <div key={s.n} className="p-4 rounded-xl bg-white border border-sand shadow-card">
              <div className="text-teal font-bold text-xl mb-1">{s.n}</div>
              <div className="font-semibold text-sm mb-1 text-ink">{s.t}</div>
              <p className="text-xs text-slate">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">What's in the box</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { i: QrCode, t: 'QR allergen menu', d: 'Every table gets a code. Diners select their allergens and see the menu filtered to safe dishes in real time.' },
            { i: Shield, t: 'EHO-ready audit trail', d: 'Every scan logged with timestamp, allergens selected, and menu version. Hand the inspector evidence, not excuses.' },
            { i: HeartHandshake, t: 'Opted-in customer database', d: 'A permissioned list of allergy diners who have told you exactly what they have. GDPR-clean and hospitality-gold.' },
            { i: Mail, t: 'Targeted email marketing', d: 'Send a gluten-free Sunday lunch promo to your gluten-free diners. Send nothing to the rest. That\'s how you drive midweek covers.' },
            { i: Star, t: 'Automated review prompts', d: 'Polite, well-timed requests after a safe meal — not spammy post-invoice chases. Better reviews, fewer opt-outs.' },
            { i: BarChart3, t: 'Weekly insight reports', d: 'Every Monday, a short report on allergen trends, menu performance, email conversion, and review velocity.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white border border-sand shadow-card">
              <f.i className="w-6 h-6 text-teal mb-3" />
              <div className="font-semibold text-lg mb-2 text-ink">{f.t}</div>
              <p className="text-slate">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The guarantee */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-7 h-7 text-teal" />
            <h2 className="text-2xl md:text-3xl font-bold text-ink">30-day inspection-ready guarantee</h2>
          </div>
          <p className="text-slate mb-3">
            If SafeEat does not get your allergen process to a standard you can confidently defend in an EHO inspection within 30 days of going live, you get three months free. That's it. No lawyer-speak, no hidden conditions.
          </p>
          <p className="text-slate">
            We can offer this because we know what it takes to get a venue compliant — because we've done it. If we don't deliver, the cost is on us, not on you.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Built for independent UK venues</h2>
        <div className="grid md:grid-cols-3 gap-6 text-slate">
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Independent pubs</div>
            <p>Freehouses, gastropubs, country pubs with kitchens. SafeEat turns your Sunday lunch into a destination for the allergy-aware family.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Cafés and coffee shops</div>
            <p>Lunch spots, brunch cafés, coffee-and-cake shops where PPDS rules apply. Natasha's-Law-ready from day one.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <div className="font-semibold text-ink mb-2">Independent restaurants</div>
            <p>Bistros, neighbourhood restaurants, seasonal menu spots. SafeEat keeps your audit tidy even when your specials change daily.</p>
          </div>
        </div>
      </section>

      {/* Why niche */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Why SafeEat isn't just another hospitality SaaS</h2>
        <div className="space-y-4 text-slate max-w-4xl">
          <p>
            There are generic hospitality platforms that claim to handle allergens as one feature among fifty. They don't handle them well — because they're built for chains, not for independents, and they treat allergens like a compliance checkbox rather than the commercial opportunity they actually are.
          </p>
          <p>
            SafeEat is the opposite: a single-purpose product built for independent UK venues by a UK team. It does one thing — safe eating and customer retention for allergy diners — and it does it better than the generic platforms because that's the only thing it's trying to do.
          </p>
          <p>
            The result: it's cheaper (£29.99/month, not £200+), faster to set up (hours, not weeks), easier to use (designed for a busy kitchen, not a head-office IT team), and focused on the commercial outcome that actually matters — turning careful diners into loyal regulars.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Pricing</h2>
        <div className="p-8 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="flex items-center gap-2 mb-2">
            <PoundSterling className="w-6 h-6 text-teal" />
            <div className="text-3xl font-bold text-ink">29.99 / month</div>
          </div>
          <p className="text-slate mb-4">30-day inspection-ready guarantee. No setup fee. No long-term contract. Cancel anytime.</p>
          <ul className="grid md:grid-cols-2 gap-2 text-ink">
            {['QR allergen menu filtering', 'Full EHO audit trail', 'Opted-in customer database', 'Targeted email marketing', 'Review prompts', 'Weekly insight reports', 'Real-time menu editor', 'UK support from the team that built it'].map((f) => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> {f}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <h2 className="text-3xl font-bold mb-4 text-ink">Built in Cornwall. For the venues that give a damn.</h2>
          <p className="text-slate mb-4">
            SafeEat is a product from Autaimate. It's built for the independents — the family-run pub, the neighbourhood café, the restaurant where the owner still works the pass on a Saturday. Not for a chain head office, not for a board, not for a hospitality group with a compliance department.
          </p>
          <p className="text-slate mb-4">
            We made it in Cornwall because this is where a lot of those independents are. We priced it at £29.99/month because a Cornish café isn't going to pay £200/month for compliance software and shouldn't have to. We backed it with a 30-day guarantee because if you're going to trust a small software team with your EHO readiness, you deserve a promise that we'll deliver.
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
          <Link to="/products/tradgo" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">TradGo</div>
            <p className="text-sm text-slate">AI agent that catches missed calls, WhatsApp, and website chat — useful for independent hospitality too.</p>
          </Link>
          <Link to="/products/snaglog" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">SnagLog</div>
            <p className="text-sm text-slate">AI-powered snagging reports — if you're renovating a venue or fit-out space.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Commission a niche product</div>
            <p className="text-sm text-slate">Got a hospitality problem that needs its own software? See how a new product gets born.</p>
          </Link>
          <Link to="/" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">See all Autaimate products</div>
            <p className="text-sm text-slate">The full portfolio of niche SaaS products for UK industries.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-teal-soft border border-teal/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-ink">Be the venue allergy families tell each other about</h2>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            £29.99/month. 30-day inspection-ready guarantee. Built in Cornwall for the independents who want to fill the dining room on a wet Tuesday in November.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://safeeat.co.uk" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
              See SafeEat <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
