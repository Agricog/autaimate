<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Autaimate</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Space Grotesk', sans-serif;
      background: #0a0a12;
      color: #ffffff;
      overflow-x: hidden;
    }

    .cosmic-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(ellipse at 20% 20%, rgba(45, 138, 138, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(15, 15, 30, 1) 0%, #0a0a12 100%);
      z-index: -2;
    }

    .stars {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: 
        radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
        radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
        radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.2), transparent),
        radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.3), transparent),
        radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.15), transparent),
        radial-gradient(1px 1px at 250px 160px, rgba(255,255,255,0.25), transparent),
        radial-gradient(2px 2px at 300px 90px, rgba(255,255,255,0.2), transparent);
      background-size: 400px 400px;
      animation: twinkle 8s ease-in-out infinite;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 16px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(10, 10, 18, 0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #2d8a8a, #3aa3a3);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-icon svg {
      width: 24px;
      height: 24px;
    }

    .logo-text {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 22px;
      color: white;
    }

    .logo-text span {
      color: #f97316;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .nav-links a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      font-weight: 500;
      font-size: 15px;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #f97316;
    }

    .nav-cta {
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white !important;
      padding: 12px 28px;
      border-radius: 10px;
      font-weight: 600;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 140px 48px 100px;
      text-align: center;
    }

    .hero-content {
      max-width: 900px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background: rgba(45, 138, 138, 0.15);
      border: 1px solid rgba(45, 138, 138, 0.4);
      border-radius: 100px;
      margin-bottom: 40px;
    }

    .hero-badge-dot {
      width: 8px;
      height: 8px;
      background: #2d8a8a;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }

    .hero-badge-text {
      color: #5bbfbf;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .hero h1 {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(36px, 5.5vw, 68px);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 32px;
      letter-spacing: -2px;
    }

    .hero h1 span {
      background: linear-gradient(135deg, #f97316, #fb923c, #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-pain {
      font-size: 20px;
      line-height: 1.8;
      color: rgba(255,255,255,0.5);
      margin-bottom: 20px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-solution {
      font-size: 22px;
      line-height: 1.7;
      color: rgba(255,255,255,0.85);
      margin-bottom: 48px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 500;
    }

    .hero-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 36px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white;
      font-weight: 600;
      font-size: 16px;
      border-radius: 12px;
      text-decoration: none;
      transition: all 0.3s;
      box-shadow: 0 0 40px rgba(249, 115, 22, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 60px rgba(249, 115, 22, 0.5);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 36px;
      background: transparent;
      color: white;
      font-weight: 600;
      font-size: 16px;
      border-radius: 12px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.2);
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      border-color: #2d8a8a;
      color: #5bbfbf;
    }

    .services {
      padding: 120px 48px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 80px;
    }

    .section-header h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 48px;
      font-weight: 800;
      margin-bottom: 20px;
      letter-spacing: -1px;
    }

    .section-header h2 span {
      color: #f97316;
    }

    .section-header p {
      color: rgba(255,255,255,0.6);
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }

    .product-card {
      text-align: center;
      text-decoration: none;
      color: inherit;
      transition: transform 0.4s ease;
    }

    .product-card:hover {
      transform: translateY(-10px);
    }

    .product-circle {
      width: 200px;
      height: 200px;
      margin: 0 auto 32px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, rgba(30, 30, 50, 0.8), rgba(15, 15, 25, 0.95));
      border: 2px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
    }

    .product-card:hover .product-circle {
      box-shadow: 0 0 60px var(--glow-color);
    }

    .product-circle svg {
      width: 90px;
      height: 90px;
    }

    .product-card:nth-child(1) .product-circle { border-color: rgba(251, 191, 36, 0.5); --glow-color: rgba(251, 191, 36, 0.3); }
    .product-card:nth-child(1) .product-circle svg { stroke: #fbbf24; }
    .product-card:nth-child(1) h3 { color: #fbbf24; }

    .product-card:nth-child(2) .product-circle { border-color: rgba(45, 138, 138, 0.6); --glow-color: rgba(45, 138, 138, 0.4); }
    .product-card:nth-child(2) .product-circle svg { stroke: #2d8a8a; }
    .product-card:nth-child(2) h3 { color: #5bbfbf; }

    .product-card:nth-child(3) .product-circle { border-color: rgba(168, 85, 247, 0.5); --glow-color: rgba(168, 85, 247, 0.3); }
    .product-card:nth-child(3) .product-circle svg { stroke: #a855f7; }
    .product-card:nth-child(3) h3 { color: #a855f7; }

    .product-card:nth-child(4) .product-circle { border-color: rgba(249, 115, 22, 0.5); --glow-color: rgba(249, 115, 22, 0.3); }
    .product-card:nth-child(4) .product-circle svg { stroke: #f97316; }
    .product-card:nth-child(4) h3 { color: #f97316; }

    .product-card:nth-child(5) .product-circle { border-color: rgba(34, 197, 94, 0.5); --glow-color: rgba(34, 197, 94, 0.3); }
    .product-card:nth-child(5) .product-circle svg { stroke: #22c55e; }
    .product-card:nth-child(5) h3 { color: #22c55e; }

    .product-card:nth-child(6) .product-circle { border-color: rgba(236, 72, 153, 0.5); --glow-color: rgba(236, 72, 153, 0.3); }
    .product-card:nth-child(6) .product-circle svg { stroke: #ec4899; }
    .product-card:nth-child(6) h3 { color: #ec4899; }

    .product-card h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    .product-card p {
      color: rgba(255,255,255,0.6);
      font-size: 14px;
      line-height: 1.7;
      max-width: 300px;
      margin: 0 auto;
    }

    .process {
      padding: 120px 48px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .process-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
      margin-top: 60px;
    }

    .process-step {
      text-align: center;
      padding: 32px 16px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 20px;
      transition: all 0.3s;
    }

    .process-step:hover {
      background: rgba(45, 138, 138, 0.08);
      border-color: rgba(45, 138, 138, 0.3);
    }

    .process-number {
      width: 50px;
      height: 50px;
      margin: 0 auto 16px;
      background: linear-gradient(135deg, #2d8a8a, #3aa3a3);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 22px;
      color: white;
    }

    .process-step h4 {
      font-family: 'Outfit', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: #f97316;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 10px;
    }

    .process-step p {
      color: rgba(255,255,255,0.5);
      font-size: 13px;
      line-height: 1.5;
    }

    .contact {
      padding: 120px 48px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .contact h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 44px;
      font-weight: 800;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }

    .contact-left p {
      color: rgba(255,255,255,0.6);
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 40px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .contact-icon {
      width: 56px;
      height: 56px;
      background: rgba(45, 138, 138, 0.15);
      border: 1px solid rgba(45, 138, 138, 0.3);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .contact-icon svg {
      width: 24px;
      height: 24px;
      stroke: #5bbfbf;
    }

    .contact-label {
      font-size: 14px;
      color: rgba(255,255,255,0.5);
      margin-bottom: 4px;
    }

    .contact-value {
      font-size: 18px;
      font-weight: 600;
      color: white;
    }

    .contact-form {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      padding: 40px;
    }

    .contact-form h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 28px;
    }

    .form-group {
      margin-bottom: 18px;
    }

    .form-group label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255,255,255,0.7);
      margin-bottom: 8px;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 14px 18px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      color: white;
      font-family: inherit;
      font-size: 15px;
      transition: all 0.3s;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2d8a8a;
      background: rgba(45, 138, 138, 0.08);
    }

    .form-group textarea {
      resize: none;
      height: 100px;
    }

    .form-submit {
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, #f97316, #ea580c);
      border: none;
      border-radius: 10px;
      color: white;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .form-submit:hover {
      box-shadow: 0 0 40px rgba(249, 115, 22, 0.4);
    }

    footer {
      padding: 50px 48px;
      border-top: 1px solid rgba(255,255,255,0.05);
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    footer p {
      color: rgba(255,255,255,0.4);
      font-size: 14px;
    }

    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); }
      .process-grid { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 768px) {
      nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero { padding: 120px 24px 80px; }
      .hero-buttons { flex-direction: column; align-items: center; }
      .products-grid { grid-template-columns: 1fr; }
      .process-grid { grid-template-columns: 1fr 1fr; }
      .contact-grid { grid-template-columns: 1fr; }
      .services, .process, .contact { padding: 80px 24px; }
    }
  </style>
</head>
<body>
  <div class="cosmic-bg"></div>
  <div class="stars"></div>

  <nav>
    <a href="#" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      </div>
      <span class="logo-text">aut<span>ai</span>mate</span>
    </a>
    <div class="nav-links">
      <a href="#products">Products</a>
      <a href="#process">How We Work</a>
      <a href="#contact">Contact</a>
      <a href="#contact" class="nav-cta">Get Started</a>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        <span class="hero-badge-text">UK Small Business Software</span>
      </div>
      
      <h1>Your systems should save you time, <span>not waste it.</span></h1>
      
      <p class="hero-pain">
        You're running a business, not a filing system. Hours lost to manual calculations, compliance paperwork, and tools that weren't built for your industry.
      </p>
      
      <p class="hero-solution">
        We build automation tools specifically for UK trades, construction, property and regulated industries. Simple software that actually understands your work.
      </p>
      
      <div class="hero-buttons">
        <a href="#products" class="btn-primary">
          See Our Tools
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <a href="#contact" class="btn-secondary">Talk to Us</a>
      </div>
    </div>
  </section>

  <section class="services" id="products">
    <div class="section-header">
      <h2>Our <span>Products</span></h2>
      <p>Each tool solves one specific problem exceptionally well. No bloat, no enterprise pricing.</p>
    </div>
    <div class="products-grid">
      <a href="https://tradecalcs.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <circle cx="50" cy="50" r="20" />
            <line x1="50" y1="20" x2="50" y2="10" />
            <line x1="50" y1="90" x2="50" y2="80" />
            <line x1="20" y1="50" x2="10" y2="50" />
            <line x1="90" y1="50" x2="80" y2="50" />
            <line x1="29" y1="29" x2="22" y2="22" />
            <line x1="78" y1="78" x2="71" y2="71" />
            <line x1="29" y1="71" x2="22" y2="78" />
            <line x1="78" y1="22" x2="71" y2="29" />
            <circle cx="50" cy="50" r="35" stroke-dasharray="4 4" />
          </svg>
        </div>
        <h3>TradeCalcs</h3>
        <p>BS 7671-compliant calculators for UK electricians. Cable sizing, voltage drop, circuit calculations.</p>
      </a>
      <a href="https://app.snaglog.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <rect x="25" y="15" width="50" height="70" rx="4" />
            <line x1="35" y1="35" x2="65" y2="35" />
            <line x1="35" y1="50" x2="55" y2="50" />
            <line x1="35" y1="65" x2="60" y2="65" />
            <circle cx="70" cy="70" r="18" />
            <path d="M64 70l4 4 8-8" />
          </svg>
        </div>
        <h3>SnagLog</h3>
        <p>AI-powered snagging reports. Photograph defects, AI categorises and generates professional PDF.</p>
      </a>
      <a href="https://detailrecon.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="8" />
            <line x1="50" y1="5" x2="50" y2="15" />
            <line x1="50" y1="85" x2="50" y2="95" />
            <line x1="5" y1="50" x2="15" y2="50" />
            <line x1="85" y1="50" x2="95" y2="50" />
          </svg>
        </div>
        <h3>DetailRecon</h3>
        <p>AI security reconnaissance for close protection. Professional advance reports in minutes.</p>
      </a>
      <a href="https://leadfortress.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <circle cx="30" cy="40" r="15" />
            <circle cx="70" cy="40" r="15" />
            <circle cx="50" cy="70" r="15" />
            <line x1="42" y1="48" x2="42" y2="62" />
            <line x1="58" y1="48" x2="58" y2="62" />
            <line x1="45" y1="40" x2="55" y2="40" />
          </svg>
        </div>
        <h3>LeadFortress</h3>
        <p>Six-channel lead capture for trades. Phone, SMS, WhatsApp, web, email, social in one inbox.</p>
      </a>
      <a href="https://horsecost.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <path d="M30 70 Q35 40 50 35 Q65 40 70 70" />
            <circle cx="50" cy="30" r="12" />
            <line x1="38" y1="30" x2="30" y2="20" />
            <line x1="62" y1="30" x2="70" y2="20" />
            <ellipse cx="50" cy="75" rx="25" ry="10" />
          </svg>
        </div>
        <h3>HorseCost</h3>
        <p>UK horse ownership calculators. Livery comparison, annual costs, feed and farrier budgets.</p>
      </a>
      <a href="https://equipsafety.co.uk" class="product-card" target="_blank">
        <div class="product-circle">
          <svg viewBox="0 0 100 100" fill="none" stroke-width="1.5">
            <rect x="30" y="20" width="40" height="50" rx="4" />
            <rect x="35" y="25" width="30" height="20" rx="2" />
            <line x1="38" y1="55" x2="62" y2="55" />
            <line x1="38" y1="62" x2="55" y2="62" />
            <path d="M45 75 L50 85 L70 65" stroke-width="2" />
          </svg>
        </div>
        <h3>EquipSafety</h3>
        <p>QR-based equipment safety for care homes. Multilingual instructions, CQC compliance.</p>
      </a>
    </div>
  </section>

  <section class="process" id="process">
    <div class="section-header">
      <h2>How We <span>Work</span></h2>
      <p>We don't build software looking for problems. We find real pain and fix it.</p>
    </div>
    <div class="process-grid">
      <div class="process-step">
        <div class="process-number">1</div>
        <h4>Discover</h4>
        <p>We identify manual processes and pain points in your industry</p>
      </div>
      <div class="process-step">
        <div class="process-number">2</div>
        <h4>Validate</h4>
        <p>We confirm the problem is real and widespread</p>
      </div>
      <div class="process-step">
        <div class="process-number">3</div>
        <h4>Build</h4>
        <p>Focused solutions that do one thing exceptionally well</p>
      </div>
      <div class="process-step">
        <div class="process-number">4</div>
        <h4>Launch</h4>
        <p>Priced for small businesses, not enterprises</p>
      </div>
      <div class="process-step">
        <div class="process-number">5</div>
        <h4>Iterate</h4>
        <p>Real feedback shapes every update</p>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-grid">
      <div class="contact-left">
        <h2>Let's talk about your business</h2>
        <p>Got a manual process eating your time? Drowning in compliance paperwork? We'd love to hear what's slowing you down.</p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <div class="contact-label">Email us</div>
              <div class="contact-value">hello@autaimate.com</div>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <div class="contact-label">Location</div>
              <div class="contact-value">United Kingdom</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <h3>Send a message</h3>
        <div class="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@company.co.uk">
        </div>
        <div class="form-group">
          <label>How can we help?</label>
          <textarea placeholder="Tell us about your business..."></textarea>
        </div>
        <button class="form-submit">Send Message</button>
      </div>
    </div>
  </section>

  <footer>
    <a href="#" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
        </svg>
      </div>
      <span class="logo-text">aut<span>ai</span>mate</span>
    </a>
    <p>© 2024 Autaimate. All rights reserved. United Kingdom.</p>
  </footer>
</body>
</html>


