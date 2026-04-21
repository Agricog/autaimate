import { Link } from 'react-router-dom'
import Layout from './components/Layout'

// URLs starting with '/' route internally to a landing page on autaimate.com
// URLs starting with 'http' go straight to the live product
// Internal-page products grouped first for strongest internal linking
const products = [
  { name: 'TradeCalcs',    url: '/products/tradecalcs',   desc: 'BS 7671-compliant calculators for UK electricians. Cable sizing, voltage drop, circuit calculations.',                                              color: 'yellow' },
  { name: 'SnagLog',       url: '/products/snaglog',      desc: 'AI-powered snagging reports. Photograph defects, AI categorises and generates professional PDF.',                                                  color: 'teal' },
  { name: 'CertVoice',     url: '/products/certvoice',    desc: 'Voice-first electrical certification. Speak your findings on-site, AI builds BS 7671-compliant EICR, Minor Works, and EIC certificates.',          color: 'rose' },
  { name: 'TradGo',        url: '/products/tradgo',       desc: 'AI agent catching missed calls, WhatsApp and web chat enquiries — in your voice, with your approval on every quote. £59/month, 14-day trial.',   color: 'amber' },
  { name: 'DetailRecon',   url: '/products/detailrecon',  desc: 'AI security reconnaissance for close protection. Professional advance recon reports in minutes. £29.99/report.',                                  color: 'purple' },
  { name: 'InspectVoice',  url: '/products/inspectvoice', desc: 'Offline-first PWA for BS EN 1176 playground inspections. Voice-driven defect capture, AI extraction, PDF on-device.',                              color: 'violet' },
  { name: 'SafeEat',       url: '/products/safeeat',      desc: 'QR-powered allergen system for UK food venues. Diners scan, see the safe menu, EHO audit trail built in. £29.99/month.',                          color: 'red' },
  { name: 'AutoReplyChat', url: 'https://autoreplychat.com',      desc: 'AI chatbots for UK businesses. Automate customer enquiries, capture leads 24/7, and integrate with your existing systems.',                color: 'blue' },
  { name: 'LeadFortress',  url: 'https://leadfortress.co.uk',     desc: 'Six-channel lead capture for trades. Phone, SMS, WhatsApp, web, email, social in one inbox.',                                              color: 'orange' },
  { name: 'WorkProof',     url: 'https://workproof.co.uk',        desc: 'Court-grade photo evidence for electricians. GPS-locked, time-stamped, tamper-proof audit packs your assessor wants to see.',              color: 'cyan' },
  { name: 'CraneQuote',    url: 'https://cranequote.co.uk',       desc: 'Crane hire cost calculators. Sizing, hire costs, contract comparison, transport, and project budgets.',                                    color: 'amber' },
  { name: 'EquipSafety',   url: 'https://equipsafety.co.uk',      desc: 'QR-based equipment safety for care homes. Multilingual instructions, CQC compliance.',                                                     color: 'pink' },
  { name: 'ClearProof',    url: 'https://clearproof.co.uk',       desc: 'Multilingual H&S comprehension verification. Prove workers understood safety documents, not just signed.',                                color: 'lime' },
  { name: 'HorseCost',     url: 'https://horsecost.co.uk',        desc: 'UK horse ownership calculators. Livery comparison, annual costs, feed and farrier budgets.',                                               color: 'green' },
  { name: 'Approv',        url: 'https://approv.co.uk',           desc: 'Client approval workflow for architects and designers. One-click approvals via email, no client login required.',                         color: 'sky' },
  { name: 'ShootSync',     url: 'https://shootsync.co.uk',        desc: 'Shooting syndicate management. Members, beaters, shoot days, pegs, bags, and payments in one place.',                                     color: 'emerald' },
  { name: 'UKTradeApps',   url: 'https://uktradeapps.co.uk',      desc: 'Independent software directory for UK construction trades. Compare apps, verify compliance, get personalised recommendations.',           color: 'fuchsia' },
  { name: 'LabCalcs',      url: '#',                              desc: 'Laboratory calculator suite. Molarity, dilutions, buffer prep, and unit conversions for research workflows.',                              color: 'indigo' },
]

