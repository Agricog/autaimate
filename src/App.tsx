import Layout from './components/Layout'

const products = [
  {
    name: 'TradeCalcs',
    tagline: 'Professional calculators for UK trades',
    problem: 'Electricians and heating engineers waste time with manual calculations and risk non-compliance with British Standards.',
    solution: '15+ BS 7671-compliant calculators covering cable sizing, voltage drop, circuit calculations, and more. Free, instant, accurate.',
    url: 'https://tradecalcs.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '⚡',
    gradient: 'from-amber-500 to-orange-600',
    industry: 'Electrical and Heating',
  },
  {
    name: 'SnagLog',
    tagline: 'AI snagging reports in minutes',
    problem: 'Property inspectors spend hours writing snagging reports, manually categorising defects and assigning them to trades.',
    solution: 'Photograph defects on-site. AI identifies the issue, categorises severity, assigns to the right trade, and generates a professional PDF report.',
    url: 'https://app.snaglog.co.uk',
    status: 'live',
    pricing: '£19.99/report',
    icon: '🏠',
    gradient: 'from-sky-500 to-blue-600',
    industry: 'Property and Construction',
  },
  {
    name: 'DetailRecon',
    tagline: 'AI security reconnaissance reports',
    problem: 'Close protection operatives spend hours manually writing advance reports, analysing venue photos for security considerations.',
    solution: 'Upload venue or route photos. AI analyses entry/exit points, cover positions, crowd flow, and lighting. Professional PDF report generated in minutes.',
    url: 'https://detailrecon.co.uk',
    status: 'live',
    pricing: '£29.99/report',
    icon: '🛡️',
    gradient: 'from-slate-600 to-slate-800',
    industry: 'Security and Close Protection',
  },
  {
    name: 'LeadFortress',
    tagline: 'Never miss another lead',
    problem: 'Trade businesses lose leads across phone, email, WhatsApp, web forms, and social with no single view or follow-up system.',
    solution: 'Six-channel lead capture with unified inbox. Automated responses, lead scoring, and follow-up reminders. Built specifically for UK trades.',
    url: 'https://leadfortress.co.uk',
    status: 'live',
    pricing: 'From £99/mo',
    icon: '📱',
    gradient: 'from-violet-500 to-purple-600',
    industry: 'Trades and Services',
  },
  {
    name: 'HorseCost',
    tagline: 'UK horse ownership calculators',
    problem: 'New horse owners underestimate costs. Existing owners struggle to budget across livery, feed, farrier, vet, and competition expenses.',
    solution: 'Free calculator suite with UK-specific pricing. Compare DIY vs part vs full livery, annual cost breakdowns, feed budgets, and more.',
    url: 'https://horsecost.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '🐴',
    gradient: 'from-emerald-500 to-teal-600',
    industry: 'Equestrian',
  },
  {
    name: 'EquipSafety',
    tagline: 'Multilingual equipment safety',
    problem: 'Care homes struggle to train multilingual staff on equipment. Paper manuals get lost. No audit trail for CQC compliance.',
    solution: 'QR code on each piece of equipment. Staff scan to access safety instructions, videos, and checklists in their language. Full compliance audit trail.',
    url: 'https://equipsafety.co.uk',
    status: 'demo',
    pricing: '£199/mo',
    icon: '📋',
    gradient: 'from-rose-500 to-pink-600',
    industry: 'Healthcare and Care Homes',
  },
  {
    name: 'ClearProof',
    tagline: 'Prove they understood, not just signed',
    problem: 'Construction sites need multilingual workers to understand safety content but a signature only proves they signed, not that they understood.',
    solution: 'Upload RAMS, toolbox talks, inductions. Workers get simplified content in their language and answer scenario-based questions. Full audit trail.',
    url: 'https://clearproof.co.uk',
    status: 'development',
    pricing: 'Coming 2025',
    icon: '✅',
    gradient: 'from-cyan-500 to-blue-600',
    industry: 'Construction Health and Safety',
  },
]

