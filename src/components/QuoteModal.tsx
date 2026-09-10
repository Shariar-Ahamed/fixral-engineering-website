import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3d-scan',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      id="quoteModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="quote-modal-card">
        <button
          className="modal-close-btn"
          id="closeModalBtn"
          aria-label="Close modal"
          type="button"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 id="modalTitle" style={{ fontFamily: 'var(--font-editorial)', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>
          Request Engineering Quote
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
          Submit your project specifications or 3D files for precision evaluation.
        </p>

        {submitted ? (
          <div style={{ padding: '30px 0', textAlign: 'center', color: '#10B981', fontFamily: 'var(--font-mono)' }}>
            ✓ Specifications submitted successfully. Our engineering team will contact you shortly.
          </div>
        ) : (
          <form className="modal-form" id="quoteForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="clientName">Full Name / Company</label>
              <input
                type="text"
                id="clientName"
                className="form-input"
                placeholder="e.g. Alex Henderson"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="clientEmail">Corporate Email</label>
              <input
                type="email"
                id="clientEmail"
                className="form-input"
                placeholder="alex@company.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Engineering Service</label>
              <select
                id="serviceType"
                className="form-select"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="3d-scan">3D Scanning &amp; Reverse Engineering</option>
                <option value="cad">CAD Modeling &amp; Design</option>
                <option value="3d-print">3D Printing &amp; Prototyping</option>
                <option value="cmm">CMM Quality Control &amp; Inspection</option>
                <option value="restoration">Vehicle &amp; Part Restoration</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="projectDetails">Project Requirements / Tolerances</label>
              <textarea
                id="projectDetails"
                className="form-textarea"
                rows={3}
                placeholder="Describe component dimensions, required materials, or tolerances..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '12px', marginTop: '8px' }}>
              <span>Submit Specifications →</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
