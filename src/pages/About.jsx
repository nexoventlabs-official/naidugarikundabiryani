import React from 'react';
import { Award, Compass, Heart, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      {/* 1. HERO BANNERS */}
      <header className="about-hero flex-center">
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Our Heritage & Clay Craft</span>
          <h1 className="about-title text-gradient-spicy">The Legend of Naidu Gari</h1>
          <p className="about-subtitle">Tracing back generations of wood-fired clay cooking in coastal Andhra Pradesh</p>
        </div>
        <div className="about-hero-overlay"></div>
      </header>

      {/* 2. OUR FOUNDATION HISTORY */}
      <section className="container section history-section">
        <div className="history-grid">
          <div className="history-text">
            <span className="section-subtitle" style={{ textAlign: 'left' }}>Heritage Roots</span>
            <h2>Slow Cooking Since 1982</h2>
            <p className="brand-tagline" style={{ textAlign: 'left', margin: '14px 0 20px 0' }}>
              "Naidu Gari Kunda Biryani" was born out of a simple passion: to bring back the raw, rich, earthy flavors of traditional Andhra farmhouses.
            </p>
            <p>
              In an era dominated by pressure cookers and chemical spices, our founder, Venkat Naidu Garu, resolved to preserve the ancient wood-stove ovens of his ancestors. He traveled to regional villages, reviving the hand-ground masalas and earthen clay baking techniques.
            </p>
            <p style={{ marginTop: '16px' }}>
              Today, every Kunda Biryani we serve is a tribute to that legacy. The clay pot is not just a container—it is a breathing vessel that lets active heat circulation slow-cook the basmati grains and succulent meats without losing a single drop of flavor.
            </p>
          </div>
          
          <div className="history-visual flex-center">
            <div className="about-visual-box glass-panel">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=800&auto=format&fit=crop&q=80" 
                alt="Wood fire slow oven" 
                className="about-visual-img" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR PURITY PRINCIPLES */}
      <section className="section section-principles">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Oath of Purity</span>
            <h2 className="section-title">The Four Pillars of Naidu Gari</h2>
          </div>

          <div className="principles-grid">
            <div className="principle-card glass-panel">
              <div className="p-icon flex-center">
                <Compass size={22} color="var(--primary)" />
              </div>
              <h3>Organic Riverbed Clay</h3>
              <p>We source clay exclusively from Godavari riverbeds. Standard potter families sculpt, dry, and fire each individual Kunda to perfection without using synthetic glazes.</p>
            </div>

            <div className="principle-card glass-panel">
              <div className="p-icon flex-center">
                <Award size={22} color="var(--primary)" />
              </div>
              <h3>Hand-Ground Spices Only</h3>
              <p>We do not buy packed spice mixes. Cinnamon, cloves, cardamom, and hot dry chillies are crushed by hand using traditional stone mortars (Rolu-Rolu) every morning.</p>
            </div>

            <div className="principle-card glass-panel">
              <div className="p-icon flex-center">
                <Heart size={22} color="var(--primary)" />
              </div>
              <h3>Pure Desi Ghee Glaze</h3>
              <p>Every pot is glazed inside with hot melted Desi cow ghee before layering the Biryani. This adds a rich buttery glaze and prevents the meat from scorching on the clay.</p>
            </div>

            <div className="principle-card glass-panel">
              <div className="p-icon flex-center">
                <ShieldAlert size={22} color="var(--primary)" />
              </div>
              <h3>Zero Artificial Coloring</h3>
              <p>We reject synthetic bright orange food colorings. The rich crimson hues of our biryanis come naturally from premium saffron threads and hot Kashmiri dry chillies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HISTORICAL TIMELINE ROADMAP */}
      <section className="container section section-timeline">
        <div className="section-header">
          <span className="section-subtitle">Our Evolution</span>
          <h2 className="section-title">Timeline of Taste</h2>
        </div>

        <div className="timeline-flow">
          {/* Year 1 */}
          <div className="timeline-node">
            <div className="timeline-year">1982</div>
            <div className="timeline-detail glass-panel">
              <h3>The Firewood Stove</h3>
              <p>Venkat Naidu Garu starts a small roadside military hotel in Guntur, serving slow-cooked country meats in simple terracotta plates.</p>
            </div>
          </div>

          {/* Year 2 */}
          <div className="timeline-node reverse">
            <div className="timeline-year">1998</div>
            <div className="timeline-detail glass-panel">
              <h3>Reviving Earthen Dum</h3>
              <p>The transition to full clay-pot (Kunda) dum cooking begins. The restaurant becomes a famous hub for travelers seeking smoky clay flavors.</p>
            </div>
          </div>

          {/* Year 3 */}
          <div className="timeline-node">
            <div className="timeline-year">2014</div>
            <div className="timeline-detail glass-panel">
              <h3>Crossing Borders</h3>
              <p>Naidu Gari opens its first large-scale flagship kitchen in Jubilee Hills, Hyderabad, spreading the traditional Andhra clay style to city dwellers.</p>
            </div>
          </div>

          {/* Year 4 */}
          <div className="timeline-node reverse">
            <div className="timeline-year">2026</div>
            <div className="timeline-detail glass-panel">
              <h3>10+ Earthen Outlets</h3>
              <p>Expanding across Hyderabad, Bangalore, Guntur, and Vijayawada, preserving hand-ground recipes and helping 50+ potter families earn direct livelihoods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About page local styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .about-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .about-hero {
          position: relative;
          height: 340px;
          background: linear-gradient(180deg, rgba(42, 21, 12, 0.5) 0%, var(--bg-deep) 100%);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 20%, var(--bg-deep) 100%);
          pointer-events: none;
        }

        .about-title {
          font-size: 3.25rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .about-subtitle {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* History grid */
        .history-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 60px;
        }

        .history-text h2 {
          font-size: 2.25rem;
          font-family: var(--font-serif);
        }

        .history-text p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.98rem;
        }

        .about-visual-box {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          padding: 0;
          border: 1px solid var(--border);
        }

        .about-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Principles Grid */
        .section-principles {
          background: rgba(21, 20, 19, 0.4);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 50px;
        }

        .principle-card {
          padding: 32px 24px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .principle-card:hover {
          transform: translateY(-5px);
          border-color: rgba(224, 90, 43, 0.3);
          box-shadow: var(--shadow-lg);
        }

        .p-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(224, 90, 43, 0.08);
          border: 1px solid rgba(224, 90, 43, 0.15);
          margin-bottom: 20px;
        }

        .principle-card h3 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .principle-card p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        /* Timeline flow */
        .section-timeline {
          margin-top: 60px;
        }

        .timeline-flow {
          position: relative;
          max-width: 800px;
          margin: 60px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-flow::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: var(--border);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-node {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .timeline-year {
          justify-self: flex-end;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--primary);
          color: var(--primary);
          font-size: 1.25rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 10px var(--bg-deep);
          transform: translate(36px, 0);
          z-index: 10;
        }

        .timeline-detail {
          padding: 24px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }

        .timeline-detail h3 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .timeline-detail p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* Reverse timeline node */
        .timeline-node.reverse .timeline-year {
          justify-self: flex-start;
          transform: translate(-36px, 0);
          order: 2;
        }

        .timeline-node.reverse .timeline-detail {
          order: 1;
        }

        @media (max-width: 992px) {
          .history-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-visual-box {
            height: 300px;
          }
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2.25rem;
          }
          .timeline-flow::before {
            left: 20px;
          }
          .timeline-node {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .timeline-year {
            justify-self: flex-start !important;
            transform: translate(0, 0) !important;
            width: 44px;
            height: 44px;
            font-size: 0.95rem;
            box-shadow: 0 0 0 5px var(--bg-deep);
            order: 1 !important;
          }
          .timeline-detail {
            order: 2 !important;
            margin-left: 40px;
          }
        }

        @media (max-width: 576px) {
          .principles-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}} />
    </div>
  );
}
