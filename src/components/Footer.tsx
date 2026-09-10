import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenQuote?: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Summary */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo footer-logo" aria-label="Fixral Studio">
              <img src="/assets/images/logo.svg" alt="Fixral Studio" className="logo-desktop" />
              <img src="/assets/images/logo-mobile.svg" alt="Fixral Studio" className="logo-mobile" />
            </Link>
            <p className="footer-desc-text">
              Micron-precision engineering solutions, 3D modeling, and advanced technology prototyping leader. Accuracy beyond limits.
            </p>
            <div className="footer-social-links">
              <a
                href="https://www.shariarahamed.me"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Portfolio - Shariar Ahamed"
                title="Portfolio Website"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Shahriar.TheBrownCat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook - Shariar Ahamed"
                title="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shahriar_thebrowncat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram - Shariar Ahamed"
                title="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/shariarahamed/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn - Shariar Ahamed"
                title="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com/ShariarAlways"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="X (Twitter) - Shariar Ahamed"
                title="X (Twitter)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <div className="footer-col-title">SERVICES</div>
            <ul className="footer-links-list">
              <li><a href="/#services"><span className="foot-text-full">3D Scanning &amp; Reverse Eng.</span><span className="foot-text-tablet">3D Scanning</span></a></li>
              <li><a href="/#services"><span className="foot-text-full">CAD Modeling &amp; Design</span><span className="foot-text-tablet">CAD Modeling</span></a></li>
              <li><a href="/#services"><span className="foot-text-full">3D Printing &amp; Prototyping</span><span className="foot-text-tablet">3D Printing</span></a></li>
              <li><a href="/#services"><span className="foot-text-full">CMM &amp; Quality Control</span><span className="foot-text-tablet">Quality Control</span></a></li>
              <li><a href="/#services"><span className="foot-text-full">Vehicle &amp; Plastic Restoration</span><span className="foot-text-tablet">Restoration</span></a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <div className="footer-col-title">COMPANY</div>
            <ul className="footer-links-list">
              <li><a href="/#top">About Us</a></li>
              <li><Link to="/portfolio">Our Projects</Link></li>
              <li><a href="/#top">Laboratory &amp; Equipment</a></li>
              <li><a href="/#top">Careers</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-col footer-destek-col">
            <div className="footer-col-title">SUPPORT</div>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-link-btn trigger-quote-modal"
                  onClick={onOpenQuote}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textAlign: 'left' }}
                >
                  Request a Quote
                </button>
              </li>
              <li><a href="/#top">FAQ</a></li>
              <li><a href="/#top">Technical Documentation</a></li>
              <li><a href="/#top">CAD Format Standards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact-col">
            <div className="footer-col-title">CONTACT</div>
            <div className="footer-contact-item item-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@fixral.com</span>
            </div>
            <div className="footer-contact-item item-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+90 (212) 555 0199</span>
            </div>
            <div className="footer-contact-item item-address footer-address-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="full-address-text">Industrial Engineering District, Block 14, Advanced Prototyping Center, Istanbul</span>
              <span className="tablet-address-text">Istanbul, Turkey</span>
            </div>
          </div>
        </div>

        <div className="footer-divider-mobile footer-divider-tablet"></div>

        <div className="footer-bottom-bar">
          <div>
            © 2026 FIXRAL Industrial Studio. Developed by{' '}
            <a
              href="https://www.shariarahamed.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-accent-orange)', textDecoration: 'none', fontWeight: 500 }}
            >
              Shariar Ahamed Ripon
            </a>
            . All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#" className="foot-terms-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
