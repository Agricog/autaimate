import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, CheckCircle2, Shield, Clock, Code2, ChevronRight, Building2, Wrench, ClipboardList } from 'lucide-react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const PROPERTY_PRODUCTS = [
  { name: 'SnagLog', to: '/products/snaglog', desc: 'AI-powered snagging reports — photograph property defects, get professional PDF reports in minutes.', tag: 'Inspection' },
  { name: 'Approv', ext: 'https://approv.co.uk', desc: 'Supplier and contractor approval management for property operators — credentials, insurance, compliance tracked in one place.', tag: 'Compliance' },
  { name: 'ClearProof', ext: 'https://clearproof.co.uk', desc: 'Multilingual H&S comprehension — proves workers and contractors understood the brief in the language they actually read.', tag: 'H&S' },
]

const FAQS = [
  {
    q: 'Which Autaimate products are built for UK property?',
    a: 'Three products sit directly in the property industry vertical: SnagLog for AI-powered snagging and defect reporting, Approv for contractor and supplier approval management, and ClearProof for multilingual H&S comprehension. Each solves a specific property industry workflow.',
  },
  {
    q: 'Who is the property hub aimed at?',
    a: 'Landlords, letting agents, property managers, block managers, build-to-rent operators, property inspection firms, and facilities teams looking after property portfolios. If your business is managing property or the people who work in them, there is likely an Autaimate product that fits.',
  },
  {
    q: 'Can I commission a new property-focused product?',
    a: 'Yes. Every product in the property portfolio started as one customer\'s commission. If you\'ve got a property workflow that isn\'t covered — inventory management, tenant communication, maintenance scheduling, specific regulatory reporting — talk to us about a commission. Fixed-price, typically around four weeks, you own the code at the end.',
  },
  {
    q: 'Does Autaimate build for build-to-rent specifically?',
    a: 'Yes. Build-to-rent operators have particular needs around at-scale snagging, ongoing defect tracking, contractor approval, and tenant onboarding documentation. SnagLog and Approv are already used by BTR operators; bespoke BTR-specific tools can be commissioned.',
  },
  {
    q: 'How does SnagLog handle large property portfolios?',
    a: 'SnagLog scales from a single property inspection up to a full build-handover portfolio. Reports can be organised by property, plot, or unit, and exported individually or in batches. Multi-inspector teams use SnagLog on phones across whole sites.',
  },
  {
    q: 'Is the product data GDPR-compliant for tenant information?',
    a: 'Yes. Every Autaimate product runs on UK/EU infrastructure with encryption in transit and at rest. Tenant and customer data is handled to UK GDPR standards with export and erasure on request. We treat personal data as a liability to manage, not an asset to hoard.',
  },
  {
    q: 'What does a commission cost?',
    a: 'Commission pricing is fixed-price and scope-specific. A focused single-workflow property tool will be quoted differently from a multi-user platform. We quote the whole job up front so there are no surprises once the build starts.',
  },
  {
    q: 'Can I integrate Autaimate products with my existing property management software?',
    a: 'Often yes. Data export and structured import are supported across most of the portfolio. Direct integrations with specific property management platforms (Reapit, Arthur, MRI, Yardi, etc.) can be built as part of a commission.',
  },
  {
    q: 'Is the product line UK-only?',
    a: 'The products are designed around UK property standards and regulatory framing but several work for any jurisdiction. If you\'re a property operator outside the UK and one of the products catches your eye, get in touch — adaptation is usually straightforward.',
  },
  {
    q: 'What about product roadmaps — how do you decide what to build next?',
    a: 'Roadmaps are customer-led. We build what property customers commission and use the learnings to make each product better over time. If you\'ve got feedback on an existing product or an idea for a new one, we\'d rather hear it than guess.',
  },
  {
    q: 'Do you offer training for new users?',
    a: 'Yes. Every product includes onboarding for the first users as part of the subscription or commission. For larger teams, we offer extended training engagements to get inspectors, agents, or operators up to speed quickly.',
  },
  {
    q: 'How do I get started?',
    a: 'Most property-relevant products have a free trial or free tier. Click into any product above, try it out, and get in touch if you want to talk about rollout across your portfolio or team.',
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
      '@id': 'https://autaimate.com/for/property#webpage',
      url: 'https://autaimate.com/for/property',
      name: 'Software for UK Property | Autaimate',
      description: 'Niche SaaS products for UK landlords, letting agents, property managers, and build-to-rent operators. Snagging, contractor approval, H&S comprehension — plus fixed-price commissions.',
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
        { '@type': 'ListItem', position: 3, name: 'Property', item: 'https://autaimate.com/for/property' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Autaimate products for UK property',
      itemListElement: PROPERTY_PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.to ? `https://autaimate.com${p.to}` : p.ext,
      })),
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Autaimate Property Portfolio',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: 'A portfolio of niche SaaS products for UK property — covering snagging, contractor approval, and H&S comprehension.',
      url: 'https://autaimate.com/for/property',
      publisher: { '@id': 'https://autaimate.com/#organization' },
    },
    {
      '@type': 'HowTo',
      name: 'How to commission a new Autaimate product for a UK property workflow',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Describe the problem', text: 'Tell us the specific property workflow that needs a tool — inventory, tenant comms, maintenance, compliance reporting, or something else.' },
        { '@type': 'HowToStep', position: 2, name: 'Fixed-price scope', text: 'We scope the build, quote a fixed price, and agree a roughly 4-week timeline. No hourly billing.' },
        { '@type': 'HowToStep', position: 3, name: 'Build and review', text: 'We build the product. You review progress as it happens — no surprise reveal at the end.' },
        { '@type': 'HowToStep', position: 4, name: 'Ship and hand over', text: 'The live product ships. Code and infrastructure are yours. Ongoing support available.' },
      ],
    },
    {
      '@type': 'Article',
      '@id': 'https://autaimate.com/for/property#article',
      headline: 'Software for UK Property: Niche Tools for an Industry Full of Generic Platforms',
      description: 'How Autaimate products serve UK landlords, letting agents, property managers, and build-to-rent operators — without forcing them into bloated all-in-one platforms.',
      author: { '@type': 'Person', name: 'Mick', url: 'https://www.linkedin.com/company/autaimate' },
      publisher: { '@id': 'https://autaimate.com/#organization' },
      datePublished: '2026-02-15',
      dateModified: '2026-05-04',
      mainEntityOfPage: { '@id': 'https://autaimate.com/for/property#webpage' },
    },
    {
      '@type': 'DefinedTermSet',
      name: 'UK Property Software Terminology',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Snagging', description: 'The process of identifying defects in a newly built or refurbished property before or shortly after handover.' },
        { '@type': 'DefinedTerm', name: 'Build-to-rent (BTR)', description: 'A sector of the UK property market where residential property is built specifically for long-term rental rather than for sale.' },
        { '@type': 'DefinedTerm', name: 'Block management', description: 'Management of the communal parts and services of a multi-unit residential building on behalf of leaseholders or freeholders.' },
        { '@type': 'DefinedTerm', name: 'Contractor approval', description: 'A process of vetting contractors and suppliers for credentials, insurance, and compliance before they are engaged for work.' },
        { '@type': 'DefinedTerm', name: 'H&S comprehension', description: 'Proving that a worker has understood the health and safety brief, not merely signed to say they heard it.' },
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

export default function PropertyPage() {
  return (
    <Layout>
      <SEO
        title="Software for UK Property | Autaimate"
        description="Niche SaaS products for UK landlords, letting agents, property managers, and build-to-rent operators. Snagging, contractor approval, H&S comprehension."
        canonical="https://autaimate.com/for/property"
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
          <li><Link to="/#industries" className="hover:text-teal transition-colors">Industries</Link></li>
          <li><ChevronRight className="w-3 h-3" /></li>
          <li className="text-ink">Property</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-soft border border-teal/20 text-teal text-xs font-medium mb-6">
          <Building2 className="w-3 h-3" /> For UK landlords, agents & property managers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-ink">
          Niche SaaS for UK property. <span className="text-teal">Without the bloat.</span>
        </h1>
        <p className="text-xl text-slate max-w-3xl mb-8">
          Three Autaimate products sit in the UK property industry today — snagging, contractor approval, and H&S comprehension. Each does one thing and does it better than any all-in-one platform. If the tool you need doesn't exist yet, that's how the next Autaimate product gets born.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
            See the products <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
            Commission a new one
          </Link>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div id="quick-answer" className="p-6 rounded-2xl bg-teal-soft border border-teal/20">
          <div className="text-xs uppercase tracking-wider text-teal mb-2 font-semibold">Quick Answer</div>
          <p className="text-lg text-ink">
            Autaimate builds niche SaaS for UK property — three live products covering snagging, contractor approval, and H&S comprehension. Fixed-price commissions available for property workflows not yet covered.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section id="products" className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-ink">The property portfolio</h2>
        <p className="text-slate mb-10">Three products, each built for a specific problem in UK property.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROPERTY_PRODUCTS.map((p) => (
            p.to ? (
              <Link key={p.name} to={p.to} className="group p-6 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-lg text-ink">{p.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal-soft text-teal border border-teal/20">{p.tag}</span>
                </div>
                <p className="text-slate text-sm mb-3">{p.desc}</p>
                <div className="text-teal text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></div>
              </Link>
            ) : (
              <a key={p.name} href={p.ext} className="group p-6 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all" rel="noopener noreferrer">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-lg text-ink">{p.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal-soft text-teal border border-teal/20">{p.tag}</span>
                </div>
                <p className="text-slate text-sm mb-3">{p.desc}</p>
                <div className="text-teal text-sm font-medium group-hover:translate-x-1 transition flex items-center gap-1">Visit site <ArrowRight className="w-3 h-3" /></div>
              </a>
            )
          ))}
        </div>
      </section>

      {/* Why niche */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Why niche beats generic in property software</h2>
        <div className="space-y-4 text-slate max-w-4xl">
          <p>
            UK property is flooded with all-in-one platforms that try to cover letting, management, maintenance, inventories, accounting, and tenant comms in one subscription. The result is software that is expensive (hundreds of pounds a month), slow to learn, full of features you'll never use, and mediocre at every individual job because nothing is its core purpose.
          </p>
          <p>
            The Autaimate portfolio is the opposite approach. SnagLog is built for snagging — that's its whole job and it does it better than any all-in-one's snagging module could. Approv is built for contractor and supplier approval, with the level of detail that property operators actually need to stay compliant. ClearProof is built specifically for proving H&S comprehension in the workers' own languages.
          </p>
          <p>
            Each product is focused enough to be genuinely useful and priced for independent property operators rather than national estate agency chains. If you run a portfolio of any size, you can build a stack of Autaimate tools that covers your workflows for a fraction of what one of the big platforms costs — and each tool actually gets used, because it actually fits.
          </p>
        </div>
      </section>

      {/* UK property compliance */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">The UK property compliance landscape, respected properly</h2>
        <div className="space-y-4 text-slate max-w-4xl">
          <p>
            UK property operates under a specific compliance landscape — Building Safety Act post-Grenfell, ongoing updates to HHSRS, Right to Rent checks, deposit protection, gas and electrical safety requirements, fire risk assessment duties for common parts, and the regulatory framework of ARLA, Propertymark, and RICS for different parts of the industry. Generic international property platforms consistently get this wrong — or ignore it entirely.
          </p>
          <p>
            Autaimate products are designed around UK regulatory realities. SnagLog reports are formatted for the UK handover process. Approv stores the insurance certificates and accreditations that UK contractors actually need to prove. ClearProof addresses the comprehension side of the duty-of-care obligation under UK H&S law. Each product assumes UK context rather than trying to be internationally generic.
          </p>
          <p>
            That UK focus is a feature, not a limitation. It's what lets the products fit genuine property operations rather than sitting awkwardly beside them.
          </p>
        </div>
      </section>

      {/* Commission section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-teal-soft border border-teal/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink">Every product here started as one property operation's problem</h2>
          <p className="text-slate mb-4">
            SnagLog started as a specific snagging workflow problem. Approv came from a property operator drowning in contractor insurance spreadsheets. ClearProof came from a site that genuinely wanted to prove workers understood the induction, not just signed it.
          </p>
          <p className="text-slate mb-6">
            If your property business has a gap — the bit still on spreadsheets, the process that falls through the cracks every month, the thing you'd automate if only the software existed — that's how the next Autaimate property product gets born. Fixed-price commission, typically around four weeks, you own the code at the end.
          </p>
          <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
            Commission the next one <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Commission features */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-ink">How a commission works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: Home, t: 'Fixed price, up front', d: 'You know what it costs before we start. No hourly billing, no scope creep, no surprises.' },
            { i: Clock, t: 'Typically 4 weeks', d: 'From kick-off to live product. Focused enough to ship, useful enough to keep in production.' },
            { i: Code2, t: 'You own the code', d: 'GitHub repository handed over at completion. No vendor lock-in, no hostage data.' },
            { i: Shield, t: 'GDPR & security built in', d: 'UK/EU hosting, encryption, auth, audit trails. The professional defaults from day one.' },
            { i: Wrench, t: 'Modern infrastructure', d: 'React, TypeScript, SmartSuite, Railway, Cloudflare, Stripe, Clerk. Stable, documented, maintainable.' },
            { i: CheckCircle2, t: 'Integrations on request', d: 'Hook into your existing property management, CRM, or accounting system as part of the build.' },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-xl bg-white border border-sand shadow-card">
              <f.i className="w-6 h-6 text-teal mb-3" />
              <div className="font-semibold text-lg mb-2 text-ink">{f.t}</div>
              <p className="text-slate">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we serve */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">Who we build for in UK property</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate">
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <ClipboardList className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Letting agents</div>
            <p>Independent and regional agencies looking for focused tools rather than bloated all-in-one platforms. Approv tracks contractors for maintenance, ClearProof handles H&S for site visits, SnagLog covers periodic and end-of-tenancy inspections.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <Building2 className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Property managers</div>
            <p>Block managers, residential property managers, and portfolio landlords with multi-unit operations. SnagLog for handovers and periodic inspections, Approv for contractor control.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <Home className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Build-to-rent operators</div>
            <p>BTR operators at any scale. SnagLog for move-in snagging across hundreds of units, Approv for managing a deep contractor panel, ClearProof for onboarding comprehension.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <ClipboardList className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Property inspection firms</div>
            <p>Independent snagging specialists and building inspection companies. SnagLog is already a standard tool in the category; bespoke inspection workflows can be commissioned.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <Wrench className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Facilities & estate teams</div>
            <p>In-house teams managing commercial, education, or institutional property. Contractor approval and H&S comprehension tools that fit public-sector governance.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-sand shadow-card">
            <Home className="w-6 h-6 text-teal mb-3" />
            <div className="font-semibold text-ink mb-2">Portfolio landlords</div>
            <p>Private landlords running five, fifty, or five hundred units. Tools priced for independents, built to scale as the portfolio grows without forcing an enterprise contract.</p>
          </div>
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="p-8 rounded-2xl bg-white border border-sand shadow-card">
          <h2 className="text-3xl font-bold mb-4 text-ink">Built by a studio that understands property from the construction side</h2>
          <p className="text-slate mb-4">
            Autaimate's founder spent 40 years in UK construction and trades before building software. That background matters in property because most property operations are intimately connected to construction — snagging is a construction handover process, contractor approval is about trades, H&S comprehension is about the people on site, and maintenance is ongoing construction work at reduced scale.
          </p>
          <p className="text-slate mb-4">
            The property products in the portfolio are built with that understanding baked in. We know what a good snag looks like because we've identified them. We know what contractor insurance paperwork actually gets checked and what gets filed. We know that H&S comprehension requires the workers' actual languages, not a pretend translation. Those are construction insights applied to property software, and they show up in how each product is built.
          </p>
          <p className="text-slate mb-4">
            The stack is modern — React, TypeScript, SmartSuite, Railway — but the sensibility is the built environment. That combination is what lets the products fit real property operations instead of an abstracted ideal.
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
          <Link to="/for/construction" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Software for UK construction & trades</div>
            <p className="text-sm text-slate">The adjacent industry hub — eight products for UK construction, trades, and inspection.</p>
          </Link>
          <Link to="/for/care-homes" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Software for UK care homes</div>
            <p className="text-sm text-slate">CQC-focused products for regulated care operators.</p>
          </Link>
          <Link to="/products/snaglog" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">SnagLog</div>
            <p className="text-sm text-slate">Our most-used property product — a good way to see what a focused Autaimate tool looks like.</p>
          </Link>
          <Link to="/micro-saas" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Commission a niche product</div>
            <p className="text-sm text-slate">Fixed price, typically 4 weeks, you own the code at the end.</p>
          </Link>
          <Link to="/" className="p-5 rounded-xl bg-white border border-sand shadow-card hover:shadow-card-hover hover:border-teal/40 transition-all">
            <div className="font-semibold mb-1 text-ink">Back to the full portfolio</div>
            <p className="text-sm text-slate">Every Autaimate product across every industry.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="p-10 rounded-2xl bg-teal-soft border border-teal/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-ink">Your property workflow, not in the portfolio?</h2>
          <p className="text-slate mb-6 max-w-2xl mx-auto">
            Three products live today. The fourth is the one you commission because the generic software doesn't fit. Fixed price. Typically four weeks. You own the code at the end.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/micro-saas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal hover:bg-teal-dark text-white font-semibold shadow-cta hover:shadow-cta-hover transition-all">
              Commission a product <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold transition-all">
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
