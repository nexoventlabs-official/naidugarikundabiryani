import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <header className="legal-hero flex-center">
        <div className="container" style={{ relative: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Legal Documentation</span>
          <h1 className="legal-title text-gradient-spicy">Privacy Policy</h1>
          <p className="legal-subtitle">Last Updated: May 17, 2026</p>
        </div>
      </header>

      <main className="container legal-main">
        <div className="legal-card glass-panel">
          <div className="legal-icon-box flex-center">
            <ShieldCheck size={28} color="var(--primary)" />
            <span>Effective Protection Oath</span>
          </div>

          <div className="legal-content">
            <h2>1. Introduction & Agreement</h2>
            <p>
              Welcome to Naidu Gari Kunda Biryani ("we," "our," "us"). We are fully committed to protecting your personal privacy. This Privacy Policy details how we collect, store, utilize, and protect your information when you browse our website, place online delivery orders, or reserve dining tables.
            </p>
            <p style={{ marginTop: '10px' }}>
              By utilizing our services, you explicitly agree to the collection and use of information in full compliance with this Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>To deliver our sizzling clay-pot culinary experiences, we collect specific details including:</p>
            <ul>
              <li><strong>Personal Identity:</strong> Your full name, direct 10-digit mobile number, and email address.</li>
              <li><strong>Logistics Details:</strong> Physical street addresses, flat coordinates, landmark references, and city parameters for rider dispatch.</li>
              <li><strong>Custom Preferences:</strong> Choice of food items, spice customizations, and specific reservation dates/times.</li>
              <li><strong>Usage Parameters:</strong> IP address, browser cookie states, and general page visit durations.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>Your data is processed strictly for the following operational workflows:</p>
            <ul>
              <li>Confirming and slow-cooking your individual earthen clay orders.</li>
              <li>Routing delivery riders to your precise location coordinates.</li>
              <li>Sending live WhatsApp/SMS notifications regarding your dum-seal state.</li>
              <li>Responding to tabletop booking reservations and group catering inquiries.</li>
              <li>Improving website speed, search responses, and overall interface responsiveness.</li>
            </ul>

            <h2>4. Secure Data & Third-Party Sharing</h2>
            <p>
              <strong>We do not sell your personal data.</strong> Your details are shared strictly with authorized logistics partners (e.g. delivery riders) and payment processors (UPI/banking services) necessary to execute your transaction.
            </p>
            <p style={{ marginTop: '10px' }}>
              We utilize secure socket layers (SSL) and database encryption to ensure your delivery address and contact information are fully shielded from external breaches.
            </p>

            <h2>5. Cookies & Tracking</h2>
            <p>
              Our website uses basic tracking cookies to store your shopping cart selections in your browser's local storage (`localStorage`). This ensures your customized items do not get cleared when you refresh or close the page. You can manage or disable cookies inside your browser settings.
            </p>

            <h2>6. Direct Contacts & Grievances</h2>
            <p>
              For any questions regarding your data safety, cookie policies, or to request deletion of your address history, please contact our traditional compliance officer directly at:
            </p>
            <p className="contact-box">
              <strong>Naidu Gari Legal Cell</strong><br />
              NO5, PATHAVANTRADINGCOMPANY, UDAYARPALAYAM TK, 5TH CROSS, THIRUNAGAR, JAYANKONDAM, TIRUCHIRAPALLI<br />
              Email: <a href="mailto:contact@naidugarikundabiyani.me">contact@naidugarikundabiyani.me</a>
            </p>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .legal-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .legal-hero {
          height: 240px;
          background: linear-gradient(180deg, rgba(42, 21, 12, 0.4) 0%, var(--bg-deep) 100%);
          margin-bottom: 40px;
        }

        .legal-title {
          font-size: 2.75rem;
          font-weight: 850;
        }

        .legal-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-top: 8px;
        }

        .legal-main {
          margin-bottom: 80px;
          max-width: 900px !important;
        }

        .legal-card {
          padding: 40px;
          border: 1px solid var(--border);
        }

        .legal-icon-box {
          justify-content: flex-start;
          gap: 12px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 20px;
          margin-bottom: 30px;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary);
        }

        .legal-content h2 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
          margin: 30px 0 12px 0;
          border-left: 3px solid var(--primary);
          padding-left: 12px;
        }

        .legal-content h2:first-of-type {
          margin-top: 0;
        }

        .legal-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .legal-content ul {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-left: 20px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .contact-box {
          margin-top: 20px;
          background: var(--bg-input);
          border: 1px dashed var(--border);
          padding: 20px;
          border-radius: var(--radius-sm);
        }

        .contact-box a {
          color: var(--primary);
          font-weight: 600;
        }

        @media (max-width: 576px) {
          .legal-card {
            padding: 30px 20px;
          }
          .legal-title {
            font-size: 2rem;
          }
        }
      `}} />
    </div>
  );
}
