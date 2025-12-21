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
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-slate-500 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-400">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          
          <p className="text-slate-400 mb-8">
            Last updated: December 2024
          </p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8 text-slate-400">
              
              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Autaimate. These Terms of Service ("Terms") govern your use of our website at autaimate.com and all related products, services, and applications (collectively, the "Services") operated by Autaimate ("we", "our", or "us").
                </p>
                <p className="leading-relaxed mb-4">
                  By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our Services.
                </p>
                <p className="leading-relaxed">
                  We are a company registered in England and Wales. These Terms are governed by English law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">"Account"</strong> means a unique account created for you to access our Services</li>
                  <li><strong className="text-white">"Content"</strong> means any information, data, text, images, or other materials uploaded, submitted, or otherwise transmitted to the Services</li>
                  <li><strong className="text-white">"Products"</strong> means the individual software applications and tools we offer, including but not limited to TradeCalcs, SnagLog, DetailRecon, LeadFortress, HorseCost, EquipSafety, and ClearProof</li>
                  <li><strong className="text-white">"User"</strong> means any individual or entity that accesses or uses our Services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">3. Account Registration</h2>
                <p className="leading-relaxed mb-4">
                  Some of our Products require you to create an account. When you create an account, you must:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorised use of your account</li>
                </ul>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or no longer current, or if you violate these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">4. Use of Services</h2>
                
                <h3 className="font-display text-lg font-semibold text-white mb-3">Permitted Use</h3>
                <p className="leading-relaxed mb-4">
                  You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use our Services only for your internal business purposes or personal use.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Prohibited Use</h3>
                <p className="leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Services in any way that violates any applicable law or regulation</li>
                  <li>Use the Services to transmit any malicious code, viruses, or harmful data</li>
                  <li>Attempt to gain unauthorised access to any part of the Services</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services</li>
                  <li>Copy, modify, distribute, or reverse engineer any part of the Services</li>
                  <li>Use the Services to compete with us or to build a similar product</li>
                  <li>Resell, sublicense, or transfer your rights to use the Services without our written consent</li>
                  <li>Use automated systems or software to extract data from the Services (scraping)</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">5. Products and Pricing</h2>
                
                <h3 className="font-display text-lg font-semibold text-white mb-3">Free Products</h3>
                <p className="leading-relaxed mb-4">
                  Some of our Products are offered free of charge. We reserve the right to modify, suspend, or discontinue free Products at any time without notice.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Paid Products</h3>
                <p className="leading-relaxed mb-4">
                  Certain Products require payment. Prices are displayed in British Pounds Sterling (GBP) and include VAT where applicable. We reserve the right to change our prices at any time, but changes will not affect orders already placed.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Pay-Per-Use Products</h3>
                <p className="leading-relaxed mb-4">
                  Some Products operate on a pay-per-use basis (e.g., per report generated). Payment is required before the service is delivered. Once a report or deliverable has been generated, no refund will be provided as the service has been fully performed.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Subscription Products</h3>
                <p className="leading-relaxed">
                  Some Products are offered on a subscription basis. Subscriptions automatically renew unless cancelled before the renewal date. You may cancel your subscription at any time through your account settings or by contacting us.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                <p className="leading-relaxed mb-4">
                  All payments are processed securely through our third-party payment provider (Stripe). By providing payment information, you represent that you are authorised to use the payment method.
                </p>
                <p className="leading-relaxed mb-4">
                  You agree to pay all charges associated with your account, including any applicable taxes. If payment fails, we may suspend or terminate your access to paid Services.
                </p>
                <p className="leading-relaxed">
                  All prices are in British Pounds Sterling (GBP) unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">7. Refunds</h2>
                <p className="leading-relaxed mb-4">
                  Our refund policy varies by Product:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Pay-per-use Products:</strong> No refunds once a report or deliverable has been generated, as the service has been fully performed</li>
                  <li><strong className="text-white">Subscription Products:</strong> You may cancel at any time. Refunds for partial subscription periods are provided at our discretion</li>
                  <li><strong className="text-white">Technical Issues:</strong> If you experience technical issues that prevent you from using a paid service, please contact us and we will assess on a case-by-case basis</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                
                <h3 className="font-display text-lg font-semibold text-white mb-3">Our Intellectual Property</h3>
                <p className="leading-relaxed mb-4">
                  The Services and all content, features, and functionality (including but not limited to software, text, graphics, logos, and design) are owned by Autaimate and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Your Content</h3>
                <p className="leading-relaxed mb-4">
                  You retain ownership of any Content you upload to our Services. By uploading Content, you grant us a non-exclusive, worldwide, royalty-free licence to use, process, and store that Content solely for the purpose of providing the Services to you.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Output and Deliverables</h3>
                <p className="leading-relaxed">
                  Reports, calculations, and other outputs generated by our Products for you are yours to use for your business purposes. However, the underlying software, algorithms, and systems remain our intellectual property.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">9. Data and Privacy</h2>
                <p className="leading-relaxed mb-4">
                  Your privacy is important to us. Our collection and use of personal data is governed by our <Link to="/privacy" className="text-green-400 hover:underline">Privacy Policy</Link>, which forms part of these Terms.
                </p>
                <p className="leading-relaxed">
                  You are responsible for ensuring that any data you upload to our Services does not violate any third party's rights or any applicable laws, including data protection laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">10. Disclaimers</h2>
                
                <h3 className="font-display text-lg font-semibold text-white mb-3">General Disclaimer</h3>
                <p className="leading-relaxed mb-4">
                  Our Services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Professional Advice</h3>
                <p className="leading-relaxed mb-4">
                  Our Products are tools to assist you in your work. They are not a substitute for professional judgement, expertise, or advice. For example:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>TradeCalcs provides calculations based on British Standards, but you remain responsible for ensuring compliance with all applicable regulations</li>
                  <li>SnagLog and DetailRecon generate AI-assisted reports, but the accuracy and completeness should be verified by qualified professionals</li>
                  <li>All our tools should be used in conjunction with, not as a replacement for, professional expertise</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-white mb-3">AI-Generated Content</h3>
                <p className="leading-relaxed">
                  Some of our Products use artificial intelligence to generate content, analyses, or recommendations. While we strive for accuracy, AI-generated content may contain errors or inaccuracies. You are responsible for reviewing and verifying all AI-generated output before relying on it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
                <p className="leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities</li>
                  <li>Our total liability for any claim arising out of or relating to these Terms or the Services shall not exceed the amount you paid to us in the 12 months preceding the claim, or £100, whichever is greater</li>
                  <li>We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control</li>
                </ul>
                <p className="leading-relaxed">
                  Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">12. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Autaimate and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">13. Termination</h2>
                <p className="leading-relaxed mb-4">
                  We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p className="leading-relaxed">
                  Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Services after any changes indicates your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">15. Governing Law and Disputes</h2>
                <p className="leading-relaxed mb-4">
                  These Terms are governed by and construed in accordance with the laws of England and Wales.
                </p>
                <p className="leading-relaxed">
                  Any disputes arising out of or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of England and Wales. However, if you are a consumer, you may also bring proceedings in the courts of the country where you reside.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">16. Severability</h2>
                <p className="leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect. The invalid or unenforceable provision will be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">17. Entire Agreement</h2>
                <p className="leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Autaimate regarding the use of our Services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">18. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong className="text-white">Email:</strong> hello@autaimate.com</li>
                  <li><strong className="text-white">Website:</strong> autaimate.com</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
