import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';

import { ALL_PROJECTS } from '../data/projectsData';

const PROJECTS = ALL_PROJECTS;

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
                All
              </button>
              <button
                className={`filter-chip ${activeFilter === '3d-scan' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('3d-scan'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === '3d-scan'}
                type="button"
              >
                3D Scanning
              </button>
              <button
                className={`filter-chip ${activeFilter === 'cad' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('cad'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'cad'}
                type="button"
              >
                Reverse Engineering
              </button>
              <button
                className={`filter-chip ${activeFilter === '3d-print' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('3d-print'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === '3d-print'}
                type="button"
              >
                3D Printing
              </button>
              <button
                className={`filter-chip ${activeFilter === 'restoration' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('restoration'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'restoration'}
                type="button"
              >
                Restoration
              </button>
              <button
                className={`filter-chip ${activeFilter === 'digital' ? 'active' : ''}`}
                onClick={() => { setActiveFilter('digital'); setCurrentPage(1); }}
                role="tab"
                aria-selected={activeFilter === 'digital'}
                type="button"
              >
                Digital Solutions
              </button>
              <button
                className={`filter-chip ${activeFilter === 'automotive' ? 'active' : ''}`}
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
                  <Link
                    to={`/project/${project.id}`}
                    className="portfolio-item-card"
                    key={project.id}
                    id={project.id}
                  >
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
                        <span className="card-detail-link">
                          Explore Project <span className="arrow">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
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
