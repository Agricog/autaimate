import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '/public/logo.png'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col relative bg-cream text-ink">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 bg-cream/85 backdrop-blur-xl border-b border-sand">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Autaimate"
              className="h-16 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {isHome ? (
              <>
                <a href="#products" className="text-slate hover:text-teal font-medium transition-colors">Products</a>
                <a href="#process" className="text-slate hover:text-teal font-medium transition-colors">How We Work</a>
                <a href="#contact" className="text-slate hover:text-teal font-medium transition-colors">Contact</a>
              </>
            ) : (
              <Link to="/" className="text-slate hover:text-teal font-medium transition-colors">Home</Link>
            )}
            <Link to="/micro-saas" className="text-slate hover:text-teal font-medium transition-colors">Micro-SaaS Builds</Link>
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="bg-teal text-white px-7 py-3 rounded-xl font-semibold shadow-cta hover:bg-teal-dark hover:shadow-cta-hover transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-ink" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sand pt-4 flex flex-col gap-4">
            {isHome ? (
              <>
                <a href="#products" onClick={() => setMenuOpen(false)} className="text-slate font-medium">Products</a>
                <a href="#process" onClick={() => setMenuOpen(false)} className="text-slate font-medium">How We Work</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate font-medium">Contact</a>
              </>
            ) : (
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-slate font-medium">Home</Link>
            )}
            <Link to="/micro-saas" onClick={() => setMenuOpen(false)} className="text-slate font-medium">Micro-SaaS Builds</Link>
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="bg-teal text-white px-6 py-3 rounded-xl font-semibold text-center shadow-cta"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-sand py-12 px-6 lg:px-12 relative z-10 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Autaimate"
              className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate hover:text-teal transition-colors">Terms of Service</Link>
          </div>
          <p className="text-slate text-sm">© {new Date().getFullYear()} Autaimate. United Kingdom.</p>
        </div>
      </footer>
    </div>
  )
}



