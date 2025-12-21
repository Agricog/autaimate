import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service | Autaimate'
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
              <li className="text-white/70">Terms of Service</li>
            </ol>
          </nav>
          
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-white/50 mb-12">Last updated: December 2024</p>
          
          <div className="space-y-8 text-white/70 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>These Terms of Service ("Terms") govern your use of autaimate.com and all related products and services (collectively, "Services") operated by Autaimate ("we", "our", or "us"). By accessing or using our Services, you agree to be bound by these Terms.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">2. Use of Services</h2>
              <p className="mb-4">You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Services in any way that violates any applicable law or regulation</li>
                <li>Transmit any malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reproduce, duplicate, copy, sell, or resell any part of the Services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">3. Products and Pricing</h2>
              <p className="mb-4">Some of our products are free to use, while others require payment. For paid products:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prices are in British Pounds Sterling (GBP) and include VAT where applicable</li>
                <li>Payment is processed securely through Stripe</li>
                <li>For per-report products (e.g., SnagLog, DetailRecon), payment is required before report generation</li>
                <li>Once a report is generated, no refund will be provided as the service has been rendered</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">4. Accounts</h2>
              <p>Some Services require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p>The Services and their original content, features, and functionality are owned by Autaimate and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">6. User Content</h2>
              <p>You retain ownership of any content you upload to our Services (e.g., photos for snagging reports). By uploading content, you grant us a limited licence to process and store it for the purpose of providing our Services. We do not share your content with third parties except as necessary to provide the Services.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">7. Disclaimers</h2>
              <p className="mb-4">Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The Services will be uninterrupted or error-free</li>
                <li>Results obtained from the Services will be accurate or reliable</li>
                <li>Any errors will be corrected</li>
              </ul>
              <p className="mt-4">Our products (calculators, reports, etc.) are tools to assist your work and are not a substitute for professional judgement or advice.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Autaimate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting a notice on our website. Continued use of the Services after changes constitutes acceptance of the modified Terms.</p>
            </section>
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us at:</p>
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

