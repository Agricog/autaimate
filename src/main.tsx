import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import MicroSaasPage from './pages/MicroSaasPage'
import TradeCalcsPage from './pages/products/TradeCalcsPage'
import SnagLogPage from './pages/products/SnagLogPage'
import CertVoicePage from './pages/products/CertVoicePage'
import ForConstructionPage from './pages/for/ConstructionPage'
import './index.css'

// Scrolls to top on route change, respects in-page anchors like /#contact
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/micro-saas" element={<MicroSaasPage />} />

          {/* Product landing pages */}
          <Route path="/products/tradecalcs" element={<TradeCalcsPage />} />
          <Route path="/products/snaglog" element={<SnagLogPage />} />
          <Route path="/products/certvoice" element={<CertVoicePage />} />

          {/* Industry hubs */}
          <Route path="/for/construction" element={<ForConstructionPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
