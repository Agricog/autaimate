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
    <div className="min-h-screen flex flex-col relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 bg-[#0a0a12]/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logoImg}
              alt="Autaimate" 
              className="h-16 md:h-32 w-auto"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {isHome ? (
              <>
                <a href="#products" className="text-white/70 hover:text-orange-500 font-medium transition-colors">Products</a>
                <a href="#process" className="text-white/70 hover:text-orange-500 font-medium transition-colors">How We Work</a>
                <a href="#contact" className="text-white/70 hover:text-orange-500 font-medium transition-colors">Contact</a>
              </>
            ) : (
              <Link to="/" className="text-white/70 hover:text-orange-500 font-medium transition-colors">Home</Link>
            )}
            <a href={isHome ? '#contact' : '/#contact'} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-7 py-3 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-shadow">Get Started</a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-4">
            {isHome ? (
              <>
                <a href="#products" onClick={() => setMenuOpen(false)} className="text-white/70 font-medium">Products</a>
                <a href="#process" onClick={() => setMenuOpen(false)} className="text-white/70 font-medium">How We Work</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white/70 font-medium">Contact</a>
              </>
            ) : (
              <Link to="/" className="text-white/70 font-medium">Home</Link>
            )}
            <a href={isHome ? '#contact' : '/#contact'} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-center">Get Started</a>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center">
            <img 
              src={logoImg}
              alt="Autaimate" 
              className="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-white/50 hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Autaimate. United Kingdom.</p>
        </div>
      </footer>
    </div>
  )
}



