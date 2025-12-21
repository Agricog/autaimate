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
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-surface-500 hover:text-brand-600">Home</Link></li>
              <li className="text-surface-400">/</li>
              <li className="text-surface-700">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-4">Terms of Service</h1>
          <p className="text-surface-500 mb-12">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-surface-600">
              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">1. Introduction</h2>
                <p>These Terms of Service govern your use of autaimate.com and all related products and services operated by Autaimate. By accessing our Services, you agree to be bound by these Terms.</p>
                <p className="mt-4">We are a company registered in England and Wales. These Terms are governed by English law.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">2. Use of Services</h2>
                <p>You may use our Services only for lawful purposes. You agree not to use the Services in any way that violates any applicable law, transmit malicious code, attempt unauthorised access, or interfere with the Services.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">3. Products and Pricing</h2>
                <p>Some products are free. Paid products require payment and prices are in British Pounds Sterling (GBP) including VAT. Pay-per-use products require payment before delivery. Once a report is generated, no refund is provided as the service is complete.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">4. Intellectual Property</h2>
                <p>The Services and all content are owned by Autaimate and protected by intellectual property laws. You retain ownership of content you upload. Reports and outputs generated are yours to use for business purposes.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">5. Disclaimers</h2>
                <p>Our Services are provided "as is" without warranties. Our products are tools to assist your work, not a substitute for professional judgement. AI-generated content may contain errors and should be verified.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">6. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, we shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid to us in the 12 months preceding the claim, or £100, whichever is greater.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">7. Governing Law</h2>
                <p>These Terms are governed by English law. Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-4">8. Contact Us</h2>
                <p>If you have questions about these Terms, please contact us at hello@autaimate.com.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

