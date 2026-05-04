import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Calendar,
  FileText,
  Hammer,
  Gift,
  Rocket,
  Shield,
  Code2,
  Users,
  Clock,
  ExternalLink,
  Zap,
  Target,
  Briefcase,
} from 'lucide-react'

/* ─── Data ─── */

interface Product {
  name: string
  industry: string
  desc: string
  to?: string
  url?: string
}

const PRODUCTS: Product[] = [
  { name: 'TradeCalcs', industry: 'Electrical Trades', desc: 'Free BS 7671 calculators — cable sizing, voltage drop, circuit design', to: '/products/tradecalcs' },
  { name: 'CertVoice', industry: 'Electrical Certification', desc: 'Voice-first BS 7671 EICR, Minor Works, and EIC certificates', to: '/products/certvoice' },
  { name: 'TradGo', industry: 'Trade Contractors', desc: 'AI agent catching missed calls, WhatsApp, and web chat for trades', to: '/products/tradgo' },
  { name: 'SnagLog', industry: 'Property/Construction', desc: 'AI-powered snagging reports for property inspection', to: '/products/snaglog' },
  { name: 'SafeEat', industry: 'Independent Food Venues', desc: 'QR allergen and retention system for UK hospitality', to: '/products/safeeat' },
  { name: 'InspectVoice', industry: 'Playground Safety', desc: 'Voice-first BS EN 1176 inspection — offline-first PWA', to: '/products/inspectvoice' },
  { name: 'DetailRecon', industry: 'Close Protection', desc: 'AI reconnaissance reports for UK CP operatives', to: '/products/detailrecon' },
  { name: 'WorkProof', industry: 'Electrical Compliance', desc: 'GPS-tagged, timestamped, tamper-proof evidence photos for NICEIC audits', url: 'https://workproof.co.uk' },
  { name: 'EquipSafety', industry: 'Care Homes/Facilities', desc: 'QR-based multilingual equipment safety for CQC compliance', url: 'https://equipsafety.co.uk' },
  { name: 'ClearProof', industry: 'Health & Safety', desc: 'Multilingual H&S comprehension verification', url: 'https://clearproof.co.uk' },
  { name: 'Approv', industry: 'Architecture/Design', desc: 'One-click client approvals via email', url: 'https://approv.co.uk' },
  { name: 'ShootSync', industry: 'Shooting Syndicates', desc: 'Member management, shoot days, payments', url: 'https://shootsync.co.uk' },
  { name: 'HorseCost', industry: 'Equestrian', desc: 'Free horse ownership cost calculators', url: 'https://horsecost.co.uk' },
  { name: 'CraneQuote', industry: 'Construction/Logistics', desc: 'Crane hire cost calculators', url: 'https://cranequote.co.uk' },
  { name: 'AutoReplyChat', industry: 'Small Business', desc: 'AI chatbots for customer enquiries', url: 'https://autoreplychat.com' },
  { name: 'LabCalcs', industry: 'Research/Science', desc: 'Molarity, dilutions, buffer prep (private commission)', url: 'https://autaimate.com' },
  { name: 'UKTradeApps', industry: 'Construction Trades', desc: 'Independent software directory with compliance verification', url: 'https://uktradeapps.co.uk' },
]

interface ProcessStep {
  week: string
  title: string
  icon: typeof Calendar
  items: string[]
}

const PROCESS: ProcessStep[] = [
  {
    week: 'Week 1',
    title: 'Validation',
    icon: Target,
    items: [
      '2-hour kickoff call',
      'I understand your industry and the specific problem',
      'We spec out features — must-haves vs nice-to-haves',
      'I validate the build is deliverable in the agreed window',
      'You get a written proposal with exact deliverables',
    ],
  },
  {
    week: 'Weeks 2–4',
    title: 'Building',
    icon: Hammer,
    items: [
      'I build your product using Claude AI',
      'Clean, maintainable React + TypeScript code',
      'Managed in GitHub — no terminal required',
      'Auto-deployed to Railway',
      'Weekly 30-minute check-ins to show progress',
    ],
  },
  {
    week: 'Week 5',
    title: 'Handover',
    icon: Gift,
    items: [
      'Live deployed product on Railway',
      'Full GitHub repository — you become owner',
      'Complete documentation',
      '1-hour training walkthrough',
      'You maintain it yourself, hire anyone, or keep me on retainer',
    ],
  },
]

