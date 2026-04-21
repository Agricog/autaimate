import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import MicroSaasPage from './pages/MicroSaasPage'

// Product pages
import TradeCalcsPage from './pages/products/TradeCalcsPage'
import SnagLogPage from './pages/products/SnagLogPage'
import CertVoicePage from './pages/products/CertVoicePage'
import TradGoPage from './pages/products/TradGoPage'
import DetailReconPage from './pages/products/DetailReconPage'
import InspectVoicePage from './pages/products/InspectVoicePage'
import SafeEatPage from './pages/products/SafeEatPage'

// Industry hubs
import ForConstructionPage from './pages/for/ConstructionPage'
import ForPropertyPage from './pages/for/PropertyPage'
import ForCareHomesPage from './pages/for/CareHomesPage'

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
          <Route path="/products/tradgo" element={<TradGoPage />} />
          <Route path="/products/detailrecon" element={<DetailReconPage />} />
          <Route path="/products/inspectvoice" element={<InspectVoicePage />} />
          <Route path="/products/safeeat" element={<SafeEatPage />} />

          {/* Industry hubs (multi-product aggregators only) */}
          <Route path="/for/construction" element={<ForConstructionPage />} />
          <Route path="/for/property" element={<ForPropertyPage />} />
          <Route path="/for/care-homes" element={<ForCareHomesPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
