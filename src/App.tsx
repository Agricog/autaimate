import { useState } from 'react'

// Product data
const products = [
  {
    name: 'TradeCalcs',
    tagline: 'BS 7671-compliant calculators for UK tradespeople',
    description: '15+ professional calculator tools for electricians, plumbers, and heating engineers. Cable sizing, voltage drop, circuit calculations — all British Standards compliant.',
    url: 'https://tradecalcs.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '⚡',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'SnagLog',
    tagline: 'AI-powered snagging reports for property inspections',
    description: 'Photograph property defects, AI identifies issues, categorizes severity, assigns trades, and generates professional PDF reports. Mobile-first for on-site use.',
    url: 'https://app.snaglog.co.uk',
    status: 'live',
    pricing: '£19.99/report',
    icon: '🏠',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    name: 'DetailRecon',
    tagline: 'AI reconnaissance reports for close protection',
    description: 'Upload advance photos from venues or routes. AI analyzes security considerations — entry points, cover positions, crowd flow, lighting. Professional PDF reports in minutes.',
    url: 'https://detailrecon.co.uk',
    status: 'live',
    pricing: '£29.99/report',
    icon: '🛡️',
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    name: 'LeadFortress',
    tagline: 'Omnichannel lead capture for UK service businesses',
    description: 'Six-channel lead capture: phone, SMS, WhatsApp, web forms, email, and social. Unified inbox with automated responses and lead scoring for trades businesses.',
    url: 'https://leadfortress.co.uk',
    status: 'live',
    pricing: '£99-149/mo',
    icon: '📱',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'HorseCost',
    tagline: 'Horse ownership cost calculators for UK equestrians',
    description: 'Free calculator suite covering livery costs, annual ownership breakdown, feed budgets, farrier costs, competition expenses, and weight calculations.',
    url: 'https://horsecost.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '🐴',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'EquipSafety',
    tagline: 'QR-based multilingual equipment safety for care homes',
    description: 'QR codes on equipment link to safety instructions, training videos, and compliance checklists in any language. Full audit trail for CQC compliance.',
    url: 'https://equipsafety.co.uk',
    status: 'demo',
    pricing: '£199/mo',
    icon: '📋',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    name: 'ClearProof',
    tagline: 'Multilingual H&S comprehension verification',
    description: 'Upload safety content, workers receive simplified versions in their language and answer scenario-based questions. Full audit trail proves understanding.',
    url: 'https://clearproof.co.uk',
    status: 'development',
    pricing: 'Coming Soon',
    icon: '✅',
    gradient: 'from-cyan-500 to-blue-600',
  },
]

const statusConfig = {
  live: { label: 'Live', bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
  demo: { label: 'Demo Ready', bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  development: { label: 'In Development', bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
                <span className="font-display font-extrabold text-white text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl text-white">Autaimate</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-slate-300 hover:text-white transition-colors font-medium">Products</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block text-slate-300 hover:text-white transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">7 Products • 5 Live</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-slide-up">
              Automation for{' '}
              <span className="gradient-text">UK Businesses</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-slide-up delay-100 opacity-0" style={{ animationFillMode: 'forwards' }}>
              We build simple tools that solve real problems for construction, trades, property, and regulated industries. Priced for SMB budgets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all"
              >
                View Products
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold text-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From AI-powered reports to industry-specific calculators, each product tackles a real pain point.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const status = statusConfig[product.status as keyof typeof statusConfig]
              return (
                
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`product-card group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 hover:border-slate-700/50 animate-slide-up opacity-0`}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Status badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text} border ${status.border}`}>
                    {status.label}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-green-400 text-sm font-medium mb-3">{product.pricing}</p>
                  <p className="text-slate-400 text-sm mb-4">{product.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{product.description}</p>

                  {/* Arrow */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                Built for{' '}
                <span className="gradient-text">Real Problems</span>
              </h2>
              <div className="space-y-6 text-slate-400">
                <p className="text-lg">
                  Autaimate develops automation solutions and SaaS products specifically for UK businesses in underserved niches — construction, trades, property, and regulated industries.
                </p>
                <p>
                  Our approach is simple: identify manual processes that waste time and money, build tools that actually solve the problem, and price them so SMBs can afford to use them.
                </p>
                <p>
                  Every product in our portfolio exists because we found a gap where businesses were struggling with outdated methods, expensive enterprise software, or nothing at all.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 text-center">
                <div className="text-4xl font-display font-bold text-green-400 mb-2">7</div>
                <div className="text-slate-400 text-sm">Products Built</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 text-center">
                <div className="text-4xl font-display font-bold text-green-400 mb-2">5</div>
                <div className="text-slate-400 text-sm">Live & Shipping</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 text-center">
                <div className="text-4xl font-display font-bold text-green-400 mb-2">UK</div>
                <div className="text-slate-400 text-sm">Focused Market</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 p-6 text-center">
                <div className="text-4xl font-display font-bold text-green-400 mb-2">SMB</div>
                <div className="text-slate-400 text-sm">Priced Right</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Need a custom automation solution? Have questions about our products? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@autaimate.co.uk"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@autaimate.co.uk
            </a>
            <a 
              href="https://autaimate.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold text-lg border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all"
            >
              autaimate.co.uk
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <span className="font-display font-extrabold text-white text-sm">A</span>
            </div>
            <span className="font-display font-semibold text-white">Autaimate</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Autaimate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