const colorClasses: Record<string, { border: string; glow: string; stroke: string; text: string }> = {
  blue:    { border: 'border-blue-500/50',    glow: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]',  stroke: 'stroke-blue-400',    text: 'text-blue-400' },
  yellow:  { border: 'border-yellow-500/50',  glow: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]',  stroke: 'stroke-yellow-400',  text: 'text-yellow-400' },
  teal:    { border: 'border-teal-500/60',    glow: 'hover:shadow-[0_0_50px_rgba(45,138,138,0.4)]',  stroke: 'stroke-teal-400',    text: 'text-teal-400' },
  purple:  { border: 'border-purple-500/50',  glow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]',  stroke: 'stroke-purple-400',  text: 'text-purple-400' },
  orange:  { border: 'border-orange-500/50',  glow: 'hover:shadow-[0_0_50px_rgba(249,115,22,0.3)]',  stroke: 'stroke-orange-400',  text: 'text-orange-400' },
  green:   { border: 'border-green-500/50',   glow: 'hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]',   stroke: 'stroke-green-400',   text: 'text-green-400' },
  pink:    { border: 'border-pink-500/50',    glow: 'hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]',  stroke: 'stroke-pink-400',    text: 'text-pink-400' },
  lime:    { border: 'border-lime-500/50',    glow: 'hover:shadow-[0_0_50px_rgba(132,204,22,0.3)]',  stroke: 'stroke-lime-400',    text: 'text-lime-400' },
  sky:     { border: 'border-sky-500/50',     glow: 'hover:shadow-[0_0_50px_rgba(14,165,233,0.3)]',  stroke: 'stroke-sky-400',     text: 'text-sky-400' },
  emerald: { border: 'border-emerald-500/50', glow: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]',  stroke: 'stroke-emerald-400', text: 'text-emerald-400' },
  amber:   { border: 'border-amber-500/50',   glow: 'hover:shadow-[0_0_50px_rgba(245,158,11,0.3)]',  stroke: 'stroke-amber-400',   text: 'text-amber-400' },
  indigo:  { border: 'border-indigo-500/50',  glow: 'hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]',  stroke: 'stroke-indigo-400',  text: 'text-indigo-400' },
  rose:    { border: 'border-rose-500/50',    glow: 'hover:shadow-[0_0_50px_rgba(244,63,94,0.3)]',   stroke: 'stroke-rose-400',    text: 'text-rose-400' },
  cyan:    { border: 'border-cyan-500/50',    glow: 'hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]',   stroke: 'stroke-cyan-400',    text: 'text-cyan-400' },
  violet:  { border: 'border-violet-500/50',  glow: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]',  stroke: 'stroke-violet-400',  text: 'text-violet-400' },
  fuchsia: { border: 'border-fuchsia-500/50', glow: 'hover:shadow-[0_0_50px_rgba(217,70,239,0.3)]',  stroke: 'stroke-fuchsia-400', text: 'text-fuchsia-400' },
  red:     { border: 'border-red-500/50',     glow: 'hover:shadow-[0_0_50px_rgba(239,68,68,0.3)]',   stroke: 'stroke-red-400',     text: 'text-red-400' },
}

