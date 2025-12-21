import { useState } from 'react'

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
    url: 'https://detailrecon.com',
    status: 'live',
    pricing: '£29.99/report',
    icon: '🛡️',
    gradient: 'from-slate-600 to-slate-800',
    industry: 'Security and Close Protection',
  },
  {
    name: 'LeadFortress',
    tagline: 'Never miss another lead',
    problem: 'Trade businesses lose leads across phone, email, WhatsApp, web forms, and social — no single view, no follow-up system.',
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
    problem: 'Construction sites need multilingual workers to understand safety content — but a signature only proves they signed, not that they understood.',
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
  { name: 'Construction and Trades', icon: '🔧', description: 'Calculators, lead capture, and compliance tools for electricians, plumbers, and builders.' },
  { name: 'Property and Surveying', icon: '🏗️', description: 'AI-powered inspection reports and snagging tools for surveyors and landlords.' },
  { name: 'Healthcare and Care', icon: '🏥', description: 'Multilingual safety training and equipment compliance for care homes.' },
  { name: 'Security and CP', icon: '🛡️', description: 'Reconnaissance and advance reporting tools for close protection professionals.' },
]

const statusConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  live: { label: 'Live', bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  demo: { label: 'Demo Ready', bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  development: { label: 'Coming Soon', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative bg-slate-950">
      <div className="noise-overlay"></div>
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-green-600/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                <span className="font-display font-extrabold text-white text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-none">Autaimate</span>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase">Product Studio</span>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Products</a>
              <a href="#industries" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Industries</a>
              <a href="#approach" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Our Approach</a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800/50 px-4 py-6 space-y-4">
            <a href="#products" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#industries" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Industries</a>
            <a href="#approach" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Our Approach</a>
            <a href="#contact" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">5 products live - Serving UK businesses</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              We build automation tools for <span className="gradient-text">industries others ignore</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Construction. Trades. Property. Regulated industries. We find the manual processes that waste your time, and build simple software that actually solves the problem — priced for SMB budgets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:translate-y-[-2px] transition-all">
                Explore Our Products
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800/80 text-white font-semibold text-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all">
                Work With Us
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

      <section id="industries" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for industries that get overlooked
            </h2>
            <p className="text-lg text-slate-400">
              Enterprise software is expensive and overcomplicated. Generic tools do not understand your compliance requirements. We build focused solutions for specific UK industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 hover:border-slate-700/50 transition-all">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our product portfolio
            </h2>
            <p className="text-lg text-slate-400">
              Each product exists because we found real businesses struggling with a specific problem. No bloated feature lists — just tools that do one thing well.
            </p>
          </div>

          <div className="space-y-6">
            {products.map((product) => {
              const status = statusConfig[product.status]
              return (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 lg:p-8 hover:border-slate-700/50 hover:bg-slate-900/70 transition-all"
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

      <section id="approach" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                How we build products
              </h2>
              <div className="space-y-6 text-slate-400">
                <p className="text-lg">
                  We do not build software looking for problems. We find businesses drowning in spreadsheets, paper forms, and manual processes — then build exactly what they need.
                </p>
                <p>
                  Every product starts with a real pain point we have seen firsthand. We talk to the people doing the work, understand their workflows, and build tools that fit into how they already operate.
                </p>
                <p>
                  No feature bloat. No enterprise pricing. No 6-month implementations. Just simple tools that work, priced so small businesses can actually afford them.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 font-display font-bold">1</div>
                  <h3 className="font-display text-lg font-bold text-white">Find the pain</h3>
                </div>
                <p className="text-slate-500 text-sm pl-14">We identify manual processes in underserved industries — the spreadsheets, the paper forms, the compliance headaches.</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 font-display font-bold">2</div>
                  <h3 className="font-display text-lg font-bold text-white">Build focused solutions</h3>
                </div>
                <p className="text-slate-500 text-sm pl-14">One problem, one tool. We do not add features for the sake of it. Every product does one thing exceptionally well.</p>
              </div>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 font-display font-bold">3</div>
                  <h3 className="font-display text-lg font-bold text-white">Price for SMBs</h3>
                </div>
                <p className="text-slate-500 text-sm pl-14">Enterprise software is priced for enterprises. Our tools are built for small teams and priced accordingly — often free or pay-per-use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Got a process that needs automating?
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              We are always looking for the next problem to solve. If you are stuck with manual processes, compliance headaches, or software that does not fit — let us talk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:hello@autaimate.co.uk"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:translate-y-[-2px] transition-all"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@autaimate.co.uk
              </a>
            </div>

            <div className="pt-8 border-t border-slate-800/50">
              <p className="text-slate-500 text-sm mb-4">Also find us at</p>
              <a href="https://autaimate.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                autaimate.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <span className="font-display font-extrabold text-white text-sm">A</span>
            </div>
            <span className="font-display font-semibold text-white">Autaimate</span>
          </div>
          <p className="text-slate-500 text-sm">© 2025 Autaimate. Automation for UK businesses.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
