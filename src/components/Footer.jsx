import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-panel">
      <div className="container footer-container">
        {/* Brand details */}
        <div className="footer-column brand-col">
          <Link to="/" className="footer-brand">
            <span className="footer-brand-pot flex-center">
              <Flame size={18} fill="var(--primary)" color="var(--primary)" />
            </span>
            <div className="brand-text">
              <span className="brand-title">Naidu Gari</span>
              <span className="brand-subtitle">Kunda Biryani</span>
            </div>
          </Link>
          <p className="brand-tagline">
            Serving legendary, authentic Andhra clay-pot biryanis slow-cooked on traditional firewood stoves. A legacy of spices, heritage, and pure clay-baking artistry.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon flex-center" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon flex-center" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon flex-center" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="9.7 15 9.7 9 14.2 12 9.7 15"/></svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home Dashboard</Link></li>
            <li><Link to="/menu">Explore Menu</Link></li>
            <li><Link to="/about">Our Traditional Story</Link></li>
            <li><Link to="/contact">Find Outlets & Bookings</Link></li>
          </ul>
        </div>

        {/* Kitchen Outlets */}
        <div className="footer-column">
          <h3>Our Location</h3>
          <ul className="footer-outlets">
            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '8px', alignItems: 'flex-start' }}>
              <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span style={{ lineHeight: '1.4' }}>NO5, PATHAVANTRADINGCOMPANY, UDAYARPALAYAM TK, 5TH CROSS, THIRUNAGAR, JAYANKONDAM, TIRUCHIRAPALLI</span>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="footer-column contact-col">
          <h3>Get In Touch</h3>
          <ul className="footer-contact">
            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '10px' }}>
              <Phone size={16} color="var(--primary)" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '10px' }}>
              <Mail size={16} color="var(--primary)" />
              <a href="mailto:contact@naidugarikundabiyani.me">contact@naidugarikundabiyani.me</a>
            </li>
            <li className="operating-hours">
              <strong>Operating Hours:</strong>
              <p>11:00 AM - 11:30 PM (All Days)</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub Footer Legal Links */}
      <div className="sub-footer">
        <div className="container sub-footer-container">
          <p>© {new Date().getFullYear()} Naidu Gari Kunda Biryani. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="bullet">•</span>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Styled Footer CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .footer-panel {
          background-color: var(--bg-card);
          border-top: 1px solid var(--border);
          padding: 80px 0 0 0;
          margin-top: 80px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 60px;
        }

        .footer-column h3 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          position: relative;
          display: inline-block;
        }

        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 24px;
          height: 2px;
          background: var(--primary);
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-brand-pot {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          max-width: 340px;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .social-icon:hover {
          background: var(--primary);
          color: var(--text-primary);
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(224, 90, 43, 0.3);
        }

        .footer-links, .footer-outlets, .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }

        .footer-contact a:hover {
          color: var(--primary);
        }

        .operating-hours {
          margin-top: 10px;
          border-top: 1px dashed var(--border);
          padding-top: 12px;
        }

        .operating-hours strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .sub-footer {
          border-top: 1px solid var(--border);
          padding: 24px 0;
          background-color: rgba(10, 10, 9, 0.98);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .sub-footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legal-links a {
          color: var(--text-muted);
        }

        .legal-links a:hover {
          color: var(--primary);
        }

        .bullet {
          color: var(--border);
        }

        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .sub-footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
}
