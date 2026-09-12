import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import CadViewer3D from '../components/CadViewer3D';
import { getProjectById, ALL_PROJECTS } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Retrieve matching project data dynamically based on the route parameter
  const project = getProjectById(id);

  return (
    <div className="project-detail-page">
      {/* Navigation Bar */}
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main>
        {/* ========================================================================
             PROJECT HERO SECTION (Unified Header & Banner Frame)
             ======================================================================== */}
        <section className="project-hero-section">
          <div className="container project-hero-container">
            {/* Breadcrumbs */}
            <nav className="project-breadcrumb" aria-label="Breadcrumb">
              <Link to="/portfolio">Projects</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/portfolio">{project.category || 'Restoration'}</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{project.breadcrumb}</span>
            </nav>

            {/* Desktop Hero Header Content (Category Tag, Main Title, Meta) */}
            <div className="project-hero-header-content">
              <div className="section-tag project-category-tag">
                <span className="tag-sq"></span>
                <span>{project.tags}</span>
              </div>

              <h1 className="project-hero-title">{project.title}</h1>

              <div className="project-hero-meta">
                <span className="meta-item">
                  COMPLETION: <span className="meta-highlight">[ {project.date} ]</span>
                </span>
                <span className="meta-divider">|</span>
                <span className="meta-item">
                  CLASSIFICATION: <span className="meta-highlight">{project.classification}</span>
                </span>
              </div>
            </div>

            {/* Hero Main Visual Banner */}
            <div className="project-banner-wrapper">
              <div className="project-banner-frame">
                {/* Cinematic Ambient Backdrop */}
                <div
                  className="project-banner-ambient"
                  style={{ backgroundImage: `url(${project.heroBanner})` }}
                  aria-hidden="true"
                />
                <img
                  src={project.heroBanner}
                  alt={project.title}
                  className="project-banner-img"
                />
                <div className="project-banner-hud-overlay">
                  <span className="hud-corner hud-top-left">⊢</span>
                  <span className="hud-corner hud-top-right">⊣</span>
                  <span className="hud-corner hud-bottom-left">⊢</span>
                  <span className="hud-corner hud-bottom-right">⊣</span>
                  <div className="hud-live-tag">
                    <span className="hud-live-dot"></span>
                    <span>{project.hudOverlayText}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             PROJECT OVERVIEW & TECHNICAL SPECIFICATIONS (2-COLUMN)
             ======================================================================== */}
        <section className="project-content-section">
          <div className="container">
            <div className="project-content-grid">
              {/* Left Column: Narrative Content */}
              <div className="project-story-col">
                <h2 className="project-story-title">{project.storyHeadline}</h2>

                <div className="project-story-text">
                  <p>{project.storyP1}</p>
                  <p>{project.storyP2}</p>
                </div>
              </div>

              {/* Right Column: Technical Specifications Card */}
              <div className="project-specs-col">
                <div className="project-specs-card">
                  <div className="specs-card-header">
                    <span className="specs-card-title">[ TECHNICAL SPECIFICATIONS ]</span>
                  </div>

                  <div className="specs-list">
                    {project.specs.map((spec, index) => (
                      <div className="specs-row" key={index}>
                        <span className="specs-label">{spec.label}</span>
                        <span className="specs-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================
             INTERACTIVE 3D MODEL INSPECTION SECTION
             ======================================================================== */}
        <section className="project-viewer-section">
          <div className="container">
            <div className="section-header-block">
              <div className="section-tag">
                <span className="tag-sq"></span>
                <span>INTERACTIVE CAD</span>
              </div>
              <h2 className="section-headline">3D Model Inspection</h2>
              <p className="section-subheadline">
                Analyze the digital twin of {project.title.toLowerCase()} with millimetric precision.
              </p>
            </div>

            {/* CAD 3D Viewport Box */}
            <div className="viewer-viewport-wrap">
              <CadViewer3D />
            </div>
          </div>
        </section>

        {/* ========================================================================
             LABORATORY PROCESSES GALLERY (2x2 GRID / PROCESS ANALYSIS)
             ======================================================================== */}
        <section className="project-gallery-section">
          <div className="container">
            <div className="section-header-block">
              <div className="section-tag">
                <span className="tag-sq"></span>
                <span>PHOTO GALLERY</span>
              </div>
              <h2 className="section-headline">Process Analysis</h2>
            </div>

            <div className="lab-gallery-grid">
              {project.gallery.map((item) => (
                <div className="lab-gallery-card" key={item.id}>
                  <div className="lab-card-media">
                    <img src={item.image} alt={item.caption} loading="lazy" />
                  </div>
                  <div className="lab-card-footer">
                    <span className="lab-tag">{item.tag}</span>
                    <span className="lab-caption">{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================
             OTHER PROJECTS EXPLORER (Quick Navigation / Related Projects)
             ======================================================================== */}
        <section className="project-more-section">
          <div className="container">
            <div className="more-projects-header">
              <div className="section-tag">
                <span className="tag-sq"></span>
                <span>OTHER CASE STUDIES</span>
              </div>
              <h2 className="section-headline">Related Projects</h2>
            </div>

            <div className="more-projects-grid">
              {ALL_PROJECTS.filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((other) => (
                  <Link
                    to={`/project/${other.id}`}
                    key={other.id}
                    className="more-project-card"
                  >
                    <div className="more-card-media">
                      <img src={other.image} alt={other.title} loading="lazy" />
                      <div className="more-card-spec">{other.spec}</div>
                    </div>
                    <div className="more-card-body">
                      <span className="more-card-tag">{other.tags}</span>
                      <h3 className="more-card-title">{other.title}</h3>
                      <span className="more-card-link">View Case Study →</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* ========================================================================
             CALL TO ACTION BANNER
             ======================================================================== */}
        <section
          className="cta-section project-detail-cta-banner"
          style={{ backgroundImage: "url('/assets/images/cta-section.png')" }}
        >
          <div className="container cta-container">
            <div className="cta-content">
              <h2 className="cta-title">Let's Bring Your Project to Life</h2>
              <p className="cta-desc">
                Prepare your ideas and component requirements flawlessly for production with
                Fixral's micron-level precision scanning, reverse engineering, and advanced
                digital modeling capabilities.
              </p>
              <button
                type="button"
                className="btn-primary trigger-quote-modal"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <span>Get a Quote &amp; Start</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