const icons: Record<string, JSX.Element> = {
  AutoReplyChat: <><rect x="20" y="25" width="60" height="45" rx="8"/><path d="M35 45h30M35 55h20"/><circle cx="70" cy="80" r="12"/><path d="M66 80h8M70 76v8"/></>,
  TradeCalcs: <><circle cx="50" cy="50" r="20" /><line x1="50" y1="20" x2="50" y2="10" /><line x1="50" y1="90" x2="50" y2="80" /><line x1="20" y1="50" x2="10" y2="50" /><line x1="90" y1="50" x2="80" y2="50" /><line x1="29" y1="29" x2="22" y2="22" /><line x1="78" y1="78" x2="71" y2="71" /><circle cx="50" cy="50" r="35" strokeDasharray="4 4" /></>,
  SnagLog: <><rect x="25" y="15" width="50" height="70" rx="4" /><line x1="35" y1="35" x2="65" y2="35" /><line x1="35" y1="50" x2="55" y2="50" /><line x1="35" y1="65" x2="60" y2="65" /><circle cx="70" cy="70" r="18" /><path d="M64 70l4 4 8-8" /></>,
  DetailRecon: <><circle cx="50" cy="50" r="35" /><circle cx="50" cy="50" r="25" /><circle cx="50" cy="50" r="8" /><line x1="50" y1="5" x2="50" y2="15" /><line x1="50" y1="85" x2="50" y2="95" /><line x1="5" y1="50" x2="15" y2="50" /><line x1="85" y1="50" x2="95" y2="50" /></>,
  LeadFortress: <><circle cx="30" cy="40" r="15" /><circle cx="70" cy="40" r="15" /><circle cx="50" cy="70" r="15" /><line x1="42" y1="48" x2="42" y2="62" /><line x1="58" y1="48" x2="58" y2="62" /><line x1="45" y1="40" x2="55" y2="40" /></>,
  HorseCost: <><path d="M30 70 Q35 40 50 35 Q65 40 70 70" /><circle cx="50" cy="30" r="12" /><line x1="38" y1="30" x2="30" y2="20" /><line x1="62" y1="30" x2="70" y2="20" /><ellipse cx="50" cy="75" rx="25" ry="10" /></>,
  EquipSafety: <><rect x="30" y="20" width="40" height="50" rx="4" /><rect x="35" y="25" width="30" height="20" rx="2" /><line x1="38" y1="55" x2="62" y2="55" /><line x1="38" y1="62" x2="55" y2="62" /><path d="M45 75 L50 85 L70 65" strokeWidth="2" /></>,
  ClearProof: <><rect x="20" y="15" width="35" height="45" rx="3" /><line x1="27" y1="28" x2="48" y2="28" /><line x1="27" y1="38" x2="45" y2="38" /><line x1="27" y1="48" x2="42" y2="48" /><path d="M60 35 L60 85 L90 85 L90 45 L80 35 L60 35" /><line x1="80" y1="35" x2="80" y2="45" /><line x1="80" y1="45" x2="90" y2="45" /><circle cx="75" cy="62" r="10" /><path d="M71 62 l3 3 6-6" /></>,
  Approv: <><rect x="20" y="20" width="60" height="50" rx="4" /><path d="M35 45 l8 8 17-17" strokeWidth="3" /><circle cx="70" cy="75" r="12" /><path d="M70 70v10M65 75h10" /></>,
  ShootSync: <><circle cx="50" cy="30" r="15" /><path d="M35 50 Q50 70 65 50" /><line x1="50" y1="45" x2="50" y2="85" /><line x1="30" y1="65" x2="50" y2="55" /><line x1="70" y1="65" x2="50" y2="55" /><circle cx="30" cy="80" r="8" /><circle cx="70" cy="80" r="8" /></>,
  CraneQuote: <><line x1="50" y1="15" x2="50" y2="85" strokeWidth="3" /><line x1="50" y1="25" x2="85" y2="25" strokeWidth="2" /><line x1="75" y1="25" x2="75" y2="50" /><rect x="65" y="50" width="20" height="15" rx="2" /><rect x="35" y="70" width="30" height="15" rx="2" /></>,
  LabCalcs: <><path d="M35 20 L35 45 L25 75 Q23 85 35 85 L65 85 Q77 85 75 75 L65 45 L65 20" /><line x1="35" y1="20" x2="65" y2="20" /><line x1="38" y1="45" x2="62" y2="45" /><ellipse cx="50" cy="70" rx="15" ry="8" /><circle cx="45" cy="68" r="3" /><circle cx="55" cy="72" r="2" /></>,
  CertVoice: <><path d="M50 20 L50 50" strokeWidth="3" /><rect x="42" y="15" width="16" height="40" rx="8" /><path d="M32 45 Q32 65 50 65 Q68 65 68 45" /><line x1="50" y1="65" x2="50" y2="75" /><line x1="40" y1="75" x2="60" y2="75" /><rect x="62" y="25" width="20" height="28" rx="3" /><line x1="67" y1="33" x2="77" y2="33" /><line x1="67" y1="39" x2="75" y2="39" /><line x1="67" y1="45" x2="77" y2="45" /></>,
  WorkProof: <><rect x="28" y="18" width="30" height="45" rx="4" /><circle cx="43" cy="35" r="10" /><path d="M33 50h20" /><circle cx="68" cy="28" r="8" /><path d="M64 28h8M68 24v8" /><path d="M60 55 L25 70 L25 82 L75 82 L75 70 Z" /><path d="M35 75 l5 5 10-10" strokeWidth="2" /></>,
  InspectVoice: <><path d="M50 15 L50 40" strokeWidth="3" /><rect x="43" y="10" width="14" height="35" rx="7" /><path d="M35 38 Q35 55 50 55 Q65 55 65 38" /><line x1="50" y1="55" x2="50" y2="62" /><line x1="42" y1="62" x2="58" y2="62" /><rect x="20" y="68" width="60" height="22" rx="3" /><path d="M28 75 l4 4 8-8" strokeWidth="2" /><line x1="48" y1="76" x2="72" y2="76" /><line x1="48" y1="82" x2="65" y2="82" /></>,
  UKTradeApps: <><rect x="15" y="20" width="28" height="22" rx="3" /><rect x="57" y="20" width="28" height="22" rx="3" /><rect x="15" y="56" width="28" height="22" rx="3" /><rect x="57" y="56" width="28" height="22" rx="3" /><path d="M25 31h8M25 36h5" /><path d="M67 31h8M67 36h5" /><path d="M25 67h8M25 72h5" /><path d="M67 67h8M67 72h5" /><circle cx="50" cy="50" r="10" /><path d="M46 50h8M50 46v8" /></>,
  TradGo: <><rect x="35" y="15" width="30" height="55" rx="4" /><line x1="40" y1="22" x2="60" y2="22" /><circle cx="50" cy="75" r="1.5" /><path d="M25 30 q-5 5 0 10" /><path d="M20 25 q-9 10 0 20" /><path d="M75 30 q5 5 0 10" /><path d="M80 25 q9 10 0 20" /><circle cx="50" cy="45" r="5" /><path d="M47 43h6M47 47h4" /></>,
  SafeEat: <><circle cx="50" cy="50" r="28" /><rect x="38" y="38" width="6" height="6" /><rect x="56" y="38" width="6" height="6" /><rect x="38" y="56" width="6" height="6" /><rect x="47" y="47" width="6" height="6" /><rect x="56" y="56" width="3" height="3" /><rect x="60" y="60" width="2" height="2" /><line x1="18" y1="38" x2="18" y2="68" strokeWidth="2" /><path d="M15 38 v10 q0 3 3 3 h0 q3 0 3 -3 v-10" /><line x1="82" y1="38" x2="82" y2="68" strokeWidth="2" /><line x1="80" y1="38" x2="84" y2="38" strokeWidth="2" /></>,
}

