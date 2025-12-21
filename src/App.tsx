import Layout from './components/Layout'

const products = [
  { name: 'AutoReplyChat', url: 'https://autoreplychat.com', desc: 'AI chatbots for UK businesses. Automate customer enquiries, capture leads 24/7, and integrate with your existing systems.', color: 'blue' },
  { name: 'TradeCalcs', url: 'https://tradecalcs.co.uk', desc: 'BS 7671-compliant calculators for UK electricians. Cable sizing, voltage drop, circuit calculations.', color: 'yellow' },
  { name: 'SnagLog', url: 'https://app.snaglog.co.uk', desc: 'AI-powered snagging reports. Photograph defects, AI categorises and generates professional PDF.', color: 'teal' },
  { name: 'DetailRecon', url: 'https://detailrecon.co.uk', desc: 'AI security reconnaissance for close protection. Professional advance reports in minutes.', color: 'purple' },
  { name: 'LeadFortress', url: 'https://leadfortress.co.uk', desc: 'Six-channel lead capture for trades. Phone, SMS, WhatsApp, web, email, social in one inbox.', color: 'orange' },
  { name: 'HorseCost', url: 'https://horsecost.co.uk', desc: 'UK horse ownership calculators. Livery comparison, annual costs, feed and farrier budgets.', color: 'green' },
  { name: 'EquipSafety', url: 'https://equipsafety.co.uk', desc: 'QR-based equipment safety for care homes. Multilingual instructions, CQC compliance.', color: 'pink' },
]

const colorClasses: Record<string, { border: string; glow: string; stroke: string; text: string }> = {
  blue: { border: 'border-blue-500/50', glow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]', stroke: 'stroke-blue-400', text: 'text-blue-400' },
  yellow: { border: 'border-yellow-500/50', glow: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]', stroke: 'stroke-yellow-400', text: 'text-yellow-400' },
  teal: { border: 'border-teal-500/60', glow: 'hover:shadow-[0_0_50px_rgba(45,138,138,0.4)]', stroke: 'stroke-teal-400', text: 'text-teal-400' },
  purple: { border: 'border-purple-500/50', glow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]', stroke: 'stroke-purple-400', text: 'text-purple-400' },
  orange: { border: 'border-orange-500/50', glow: 'hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]', stroke: 'stroke-orange-400', text: 'text-orange-400' },
  green: { border: 'border-green-500/50', glow: 'hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]', stroke: 'stroke-green-400', text: 'text-green-400' },
  pink: { border: 'border-pink-500/50', glow: 'hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]', stroke: 'stroke-pink-400', text: 'text-pink-400' },
}

const icons: Record<string, JSX.Element> = {
  AutoReplyChat: <><rect x="20" y="25" width="60" height="45" rx="8"/><path d="M35 45h30M35 55h20"/><circle cx="70" cy="80" r="12"/><path d="M66 80h8M70 76v8"/></>,
  TradeCalcs: <><circle cx="50" cy="50" r="20" /><line x1="50" y1="20" x2="50" y2="10" /><line x1="50" y1="90" x2="50" y2="80" /><line x1="20" y1="50" x2="10" y2="50" /><line x1="90" y1="50" x2="80" y2="50" /><line x1="29" y1="29" x2="22" y2="22" /><line x1="78" y1="78" x2="71" y2="71" /><circle cx="50" cy="50" r="35" strokeDasharray="4 4" /></>,
  SnagLog: <><rect x="25" y="15" width="50" height="70" rx="4" /><line x1="35" y1="35" x2="65" y2="35" /><line x1="35" y1="50" x2="55" y2="50" /><line x1="35" y1="65" x2="60" y2="65" /><circle cx="70" cy="70" r="18" /><path d="M64 70l4 4 8-8" /></>,
  DetailRecon: <><circle cx="50" cy="50" r="35" /><circle cx="50" cy="50" r="25" /><circle cx="50" cy="50" r="8" /><line x1="50" y1="5" x2="50" y2="15" /><line x1="50" y1="85" x2="50" y2="95" /><line x1="5" y1="50" x2="15" y2="50" /><line x1="85" y1="50" x2="95" y2="50" /></>,
  LeadFortress: <><circle cx="30" cy="40" r="15" /><circle cx="70" cy="40" r="15" /><circle cx="50" cy="70" r="15" /><line x1="42" y1="48" x2="42" y2="62" /><line x1="58" y1="48" x2="58" y2="62" /><line x1="45" y1="40" x2="55" y2="40" /></>,
  HorseCost: <><path d="M30 70 Q35 40 50 35 Q65 40 70 70" /><circle cx="50" cy="30" r="12" /><line x1="38" y1="30" x2="30" y2="20" /><line x1="62" y1="30" x2="70" y2="20" /><ellipse cx="50" cy="75" rx="25" ry="10" /></>,
  EquipSafety: <><rect x="30" y="20" width="40" height="50" rx="4" /><rect x="35" y="25" width="30" height="20" rx="2" /><line x1="38" y1="55" x2="62" y2="55" /><line x1="38" y1="62" x2="55" y2="62" /><path d="M45 75 L50 85 L70 65" strokeWidth="2" /></>,
}

