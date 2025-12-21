import Layout from './components/Layout'

const products = [
  {
    name: 'TradeCalcs',
    description: 'BS 7671-compliant calculators for UK electricians and heating engineers. Cable sizing, voltage drop, circuit calculations.',
    url: 'https://tradecalcs.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '⚡',
    iconClass: 'icon-electrical',
  },
  {
    name: 'SnagLog',
    description: 'AI-powered snagging reports. Photograph defects, AI categorises by severity, assigns to trade, generates PDF.',
    url: 'https://app.snaglog.co.uk',
    status: 'live',
    pricing: '£19.99/report',
    icon: '🏠',
    iconClass: 'icon-property',
  },
  {
    name: 'DetailRecon',
    description: 'AI security reconnaissance for close protection. Upload venue photos, get professional advance reports in minutes.',
    url: 'https://detailrecon.co.uk',
    status: 'live',
    pricing: '£29.99/report',
    icon: '🛡️',
    iconClass: 'icon-security',
  },
  {
    name: 'LeadFortress',
    description: 'Six-channel lead capture for trades. Phone, SMS, WhatsApp, web, email, social. Unified inbox with automation.',
    url: 'https://leadfortress.co.uk',
    status: 'live',
    pricing: 'From £99/mo',
    icon: '📱',
    iconClass: 'icon-leads',
  },
  {
    name: 'HorseCost',
    description: 'UK horse ownership calculators. Livery comparison, annual costs, feed budgets, farrier costs, competition expenses.',
    url: 'https://horsecost.co.uk',
    status: 'live',
    pricing: 'Free',
    icon: '🐴',
    iconClass: 'icon-equestrian',
  },
  {
    name: 'EquipSafety',
    description: 'QR-based equipment safety for care homes. Multilingual instructions, training videos, CQC compliance audit trail.',
    url: 'https://equipsafety.co.uk',
    status: 'demo',
    pricing: '£199/mo',
    icon: '📋',
    iconClass: 'icon-healthcare',
  },
  {
    name: 'ClearProof',
    description: 'H&S comprehension verification. Multilingual RAMS, toolbox talks with scenario-based testing. Prove understanding.',
    url: 'https://clearproof.co.uk',
    status: 'development',
    pricing: 'Coming 2025',
    icon: '✅',
    iconClass: 'icon-construction',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We spend time in the industries we serve, talking to business owners. We identify manual processes, spreadsheets and paper forms that waste time and create compliance risks.',
  },
  {
    number: '02',
    title: 'Validation',
    description: 'Before building, we validate the problem is real and widespread. We speak to potential users to understand their workflows and confirm our solution will deliver value.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'One problem, one tool. We build focused solutions that do one thing exceptionally well. Simple interfaces that require no training, designed for busy professionals.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We price for small businesses, not enterprises. Free tiers, pay-per-use, or affordable subscriptions. No hidden fees, no long contracts.',
  },
  {
    number: '05',
    title: 'Iterate',
    description: 'Real feedback from real businesses shapes every update. We work closely with users to improve the product and add features that genuinely help.',
  },
]

const faqs = [
  {
    question: 'What industries does Autaimate serve?',
    answer: 'We build software for UK construction and trades (electricians, plumbers, heating engineers), property and surveying, healthcare and care homes, and security and close protection industries.',
  },
  {
    question: 'How much do your products cost?',
    answer: 'Many tools like TradeCalcs and HorseCost are completely free. Paid products use pay-per-use pricing from £19.99 per report, or monthly subscriptions from £99. No enterprise contracts.',
  },
  {
    question: 'Do you build custom solutions?',
    answer: 'Yes. Beyond our product portfolio, we work with businesses to identify manual processes and build custom automation solutions tailored to specific needs.',
  },
  {
    question: 'Are your tools compliant with UK regulations?',
    answer: 'Absolutely. TradeCalcs is BS 7671 compliant, EquipSafety is designed for CQC compliance, and ClearProof meets health and safety documentation requirements.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. Our tools are designed for busy professionals, not IT experts. Simple interfaces, no training required. If you can use a smartphone, you can use our products.',
  },
  {
    question: 'How do I get support?',
    answer: 'Email us at hello@autaimate.com. We pride ourselves on responsive, personal support. No ticket systems or chatbots - just real humans who understand your industry.',
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === 'live') return <span className="badge-live">Live</span>
  if (status === 'demo') return <span className="badge-demo">Demo Ready</span>
  return <span className="badge-coming">Coming Soon</span>
}

