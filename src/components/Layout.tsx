import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl text-surface-900">Autaimate</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {isHome ? (
                <>
                  <a href="#products" className="text-surface-600 hover:text-brand-600 font-medium transition-colors">Products</a>
                  <a href="#process" className="text-surface-600 hover:text-brand-600 font-medium transition-colors">How We Work</a>
                  <a href="#faq" className="text-surface-600 hover:text-brand-600 font-medium transition-colors">FAQ</a>
                </>
              ) : (
                <Link to="/" className="text-surface-600 hover:text-brand-600 font-medium transition-colors">Home</Link>
              )}
              <a href={isHome ? "#contact" : "/#contact"} className="btn-primary text-sm py-3 px-6">Get in Touch</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-surface-200">
              <div className="flex flex-col gap-4">
                {isHome ? (
                  <>
                    <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-surface-600 hover:text-brand-600 font-medium">Products</a>
                    <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-surface-600 hover:text-brand-600 font-medium">How We Work</a>
                    <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-surface-600 hover:text-brand-600 font-medium">FAQ</a>
                  </>
                ) : (
                  <Link to="/" className="text-surface-600 hover:text-brand-600 font-medium">Home</Link>
                )}
                <a href={isHome ? "#contact" : "/#contact"} className="btn-primary text-center">Get in Touch</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-surface-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">A</span>
                </div>
                <span className="font-display font-bold text-xl">Autaimate</span>
              </div>
              <p className="text-surface-400 mb-6 max-w-md">
                We build automation tools and SaaS products for UK small and medium businesses. Simple software that solves real problems.
              </p>
              <a href="mailto:hello@autaimate.com" className="text-brand-400 hover:text-brand-300 font-medium">hello@autaimate.com</a>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-display font-semibold mb-4">Products</h4>
              <ul className="space-y-3 text-surface-400">
                <li><a href="https://tradecalcs.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TradeCalcs</a></li>
                <li><a href="https://app.snaglog.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SnagLog</a></li>
                <li><a href="https://detailrecon.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DetailRecon</a></li>
                <li><a href="https://leadfortress.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeadFortress</a></li>
                <li><a href="https://horsecost.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">HorseCost</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-surface-400">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-surface-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-surface-500 text-sm">© {new Date().getFullYear()} Autaimate. All rights reserved.</p>
            <p className="text-surface-500 text-sm">United Kingdom</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

