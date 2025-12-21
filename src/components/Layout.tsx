import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

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
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                <span className="font-display font-extrabold text-white text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white leading-none">Autaimate</span>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase">Product Studio</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {isHome ? (
                <>
                  <a href="#how-we-help" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">How We Help</a>
                  <a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Products</a>
                  <a href="#process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Our Process</a>
                  <a href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">FAQ</a>
                  <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                  <Link to="/#products" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Products</Link>
                  <Link to="/#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact</Link>
                </>
              )}
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
            {isHome ? (
              <>
                <a href="#how-we-help" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>How We Help</a>
                <a href="#products" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Products</a>
                <a href="#process" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Our Process</a>
                <a href="#faq" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <a href="#contact" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </>
            ) : (
              <>
                <Link to="/" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/#products" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                <Link to="/#contact" className="block text-slate-300 hover:text-white py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </>
            )}
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-slate-900/50 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <span className="font-display font-extrabold text-white text-xl">A</span>
                </div>
                <span className="font-display font-bold text-xl text-white">Autaimate</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                We build automation tools and SaaS products for UK small and medium businesses. Simple software that solves real problems in construction, trades, property, and regulated industries.
              </p>
              <a href="mailto:hello@autaimate.co.uk" className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                hello@autaimate.co.uk
              </a>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="https://tradecalcs.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">TradeCalcs</a></li>
                <li><a href="https://app.snaglog.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">SnagLog</a></li>
                <li><a href="https://detailrecon.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">DetailRecon</a></li>
                <li><a href="https://leadfortress.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">LeadFortress</a></li>
                <li><a href="https://horsecost.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">HorseCost</a></li>
                <li><a href="https://equipsafety.co.uk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">EquipSafety</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#how-we-help" className="text-slate-400 hover:text-white transition-colors text-sm">How We Help</a></li>
                <li><a href="#process" className="text-slate-400 hover:text-white transition-colors text-sm">Our Process</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
                <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Autaimate. All rights reserved. Registered in England and Wales.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Privacy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