const steps = [
  { num: '1', title: 'Discover', desc: 'A UK business brings us a specific problem the existing tools don\u2019t solve. We listen to the shape of it — who it affects, how often, how much time or money it costs, and why the obvious fixes haven\u2019t worked.' },
  { num: '2', title: 'Validate', desc: 'We confirm the problem is real and widespread enough to be worth building a product for. If it\u2019s a one-off workflow quirk, a spreadsheet solves it. If it\u2019s an industry pattern, we build.' },
  { num: '3', title: 'Build', desc: 'Focused niche product that does one thing exceptionally well. Fixed scope, fixed price. No feature creep. No "while we\u2019re at it, let\u2019s add..." — that\u2019s how 4-week builds become 4-month builds.' },
  { num: '4', title: 'Launch', desc: 'Priced for small businesses, not enterprises. The commissioning client gets a working product. Others in the industry can buy access later if that\u2019s the right call for everyone involved.' },
  { num: '5', title: 'Iterate', desc: 'Real customer feedback shapes every update. The product keeps getting sharper. We don\u2019t chase features — we sharpen the specific problem the product was built to solve.' },
]

const industryHubs = [
  {
    title: 'Construction & Trades',
    count: '9 products',
    desc: 'BS 7671 calculations, voice-first certification, AI missed-call, snagging, photo evidence, lead capture, crane hire, playground inspection, multilingual H&S.',
    href: '/for/construction',
    accent: 'orange',
  },
  {
    title: 'Property & Lettings',
    count: '4 products',
    desc: 'AI snagging reports, one-click client approvals, multi-channel lead capture, multilingual tenant safety briefings.',
    href: '/for/property',
    accent: 'sky',
  },
  {
    title: 'Care Homes',
    count: '2 products',
    desc: 'QR-based multilingual equipment safety with CQC audit trail, plus H&S comprehension verification for diverse staff.',
    href: '/for/care-homes',
    accent: 'pink',
  },
]

