import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';

interface Project {
  id: string;
  category: string;
  categories: string[];
  title: string;
  tags: string;
  date: string;
  spec: string;
  desc: string;
  techHud: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'project-porsche',
    category: 'restoration 3d-scan automotive',
    categories: ['restoration', '3d-scan', 'automotive'],
    title: 'Classic Porsche Body Restoration',
    tags: 'VEHICLE RESTORATION / 3D SCANNING',
    date: 'SEPTEMBER 2024',
    spec: '±0.08 mm deviation tolerance',
    desc: 'Millimetric optical scanning and aerodynamic surface re-modeling of a rare 1974 Porsche 911 chassis for wind tunnel validation.',
    techHud: '[ SYS_OPTICAL_SCAN_ACTIVE ]',
    image: '/assets/images/portfolio/portfolio-phone-1-porsche.png'
  },
  {
    id: 'project-turbine',
    category: 'cad 3d-print',
    categories: ['cad', '3d-print'],
    title: 'Precision Aerospace Turbine Blade',
    tags: 'REVERSE ENGINEERING / SLS PRINTING',
    date: 'AUGUST 2024',
    spec: '20 micron SLS layer precision',
    desc: 'Micro-wear margin analysis of gas turbine blade geometry, aero-dynamic structural optimization, and flight-grade SLS 3D additive manufacturing.',
    techHud: '[ SYS_REV_ENG_TURBINE ]',
    image: '/assets/images/portfolio/portfolio-phone-2-turbine.png'
  },
  {
    id: 'project-robotic-arm',
    category: 'cad 3d-print digital',
    categories: ['cad', '3d-print', 'digital'],
    title: 'Robotic Arm Joint Prototype',
    tags: 'CAD DESIGN / SLA PROTOTYPING',
    date: 'JULY 2024',
    spec: 'STL format certified validation',
    desc: 'Topology optimization and finite-element stress analysis to reduce payload weight for high-torque industrial robotic articulated arm joints.',
    techHud: '[ CAD_PARAMETRIC_OPTIMIZED ]',
    image: '/assets/images/portfolio/portfolio-phone-3-robot.png'
  },
  {
    id: 'project-pump-impeller',
    category: 'cad 3d-scan',
    categories: ['cad', '3d-scan'],
    title: 'Industrial Pump Impeller Renewal',
    tags: 'REVERSE ENGINEERING / CMM ANALYSIS',
    date: 'JUNE 2024',
    spec: 'Original CAD matching allowance',
    desc: 'Micron-tolerance digital twin generated via CMM probe and 3D optical scanning for wear-resistant renewal manufacturing.',
    techHud: '[ CMM_ANALYSIS_VERIFIED ]',
    image: '/assets/images/portfolio/portfolio-phone-4-impeller.png'
  },
  {
    id: 'project-lidar',
    category: 'cad 3d-print automotive',
    categories: ['cad', '3d-print', 'automotive'],
    title: 'Autonomous Vehicle LiDAR Sensor Box',
    tags: 'INDUSTRIAL DESIGN / SLA PRINTING',
    date: 'JUNE 2024',
    spec: 'IP67 environmental sealing',
    desc: 'Precision SLA resin casting of ruggedized autonomous vehicle LiDAR enclosure with integrated active cooling channels and weatherproofing.',
    techHud: '[ SLA_TRANS_RESIN_V3 ]',
    image: '/assets/images/portfolio/portfolio-lidar.png'
  },
  {
    id: 'project-prosthetic',
    category: 'cad 3d-print digital',
    categories: ['cad', '3d-print', 'digital'],
    title: 'Medical Prosthetic Hand Mechanism',
    tags: 'BIOMECHANICS / SLS PRINTING',
    date: 'MAY 2024',
    spec: '±0.05 mm articulated joint tolerance',
    desc: 'Monolithic functional selective laser sintering (PA12) of anthropomorphic bionic prosthetic hand mechanism with custom anatomical fitting.',
    techHud: '[ BIO_PA12_SINTERED ]',
    image: '/assets/images/portfolio/portfolio-prosthetic-hand.png'
  },
  {
    id: 'project-alfa',
    category: 'restoration 3d-scan cad automotive',
    categories: ['restoration', '3d-scan', 'cad', 'automotive'],
    title: 'Classic Alfa Romeo Dashboard Panel',
    tags: 'PLASTIC REPRODUCTION / CAD',
    date: 'APRIL 2024',
    spec: '1:1 original form guarantee',
    desc: 'High-resolution photogrammetric and optical scanning of sun-damaged 1968 classic Alfa Romeo dashboard components, followed by CAD mold recreation.',
    techHud: '[ REPRO_MOLD_SUCCESS ]',
    image: '/assets/images/portfolio/portfolio-alfa-romeo.png'
  }
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categories.includes(activeFilter));

  return (
    <div className="portfolio-page">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main>
        {/* ========================================================================
             PAGE HERO SECTION
             ======================================================================== */}
        <section className="portfolio-hero-section">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
              <span className="breadcrumb-desktop">
                <Link to="/">Home</Link>
                <span className="breadcrumb-sep">&gt;</span>
                <span className="breadcrumb-current">Portfolio</span>
              </span>
              <span className="breadcrumb-mobile">
                FIXRAL <span className="breadcrumb-sep">/</span> <span className="breadcrumb-current">PROJECTS</span>
              </span>
            </nav>

            <div className="portfolio-mobile-badge"><span className="tag-sq">■</span> OUR WORK</div>
            <div className="portfolio-tablet-badge"><span className="tag-sq">■</span> EXPERIENCE &amp; SUCCESS</div>

            {/* Editorial Serif Title & Subtitle */}
            <div className="portfolio-hero-heading-block">
              <h1 className="portfolio-hero-title">
                <span className="title-desktop">Featured Projects</span>
                <span className="title-mobile">Featured Projects</span>
              </h1>
              <p className="portfolio-hero-desc">
                Industrial success stories we have completed with precision engineering, digital optimization, and top-level manufacturing technologies.
              </p>
              <p className="portfolio-hero-desc-tablet">
                Reference designs brought to life at the most precise tolerances by pushing engineering boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================
             PORTFOLIO FILTER & HUD STATUS BAR
             ======================================================================== */}
        <section className="portfolio-filter-section">
          <div className="container filter-container">
            <div className="portfolio-filter-chips" role="tablist" aria-label="Project Categories">
              <button
                className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('all'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'all'}
                type="button"
              >
                <span className="chip-text-desktop">All</span>
                <span className="chip-text-mobile">ALL</span>
              </button>
              <button
                className={`filter-chip ${activeFilter === '3d-scan' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('3d-scan'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === '3d-scan'}
                type="button"
              >
                <span className="chip-text-desktop">3D Scanning</span>
                <span className="chip-text-tablet">3D SCANNING</span>
              </button>
              <button
                className={`filter-chip chip-tablet-reverse ${activeFilter === 'cad' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('cad'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'cad'}
                type="button"
              >
                <span className="chip-text-desktop">Reverse Engineering</span>
                <span className="chip-text-tablet">REVERSE ENGINEERING</span>
              </button>
              <button
                className={`filter-chip chip-tablet-cad ${activeFilter === 'cad' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('cad'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'cad'}
                type="button"
              >
                CAD DESIGN
              </button>
              <button
                className={`filter-chip ${activeFilter === '3d-print' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('3d-print'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === '3d-print'}
                type="button"
              >
                <span className="chip-text-desktop">3D Printing</span>
                <span className="chip-text-tablet">3D PRINTING</span>
              </button>
              <button
                className={`filter-chip ${activeFilter === 'restoration' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('restoration'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'restoration'}
                type="button"
              >
                <span className="chip-text-desktop">Restoration</span>
                <span className="chip-text-tablet">RESTORATION</span>
              </button>
              <button
                className={`filter-chip chip-hide-tablet ${activeFilter === 'digital' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('digital'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'digital'}
                type="button"
              >
                Digital Solutions
              </button>
              <button
                className={`filter-chip chip-hide-tablet ${activeFilter === 'automotive' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('automotive'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'automotive'}
                type="button"
              >
                Automotive
              </button>
            </div>

            {/* Technical HUD Status Indicator */}
            <div className="portfolio-hud-status" aria-live="polite">
              <span className="hud-bracket">⊢</span>
              <span className="hud-text">GRID_VIEW: ACTIVE [<span id="portfolioCount" className="hud-counter">{filteredProjects.length}</span>_PROJECTS]</span>
            </div>
          </div>
        </section>

        {/* ========================================================================
             PORTFOLIO PROJECTS GRID
             ======================================================================== */}
        <section className="portfolio-grid-section">
          <div className="container">
            {filteredProjects.length === 0 ? (
              <div className="portfolio-empty-state">
                <div className="empty-state-icon">⊡</div>
                <h3>No Projects Found</h3>
                <p>No engineering projects matched the selected category. Try selecting a different filter.</p>
              </div>
            ) : (
              <div className="portfolio-projects-grid" id="portfolioProjectsGrid">
                {filteredProjects.map((project) => (
                  <article className="portfolio-item-card" key={project.id} id={project.id}>
                    <div className="portfolio-card-media">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <div className="portfolio-spec-overlay">
                        <div className="portfolio-spec-badge">
                          <span className="spec-text">{project.spec}</span>
                        </div>
                        <div className="portfolio-hud-corner-tick">⊢</div>
                      </div>
                    </div>
                    <div className="portfolio-card-body">
                      <div className="portfolio-card-meta">
                        <span className="portfolio-category-tags">{project.tags}</span>
                        <span className="portfolio-date-tag">{project.date}</span>
                      </div>
                      <h2 className="portfolio-card-title">{project.title}</h2>
                      <p className="portfolio-card-desc">{project.desc}</p>
                      <div className="portfolio-card-footer">
                        <span className="card-tech-hud">{project.techHud}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination Bar */}
            <div className="portfolio-pagination-bar">
              <button
                className={`pagination-btn pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                type="button"
              >
                <span className="prev-desktop">← Previous</span>
                <span className="prev-mobile">Previous</span>
              </button>

              <div className="pagination-numbers">
                <button
                  className={`page-num-btn ${currentPage === 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(1)}
                  type="button"
                >
                  <span className="num-desktop">01</span>
                  <span className="num-mobile">1</span>
                </button>
                <button
                  className={`page-num-btn ${currentPage === 2 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(2)}
                  type="button"
                >
                  <span className="num-desktop">02</span>
                  <span className="num-mobile">2</span>
                </button>
              </div>

              <button
                className={`pagination-btn pagination-next ${currentPage === 2 ? 'disabled' : ''}`}
                disabled={currentPage === 2}
                onClick={() => setCurrentPage(2)}
                type="button"
              >
                <span className="next-desktop">Next →</span>
                <span className="next-mobile">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================
             CALL TO ACTION BANNER
             ======================================================================== */}
        <section
          className="cta-section portfolio-cta-banner"
          style={{ backgroundImage: "url('/assets/images/portfolio/portfolio-cta-backdrop.png')" }}
        >
          <div className="container cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Let's Bring Your Project to Life</h2>
              <p className="cta-desc">
                Prepare your ideas and component requirements flawlessly for production with Fixral's micron-level precision scanning, reverse engineering, and advanced digital modeling capabilities.
              </p>
              <button
                type="button"
                className="btn-primary trigger-quote-modal"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <span>Get a Quote &amp; Start</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