interface PricingTier {
  tier: string
  price: string
  best: string
  features: string[]
  examples: string
  popular: boolean
}

const PRICING: PricingTier[] = [
  {
    tier: 'Basic',
    price: '8,500',
    best: 'One focused workflow — calculators, quoting tools, single-purpose automations',
    features: [
      'One focused workflow built end-to-end',
      'Up to 5 core features within agreed scope',
      '1 primary user type',
      'Mobile-responsive web app',
      'Basic data capture, calculations, or workflow logic',
      'Up to 2 revision rounds during build',
      'Deployment support and handover documentation',
      'Full ownership of the delivered codebase',
    ],
    examples: 'Quoting tools, material calculators, site forms, snagging logs, simple trackers',
    popular: false,
  },
  {
    tier: 'Standard',
    price: '12,500',
    best: 'Multi-feature systems that improve day-to-day operations',
    features: [
      'One custom product with a defined scope',
      'Up to 10 core features',
      'User authentication and account access',
      'Structured data management setup',
      'Up to 2 user roles',
      'Up to 2 standard third-party integrations',
      'Mobile-responsive web app',
      'Up to 2 revision rounds during build',
      'Deployment support and handover documentation',
      'Full ownership of the delivered codebase',
    ],
    examples: 'Job tracking systems, client portals, compliance tools, workforce admin dashboards',
    popular: true,
  },
  {
    tier: 'Premium',
    price: '18,500',
    best: 'Advanced platforms with integrations and multi-step workflows',
    features: [
      'One complex product with agreed feature specification',
      'Up to 15 core features',
      'Multi-step workflows and approvals',
      'Role-based user access',
      'Payment processing where required',
      'Up to 3 supported third-party integrations',
      'Mobile-responsive web app',
      'Up to 3 revision rounds during build',
      'Deployment support and handover documentation',
      'Full ownership of the delivered codebase',
    ],
    examples: 'Operations platforms, subcontractor management, inspection systems, multi-user business apps',
    popular: false,
  },
]

interface RetainerOption {
  price: string
  desc: string
}

