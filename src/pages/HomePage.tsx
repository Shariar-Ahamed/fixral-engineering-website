import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [coords, setCoords] = useState({
    x: '184.230',
    y: '742.812',
    z: '42.159'
  });

  useEffect(() => {
    const baseX = 184.230;
    const baseY = 742.812;
    const baseZ = 42.159;

    const interval = setInterval(() => {
      const jitterX = (Math.random() * 0.01 - 0.005);
      const jitterY = (Math.random() * 0.01 - 0.005);
      const jitterZ = (Math.random() * 0.008 - 0.004);

      setCoords({
        x: (baseX + jitterX).toFixed(3),
        y: (baseY + jitterY).toFixed(3),
        z: (baseZ + jitterZ).toFixed(3)
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main id="top">
        {/* ========================================================================
             HERO SECTION
             ======================================================================== */}
        <section className="hero-section">
          <div className="container hero-grid">
            {/* Left Column: Specs, Typography & Actions */}
            <div className="hero-content">
              <div className="hero-spec-pills">
                <div className="spec-pill">
                  <span>TOLERANCE</span> <span className="highlight">±0.05 MM</span>
                </div>
                <div className="spec-pill">
                  <span>RESOLUTION</span> <span className="highlight">20 µm</span>
                </div>
                <div className="spec-pill">
                  <span>FORMAT</span> <span className="highlight">STL / STEP / OBJ</span>
                </div>
              </div>

              <h1 className="hero-title">
                Limitless Precision in Engineering
              </h1>

              <p className="hero-description">
                Fixral transforms your ideas into physical reality with millimeter accuracy using advanced 3D scanning, reverse engineering, and precision prototyping technologies.
              </p>

              <div className="hero-cta-group">
                <Link to="/portfolio" className="btn-primary">
                  <span>Explore Projects</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <a href="#services" className="btn-secondary">
                  <span>Our Services</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Scanner View with Active HUD */}
            <div className="hero-visual-card">
              {/* Live HUD Overlays */}
              <div className="hud-corner hud-top-left">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="hud-crosshair-icon">
                  <line x1="0" y1="6" x2="12" y2="6" stroke="#FF5200" strokeWidth="1.2" />
                  <line x1="0.5" y1="0.5" x2="0.5" y2="12" stroke="#FF5200" strokeWidth="1.2" />
                </svg>
                <span>SYS_SCAN_ACTIVE</span>
              </div>
              <div className="hud-corner hud-top-right">
                [ CALIBRATION OK ]
              </div>
              <div className="hud-corner hud-bottom-left">
                <div>COORD_X: <span id="hudCoordX">{coords.x}</span></div>
                <div>COORD_Y: <span id="hudCoordY">{coords.y}</span></div>
                <div>COORD_Z: <span id="hudCoordZ">{coords.z}</span></div>
              </div>
              <div className="hud-corner hud-bottom-right">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="hud-crosshair-icon">
                  <line x1="0" y1="6" x2="12" y2="6" stroke="#FF5200" strokeWidth="1.2" />
                  <line x1="0.5" y1="0.5" x2="0.5" y2="12" stroke="#FF5200" strokeWidth="1.2" />
                </svg>
                <span>SYS_REV_ENG</span>
              </div>

              <img src="/assets/images/hero-right.png" alt="3D Optical Jet Engine Scanning" width="560" height="480" />
            </div>
          </div>
        </section>

        {/* ========================================================================
             TECHNICAL MARQUEE RIBBON
             ======================================================================== */}
        <div className="ticker-wrap" aria-hidden="true">
          <div className="ticker-track">
            <div className="ticker-item">3D SCANNING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">REVERSE ENGINEERING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">CAD MODELING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">FDM 3D PRINTING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">SLS 3D PRINTING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">RAPID PROTOTYPING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">CMM QUALITY CONTROL <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">PLASTIC RESTORATION <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            {/* Duplicate for seamless loop */}
            <div className="ticker-item">3D SCANNING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
            <div className="ticker-item">REVERSE ENGINEERING <svg className="ticker-divider-svg" width="13" height="13" viewBox="0 0 13 13" fill="none"><line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="#FF5200" strokeWidth="1.2"/><line x1="0.5" y1="0.5" x2="0.5" y2="12.5" stroke="#FF5200" strokeWidth="1.2"/></svg></div>
          </div>
        </div>

        {/* ========================================================================
             SERVICES SECTION
             ======================================================================== */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="services-header">
              <div className="section-tag">
                <span className="tag-sq"></span> <span>OUR SERVICES</span>
              </div>
              <h2 className="section-headline">Our Engineering Solutions</h2>
              <p className="section-subtitle">
                From the physical world to digital models, from precision manufacturing to intelligent software systems—integrated industrial engineering processes.
              </p>
            </div>

            <div className="services-grid">
              {/* 1. 3D Scanning & Reverse Engineering */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">3D Scanning &amp; Reverse Engineering</h3>
                  <p className="service-desc">
                    We convert existing physical parts into editable CAD data with high-resolution optical laser scanners.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>

              {/* 2. CAD Modeling & Design */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                      <polyline points="2 17 12 22 22 17"/>
                      <polyline points="2 12 12 17 22 12"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">CAD Modeling &amp; Design</h3>
                  <p className="service-desc">
                    We professionally model mechanical and industrial designs observing strength, tolerance, and manufacturing suitability.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>

              {/* 3. 3D Printing & Prototyping */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9"/>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                      <rect x="6" y="14" width="12" height="8"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">3D Printing &amp; Prototyping</h3>
                  <p className="service-desc">
                    We rapidly produce functional and visual prototypes at industrial standards with FDM, SLA, and SLS technologies.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>

              {/* 4. CMM & Quality Control */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">CMM &amp; Quality Control</h3>
                  <p className="service-desc">
                    We perform dimensional verification tests and tolerance analyses of manufactured parts at the micron level.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>

              {/* 5. Restoration Services */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">Restoration Services</h3>
                  <p className="service-desc">
                    We produce classic vehicle parts and rare plastic components with original form renewal via reverse engineering.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>

              {/* 6. Digital & AI Solutions */}
              <div className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                      <rect x="9" y="9" width="6" height="6"/>
                      <line x1="9" y1="1" x2="9" y2="4"/>
                      <line x1="15" y1="1" x2="15" y2="4"/>
                      <line x1="9" y1="20" x2="9" y2="23"/>
                      <line x1="15" y1="20" x2="15" y2="23"/>
                      <line x1="20" y1="9" x2="23" y2="9"/>
                      <line x1="20" y1="14" x2="23" y2="14"/>
                      <line x1="1" y1="9" x2="4" y2="9"/>
                      <line x1="1" y1="14" x2="4" y2="14"/>
                    </svg>
                  </div>
                  <span className="service-sys-id">[ FIX_SYS_V2 ]</span>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">Digital &amp; AI Solutions</h3>
                  <p className="service-desc">
                    We optimize industrial processes and data flow with artificial intelligence integration and custom algorithms.
                  </p>
                </div>
                <button type="button" className="service-action trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  <span>Explore Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             WORKFLOW / PROCESS SECTION
             ======================================================================== */}
        <section className="process-section">
          <div className="container">
            <div className="process-header">
              <div className="section-tag">
                <span className="tag-sq"></span> <span>OUR WORKFLOW</span>
              </div>
              <h2 className="section-headline">From Scanning to Production</h2>
              <p className="section-subtitle">
                We transform your ideas and physical parts into final products with certified engineering discipline.
              </p>
            </div>

            <div className="process-timeline">
              {/* Step 01 */}
              <div className="process-card">
                <div className="process-card-header">
                  <span className="process-step-num">01</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-icon">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M3 9V5a2 2 0 0 1 2-2h4M15 3h4a2 2 0 0 1 2 2v4M21 15v4a2 2 0 0 1-2 2h-4M9 21H5a2 2 0 0 1-2-2v-4"/>
                  </svg>
                </div>
                <h3 className="process-step-title">Scanning</h3>
                <p className="process-step-desc">
                  Acquiring a high-resolution digital point cloud with optical laser scanning of physical objects.
                </p>
              </div>

              {/* Step 02 */}
              <div className="process-card">
                <div className="process-card-header">
                  <span className="process-step-num">02</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-icon">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </div>
                <h3 className="process-step-title">Modeling</h3>
                <p className="process-step-desc">
                  Point cloud cleanup, conversion into parametric CAD solid models or organic surfaces.
                </p>
              </div>

              {/* Step 03 */}
              <div className="process-card">
                <div className="process-card-header">
                  <span className="process-step-num">03</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-icon">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="2" y1="13" x2="22" y2="13"/>
                  </svg>
                </div>
                <h3 className="process-step-title">Manufacturing</h3>
                <p className="process-step-desc">
                  Functional production of modeled parts via FDM, SLA, SLS 3D printers or precision CNC machines.
                </p>
              </div>

              {/* Step 04 */}
              <div className="process-card">
                <div className="process-card-header">
                  <span className="process-step-num">04</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-icon">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="process-step-title">Verification</h3>
                <p className="process-step-desc">
                  Comparison of manufactured parts against original CAD data using CMM devices and dimensional accuracy reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             PORTFOLIO SECTION
             ======================================================================== */}
        <section className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="portfolio-header-row">
              <div>
                <div className="section-tag">
                  <span className="tag-sq"></span> <span>PORTFOLIO</span>
                </div>
                <h2 className="section-headline">Featured Projects</h2>
                <p className="section-subtitle">
                  High-end restoration and parts engineering success stories brought to life in Fixral laboratories.
                </p>
              </div>
              <Link to="/portfolio" className="btn-outline-pill">
                <span>View All Projects</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>

            <div className="portfolio-grid">
              {/* Project 1: Porsche */}
              <Link to="/project/project-porsche" className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src="/assets/images/frame-1.png" alt="Classic Porsche Body 3D Scanning" width="406" height="320" />
                  <div className="portfolio-hud-badge">±0.05 mm deviation tolerance</div>
                </div>
                <div className="portfolio-meta-tag">VEHICLE RESTORATION / 3D SCANNING</div>
                <h3 className="portfolio-title">Classic Porsche Body Restoration</h3>
              </Link>

              {/* Project 2: Turbine Blade */}
              <Link to="/project/project-turbine" className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src="/assets/images/frame-2.png" alt="Aerospace Turbine Blade SLS" width="405" height="320" />
                  <div className="portfolio-hud-badge">20 micron SLS layer precision</div>
                </div>
                <div className="portfolio-meta-tag">REVERSE ENGINEERING / SLS PRINTING</div>
                <h3 className="portfolio-title">Precision Aerospace Turbine Blade</h3>
              </Link>

              {/* Project 3: Robotic Arm Joint */}
              <Link to="/project/project-robotic-arm" className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src="/assets/images/frame-3.png" alt="Robotic Arm Joint Prototype" width="624" height="320" />
                  <div className="portfolio-hud-badge">STL export &amp; CMM verified</div>
                </div>
                <div className="portfolio-meta-tag">CAD DESIGN / SLA PROTOTYPING</div>
                <h3 className="portfolio-title">Robotic Arm Joint Prototype</h3>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================
             STATS BAND SECTION
             ======================================================================== */}
        <section className="stats-band-section" aria-label="Key Statistics">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number-wrap">
                  <div className="stat-number">2018</div>
                </div>
                <div className="stat-label">Foundation Year</div>
              </div>

              <div className="stat-item">
                <div className="stat-number-wrap">
                  <div className="stat-number">150</div>
                  <div className="stat-unit">+ PROJECTS</div>
                </div>
                <div className="stat-label">Completed Projects</div>
              </div>

              <div className="stat-item">
                <div className="stat-number-wrap">
                  <div className="stat-number">±0.05</div>
                  <div className="stat-unit">MM</div>
                </div>
                <div className="stat-label">Dimensional Tolerance</div>
              </div>

              <div className="stat-item">
                <div className="stat-number-wrap">
                  <div className="stat-number">20</div>
                  <div className="stat-unit">µm</div>
                </div>
                <div className="stat-label">Scanning Resolution</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             NEWS / ARTICLES SECTION
             ======================================================================== */}
        <section className="news-section" id="news">
          <div className="container">
            <div className="news-header">
              <div className="section-tag">
                <span className="tag-sq"></span> <span>TECHNOLOGY &amp; INSIGHTS</span>
              </div>
              <h2 className="section-headline">Latest Developments</h2>
              <p className="section-subtitle">
                The latest trends, 3D printing innovations, and technical engineering articles from the world of industrial design.
              </p>
            </div>

            <div className="news-grid">
              {/* Left Featured Article */}
              <article className="news-featured-card">
                <div className="news-featured-img">
                  <img src="/assets/images/rectangle.png" alt="Metal Sintering SLS in Aerospace" width="704" height="280" />
                </div>
                <div className="news-featured-body">
                  <div className="news-meta">SLS TECHNOLOGIES • FEB 15, 2026</div>
                  <h3 className="news-featured-title">
                    Metal Sintering (SLS) Pushing Boundaries in Aerospace Component Manufacturing
                  </h3>
                  <p className="news-featured-desc">
                    High-strength alloy production at micron levels using SLS (Selective Laser Sintering) technology simultaneously satisfies lightweight and extreme durability requirements.
                  </p>
                  <a href="#news" className="news-link">
                    <span>Read More</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </a>
                </div>
              </article>

              {/* Right Stacked Articles */}
              <div className="news-stacked-col">
                {/* Mini Article 1 */}
                <article className="news-mini-card">
                  <div className="news-mini-img">
                    <img src="/assets/images/rectangle-1.png" alt="Classic Car Reverse Engineering" width="110" height="110" />
                  </div>
                  <div className="news-mini-body">
                    <div className="news-meta">REVERSE ENGINEERING • JAN 28, 2026</div>
                    <h3 className="news-mini-title">
                      Reverse Engineering Process in Classic Automobile Spare Parts
                    </h3>
                    <a href="#news" className="news-link">
                      <span>Read More</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                  </div>
                </article>

                {/* Mini Article 2 */}
                <article className="news-mini-card">
                  <div className="news-mini-img">
                    <img src="/assets/images/rectangle-2.png" alt="AI Dimensional Analysis" width="110" height="110" />
                  </div>
                  <div className="news-mini-body">
                    <div className="news-meta">SOFTWARE SOLUTIONS • JAN 12, 2026</div>
                    <h3 className="news-mini-title">
                      AI-Powered Dimensional Analysis and Quality Control Reporting
                    </h3>
                    <a href="#news" className="news-link">
                      <span>Read More</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             CTA BANNER SECTION
             ======================================================================== */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-banner-content">
              <h2 className="cta-title">Let's Bring Your Project to Life</h2>
              <p className="cta-desc">
                Prepare your ideas and component requirements flawlessly for production with Fixral's micron-level precision scanning, reverse engineering, and advanced digital modeling capabilities.
              </p>
              <button type="button" className="btn-primary trigger-quote-modal" onClick={() => setIsQuoteModalOpen(true)}>
                <span>Get a Quote &amp; Start</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
