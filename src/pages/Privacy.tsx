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
      <div className="cosmic-bg" />
      <div className="stars" />
      <section className="pt-32 lg:pt-40 pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-8">
            <ol className="flex gap-2 text-sm text-white/50">
              <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
              <li>/</li>
              <li className="text-white/70">Privacy Policy</li>
            </ol>
          </nav>
          
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-white/50 mb-12">Last updated: December 2024</p>
          
          <div className="space-y-8 text-white/70 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>Autaimate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit autaimate.com and use our products.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out contact forms</li>
                <li>Create accounts on our products</li>
                <li>Purchase products or services</li>
                <li>Subscribe to newsletters</li>
              </ul>
              <p className="mt-4">This may include your name, email address, phone number, company name, and payment details.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
              <p>We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our business, such as payment processors and hosting providers. These parties are obligated to keep your information confidential.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">Under UK GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at hello@autaimate.com.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p>We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">7. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong> hello@autaimate.com<br />
                <strong className="text-white">Location:</strong> United Kingdom
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  )
}

