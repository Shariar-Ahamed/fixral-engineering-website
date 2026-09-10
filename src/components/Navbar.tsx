import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';
  const isHome = location.pathname === '/' || location.pathname === '';

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${mobileMenuOpen ? 'nav-open' : ''}`} id="top">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" aria-label="Fixral Engineering Studio" onClick={closeMobileMenu}>
          <img src="/assets/images/logo.svg" alt="Fixral Studio Logo" className="logo-desktop" />
          <img src="/assets/images/logo-mobile.svg" alt="Fixral Studio Logo" className="logo-mobile" />
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={`nav-link ${isPortfolio ? 'active' : ''}`} onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <a href="/#services" className="nav-link" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className="nav-item-hide-tablet">
              <a href="/#news" className="nav-link" onClick={closeMobileMenu}>
                News
              </a>
            </li>
            <li>
              <a href="/#contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
            <li className="nav-item-hide-tablet">
              <a href="/#videos" className="nav-link" onClick={closeMobileMenu}>
                Videos
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Search Button */}
          <button className="icon-action-btn" aria-label="Search" title="Search" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* User Profile Button */}
          <button className="icon-action-btn" aria-label="User Account" title="Account" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Request Quote CTA */}
          <button
            type="button"
            className="btn-primary trigger-quote-modal"
            onClick={onOpenQuote}
          >
            <span>Get Quote</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            id="mobileMenuBtn"
            aria-label="Toggle navigation menu"
            title="Menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