const steps = [
  { num: '1', title: 'Discover', desc: 'We identify manual processes and pain points in your industry' },
  { num: '2', title: 'Validate', desc: 'We confirm the problem is real and widespread' },
  { num: '3', title: 'Build', desc: 'Focused solutions that do one thing exceptionally well' },
  { num: '4', title: 'Launch', desc: 'Priced for small businesses, not enterprises' },
  { num: '5', title: 'Iterate', desc: 'Real feedback shapes every update' },
]

export default function App() {
  return (
    <Layout>
      <div className="cosmic-bg" />
      <div className="stars" />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-20 text-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-teal-500/15 border border-teal-500/40 rounded-full mb-10">
            <span className="w-2 h-2 bg-teal-500 rounded-full pulse-dot" />
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">UK Small Business Software</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Your systems should save you time,{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">not waste it.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/50 mb-5 max-w-2xl mx-auto leading-relaxed">
            You're running a business, not a filing system. Hours lost to manual calculations, compliance paperwork, and tools that weren't built for your industry.
          </p>
          
          <p className="text-xl lg:text-2xl text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            We build automation tools and AI chatbots for UK trades, construction, property and regulated industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              See Our Tools
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#contact" className="btn-secondary">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">Our <span className="text-orange-500">Products</span></h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Each tool solves one specific problem exceptionally well. No bloat, no enterprise pricing.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => {
            const c = colorClasses[p.color]
            return (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`product-card text-center transition-transform duration-300 hover:-translate-y-2.5`}>
                <div className={`product-circle mx-auto mb-6 ${c.border} ${c.glow}`} style={{ '--glow-color': 'currentColor' } as React.CSSProperties}>
                  <svg viewBox="0 0 100 100" fill="none" strokeWidth="1.5" className={`w-20 h-20 ${c.stroke}`}>{icons[p.name]}</svg>
                </div>
                <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-3 ${c.text}`}>{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
              </a>
            )
          })}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">How We <span className="text-orange-500">Work</span></h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">We don't build software looking for problems. We find real pain and fix it.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-teal-500/[0.08] hover:border-teal-500/30 transition-all">
              <div className="process-number mx-auto mb-4">{s.num}</div>
              <h4 className="font-display text-base font-bold text-orange-500 uppercase tracking-wide mb-2">{s.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Let's talk about your business</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">Got a manual process eating your time? Drowning in compliance paperwork? Need a chatbot to handle enquiries? We'd love to hear what's slowing you down.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="contact-icon">
                  <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email us</div>
                  <a href="mailto:hello@autaimate.com" className="text-lg font-semibold hover:text-orange-500 transition-colors">hello@autaimate.com</a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="contact-icon">
                  <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Location</div>
                  <div className="text-lg font-semibold">United Kingdom</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-2 overflow-hidden">
            <iframe 
              src="https://app.smartsuite.com/form/sba974gi/0TfuCx5I40?header=false" 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Contact Form"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}




