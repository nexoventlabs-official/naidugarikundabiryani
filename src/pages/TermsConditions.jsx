import React, { useEffect } from 'react';
import { FileText, Award, Scale } from 'lucide-react';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <header className="legal-hero flex-center">
        <div className="container" style={{ relative: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Legal Documentation</span>
          <h1 className="legal-title text-gradient-spicy">Terms & Conditions</h1>
          <p className="legal-subtitle">Last Updated: May 17, 2026</p>
        </div>
      </header>

      <main className="container legal-main">
        <div className="legal-card glass-panel">
          <div className="legal-icon-box flex-center">
            <Scale size={28} color="var(--primary)" />
            <span>Operational Service Guidelines</span>
          </div>

          <div className="legal-content">
            <h2>1. Service Scope & Online Orders</h2>
            <p>
              These Terms & Conditions ("Terms") govern your access to and placement of orders on the Naidu Gari Kunda Biryani digital platform. By completing a check-out purchase, you confirm that you are at least 18 years of age and hold legal authority to place orders.
            </p>
            <p style={{ marginTop: '10px' }}>
              We reserve the absolute right to limit food portions, modify spice variables, or refuse service to any customer in case of logistics failures or extreme weather conditions affecting wood-fire ovens.
            </p>

            <h2>2. Earthen Clay Pot Policy & Care Guidelines</h2>
            <div className="heritage-alert-box">
              <h4> Earthen Clay Pot Notice & Usage Waiver:</h4>
              <p>
                Every Kunda Biryani order is slow-cooked inside a 100% natural, raw, hand-sculpted clay pot (Kunda). Since these are organic earthen vessels without chemical polymer glazes:
              </p>
              <ul>
                <li>Slight color variations, charcoal streaks, or micro-cracks on the exterior are completely natural results of the high-heat firewood baking process. They do not constitute product damage.</li>
                <li><strong>Re-usage:</strong> Do not throw away your Kunda! Wash with warm water (avoid synthetic chemical detergents, use baking soda or plain ash) and reuse it at home to cook organic curries, boil traditional rice, or plant home herbs.</li>
              </ul>
            </div>

            <h2>3. Preparation Time & Cancellations</h2>
            <p>
              Unlike standard commercial kitchens, we dum-seal every single pot individually. Because of this authentic slow-baking process:
            </p>
            <ul>
              <li>Please expect a standard preparation and baking window of 20 to 30 minutes before our riders can dispatch.</li>
              <li>Order cancellations must be placed within 5 minutes of checkout confirmation. Once the clay pot has been dum-sealed with wheat dough and loaded onto the firewood beds, cancellations or full refunds are strictly not supported.</li>
            </ul>

            <h2>4. Payments, Pricing & Refunds</h2>
            <p>
              All prices listed on our menu are in Indian Rupees (INR) and are inclusive of standard local culinary taxes. We accept cash on delivery (COD), secure cards, and instant UPI.
            </p>
            <p style={{ marginTop: '10px' }}>
              In the highly unlikely event that a clay pot breaks or leaks its juices during transit, please contact support with a snapshot of the pot. We will instantly dispatch a boiling hot replacement pot to your address within 25 minutes.
            </p>

            <h2>5. Tabletop dine-in bookings</h2>
            <p>
              Dine-in bookings made via our Contact form are held for a maximum buffer window of 15 minutes past the scheduled booking hour. If your party does not arrive or notify the outlet, the earthen reservation will be released to walk-in patrons.
            </p>

            <h2>6. Intellectual Property & Brand Rights</h2>
            <p>
              "Naidu Gari Kunda Biryani," its clay logo, specialized earthen recipes, hand-crafted web elements, layouts, and brand assets are protected under Indian intellectual property and trademark guidelines. Unauthorized copying or redistribution is strictly prohibited.
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

        .heritage-alert-box {
          background: rgba(224, 90, 43, 0.04);
          border: 1px solid rgba(224, 90, 43, 0.15);
          border-radius: var(--radius-sm);
          padding: 20px;
          margin: 20px 0;
        }

        .heritage-alert-box h4 {
          color: var(--primary);
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 10px;
          font-family: var(--font-sans);
        }

        .heritage-alert-box p {
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .heritage-alert-box ul {
          margin-bottom: 0;
          font-size: 0.85rem;
          gap: 6px;
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
