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
  Briefcase
} from 'lucide-react'

/* ─── Data ─── */

interface Product {
  name: string
  industry: string
  desc: string
  url: string
  external: boolean
}

const PRODUCTS: Product[] = [
  { name: 'ShootSync', industry: 'Shooting Syndicates', desc: 'Member management, shoot days, payments', url: 'https://shootsync.co.uk', external: true },
  { name: 'Approv', industry: 'Architecture/Design', desc: 'One-click client approvals via email', url: 'https://approv.co.uk', external: true },
  { name: 'CraneQuote', industry: 'Construction/Logistics', desc: 'Crane hire cost calculators', url: 'https://cranequote.co.uk', external: true },
  { name: 'LabCalcs', industry: 'Research/Science', desc: 'Molarity, dilutions, buffer prep', url: '/products/labcalcs', external: false },
  { name: 'ClearProof', industry: 'Health & Safety', desc: 'Multilingual comprehension verification', url: 'https://clearproof.co.uk', external: true },
  { name: 'LeadFortress', industry: 'Trade Contractors', desc: 'Six-channel lead capture system', url: 'https://leadfortress.co.uk', external: true },
  { name: 'AutoReplyChat', industry: 'Small Business', desc: 'AI chatbots for customer enquiries', url: 'https://autoreplychat.com', external: true },
  { name: 'TradeCalcs', industry: 'Construction Trades', desc: '100+ professional calculators', url: '/products/tradecalcs', external: false },
  { name: 'EquipSafety', industry: 'Care Homes/Facilities', desc: 'Equipment compliance tracking', url: '/products/equipsafety', external: false },
  { name: 'HorseCost / DogCost', industry: 'Pet Industry', desc: 'Cost analysis calculators', url: '/products/horsecost', external: false },
  { name: 'SnagLog', industry: 'Property/Construction', desc: 'AI-powered snagging reports', url: 'https://app.snaglog.co.uk', external: true },
  { name: 'DetailRecon', industry: 'Close Protection', desc: 'AI security reconnaissance reports', url: 'https://detailrecon.co.uk', external: true },
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
      'I understand your business and the specific problem',
      'We spec out features — must-haves vs nice-to-haves',
      'I validate it\'s buildable in 4 weeks',
      'You get a written proposal with exact deliverables',
    ],
  },
  {
    week: 'Weeks 2–4',
    title: 'Building',
    icon: Hammer,
    items: [
      'I build your MVP using Claude AI',
      'Clean, maintainable React + TypeScript code',
      'Managed in GitHub — no terminal needed',
      'Auto-deployed to Railway',
      'Weekly 30-min check-ins to show progress',
    ],
  },
  {
    week: 'Week 5',
    title: 'Handoff',
    icon: Gift,
    items: [
      'Live deployed app on Railway',
      'Full GitHub repository — you become owner',
      'Complete documentation',
      '1-hour training walkthrough',
      'You can maintain it yourself or hire anyone',
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
    best: 'Simple tools & calculators',
    features: [
      'Single-purpose tool or calculator',
      'Up to 5 core features',
      '3–4 week delivery',
      'Mobile-responsive design',
      'Full code ownership',
      'Documentation included',
    ],
    examples: 'Quote generators, ROI calculators, booking forms, simple trackers',
    popular: false,
  },
  {
    tier: 'Standard',
    price: '12,500',
    best: 'Multi-feature applications',
    features: [
      'Multi-feature application',
      'Up to 10 core features',
      '4–5 week delivery',
      'User authentication (Clerk)',
      'Data management (SmartSuite)',
      'Mobile-responsive design',
      'Full code ownership',
      'Documentation included',
    ],
    examples: 'Compliance tracking, client portals, inventory management, CRM systems',
    popular: true,
  },
  {
    tier: 'Premium',
    price: '18,500',
    best: 'Complex platforms',
    features: [
      'Complex app with integrations',
      'Up to 15 core features',
      '5–6 week delivery',
      'Payment processing (Stripe)',
      'API integrations',
      'Advanced workflows',
      'Multi-user permissions',
      'Mobile-responsive design',
      'Full code ownership',
      'Documentation included',
    ],
    examples: 'Full SaaS products, multi-user platforms, industry-specific tools with integrations',
    popular: false,
  },
]

