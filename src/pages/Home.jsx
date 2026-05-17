import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Compass, Award, Heart, ChevronRight, Star } from 'lucide-react';
import { menuItems } from '../data/menuData';
import FoodCard from '../components/FoodCard';

export default function Home() {
  // Get top 3 featured/best-selling items for the home page showcase
  const featuredItems = menuItems.filter(item => item.tags.includes('Best Seller') || item.tags.includes('Signature')).slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: 'Ravi Teja K.',
      role: 'Biryani Connoisseur',
      review: 'Absolute fire! The mutton was falling off the bone and the smoky clay flavor was infused in every single grain of Basmati. Reminds me of traditional family feasts in Bhimavaram!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priyanka N.',
      role: 'Food Blogger',
      review: 'I customized with double masala and it is definitely the most authentic Andhra spiciness I have had in years. Plus, keeping the hand-made clay pot was an awesome touch!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Srinivas Rao',
      role: 'Tech Lead',
      review: 'We ordered the Gongura Chicken Biryani and Ghee Roast for our office party. Everyone was blown away by the clay pot presentation. The cooling buttermilk afterwards is highly recommended!',
      rating: 5,
    }
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <header className="hero-section flex-center">
        <div className="hero-overlay"></div>
        <div className="container hero-container flex-center">
          <div className="hero-content animate-slide-in">
            <span className="hero-badge flex-center">
              <Flame size={14} fill="var(--primary)" color="var(--primary)" />
              <span>Slow Cooked On Firewood Ovens</span>
            </span>
            
            <h1 className="hero-title">
              Traditional <br />
              <span className="text-gradient-spicy">Andhra Kunda</span> <br />
              Biryani
            </h1>
            
            <p className="hero-subtitle">
              Savor the authentic taste of tender meats and long-grain Basmati slow-cooked in hand-made earthen clay pots. Sealed with wheat dough to lock in pure, smoky spice.
            </p>

            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                <span>Explore Earthen Menu</span>
                <ChevronRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                <span>Our Heritage Craft</span>
              </Link>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-in">
            <div className="pot-glow-ring flex-center">
              <img 
                src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80" 
                alt="Clay Pot Dum Biryani" 
                className="hero-pot-img" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE EARTHEN CRAFT SECTION */}
      <section className="section section-craft">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Earthen Clay?</span>
            <h2 className="section-title">The Art & Science of "Kunda"</h2>
            <p className="brand-tagline" style={{ margin: '0 auto' }}>
              Cooking inside raw earthen clay pots is not just a custom—it is a culinary science that changes everything.
            </p>
          </div>

          <div className="craft-grid">
            <div className="craft-card glass-panel">
              <div className="craft-icon flex-center">
                <Compass size={24} color="var(--primary)" />
              </div>
              <h3>100% Moisture Retention</h3>
              <p>Clay is naturally porous. During slow heat dum cooking, moisture circulates as gentle steam, keeping chicken and mutton incredibly juicy and tender.</p>
            </div>

            <div className="craft-card glass-panel">
              <div className="craft-icon flex-center">
                <Flame size={24} color="var(--primary)" />
              </div>
              <h3>Slow Firewood Baking</h3>
              <p>Our pots are dum-baked over brick stoves fueled by natural firewood. This infuses a deep, rich, charcoal smoke aroma that metal pots simply cannot replicate.</p>
            </div>

            <div className="craft-card glass-panel">
              <div className="craft-icon flex-center">
                <Award size={24} color="var(--primary)" />
              </div>
              <h3>Alkaline Balance</h3>
              <p>The natural clay neutralizes the pH balance of the fiery spices, making our intense Andhra spices smooth, stomach-friendly, and fully digestible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SHOWCASE MENU */}
      <section className="section section-showcase">
        <div className="container">
          <div className="section-header flex-center" style={{ flexDirection: 'column' }}>
            <span className="section-subtitle">Gourmet Selection</span>
            <h2 className="section-title">Sizzling Earthen Best Sellers</h2>
            <p className="brand-tagline" style={{ margin: '0 auto', textAlign: 'center' }}>
              Handpicked customer favorites cooked freshly in individual clay pots upon order.
            </p>
          </div>

          <div className="grid-responsive">
            {featuredItems.map(item => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="showcase-cta flex-center">
            <Link to="/menu" className="btn btn-primary">
              <span>View Entire Gourmet Menu</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE 3-STEP TRADITIONAL ROADMAP */}
      <section className="section section-roadmap">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Legacy Kitchen</span>
            <h2 className="section-title">From Earthen Kiln To Feast</h2>
          </div>

          <div className="roadmap-timeline">
            <div className="roadmap-step">
              <div className="step-num flex-center">1</div>
              <h3>Clay Sourcing & Baking</h3>
              <p>We source local riverbed clay. Potters mold each Kunda, which is then dried and wood-fired to withstand slow oven temperatures.</p>
            </div>
            
            <div className="roadmap-step">
              <div className="step-num flex-center">2</div>
              <h3>18-Spice Marinade</h3>
              <p>Tender meat pieces are massaged with hand-ground dry spices, ginger, local mint, and thick curd, left to marinate for 12 hours.</p>
            </div>

            <div className="roadmap-step">
              <div className="step-num flex-center">3</div>
              <h3>Brick Dum Seal</h3>
              <p>Basmati and marinated meat are layered in the Kunda, sealed with wheat dough, and baked on charcoal beds until the seal swells.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="section section-testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Naidu Gari Love</span>
            <h2 className="section-title">What Our Patrons Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card glass-panel">
                <div className="stars flex-center" style={{ justifyContent: 'flex-start', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="testi-text">"{t.review}"</p>
                <div className="testi-author">
                  <div className="author-avatar flex-center">
                    <Heart size={16} fill="var(--primary)" color="var(--primary)" />
                  </div>
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home page local styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .home-page {
          overflow-x: hidden;
        }

        /* --- HERO CSS --- */
        .hero-section {
          position: relative;
          min-height: 95vh;
          padding-top: var(--header-height);
          background: radial-gradient(circle at 80% 30%, #441d0f 0%, var(--bg-deep) 70%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, var(--bg-deep) 100%);
          pointer-events: none;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 640px;
        }

        .hero-badge {
          display: inline-flex;
          gap: 8px;
          background: rgba(224, 90, 43, 0.1);
          border: 1px solid rgba(224, 90, 43, 0.3);
          color: var(--primary);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pot-glow-ring {
          position: relative;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(224, 90, 43, 0.2) 0%, transparent 70%);
          border: 1px dashed rgba(224, 90, 43, 0.2);
          padding: 24px;
        }

        .hero-pot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--border);
          box-shadow: var(--shadow-lg), var(--glow-primary);
          animation: spinSlow 40s linear infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* --- THE CRAFT SECTION CSS --- */
        .section-craft {
          position: relative;
          background: linear-gradient(180deg, var(--bg-deep) 0%, rgba(21, 20, 19, 0.6) 100%);
        }

        .craft-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 50px;
        }

        .craft-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: var(--transition);
        }

        .craft-card:hover {
          transform: translateY(-5px);
          border-color: rgba(224, 90, 43, 0.3);
          box-shadow: var(--shadow-lg);
        }

        .craft-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: rgba(224, 90, 43, 0.1);
          border: 1px solid rgba(224, 90, 43, 0.2);
          margin-bottom: 24px;
        }

        .craft-card h3 {
          font-size: 1.35rem;
          margin-bottom: 12px;
          font-family: var(--font-sans);
          font-weight: 700;
        }

        .craft-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* --- SHOWCASE SECTION --- */
        .showcase-cta {
          margin-top: 60px;
        }

        /* --- TIMELINE ROADMAP --- */
        .section-roadmap {
          position: relative;
        }

        .roadmap-timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
          position: relative;
        }

        .roadmap-timeline::before {
          content: '';
          position: absolute;
          top: 30px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: repeating-linear-gradient(90deg, var(--border) 0, var(--border) 10px, transparent 10px, transparent 20px);
          z-index: 1;
        }

        .roadmap-step {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .step-num {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--primary);
          color: var(--primary);
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 24px;
          box-shadow: var(--shadow-sm), 0 0 0 8px var(--bg-deep);
          transition: var(--transition);
        }

        .roadmap-step:hover .step-num {
          background: var(--primary);
          color: var(--text-primary);
          box-shadow: var(--shadow-md), var(--glow-primary);
          transform: scale(1.05);
        }

        .roadmap-step h3 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          margin-bottom: 12px;
        }

        .roadmap-step p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 300px;
        }

        /* --- TESTIMONIALS --- */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 50px;
        }

        .testimonial-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border);
        }

        .testi-text {
          color: var(--text-primary);
          font-size: 0.95rem;
          font-style: italic;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(224, 90, 43, 0.1);
          border: 1px solid rgba(224, 90, 43, 0.2);
        }

        .author-info h4 {
          font-size: 0.95rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .author-info span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* --- RESPONSIVENESS --- */
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-content {
            align-items: center;
            max-width: 100%;
          }
          .hero-title {
            font-size: 3rem;
          }
          .craft-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .roadmap-timeline {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .roadmap-timeline::before {
            display: none;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.35rem;
          }
          .pot-glow-ring {
            width: 280px;
            height: 280px;
          }
        }
      `}} />
    </div>
  );
}