const RETAINERS: RetainerOption[] = [
  { price: '500', desc: 'Basic updates, bug fixes, and light support' },
  { price: '1,000', desc: 'Ongoing support plus regular small feature improvements' },
  { price: '1,500', desc: 'Priority support, faster turnaround, and ongoing development input' },
]

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: 'What does "commission a product" actually mean?',
    a: 'It means your problem becomes the next Autaimate product. You describe a specific industry workflow that needs a tool. I build it, fixed price, typically around four weeks. You get a live product, full code ownership, and the autonomy to run, extend, or hand off to any developer. That\'s the same pattern that produced TradeCalcs, SnagLog, CertVoice, InspectVoice, TradGo, SafeEat, and the rest of the portfolio — each started as one customer\'s commission.',
  },
  {
    q: 'Is this a consultancy engagement or a product?',
    a: 'A product. Autaimate is a product studio, not a consultancy. You walk away with working software — code, deployment, documentation, the lot — not with a report or a set of recommendations. You own it and can do what you want with it afterwards.',
  },
  {
    q: 'How do I know you can build something for my industry?',
    a: 'Autaimate has shipped products for shooting syndicates, architects, laboratories, construction, care homes, electricians, equestrians, playground inspectors, close protection operatives, independent restaurants, trades contractors, and more. If I can learn those industries, I can learn yours. The domain expertise is what you bring — I understand the workflow and build the tool.',
  },
  {
    q: 'What if I want changes after handover?',
    a: 'You own the code completely. You can hire any developer to make changes, keep me on a maintenance retainer (£500–£1,500/month), or make simple changes yourself through the GitHub web interface.',
  },
  {
    q: 'What if the project takes longer than the agreed window?',
    a: 'The fixed price covers the agreed scope. If requirements change mid-project, timeline and cost adjustments are discussed before any extra work begins. Scope is locked during Week 1 validation specifically to avoid this. No scope creep, no hourly billing surprises.',
  },
  {
    q: 'Do I need technical knowledge to work with Autaimate?',
    a: 'No. Everything is explained in plain English. You need to know your industry and your problem, not how to code. All maintenance is done through web interfaces — GitHub for files, Railway for deployment, SmartSuite for data. No terminal, no command line.',
  },
  {
    q: 'Can you guarantee my idea will work commercially?',
    a: 'No. Autaimate builds the tool; market validation is your responsibility. Week 1 validation helps identify red flags, but you know your market best. I build the product — you validate the business.',
  },
  {
    q: 'What happens if I am not happy with the result?',
    a: 'Weekly check-ins during the build phase ensure you see progress and give feedback continuously. By handover there should be no surprises. If something isn\'t right, it\'s fixed before final delivery.',
  },
  {
    q: 'What tech stack do Autaimate products use?',
    a: 'Every product is built with React 18, TypeScript, Vite, and Tailwind CSS on the frontend. Backend uses SmartSuite or Node.js depending on requirements. Hosting on Railway with GitHub for code management. Optional integrations include Stripe, Clerk authentication, Twilio, and WhatsApp Business API.',
  },
  {
    q: 'How much does a commission cost?',
    a: 'Fixed pricing for a clearly defined scope. Three tiers: Basic from £8,500 for one focused workflow, Standard from £12,500 for multi-feature products, and Premium from £18,500 for complex platforms with integrations. Payment terms are 50% upfront, 50% on delivery. Anything outside the agreed scope is quoted separately. Optional maintenance retainers from £500/month.',
  },
  {
    q: 'Do I need to use a terminal or command line?',
    a: 'No. Everything is managed through web interfaces: edit files directly in the GitHub web interface, Railway deploys automatically when changes are saved, and SmartSuite handles data management. Visual and accessible throughout.',
  },
  {
    q: 'Can Autaimate sign an NDA?',
    a: 'Yes, Autaimate is happy to sign a standard NDA before the discovery call.',
  },
]

/* ─── Component ─── */