const hubAccents: Record<string, { border: string; text: string; hoverBorder: string; hoverBg: string }> = {
  orange: { border: 'border-orange-500/20', text: 'text-orange-400', hoverBorder: 'hover:border-orange-500/50', hoverBg: 'hover:bg-orange-500/[0.04]' },
  sky:    { border: 'border-sky-500/20',    text: 'text-sky-400',    hoverBorder: 'hover:border-sky-500/50',    hoverBg: 'hover:bg-sky-500/[0.04]' },
  pink:   { border: 'border-pink-500/20',   text: 'text-pink-400',   hoverBorder: 'hover:border-pink-500/50',   hoverBg: 'hover:bg-pink-500/[0.04]' },
}

const nicheArguments = [
  {
    title: 'Generic SaaS forces every industry through the same workflows.',
    desc: 'A tool that tries to serve plumbers, letting agents, care homes and restaurants ends up serving none of them well. Every workflow is a lowest-common-denominator compromise. Every menu is cluttered with tabs that don\u2019t apply to your business. Every onboarding flow asks questions that mean something in someone else\u2019s industry and nothing in yours.',
  },
  {
    title: 'UK industries are underserved by US-first platforms.',
    desc: 'BS 7671 is not the US National Electrical Code. CQC is not a US joint commission accreditation. Natasha\u2019s Law is UK-specific. EHO inspections are not health department audits. When US SaaS "localises" for the UK market, it usually means adding a pound sign — not rebuilding the compliance workflow to match what UK regulators actually check.',
  },
  {
    title: 'Enterprise pricing for SMB problems is a broken market.',
    desc: 'The established UK vendors in regulated industries price for local authorities and national chains. A three-van sparks business, an independent kitchen, or a single-site care home cannot justify £500 a month and a six-month onboarding process. Which is why most UK small businesses end up on spreadsheets and WhatsApp — the tools they could afford were built for someone else.',
  },
  {
    title: 'Niche products fit the problem exactly.',
    desc: 'TradeCalcs knows the calculations UK electricians actually use, not the ones an international textbook covers. SafeEat knows Natasha\u2019s Law and the evidence an EHO officer asks for, not a generic allergen field on a US restaurant POS. InspectVoice knows BS EN 1176 and what "operational inspection" means in UK local authority procurement. That specificity is the product.',
  },
  {
    title: 'One customer\u2019s commission becomes an industry\u2019s product.',
    desc: 'Every product in the Autaimate portfolio started as a specific problem from a specific business. The first build serves them. The second customer confirms the problem is real across the industry. By the time the fifth customer signs up, there\u2019s a proper SaaS product in the market that nobody else has — because nobody else built for that niche.',
  },
]