const industries = [
  { 
    name: 'Construction and Trades', 
    icon: '🔧', 
    description: 'Electricians, plumbers, heating engineers, and builders need tools that understand British Standards and compliance requirements.',
    products: ['TradeCalcs', 'LeadFortress', 'ClearProof'],
  },
  { 
    name: 'Property and Surveying', 
    icon: '🏗️', 
    description: 'Surveyors, landlords, and property managers need efficient inspection and reporting tools that save hours of manual work.',
    products: ['SnagLog'],
  },
  { 
    name: 'Healthcare and Care', 
    icon: '🏥', 
    description: 'Care homes face unique challenges with multilingual staff training and CQC compliance documentation.',
    products: ['EquipSafety'],
  },
  { 
    name: 'Security and Close Protection', 
    icon: '🛡️', 
    description: 'Close protection professionals need efficient reconnaissance and advance reporting tools.',
    products: ['DetailRecon'],
  },
]

const benefits = [
  {
    title: 'Save Hours Every Week',
    description: 'Our tools automate the repetitive tasks that eat into your productive time. What used to take hours now takes minutes.',
    icon: '⏱️',
  },
  {
    title: 'Stay Compliant',
    description: 'Built for UK regulations and standards. BS 7671, CQC, health and safety requirements are baked into our tools from day one.',
    icon: '✓',
  },
  {
    title: 'Affordable Pricing',
    description: 'No enterprise contracts or hidden fees. Pay per use or affordable monthly subscriptions designed for small business budgets.',
    icon: '£',
  },
  {
    title: 'Simple to Use',
    description: 'No training required. Our tools are designed for busy professionals who need solutions that work immediately.',
    icon: '👆',
  },
  {
    title: 'Professional Output',
    description: 'Generate reports, documents, and calculations that look professional and impress your clients.',
    icon: '📄',
  },
  {
    title: 'UK-Focused',
    description: 'Built specifically for UK businesses with UK pricing, UK regulations, and UK terminology.',
    icon: '🇬🇧',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'We Find The Pain',
    description: 'We spend time in the industries we serve, talking to business owners and workers. We identify the manual processes, spreadsheets, and paper forms that waste time and create compliance risks.',
  },
  {
    number: '02',
    title: 'We Validate The Problem',
    description: 'Before building anything, we make sure the problem is real and widespread. We talk to dozens of potential users to understand their workflows and confirm our solution will actually help.',
  },
  {
    number: '03',
    title: 'We Build Focused Solutions',
    description: 'One problem, one tool. We do not add features for the sake of it. Every product does one thing exceptionally well, with a simple interface that requires no training.',
  },
  {
    number: '04',
    title: 'We Price For SMBs',
    description: 'Enterprise software is priced for enterprises. Our tools are built for small teams and sole traders, priced accordingly with free tiers, pay-per-use, or affordable subscriptions.',
  },
  {
    number: '05',
    title: 'We Iterate With Users',
    description: 'After launch, we work closely with our users to improve the product. Real feedback from real businesses shapes every update and new feature.',
  },
]

const faqs = [
  {
    question: 'What industries does Autaimate serve?',
    answer: 'We build software for UK construction and trades (electricians, plumbers, heating engineers), property and surveying, healthcare and care homes, and security and close protection industries. We focus on sectors that are underserved by existing software solutions.',
  },
  {
    question: 'How much do your products cost?',
    answer: 'Our products are priced for small and medium businesses. Many tools like TradeCalcs and HorseCost are completely free. Others use pay-per-use pricing starting from £19.99 per report, or monthly subscriptions from £99. No enterprise contracts or hidden fees.',
  },
  {
    question: 'Do you build custom automation solutions?',
    answer: 'Yes. Beyond our product portfolio, we work with businesses to identify manual processes and build custom automation solutions tailored to their specific needs. Get in touch to discuss your requirements.',
  },
  {
    question: 'Are your tools compliant with UK regulations?',
    answer: 'Absolutely. Our tools are built specifically for UK businesses with UK regulations in mind. TradeCalcs is BS 7671 compliant, EquipSafety is designed for CQC compliance, and ClearProof meets health and safety documentation requirements.',
  },
  {
    question: 'Do I need technical knowledge to use your products?',
    answer: 'No. Our tools are designed for busy professionals, not IT experts. Simple interfaces, no training required, and results in minutes. If you can use a smartphone, you can use our products.',
  },
  {
    question: 'How do I get support if I have problems?',
    answer: 'Email us at hello@autaimate.co.uk. We are a small team and pride ourselves on responsive, personal support. No ticket systems or chatbots, just real humans who understand your industry.',
  },
]

const statusConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  live: { label: 'Live', bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  demo: { label: 'Demo Ready', bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  development: { label: 'Coming Soon', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
}

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">5 products live serving UK businesses</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Automation tools for <span className="gradient-text">UK small businesses</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-400 mb-6 max-w-3xl leading-relaxed">
              We build simple software that solves real problems for construction, trades, property, and regulated industries. No bloated features. No enterprise pricing. Just tools that work.
            </p>

            <p className="text-lg text-slate-500 mb-8 max-w-3xl">
              Tired of expensive software that does not understand your industry? Frustrated with manual processes, spreadsheets, and paper forms? We find the pain points that slow your business down and build focused solutions that save you time and money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:translate-y-[-2px] transition-all">
                Explore Our Products
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800/80 text-white font-semibold text-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all">
                Discuss Your Needs
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800/50">
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">7</div>
                <div className="text-slate-500 text-sm">Products Built</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">5</div>
                <div className="text-slate-500 text-sm">Live and Shipping</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">4</div>
                <div className="text-slate-500 text-sm">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-green-400 mb-1">UK</div>
                <div className="text-slate-500 text-sm">Focused and Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section id="how-we-help" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How we help small businesses grow
            </h2>
            <p className="text-lg text-slate-400">
              Small and medium businesses are the backbone of the UK economy, but they are often overlooked by software companies chasing enterprise contracts. We believe every business deserves tools that make their work easier, not harder.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 hover:border-slate-700/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Industries we serve
            </h2>
            <p className="text-lg text-slate-400">
              We focus on industries that are underserved by existing software. Sectors where generic tools do not understand the compliance requirements, terminology, or workflows that matter to your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 lg:p-8 hover:border-slate-700/50 transition-all">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product) => (
                    <span key={product} className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our product portfolio
            </h2>
            <p className="text-lg text-slate-400">
              Each product exists because we found real businesses struggling with a specific problem. We do not build features for the sake of it. Every tool does one thing exceptionally well.
            </p>
          </div>

          <div className="space-y-6">
            {products.map((product) => {
              const status = statusConfig[product.status]
              return (
                
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-950/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 lg:p-8 hover:border-slate-700/50 hover:bg-slate-900/70 transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-start gap-4 lg:w-72 flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                        {product.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-green-400 transition-colors">{product.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${status.bg} ${status.text} border ${status.border}`}>
                            {status.label}
                          </span>
                        </div>
                        <p className="text-green-400 text-sm font-semibold">{product.pricing}</p>
                        <p className="text-slate-500 text-xs mt-1">{product.industry}</p>
                      </div>
                    </div>

                    <div className="flex-1 grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Problem</div>
                        <p className="text-slate-400 text-sm leading-relaxed">{product.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">Our Solution</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{product.solution}</p>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How we build products
            </h2>
            <p className="text-lg text-slate-400">
              We do not build software looking for problems. We find businesses drowning in manual processes and build exactly what they need. Here is our approach.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-green-400">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-16 bg-slate-800 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-400">
              Got questions? Here are answers to the most common things people ask us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-display text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Let us talk about your business
              </h2>
              <p className="text-lg text-slate-400 mb-6">
                Got a manual process that is slowing you down? Struggling with compliance documentation? Looking for software that actually understands your industry?
              </p>
              <p className="text-slate-500 mb-8">
                We would love to hear from you. Whether you want to discuss a custom automation project, have questions about our products, or just want to chat about the challenges facing your industry, get in touch.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email us</div>
                    <a href="mailto:hello@autaimate.co.uk" className="text-white hover:text-green-400 transition-colors font-medium">hello@autaimate.co.uk</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Visit our website</div>
                    <a href="https://autaimate.co.uk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium">autaimate.co.uk</a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-500">
                Based in the United Kingdom. Working with businesses across England, Scotland, Wales, and Northern Ireland.
              </p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 lg:p-8">
              <h3 className="font-display text-xl font-bold text-white mb-6">Send us a message</h3>
              
              {/* SmartSuite Form Embed - Replace YOUR_FORM_ID with actual SmartSuite form ID */}
              <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="john@company.co.uk"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-2">Company name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-400 mb-2">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  >
                    <option value="">Select your industry</option>
                    <option value="construction">Construction and Building</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing and Heating</option>
                    <option value="property">Property and Surveying</option>
                    <option value="healthcare">Healthcare and Care</option>
                    <option value="security">Security and Close Protection</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                    placeholder="Tell us about your business and the challenges you are facing..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:translate-y-[-2px] transition-all"
                >
                  Send Message
                </button>
                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our <a href="/privacy" className="text-green-400 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App