export default function MicroSaasContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main id="main-content" className="relative">

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="pt-44 pb-24 text-center" aria-labelledby="hero-heading">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate hover:text-teal transition-colors mb-6"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Homepage
          </Link>

          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-teal/20 bg-teal-soft text-teal text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Commissions open for Q2 2026 delivery
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-ink mb-7"
          >
            Your problem becomes the next{' '}
            <span className="text-teal">Autaimate product</span>.
            <br />
            <span className="text-teal">
              Fixed price. You own the code.
            </span>
          </h1>

          <p className="text-lg text-slate max-w-3xl mx-auto mb-5 leading-relaxed">
            Every product in the Autaimate portfolio started as one UK customer's commission. TradeCalcs,
            SnagLog, CertVoice, InspectVoice, TradGo, SafeEat — every one of them began with a specific
            industry problem and a customer who needed a tool that didn't exist yet.
          </p>

          <p className="text-base text-slate italic mb-4">
            Describe the workflow &rarr; Agree a fixed price and scope &rarr; Build the product in roughly 4 weeks &rarr; Deploy and hand over the code
          </p>

          <p className="text-xl font-bold text-teal mb-10">
            Your industry is next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/8Yq1jNXtPFhF3YCr7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold text-lg rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-sand hover:border-teal text-ink hover:text-teal font-semibold rounded-xl transition-all duration-300"
            >
              See the portfolio
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate">
            Or call directly:{' '}
            <a href="tel:+447501439406" className="text-teal font-semibold hover:text-teal-dark transition-colors">
              07501 439406
            </a>
          </p>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          COMMISSION VS CONSULTANCY (Product-house framing)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="commission-heading">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Commission, not consultancy</SectionLabel>
          <h2 id="commission-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-6">
            What you actually get when you commission a product
          </h2>
          <p className="text-base text-slate leading-relaxed mb-4">
            Autaimate is a product studio. That word matters. A consultancy delivers a report,
            a set of recommendations, a slide deck. A product studio delivers a working product — the
            software, the deployment, the documentation, and the code ownership. You walk away with something
            your industry can actually use, not a file of suggestions.
          </p>
          <p className="text-base text-slate leading-relaxed mb-8">
            Every product currently on autaimate.com started the same way: one UK business described a
            specific workflow that needed its own tool, and that conversation became the next product.
            TradeCalcs came from an electrician. SnagLog came from a property inspector. CertVoice came
            from a sparky tired of kitchen-table paperwork. SafeEat came from an independent restaurateur.
            InspectVoice came from a playground inspection company. TradGo came from a tradesman losing
            jobs to missed calls. Your commission slots into exactly that lineage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-soft border border-teal/20 rounded-2xl p-7">
              <h3 className="text-lg font-bold text-teal mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                A product commission gives you
              </h3>
              <ul className="space-y-3 text-sm text-ink leading-relaxed" role="list">
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />A live, deployed product on your own domain and infrastructure</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />Complete source code — your own GitHub repository, not a locked vendor account</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />Documentation you can hand to any developer in the world</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />The right to run the product as-is, extend it, or sell it</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />A fixed price quoted up front — no hourly surprises</li>
              </ul>
            </div>
            <div className="bg-white border border-sand shadow-card rounded-2xl p-7">
              <h3 className="text-lg font-bold text-slate mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" aria-hidden="true" />
                What a commission is <em>not</em>
              </h3>
              <ul className="space-y-3 text-sm text-slate leading-relaxed" role="list">
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />A consultancy report or strategy deck</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />A SaaS subscription where you rent access from us forever</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />An hourly engagement with scope creep and surprise invoices</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />A co-founder arrangement — you own the business and the code outright</li>
                <li className="flex gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />A managed service where you can't move suppliers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS — Current Autaimate portfolio
          ═══════════════════════════════════════════════════════════ */}
      <section id="products" className="py-24" aria-labelledby="products-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 id="products-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Real products, real industries, real customers
          </h2>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-4">
            Every product listed below is live. No mockups, no concept designs, no vaporware. Each one is
            a deployed application serving real UK customers across wildly different industries. The diversity
            is the point: the commissioning methodology works across every sector.
          </p>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-12">
            Each one began life exactly the way your commission will begin: a conversation with a UK business
            who had a specific, concrete workflow problem. The domain knowledge came from the customer. The
            product, built in roughly four weeks, came from Autaimate. That's the model.
          </p>

          <div className="rounded-2xl border border-sand shadow-card overflow-hidden bg-white">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-[1.2fr_1fr_2fr_0.8fr] gap-0 px-6 py-3.5 bg-teal-soft font-mono text-xs font-semibold text-teal uppercase tracking-widest">
              <span>Product</span>
              <span>Industry</span>
              <span>What it does</span>
              <span>Link</span>
            </div>

            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_2fr_0.8fr] gap-1 sm:gap-0 px-6 py-4 bg-white border-t border-sand hover:bg-teal-soft/40 transition-colors"
              >
                <span className="font-bold text-ink text-sm">{p.name}</span>
                <span className="text-sm text-slate">{p.industry}</span>
                <span className="text-sm text-slate hidden sm:block">{p.desc}</span>
                <span className="text-sm">
                  {p.to ? (
                    <Link
                      to={p.to}
                      className="font-mono text-xs text-teal hover:text-teal-dark transition-colors"
                    >
                      Read more &rarr;
                    </Link>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-teal hover:text-teal-dark transition-colors"
                    >
                      {p.url?.replace('https://', '')}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate">
            Every product built with{' '}
            <span className="font-semibold text-teal">
              Claude AI + GitHub + Railway
            </span>
          </p>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Process</SectionLabel>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-4">
            How a commission runs
          </h2>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-4">
            A proven 5-week process, refined across 17+ deliveries. Every commission follows the same shape:
            one week of validation, three weeks of building, one week of handover. Predictable, boring, and
            that's the point — the interesting part is your product, not the logistics of getting it built.
          </p>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-12">
            The fixed four-ish-week build window is not arbitrary. It's the outcome of disciplining scope
            and using a proven stack. By constraining the build to a narrow window, we stay focused on the
            features that genuinely matter to end users rather than piling up speculative functionality
            that slows everyone down.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-sand shadow-card rounded-2xl p-8 hover:shadow-card-hover hover:border-teal/40 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-teal mb-4" aria-hidden="true" />
                  <p className="font-mono text-xs font-semibold text-teal uppercase tracking-widest mb-2">
                    {step.week}
                  </p>
                  <h3 className="text-xl font-bold text-ink mb-5">{step.title}</h3>
                  <ul className="space-y-3" role="list">
                    {step.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-slate leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          PRICING
          ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Fixed price. Clear scope.
          </h2>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-12">
            50% upfront, 50% on delivery. Every commission includes a clearly agreed scope, deployment
            support, documentation, and full ownership of the delivered codebase. Anything outside the
            agreed scope is quoted separately before any extra work begins. No hidden fees, no hourly
            billing surprises, and no ongoing licence costs for the software itself.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICING.map((tier, i) => (
              <div
                key={i}
                className={`
                  relative flex flex-col bg-white border rounded-2xl p-9 shadow-card
                  transition-all duration-300 hover:shadow-card-hover
                  ${tier.popular
                    ? 'border-teal/40 bg-teal-soft'
                    : 'border-sand hover:border-teal/40'
                  }
                `}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-cta">
                    Most Popular
                  </span>
                )}
                <p className="text-xs font-semibold text-slate uppercase tracking-wider mb-2">
                  {tier.tier}
                </p>
                <p className="text-4xl font-black text-ink tracking-tight mb-1">
                  <span className="text-lg font-normal text-slate">£</span>
                  {tier.price}
                </p>
                <p className="text-sm text-teal font-medium mb-6">
                  Best for: {tier.best}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1" role="list">
                  {tier.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-ink leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate italic pt-4 border-t border-sand">
                  Examples: {tier.examples}
                </p>
              </div>
            ))}
          </div>

          {/* Scope protection */}
          <div className="mt-8 bg-white border border-sand shadow-card rounded-xl px-6 py-5">
            <p className="font-mono text-xs font-semibold text-teal uppercase tracking-widest mb-3">Scope &amp; terms</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                'Prices apply to clearly defined project scopes only',
                'Anything outside the agreed scope is quoted separately',
                'Discovery may be required before final sign-off',
                'Timeline starts once requirements and access are provided',
                'Complex integrations or data migrations may require a separate quote',
                'Post-delivery support requires a maintenance plan',
              ].map((item, i) => (
                <p key={i} className="flex items-start gap-2 text-xs text-slate leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate flex-shrink-0" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Retainer */}
          <div className="mt-12 bg-white border border-sand shadow-card rounded-2xl p-9">
            <h3 className="text-xl font-bold text-ink mb-2">
              Optional: maintenance retainer
            </h3>
            <p className="text-sm text-slate mb-6">
              Post-delivery support is not included unless covered by a maintenance plan. You submit
              requests, I implement. Retainer clients receive priority response times and regular check-ins
              to discuss feature roadmaps and improvements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {RETAINERS.map((r, i) => (
                <div
                  key={i}
                  className="p-5 bg-teal-soft border border-teal/20 rounded-xl"
                >
                  <p className="text-2xl font-extrabold text-ink mb-1">
                    £{r.price}
                    <span className="text-sm font-normal text-slate">/month</span>
                  </p>
                  <p className="text-sm text-slate">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          TECH STACK
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="stack-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Tech stack</SectionLabel>
          <h2 id="stack-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-4">
            What you'll get
          </h2>
          <p className="text-base text-slate max-w-2xl leading-relaxed mb-12">
            Modern, maintainable technology — no expensive legacy systems. Every tool in the stack has
            been selected for reliability, ease of maintenance, and cost-effectiveness for UK small and
            medium businesses. Your commissioned product ships on the same stack every other Autaimate
            product runs on, which means any competent React developer can take over if you ever decide
            to move away from us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Code2,
                title: 'Frontend',
                text: 'React 18 and Vite for modern, fast development. Tailwind CSS for clean, professional design. TypeScript for type safety and maintainability. Mobile-responsive from day one, with progressive web app capabilities on every build.',
              },
              {
                icon: Shield,
                title: 'Backend & data',
                text: 'SmartSuite for database management, business logic, and automation workflows. Optional Node.js/Express for complex API requirements. Neon PostgreSQL available for advanced data needs. No database management required on your end.',
              },
              {
                icon: Rocket,
                title: 'Hosting & code management',
                text: 'Railway for reliable, scalable, automatic deployment on European servers. GitHub for version control — you own the repository. No terminal required: edit files in the GitHub web interface and Railway auto-deploys.',
              },
              {
                icon: Zap,
                title: 'Optional integrations',
                text: 'Stripe for payment processing. Clerk for authentication and multi-factor. Twilio for SMS. WhatsApp Business API. Cloudflare R2 for file storage. Sentry for error monitoring. Google Analytics 4 for usage tracking.',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-sand shadow-card rounded-2xl p-7"
                >
                  <Icon className="w-5 h-5 text-teal mb-3" aria-hidden="true" />
                  <h3 className="font-mono text-xs font-semibold text-teal uppercase tracking-widest mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {card.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          WHY THIS WORKS
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Advantage</SectionLabel>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-12">
            Why the commission model works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Faster than traditional development',
                text: 'Traditional software development takes 3–6 months and costs £30,000–£50,000 or more. A commission here delivers in roughly four weeks for £8,500–£18,500. Claude AI generates code in minutes rather than hours. With 17+ completed builds behind us, the fastest path from idea to deployed product has been mapped and optimised. AI-assisted development does not sacrifice quality — it eliminates the repetitive, time-consuming parts of development so more time is spent on the features that make your product unique.',
                stat: 'Traditional: 3–6 months, £30K–£50K → Here: ~4 weeks, £8.5K–£18.5K',
              },
              {
                icon: Shield,
                title: 'You own everything',
                text: 'No vendor lock-in. No recurring licence fees for the software itself. You receive full GitHub repository access, complete source code, all documentation, and the freedom to hire anyone to extend or modify it. The codebase uses standard React and TypeScript — the most widely used frontend technologies in the world — so any competent developer can work with it. Your investment appreciates rather than depreciates.',
              },
              {
                icon: Users,
                title: 'Maintainable without technical knowledge',
                text: 'Everything is managed through web interfaces that are as intuitive as Google Docs. Edit files directly in the GitHub web interface without touching a terminal. Railway auto-deploys changes when you save. SmartSuite provides a visual spreadsheet-like interface for managing your data. If you can use Microsoft Word and Google Sheets, you have all the technical skill needed to maintain the product after handover.',
              },
              {
                icon: Briefcase,
                title: 'Built by someone who understands the industries',
                text: "Autaimate is run by a 58-year-old with 40 years in UK construction, trades, and business operations. That means a deep understanding of compliance and safety requirements, industry-specific workflows, what features actually matter to end users, and how to spot what will and will not work in the real world. Domain experience combined with AI-assisted development is a rare combination — and it's why the commissioned products actually fit the industries they serve.",
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-sand shadow-card rounded-2xl p-8 hover:shadow-card-hover hover:border-teal/40 transition-all"
                >
                  <Icon className="w-5 h-5 text-teal mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-ink mb-3">{card.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{card.text}</p>
                  {'stat' in card && card.stat && (
                    <p className="mt-4 font-mono text-xs text-teal">
                      {card.stat}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          WHO THIS IS FOR
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="fit-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Fit</SectionLabel>
          <h2 id="fit-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-12">
            Who commissioning is for
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-soft border border-teal/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-teal mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                Perfect fit
              </h3>
              <ul className="space-y-4" role="list">
                <li className="text-sm text-ink leading-relaxed">
                  <strong className="text-teal font-semibold">You have deep domain expertise</strong> — you know your industry
                  inside and out, you have decades of experience, and you have spotted a specific problem
                  that needs a software solution
                </li>
                <li className="text-sm text-ink leading-relaxed">
                  <strong className="text-teal font-semibold">You have business experience but not a tech team</strong> — you know
                  exactly what tool your market needs, who will pay for it, and can describe the workflow clearly
                </li>
                <li className="text-sm text-ink leading-relaxed">
                  <strong className="text-teal font-semibold">You want to own the product</strong> — you don't want to rent software
                  forever, you want full control and flexibility, and you're thinking long-term about building an asset
                </li>
                <li className="text-sm text-ink leading-relaxed">
                  <strong className="text-teal font-semibold">You're ready to start focused</strong> — you understand the principle
                  of starting with the essential workflow and iterating later, you want to test the market quickly,
                  and you're willing to refine based on real user feedback
                </li>
              </ul>
            </div>

            <div className="bg-white border border-sand shadow-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" aria-hidden="true" />
                Not a fit
              </h3>
              <ul className="space-y-4" role="list">
                <li className="text-sm text-slate leading-relaxed">
                  <strong className="text-ink font-semibold">Financial services apps</strong> — banking, lending, and investment
                  platforms involve regulatory complexity and compliance requirements that fall outside this service's specialisation
                </li>
                <li className="text-sm text-slate leading-relaxed">
                  <strong className="text-ink font-semibold">Consumer social apps</strong> — commissions here deliver B2B and niche
                  tools, not social networks or consumer-facing platforms that require viral growth mechanics
                </li>
                <li className="text-sm text-slate leading-relaxed">
                  <strong className="text-ink font-semibold">Native mobile apps</strong> — commissioned products are web
                  applications that work excellently on mobile devices, but we do not build iOS or Android native apps
                </li>
                <li className="text-sm text-slate leading-relaxed">
                  <strong className="text-ink font-semibold">Vague or unvalidated ideas</strong> — a clear problem and solution
                  is required. Ideas that cannot be described in terms of specific user workflows and pain points
                  are not yet ready for commissioning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          HOW TO GET STARTED
          ═══════════════════════════════════════════════════════════ */}
      <section id="start" className="py-24" aria-labelledby="start-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Get started</SectionLabel>
          <h2 id="start-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-12">
            How to commission a product
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                icon: Calendar,
                title: 'Book a discovery call',
                text: 'We discuss your industry, the specific problem, the features you need, and which pricing tier makes sense. No obligation, no pressure.',
              },
              {
                num: '02',
                icon: FileText,
                title: 'Get a proposal',
                text: 'Within 24 hours: specific deliverables, timeline, fixed price quote. Payment terms: 50% upfront, 50% on delivery.',
              },
              {
                num: '03',
                icon: Hammer,
                title: 'We build together',
                text: 'Week 1: validation and planning. Weeks 2–4: I build, you review progress weekly. Continuous feedback throughout.',
              },
              {
                num: '04',
                icon: Gift,
                title: 'You own it',
                text: 'Full code ownership, deployed, documented. Maintain it yourself, hire someone, or keep me on retainer.',
              },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-sand shadow-card rounded-2xl p-7 text-center"
                >
                  <p className="font-mono text-3xl font-extrabold text-teal/30 mb-3" aria-hidden="true">
                    {step.num}
                  </p>
                  <Icon className="w-5 h-5 text-teal mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-12">
            Frequently asked questions
          </h2>

          <div className="rounded-2xl border border-sand shadow-card overflow-hidden bg-white" role="list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`border-t border-sand first:border-t-0 ${
                  openFaq === i ? 'bg-teal-soft' : 'bg-white'
                }`}
                role="listitem"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-teal-soft/60 transition-colors"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-sm text-ink pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                  role="region"
                >
                  <p className="px-6 text-sm text-slate leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-sand" />

      {/* ═══════════════════════════════════════════════════════════
          ABOUT
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>About</SectionLabel>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-8">
            About me
          </h2>

          <div className="space-y-6">
            <p className="text-base text-slate leading-relaxed">
              I'm 58. I spent 40 years in UK construction, trades, and business operations. Three years
              ago I couldn't write a line of code. Today Autaimate has{' '}
              <strong className="text-ink font-semibold">17+ live products</strong> across wildly different
              industries — shooting syndicates, laboratories, architects, electricians, property inspectors,
              playground safety, close protection, independent restaurants, and more.
            </p>
            <p className="text-base text-slate leading-relaxed">
              The secret isn't coding talent, and it never was. The real advantages are domain expertise
              built over four decades of understanding real business problems, AI-assisted development using
              Claude to generate clean and maintainable code, a simple repeatable deployment process using
              GitHub and Railway that requires no terminal knowledge, and the pattern recognition that comes
              from having done this 17+ times across wildly different industries.
            </p>
            <p className="text-base text-slate leading-relaxed">
              Each of those four elements compounds with every new commission. Your product benefits from
              everything learned in the builds before it — industry compliance patterns, field-tested UI
              choices, data management strategies for non-technical end users, the lot. That compounding
              is why a four-week build is realistic now, when it wouldn't have been on the first project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                'Domain expertise — 40 years in real UK industries',
                'AI-assisted development — Claude generates the code',
                'Simple deployment — GitHub + Railway, no terminal',
                'Pattern recognition — 17+ products across the portfolio',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ink">
                  <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <p className="text-lg text-ink font-semibold mt-4">
              I'm not here to impress you with technical jargon. I'm here to{' '}
              <span className="text-teal">build the product your industry needs.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="pb-24" aria-labelledby="cta-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-teal-soft border border-teal/20 rounded-3xl p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(10,157,128,0.10)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
            <h2 id="cta-heading" className="relative text-2xl sm:text-3xl font-extrabold text-ink mb-3">
              Commissions open for Q2 2026
            </h2>
            <p className="relative text-base text-slate mb-8">
              Capacity is deliberately limited to keep quality and attention where it belongs. A few commission
              slots are currently available.
            </p>
            <a
              href="https://calendar.app.google/8Yq1jNXtPFhF3YCr7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-teal hover:bg-teal-dark text-white font-bold text-lg rounded-xl shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="relative mt-4 text-sm text-slate">
              Or call directly:{' '}
              <a href="tel:+447501439406" className="text-teal font-semibold hover:text-teal-dark transition-colors">
                07501 439406
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Internal links (v3 Point 15)
          ═══════════════════════════════════════════════════════════ */}
      <section className="pb-16" aria-label="Related pages">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="font-mono text-xs font-semibold text-slate uppercase tracking-widest mb-4">
            Explore the portfolio
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link to="/" className="text-sm text-teal hover:text-teal-dark transition-colors">
              Autaimate homepage &rarr;
            </Link>
            <Link to="/for/construction" className="text-sm text-teal hover:text-teal-dark transition-colors">
              Software for UK construction & trades &rarr;
            </Link>
            <Link to="/for/property" className="text-sm text-teal hover:text-teal-dark transition-colors">
              Software for UK property &rarr;
            </Link>
            <Link to="/for/care-homes" className="text-sm text-teal hover:text-teal-dark transition-colors">
              Software for UK care homes &rarr;
            </Link>
            <Link to="/products/tradecalcs" className="text-sm text-teal hover:text-teal-dark transition-colors">
              TradeCalcs — BS 7671 calculators &rarr;
            </Link>
            <Link to="/products/snaglog" className="text-sm text-teal hover:text-teal-dark transition-colors">
              SnagLog — AI snagging reports &rarr;
            </Link>
            <Link to="/products/certvoice" className="text-sm text-teal hover:text-teal-dark transition-colors">
              CertVoice — voice-first electrical certs &rarr;
            </Link>
            <Link to="/products/tradgo" className="text-sm text-teal hover:text-teal-dark transition-colors">
              TradGo — AI agent for UK trades &rarr;
            </Link>
            <Link to="/products/safeeat" className="text-sm text-teal hover:text-teal-dark transition-colors">
              SafeEat — QR allergen system for UK hospitality &rarr;
            </Link>
            <Link to="/products/inspectvoice" className="text-sm text-teal hover:text-teal-dark transition-colors">
              InspectVoice — BS EN 1176 playground inspection &rarr;
            </Link>
            <Link to="/products/detailrecon" className="text-sm text-teal hover:text-teal-dark transition-colors">
              DetailRecon — AI recon reports for UK CP &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ─── Reusable sub-component ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-teal uppercase tracking-[0.1em] mb-4">
      <span className="w-6 h-px bg-teal" aria-hidden="true" />
      {children}
    </p>
  )
}
