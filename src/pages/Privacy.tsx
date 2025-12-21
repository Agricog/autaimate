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
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link to="/" className="text-slate-500 hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-400">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-slate-400 mb-8">
            Last updated: December 2024
          </p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8 text-slate-400">
              
              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed mb-4">
                  Autaimate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website autaimate.co.uk and use our products and services.
                </p>
                <p className="leading-relaxed">
                  We are registered in England and Wales and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="font-display text-lg font-semibold text-white mb-3">Personal Information</h3>
                <p className="leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Fill out a contact form on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Create an account on any of our products</li>
                  <li>Purchase a product or service</li>
                  <li>Contact us via email</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Billing information and payment details</li>
                </ul>

                <h3 className="font-display text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                <p className="leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Date and time of visit</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and maintain our website and services</li>
                  <li>To process transactions and send related information</li>
                  <li>To respond to your enquiries and provide customer support</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To detect and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                <p className="leading-relaxed mb-4">
                  Under UK GDPR, we process your personal data on the following legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose</li>
                  <li><strong className="text-white">Contract:</strong> Where processing is necessary for a contract we have with you</li>
                  <li><strong className="text-white">Legal obligation:</strong> Where processing is necessary for compliance with a legal obligation</li>
                  <li><strong className="text-white">Legitimate interests:</strong> Where processing is necessary for our legitimate interests or the legitimate interests of a third party</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                </p>
                <p className="leading-relaxed mb-4">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong className="text-white">Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong className="text-white">Functional cookies:</strong> Remember your preferences and settings</li>
                </ul>
                <p className="leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">6. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Service providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and analytics</li>
                  <li><strong className="text-white">Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
                  <li><strong className="text-white">Business transfers:</strong> In connection with any merger, sale of company assets, or acquisition of all or a portion of our business</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. For most personal data, this is typically 6 years from the end of our business relationship, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under UK GDPR, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong className="text-white">Right of access:</strong> You can request a copy of the personal data we hold about you</li>
                  <li><strong className="text-white">Right to rectification:</strong> You can ask us to correct inaccurate or incomplete data</li>
                  <li><strong className="text-white">Right to erasure:</strong> You can ask us to delete your personal data in certain circumstances</li>
                  <li><strong className="text-white">Right to restrict processing:</strong> You can ask us to limit how we use your data</li>
                  <li><strong className="text-white">Right to data portability:</strong> You can ask us to transfer your data to another organisation</li>
                  <li><strong className="text-white">Right to object:</strong> You can object to the processing of your personal data</li>
                  <li><strong className="text-white">Right to withdraw consent:</strong> Where we rely on consent, you can withdraw it at any time</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise any of these rights, please contact us at hello@autaimate.co.uk. We will respond to your request within one month.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">9. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">10. International Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries outside the UK. When we transfer personal data outside the UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the UK Information Commissioner's Office.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">13. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong className="text-white">Email:</strong> hello@autaimate.co.uk</li>
                  <li><strong className="text-white">Website:</strong> autaimate.co.uk</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-white mb-4">14. Complaints</h2>
                <p className="leading-relaxed">
                  If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection. You can contact the ICO at ico.org.uk or by calling 0303 123 1113.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