const provenancePoints = [
  {
    title: '40 years on the tools before writing code.',
    desc: 'Mick spent four decades in UK construction and trades before founding Autaimate. The products in the portfolio aren\u2019t theoretical — they\u2019re built by someone who knows what a site looks like at 7am in January, what paperwork an EICR inspection actually generates, and why generic construction software ends up in a drawer.',
  },
  {
    title: 'Every product in active use.',
    desc: 'These aren\u2019t concept demos. TradeCalcs is used daily by UK electricians. SnagLog is producing live snagging reports. DetailRecon is turning CP advance photos into professional PDFs for paying customers. SafeEat and InspectVoice are in production pilots with real UK venues and inspection companies. The portfolio is earning its keep.',
  },
  {
    title: 'UK-built, UK-hosted, UK-focused.',
    desc: 'No offshore development teams. No outsourced support. Every product hosted on UK-friendly infrastructure (Railway, Cloudflare, Neon EU) with UK data residency available on request. Built for the regulations and expectations that apply here — not translated from elsewhere.',
  },
  {
    title: 'Security and compliance aren\u2019t an afterthought.',
    desc: 'Every Autaimate build follows the same published standard: Clerk authentication, pgcrypto encryption for Article 9 data, Row-Level Security on every tenant table, signed URLs for file storage, uniform GDPR responses, audit logging on every state change. The full build standard is public. We don\u2019t hide how we build — we stand behind it.',
  },
]

const faqs = [
  {
    q: 'What does Autaimate build?',
    a: 'Autaimate builds niche SaaS products for UK small businesses — each one solving a specific problem within a specific industry. The portfolio includes eighteen live products covering construction, trades, property, care, hospitality, inspection and close protection. New niche products are also commissioned fixed-price.',
  },
  {
    q: 'Who are Autaimate\u2019s products for?',
    a: 'UK small and medium businesses in construction, trades, property, lettings, care homes, hospitality, playground inspection, close protection and other regulated or underserved industries. Every product is built for one specific audience — not a generic business customer.',
  },
  {
    q: 'How is Autaimate different from generic SaaS platforms?',
    a: 'Generic SaaS flattens every industry into the same workflows. Autaimate builds each product around one specific industry — its regulations, its language, its pricing reality. A BS 7671 calculator built for UK electricians is not the same as a US electrical app with a Celsius toggle, and small UK businesses know the difference.',
  },
  {
    q: 'What does it cost to commission a new niche product?',
    a: 'Fixed-price, scoped per commission. Pricing is set before the build starts and doesn\u2019t change on the fly — no time-and-materials meter running. Most commissions are delivered for a fraction of what enterprise software houses charge for equivalent work.',
  },
  {
    q: 'How long does it take to build a new niche product?',
    a: 'Typically four weeks from kick-off to live product. Some commissions are shorter, some larger scopes take longer — but four weeks is the rhythm we design to. Faster than enterprise consulting projects and slower than throwaway no-code builds, by design.',
  },
  {
    q: 'Do I own the code if I commission a product?',
    a: 'Yes. When a commissioned product ships, the client owns the code and the product. No licence we can revoke. No platform dependency that locks you in. You decide what happens to it next — keep it private, share it with peers, or expand it into its own SaaS venture.',
  },
  {
    q: 'Can a commissioned product be sold to others in my industry later?',
    a: 'That\u2019s the Autaimate model, actually — every product in the portfolio started as one customer\u2019s commission and then served the wider industry. If the commissioning client wants to keep it exclusive, we honour that. If they want it productised for the industry, we help with that too.',
  },
  {
    q: 'What technology stack does Autaimate use?',
    a: 'React 18 with TypeScript and Tailwind CSS on the frontend. Hono on Node.js or Cloudflare Workers for APIs. Neon PostgreSQL with Row-Level Security and pgcrypto encryption for data. Clerk for authentication, Stripe for payments, Resend for email, Cloudflare R2 for files, Railway for hosting. Modern, secure, UK-compliant from day one.',
  },
  {
    q: 'Is Autaimate GDPR compliant?',
    a: 'GDPR compliance is built into every product from the first commit — not bolted on later. Encryption at rest for Article 9 special-category data, audit logs on every state-changing operation, uniform responses on delete endpoints to prevent enumeration, and a documented security posture for each build.',
  },
  {
    q: 'Where are Autaimate products hosted?',
    a: 'Primarily on Railway with Cloudflare CDN in front. Data sits in Neon (EU region available) or at the edge via Cloudflare Workers when latency matters. UK data residency available on request for commissions that require it — particularly for care, legal and regulated sectors.',
  },
  {
    q: 'How do I buy access to an existing Autaimate product?',
    a: 'Each product has its own purchase route — some are one-off per-report payments (DetailRecon at £29.99), some are monthly subscriptions (SafeEat at £29.99 a month, TradGo at £59 a month), some are entirely free (TradeCalcs, HorseCost). Visit the individual product page for current pricing.',
  },
  {
    q: 'Does Autaimate work with US or international businesses?',
    a: 'Autaimate is UK-focused by design — every product is built around UK regulations, UK language and UK pricing norms. International businesses with UK operations or UK-serving SaaS plans are welcome to commission builds, but we do not localise for markets we do not know well. Our moat is specificity.',
  },
]

