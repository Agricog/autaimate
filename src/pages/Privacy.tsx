import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Autaimate'
  }, [])

  return (
    <Layout>
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-surface-500 hover:text-brand-600">Home</Link></li>
              <li className="text-surface-400">/</li>
              <li className="text-surface-700">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-4">Privacy Policy</h1>
          <p className="text-surface-500 mb-12">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-surface-600">
              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">1. Introduction</h2>
                <p>Autaimate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit autaimate.com and use our products and services.</p>
                <p className="mt-4">We are registered in England and Wales and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">2. Information We Collect</h2>
                <p>We may collect personal information that you voluntarily provide when you fill out contact forms, create accounts, purchase products, or contact us via email. This may include your name, email address, phone number, company name, and payment details.</p>
                <p className="mt-4">We also automatically collect certain information about your device including IP address, browser type, pages visited, and date/time of visit.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to provide and maintain our services, process transactions, respond to enquiries, send marketing communications (with consent), improve our services, and comply with legal obligations.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">4. Your Rights</h2>
                <p>Under UK GDPR, you have the right to access, rectify, erase, restrict processing, data portability, object to processing, and withdraw consent. To exercise these rights, contact us at hello@autaimate.com.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">5. Data Security</h2>
                <p>We implement appropriate technical and organisational security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">6. Contact Us</h2>
                <p>If you have questions about this Privacy Policy, please contact us at hello@autaimate.com.</p>
                <p className="mt-4">If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