export default function App() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span className="text-brand-700 text-sm font-medium">5 products live, serving UK businesses</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-surface-900 mb-6 leading-[1.1]">
              Your systems shouldn't slow you down.
            </h1>

            <p className="text-xl lg:text-2xl text-surface-600 mb-8 max-w-3xl leading-relaxed">
              We build automation tools for UK construction, trades, property and regulated industries. Simple software that solves real problems, priced for small business budgets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#products" className="btn-primary">Explore Products</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-surface-200">
              <div>
                <div className="font-display text-4xl font-bold text-surface-900 mb-1">7</div>
                <div className="text-surface-500">Products</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-surface-900 mb-1">5</div>
                <div className="text-surface-500">Live</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-surface-900 mb-1">4</div>
                <div className="text-surface-500">Industries</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-brand-600 mb-1">UK</div>
                <div className="text-surface-500">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
              Our Products
            </h2>
            <p className="text-xl text-surface-600">
              Each product exists because we found real businesses struggling with a specific problem. Every tool does one thing exceptionally well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${product.iconClass} flex items-center justify-center text-2xl`}>
                    {product.icon}
                  </div>
                  <StatusBadge status={product.status} />
                </div>

                <h3 className="font-display text-xl font-bold text-surface-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-surface-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-brand-600">{product.pricing}</span>
                  <svg className="w-5 h-5 text-surface-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-surface-600">
              We don't build software looking for problems. We find businesses drowning in manual processes and build exactly what they need.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex gap-6 lg:gap-8">
                <div className="flex flex-col items-center">
                  <div className="process-number">{step.number}</div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-200 mt-4"></div>
                  )}
                </div>
                <div className="pb-8 lg:pb-12">
                  <h3 className="font-display text-2xl font-bold text-surface-900 mb-3">{step.title}</h3>
                  <p className="text-surface-600 max-w-2xl leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 bg-surface-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-surface-400">
              We focus on industries underserved by existing software. Sectors where generic tools don't understand the compliance requirements or workflows that matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Construction & Trades', icon: '🔧', products: ['TradeCalcs', 'LeadFortress', 'ClearProof'] },
              { name: 'Property & Surveying', icon: '🏗️', products: ['SnagLog'] },
              { name: 'Healthcare & Care', icon: '🏥', products: ['EquipSafety'] },
              { name: 'Security', icon: '🛡️', products: ['DetailRecon'] },
            ].map((industry) => (
              <div key={industry.name} className="bg-surface-800 rounded-2xl p-6 border border-surface-700">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-display text-lg font-bold mb-3">{industry.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product) => (
                    <span key={product} className="text-xs px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-surface-50 rounded-2xl border border-surface-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-display text-lg font-semibold text-surface-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-200 flex items-center justify-center group-open:rotate-45 transition-transform">
                    <svg className="w-4 h-4 text-surface-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-surface-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
                Let's talk about your business
              </h2>
              <p className="text-xl text-surface-600 mb-8">
                Got a manual process slowing you down? Looking for software that actually understands your industry? We'd love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-surface-500">Email us</div>
                    <a href="mailto:hello@autaimate.com" className="text-surface-900 font-semibold hover:text-brand-600 transition-colors">hello@autaimate.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-surface-500">Location</div>
                    <span className="text-surface-900 font-semibold">United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-surface-200 p-8">
              <h3 className="font-display text-xl font-bold text-surface-900 mb-6">Send a message</h3>

              <form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" required placeholder="you@company.co.uk" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-surface-700 mb-2">Company</label>
                  <input type="text" id="company" name="company" placeholder="Your company" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-2">How can we help?</label>
                  <textarea id="message" name="message" rows={4} required placeholder="Tell us about your business..." className="resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
                <p className="text-xs text-surface-500 text-center">
                  By submitting, you agree to our <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