const relatedPages = [
  { title: 'Construction & Trades products', desc: 'All nine Autaimate products built for UK construction, trades and site businesses.', href: '/for/construction' },
  { title: 'Property & Lettings products', desc: 'Snagging, approvals, lead capture and tenant safety for UK property operators.', href: '/for/property' },
  { title: 'SafeEat — QR allergen system', desc: 'The Cornwall-built allergen and retention platform for independent UK food venues.', href: '/products/safeeat' },
  { title: 'TradGo — AI agent for trades', desc: 'Catch missed calls, WhatsApp and web chat enquiries in your voice. £59/month.', href: '/products/tradgo' },
  { title: 'How a new product gets commissioned', desc: 'The fixed-price, 4-week build process for commissioning a niche Autaimate product.', href: '/micro-saas' },
]

function ProductCard({ p }: { p: typeof products[0] }) {
  const c = colorClasses[p.color]
  const isInternal = p.url.startsWith('/')
  const className = 'product-card text-center transition-transform duration-300 hover:-translate-y-2.5'

  const inner = (
    <>
      <div className={`product-circle mx-auto mb-6 ${c.border} ${c.glow}`} style={{ '--glow-color': 'currentColor' } as React.CSSProperties}>
        <svg viewBox="0 0 100 100" fill="none" strokeWidth="1.5" className={`w-20 h-20 ${c.stroke}`}>{icons[p.name]}</svg>
      </div>
      <h3 className={`font-display text-base font-bold uppercase tracking-wide mb-3 ${c.text}`}>{p.name}</h3>
      <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
    </>
  )

  if (isInternal) {
    return <Link to={p.url} className={className}>{inner}</Link>
  }

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  )
}

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
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-wider">UK Niche SaaS Studio</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
            Niche SaaS products for the industries{' '}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">generic software forgets.</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/60 mb-5 max-w-2xl mx-auto leading-relaxed">
            Every product here started as one customer&rsquo;s problem. Construction, trades, property, care, hospitality, inspection, close protection — each industry has gaps the big platforms gloss over. Autaimate fills them, one niche at a time, built by someone who&rsquo;s been on the tools.
          </p>

          <p className="text-xl lg:text-2xl text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Eighteen niche products serving UK small businesses — plus new ones commissioned fixed-price when an industry has a gap worth closing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              See the products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#contact" className="btn-secondary">Commission a new one</a>
          </div>
        </div>
      </section>

      {/* Quick Answer (Speakable for voice search) */}
      <section className="px-6 lg:px-12 max-w-4xl mx-auto -mt-10 mb-20">
        <div id="quick-answer" className="bg-gradient-to-br from-teal-500/10 to-orange-500/5 border border-teal-500/20 rounded-3xl p-8 lg:p-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-3">Quick Answer</div>
          <p className="text-lg lg:text-xl text-white/85 leading-relaxed">
            Autaimate builds niche SaaS products for UK industries. Eighteen live today, each solving one specific problem. New niche products commissioned fixed-price, typically live in four weeks.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">The <span className="text-orange-500">Products</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Each tool solves one specific problem for one specific industry. No bloat, no enterprise pricing, no generic workflows that half-fit a dozen sectors. These are focused niche products — built because nobody else was building for that niche, and used daily by UK businesses that were tired of paying for software that didn&rsquo;t fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Industries we build for */}
      <section id="industries" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">Industries we <span className="text-orange-500">build for</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Products aggregated by the sector they serve — for buyers who want to see every Autaimate tool for their industry in one place. Each hub lists the relevant products, explains the recurring problems we&rsquo;ve built for, and points to the commissioning process for industries where we haven&rsquo;t yet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industryHubs.map((h) => {
            const a = hubAccents[h.accent]
            return (
              <Link
                key={h.href}
                to={h.href}
                className={`p-8 bg-white/[0.02] border rounded-2xl transition-all ${a.border} ${a.hoverBorder} ${a.hoverBg} hover:-translate-y-1`}
              >
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${a.text}`}>{h.count}</div>
                <h3 className={`font-display text-xl font-bold mb-3 ${a.text}`}>{h.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{h.desc}</p>
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${a.text}`}>
                  View hub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Why niche beats generic */}
      <section id="why-niche" className="py-24 lg:py-32 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">Why niche <span className="text-orange-500">beats generic</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            The argument for building one focused product per industry, instead of one sprawling platform that tries to serve everyone.
          </p>
        </div>

        <div className="space-y-6">
          {nicheArguments.map((n) => (
            <div key={n.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-orange-400 mb-3">{n.title}</h3>
              <p className="text-white/70 leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How a product gets born */}
      <section id="process" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">How a product <span className="text-orange-500">gets born</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We don&rsquo;t build software looking for problems. One UK business brings us real pain, and if the problem is industry-wide, the fix becomes a niche product. Five steps, four weeks, fixed price.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="text-center p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-teal-500/[0.08] hover:border-teal-500/30 transition-all">
              <div className="process-number mx-auto mb-4">{s.num}</div>
              <h4 className="font-display text-base font-bold text-orange-500 uppercase tracking-wide mb-3">{s.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Provenance / E-E-A-T */}
      <section id="provenance" className="py-24 lg:py-32 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">Built by someone who&rsquo;s <span className="text-orange-500">been on the tools</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Autaimate is a one-person product studio with four decades of UK industry experience behind every build. Plain-spoken, direct, and happy to push back when a commission doesn&rsquo;t hold up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {provenancePoints.map((p) => (
            <div key={p.title} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="font-display text-lg font-bold text-teal-400 mb-3">{p.title}</h3>
              <p className="text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-white/50">
          Founded and written by <a href="https://uk.linkedin.com/in/mickstevenson" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline underline-offset-4">Mick Stevenson</a>, Founder of Autaimate.
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-32 px-6 lg:px-12 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">Frequently asked <span className="text-orange-500">questions</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything worth knowing before you buy an existing product or commission a new one.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-orange-500/30 transition-colors">
              <summary className="font-display text-base font-bold text-white cursor-pointer list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-orange-400 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-white/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section id="related" className="py-24 px-6 lg:px-12 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">Where to go <span className="text-orange-500">next</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Five starting points depending on why you&rsquo;re here.
          </p>
        </div>

        <div className="space-y-3">
          {relatedPages.map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="block p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.04] hover:border-orange-500/30 transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">{r.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </div>
                <svg className="w-5 h-5 text-white/40 group-hover:text-orange-400 flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Got a gap the existing tools don&rsquo;t close?</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">Every product in the portfolio started with a conversation like this. Tell us what&rsquo;s slowing your industry down, and we&rsquo;ll tell you whether the problem is worth building a niche product around.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="contact-icon">
                  <svg className="w-6 h-6 stroke-teal-400" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1">Email us</div>
                  <a href="mailto:mick@autaimate.com" className="text-lg font-semibold hover:text-orange-500 transition-colors">mick@autaimate.com</a>
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