interface RetainerOption {
  price: string
  desc: string
}

const RETAINERS: RetainerOption[] = [
  { price: '500', desc: 'Basic updates and bug fixes' },
  { price: '1,000', desc: 'Regular feature additions and support' },
  { price: '1,500', desc: 'Priority support + ongoing development' },
]

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: 'How do I know you can build something for MY industry?',
    a: 'I\'ve built for shooting clubs, architects, laboratories, construction, care homes, and AI chatbots. If I can learn those, I can learn yours. The key is YOU have the domain expertise — I just need to understand the workflow and build the tool.',
  },
  {
    q: 'What if I want changes after handover?',
    a: 'You own the code. You can hire any developer to make changes, keep me on a maintenance retainer (£500–£1,500/month), or make simple changes yourself in the GitHub web interface.',
  },
  {
    q: 'What if the project takes longer than 4 weeks?',
    a: 'Fixed price includes reasonable scope. If you change requirements mid-project, we discuss timeline and cost adjustments. I\'m incentivised to deliver on time — I\'ve done this 11 times and know how to scope correctly.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. I explain everything in plain English. You need to know your business problem, not how to code. All maintenance is done through web interfaces — no terminal or command line required.',
  },
  {
    q: 'Can you guarantee my idea will work?',
    a: 'No. I can build the tool, but market validation is on you. Week 1 validation helps identify red flags, but you know your market better than I do. I\'m building the tool — you\'re validating the business.',
  },
  {
    q: 'What happens if I\'m not happy with the result?',
    a: 'We have weekly check-ins during building, so you see progress and give feedback continuously. By handoff, there should be no surprises. If something isn\'t right, I fix it before final delivery.',
  },
  {
    q: 'What tech stack do your products use?',
    a: 'All products are built with React 18, TypeScript, Vite, and Tailwind CSS. Backend uses SmartSuite or Node.js depending on needs. Hosting on Railway with GitHub for code management. Optional integrations include Stripe payments, Clerk authentication, Twilio SMS, and WhatsApp.',
  },
  {
    q: 'How much does a micro-SaaS build cost?',
    a: 'Fixed pricing with three tiers: Basic from £8,500 for simple tools, Standard from £12,500 for multi-feature apps, and Premium from £18,500 for complex platforms with integrations. Payment terms are 50% upfront, 50% on delivery.',
  },
  {
    q: 'Do I need to use a terminal or command line?',
    a: 'No. Everything is managed through web interfaces: edit files directly in the GitHub web interface, Railway deploys automatically when changes are saved, and SmartSuite handles data management. Everything is visual and accessible.',
  },
  {
    q: 'Can you sign an NDA?',
    a: 'Yes, happy to sign a standard NDA before our discovery call.',
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
          HERO — Point 12: Unique H1
          ═══════════════════════════════════════════════════════════ */}
      <section className="pt-44 pb-24 text-center" aria-labelledby="hero-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Taking 4 projects in Q1 2026
          </div>

          {/* H1 — unique, keyword-rich */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white mb-7"
          >
            I&apos;ve Built{' '}
            <span className="text-orange-400">11+</span> Micro-SaaS Products
            Across <span className="text-orange-400">11</span> Different
            Industries.
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              Now I&apos;ll Build Yours.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-5 leading-relaxed">
            From shooting syndicates to laboratory researchers. From crane hire
            to AI chatbots. From architects to tradespeople. I&apos;ve proven the
            same process works across wildly different niches.
          </p>

          <p className="text-base text-slate-500 italic mb-4">
            Spot the underserved market &rarr; Validate the pain point &rarr;
            Build the MVP in 4 weeks &rarr; Deploy and hand over the code
          </p>

          <p className="text-xl font-bold text-orange-400 mb-10">
            Your industry is next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendar.app.google/8Yq1jNXtPFhF3YCr7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(251,146,60,0.3)] hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-teal-500/30 text-teal-400 font-semibold rounded-xl hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-300"
            >
              See the Products
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS — Point 12: H2
          Point 15: Internal linking (Link components to product pages)
          ═══════════════════════════════════════════════════════════ */}
      <section id="products" className="py-24" aria-labelledby="products-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 id="products-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Real Products, Real Industries, Real Results
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-4">
            Every single one built using Claude AI + GitHub + Railway. Every
            single one fully operational. These are not mockups or concept
            designs — they are live, deployed applications serving real
            businesses across the United Kingdom. Each product was conceived,
            validated, built, and deployed using the exact same process that
            will be applied to your project.
          </p>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-12">
            The diversity of the portfolio demonstrates a critical advantage:
            the methodology is industry-agnostic. Whether the domain is
            agriculture, architecture, healthcare compliance, or close
            protection security, the core approach of identifying a pain point,
            validating demand, and shipping a focused MVP translates across
            every sector. What changes is the domain knowledge — and that is
            what you bring to the table.
          </p>

          {/* Product table */}
          <div className="rounded-2xl border border-white/5 overflow-hidden">
            {/* Header */}
            <div className="hidden sm:grid grid-cols-[1.2fr_1fr_2fr_0.8fr] gap-0 px-6 py-3.5 bg-white/[0.03] font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest">
              <span>Product</span>
              <span>Industry</span>
              <span>What It Does</span>
              <span>Link</span>
            </div>

            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_2fr_0.8fr] gap-1 sm:gap-0 px-6 py-4 bg-white/[0.02] border-t border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <span className="font-bold text-white text-sm">{p.name}</span>
                <span className="text-sm text-slate-400">{p.industry}</span>
                <span className="text-sm text-slate-400 hidden sm:block">{p.desc}</span>
                <span className="text-sm">
                  {p.external ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-teal-400/70 hover:text-teal-400 transition-colors"
                    >
                      {p.url.replace('https://', '')}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    /* Point 15: Internal links with descriptive anchor text */
                    <Link
                      to={p.url}
                      className="font-mono text-xs text-teal-400/70 hover:text-teal-400 transition-colors"
                    >
                      View details &rarr;
                    </Link>
                  )}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Every product built with{' '}
            <span className="font-semibold text-teal-400">
              Claude AI + GitHub + Railway
            </span>
          </p>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          HOW IT WORKS — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Process</SectionLabel>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            How It Works
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-4">
            A proven 5-week process, refined across 11 successful builds. The
            methodology has been iterated and improved with every project
            delivery, eliminating bottlenecks and ensuring consistent,
            predictable outcomes. Unlike traditional development agencies that
            operate on vague timelines and open-ended budgets, this process is
            designed for speed, clarity, and accountability at every stage.
          </p>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-12">
            The fixed timeline is not arbitrary — it is the result of
            understanding what can realistically be achieved when the scope is
            disciplined and the technology stack is proven. By constraining the
            build to four weeks of active development, both parties stay focused
            on the features that genuinely matter to end users rather than
            accumulating speculative functionality.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROCESS.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-orange-400 mb-4" aria-hidden="true" />
                  <p className="font-mono text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2">
                    {step.week}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-5">{step.title}</h3>
                  <ul className="space-y-3" role="list">
                    {step.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400/60 flex-shrink-0" aria-hidden="true" />
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

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          PRICING — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Fixed Price. No Surprises.
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-12">
            50% upfront, 50% on delivery. You own everything. Every price
            includes full code ownership, documentation, deployment to Railway,
            and a training walkthrough. There are no hidden fees, no hourly
            billing surprises, and no ongoing licence costs for the software
            itself. The price you agree to is the price you pay.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICING.map((tier, i) => (
              <div
                key={i}
                className={`
                  relative flex flex-col bg-white/[0.02] border rounded-2xl p-9
                  transition-all duration-300 hover:bg-white/[0.04]
                  ${tier.popular
                    ? 'border-teal-500/30 bg-teal-500/[0.03]'
                    : 'border-white/5 hover:border-white/10'
                  }
                `}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-400 text-[#060610] text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {tier.tier}
                </p>
                <p className="text-4xl font-black text-white tracking-tight mb-1">
                  <span className="text-lg font-normal text-slate-500">£</span>
                  {tier.price}
                </p>
                <p className="text-sm text-teal-400 font-medium mb-6">
                  Best for: {tier.best}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1" role="list">
                  {tier.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500 italic pt-4 border-t border-white/5">
                  Examples: {tier.examples}
                </p>
              </div>
            ))}
          </div>

          {/* Retainer */}
          <div className="mt-12 bg-white/[0.02] border border-white/5 rounded-2xl p-9">
            <h3 className="text-xl font-bold text-white mb-2">
              Optional: Maintenance Retainer
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Don&apos;t want to manage updates yourself? You submit requests, I
              implement. Simple as that. Retainer clients receive priority
              response times and regular check-ins to discuss feature roadmaps
              and improvements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {RETAINERS.map((r, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-xl"
                >
                  <p className="text-2xl font-extrabold text-white mb-1">
                    £{r.price}
                    <span className="text-sm font-normal text-slate-500">/month</span>
                  </p>
                  <p className="text-sm text-slate-400">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          TECH STACK — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="stack-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 id="stack-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            What You&apos;ll Get
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed mb-12">
            Modern, maintainable technology — no expensive legacy systems. Every
            tool in this stack has been selected for reliability, ease of
            maintenance, and cost-effectiveness for UK small and medium
            businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Code2,
                title: 'Frontend',
                text: 'React 18 + Vite for modern, fast development. Tailwind CSS for clean, professional design. TypeScript for type safety and maintainability. Mobile-responsive out of the box with progressive web app capabilities.',
              },
              {
                icon: Shield,
                title: 'Backend & Data',
                text: 'SmartSuite for database management, business logic, and automation workflows. Optional Node.js/Express for complex API requirements. Neon PostgreSQL available for advanced data needs. No database management required on your end.',
              },
              {
                icon: Rocket,
                title: 'Hosting & Code Management',
                text: 'Railway for reliable, scalable, automatic deployment on European servers. GitHub for version control — you own the repository. No terminal required: edit files in the GitHub web interface and Railway auto-deploys.',
              },
              {
                icon: Zap,
                title: 'Optional Integrations',
                text: 'Stripe for payment processing. Clerk for authentication and multi-factor authentication. Twilio for SMS notifications. WhatsApp Business API for messaging. Cloudflare R2 for file storage. Sentry for error monitoring. Google Analytics 4 for usage tracking.',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-7"
                >
                  <Icon className="w-5 h-5 text-orange-400 mb-3" aria-hidden="true" />
                  <h3 className="font-mono text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          WHY THIS WORKS — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Advantage</SectionLabel>
          <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
            Why This Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Faster Than Traditional Development',
                text: 'Traditional software development takes 3–6 months and costs £30,000–£50,000 or more. This service delivers in 4 weeks for £8,500–£18,500. Claude AI generates code in minutes rather than hours. With 11 completed builds, the fastest path from idea to deployed product has been mapped and optimised. The AI-assisted approach does not sacrifice quality — it eliminates the repetitive, time-consuming parts of development so more time is spent on the features that make your product unique.',
                stat: 'Traditional: 3–6 months, £30K–£50K → With me: 4 weeks, £8.5K–£18.5K',
              },
              {
                icon: Shield,
                title: 'You Own Everything',
                text: 'No vendor lock-in. No recurring licence fees for the software itself. You receive full GitHub repository access, complete source code, all documentation, and the freedom to hire anyone to extend or modify it. The codebase uses standard React and TypeScript — the most widely used frontend technologies in the world — so any competent developer can work with it. Your investment appreciates rather than depreciates.',
              },
              {
                icon: Users,
                title: 'Maintainable Without Technical Knowledge',
                text: 'Everything is managed through web interfaces that are as intuitive as using Google Docs. Edit files directly in the GitHub web interface without touching a terminal. Railway auto-deploys changes when you save. SmartSuite provides a visual spreadsheet-like interface for managing your data. If you can use Microsoft Word and Google Sheets, you have all the technical skill needed to maintain your application.',
              },
              {
                icon: Briefcase,
                title: 'Built by Someone Who Understands Business',
                text: 'This service is not run by a 25-year-old developer fresh from a coding bootcamp. It is run by a 58-year-old entrepreneur with 40 years in construction, trades, and business operations. That means a deep understanding of compliance and safety requirements, industry-specific workflows, what features actually matter to end users, and how to spot what will and what will not work in the real world. Domain expertise combined with AI-assisted development is a powerful combination.',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
                >
                  <Icon className="w-5 h-5 text-teal-400 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.text}</p>
                  {'stat' in card && card.stat && (
                    <p className="mt-4 font-mono text-xs text-teal-400">
                      {card.stat}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          WHO THIS IS FOR — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="fit-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Fit</SectionLabel>
          <h2 id="fit-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
            Who This Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-teal-400 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                Perfect Fit
              </h3>
              <ul className="space-y-4" role="list">
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-teal-400 font-semibold">You&apos;re 50+ with deep domain expertise</strong> — you know your industry
                  inside and out, you have decades of experience, and you&apos;ve spotted a specific problem
                  that needs a software solution
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-teal-400 font-semibold">You have business experience but not a tech team</strong> — you know
                  exactly what tool your market needs, you know who will pay for it, and you can
                  describe the workflow clearly
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-teal-400 font-semibold">You want to own the solution</strong> — you don&apos;t want to rent software
                  forever, you want full control and flexibility, and you are thinking long-term
                  about building an asset
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-teal-400 font-semibold">You&apos;re ready to start with an MVP</strong> — you understand the principle
                  of starting simple and iterating later, you want to test the market quickly, and
                  you are willing to refine based on real user feedback
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-orange-400 mb-5 flex items-center gap-2">
                <XCircle className="w-5 h-5" aria-hidden="true" />
                Not a Fit
              </h3>
              <ul className="space-y-4" role="list">
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-orange-400 font-semibold">Financial services apps</strong> — banking, lending, and investment
                  platforms involve regulatory complexity and compliance requirements that fall
                  outside this service&apos;s specialisation
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-orange-400 font-semibold">Consumer social apps</strong> — this service builds B2B and niche tools,
                  not social networks or consumer-facing platforms that require viral growth
                  mechanics
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-orange-400 font-semibold">Native mobile apps</strong> — the service builds web applications that
                  work excellently on mobile devices, but does not build iOS or Android native
                  applications
                </li>
                <li className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-orange-400 font-semibold">Vague or unvalidated ideas</strong> — a clear problem and solution is
                  required. Ideas that cannot be described in terms of specific user workflows
                  and pain points are not yet ready for development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          HOW TO GET STARTED — H2 + H3 hierarchy
          ═══════════════════════════════════════════════════════════ */}
      <section id="start" className="py-24" aria-labelledby="start-heading">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Get Started</SectionLabel>
          <h2 id="start-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
            How to Get Started
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: '01',
                icon: Calendar,
                title: 'Book a Discovery Call',
                text: 'We discuss your business, the specific problem, what features you need, and which pricing tier makes sense. No obligation, no pressure.',
              },
              {
                num: '02',
                icon: FileText,
                title: 'Get a Proposal',
                text: 'Within 24 hours: specific deliverables, timeline, fixed price quote. Payment terms: 50% upfront, 50% on delivery.',
              },
              {
                num: '03',
                icon: Hammer,
                title: 'We Build Together',
                text: 'Week 1: validation and planning. Weeks 2–4: I build, you review progress weekly. Continuous feedback throughout.',
              },
              {
                num: '04',
                icon: Gift,
                title: 'You Own It',
                text: 'Full code ownership, deployed, documented. Maintain it yourself, hire someone, or keep me on retainer.',
              },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-7 text-center"
                >
                  <p className="font-mono text-3xl font-extrabold text-teal-400/30 mb-3" aria-hidden="true">
                    {step.num}
                  </p>
                  <Icon className="w-5 h-5 text-orange-400 mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          FAQ — H2, Point 13 (FAQ blocks, schema in page wrapper)
          ═══════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>FAQ</SectionLabel>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="rounded-2xl border border-white/5 overflow-hidden" role="list">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`border-t border-white/5 first:border-t-0 ${
                  openFaq === i ? 'bg-white/[0.03]' : 'bg-white/[0.01]'
                }`}
                role="listitem"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-sm text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-60 pb-5' : 'max-h-0'
                  }`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <p className="px-6 text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ═══════════════════════════════════════════════════════════
          ABOUT — H2
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>About</SectionLabel>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
            About Me
          </h2>

          <div className="space-y-6">
            <p className="text-base text-slate-400 leading-relaxed">
              I&apos;m 58 years old. I spent 40 years working in construction, trades,
              and business operations across the United Kingdom. Three years ago,
              I could not write a single line of code. Today, I have built and
              deployed <strong className="text-white font-semibold">11 operational SaaS products</strong> across
              wildly different industries — from shooting syndicates to
              laboratories, from architects to tradespeople.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              The secret is not coding talent. It never was. The real advantages
              are domain expertise built over four decades of understanding real
              business problems, AI-assisted development using Claude to generate
              clean and maintainable code, a simple and repeatable deployment
              process using GitHub and Railway that requires no terminal or
              command line knowledge, and the pattern recognition that comes from
              having done this 11 times across 11 different industries.
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Each of those four elements compounds with every new project. The
              twelfth build benefits from everything learned in the first eleven.
              Industry-specific compliance requirements, user interface patterns
              that work in field conditions, data management strategies for
              non-technical end users — all of this accumulated knowledge
              transfers directly to your project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                'Domain expertise — I understand real business problems',
                'AI-assisted development — Claude generates the code',
                'Simple deployment — GitHub + Railway, no terminal',
                'Pattern recognition — I\'ve done this 11 times',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <p className="text-lg text-slate-300 font-semibold mt-4">
              I&apos;m not here to impress you with technical jargon. I&apos;m here to{' '}
              <span className="text-white">build the tool your industry needs.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="pb-24" aria-labelledby="cta-heading">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-white/[0.02] border border-white/5 rounded-3xl p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(251,146,60,0.08)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
            <h2 id="cta-heading" className="relative text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Taking 4 Projects in Q1 2026
            </h2>
            <p className="relative text-base text-slate-400 mb-8">
              I limit projects to ensure quality and attention. Currently have 4
              spots available for February–March delivery.
            </p>
            <a
              href="https://calendar.app.google/8Yq1jNXtPFhF3YCr7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(251,146,60,0.3)] hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Point 15: Internal Links Section
          ═══════════════════════════════════════════════════════════ */}
      <section className="pb-16" aria-label="Related pages">
        <div className="max-w-3xl mx-auto px-6">
          <h4 className="font-mono text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
            Explore Our Products
          </h4>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-sm text-teal-400/70 hover:text-teal-400 transition-colors">
              Autaimate Home &rarr;
            </Link>
            <Link to="/products/tradecalcs" className="text-sm text-teal-400/70 hover:text-teal-400 transition-colors">
              TradeCalcs — BS 7671 Calculators &rarr;
            </Link>
            <Link to="/products/equipsafety" className="text-sm text-teal-400/70 hover:text-teal-400 transition-colors">
              EquipSafety — Care Home Compliance &rarr;
            </Link>
            <Link to="/products/horsecost" className="text-sm text-teal-400/70 hover:text-teal-400 transition-colors">
              HorseCost — UK Horse Ownership Costs &rarr;
            </Link>
            <Link to="/products/snaglog" className="text-sm text-teal-400/70 hover:text-teal-400 transition-colors">
              SnagLog — AI Snagging Reports &rarr;
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
    <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-teal-400 uppercase tracking-[0.1em] mb-4">
      <span className="w-6 h-px bg-teal-400" aria-hidden="true" />
      {children}
    </p>
  )
}
