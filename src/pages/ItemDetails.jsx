import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Flame, Star, Clock, ShoppingBag, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';
import FoodCard from '../components/FoodCard';

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const item = menuItems.find((p) => p.id === id);

  // States
  const [quantity, setQuantity] = useState(1);
  const [extraEgg, setExtraEgg] = useState(false);
  const [doubleMasala, setDoubleMasala] = useState(false);
  const [clayPotKeep, setClayPotKeep] = useState(false);
  const [raitaChoice, setRaitaChoice] = useState('Classic Creamy Raita');
  const [addedPopup, setAddedPopup] = useState(false);

  // Reset states on item ID changes (switching details)
  useEffect(() => {
    setQuantity(1);
    setExtraEgg(false);
    setDoubleMasala(false);
    setClayPotKeep(false);
    setRaitaChoice('Classic Creamy Raita');
    setAddedPopup(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="container item-not-found flex-center" style={{ minHeight: '60vh', flexDirection: 'column' }}>
        <h2>Sizzling Dish Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '16px 0 30px' }}>
          The clay pot you are looking for has already cooled down or does not exist.
        </p>
        <Link to="/menu" className="btn btn-primary">
          <ArrowLeft size={18} />
          <span>Back to Oven Menu</span>
        </Link>
      </div>
    );
  }

  // Calculate customized price in real-time
  const computedSinglePrice = (() => {
    let extraCost = 0;
    if (extraEgg) extraCost += 15;
    if (doubleMasala) extraCost += 20;
    if (clayPotKeep) extraCost += 49;
    return item.price + extraCost;
  })();

  const handleAddToCart = () => {
    const customizations = {
      extraEgg,
      doubleMasala,
      clayPotKeep,
      raitaChoice,
    };
    addToCart(item, quantity, customizations);
    
    // Trigger successful added visual pop
    setAddedPopup(true);
    setTimeout(() => {
      setAddedPopup(false);
    }, 3000);
  };

  // Get recommended items (same category, excluding current item)
  const recommendations = menuItems
    .filter((p) => p.category === item.category && p.id !== item.id)
    .slice(0, 3);

  return (
    <div className="item-details-page">
      {/* 1. BREADCRUMBS ROW */}
      <div className="container breadcrumb-row">
        <Link to="/menu" className="back-link flex-center">
          <ArrowLeft size={16} />
          <span>Back to Menu</span>
        </Link>
        <span className="divider">/</span>
        <span className="current-path">{item.name}</span>
      </div>

      {/* 2. DYNAMIC MAIN LAYOUT */}
      <main className="container details-main">
        {/* Left Side: Images */}
        <div className="details-left">
          <div className="details-image-panel glass-panel">
            <img src={item.image} alt={item.name} className="main-details-img" />
            <div className="image-radial-glow"></div>
            {item.tags && item.tags.length > 0 && (
              <span className="details-badge-tag">{item.tags[0]}</span>
            )}
          </div>
        </div>

        {/* Right Side: Options & Purchase Actions */}
        <div className="details-right glass-panel">
          {/* Item Meta info */}
          <div className="details-meta-header">
            <span className={`details-veg-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
              <span className="dot"></span>
              {item.isVeg ? 'Vegetarian' : 'Non-Veg'}
            </span>

            {item.spicyScale > 0 && (
              <span className="badge badge-spicy flex-center" style={{ gap: '4px' }}>
                <Flame size={12} fill="var(--primary)" />
                <span>{item.spiceLevel}</span>
              </span>
            )}
          </div>

          <h1 className="details-title">{item.name}</h1>

          <div className="details-ratings flex-center" style={{ justifyContent: 'flex-start', gap: '20px', margin: '14px 0 24px' }}>
            <span className="stars flex-center" style={{ gap: '4px' }}>
              <Star size={16} fill="var(--secondary)" color="var(--secondary)" />
              <strong>{item.rating}</strong>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginLeft: '2px' }}>
                ({item.reviews} reviews)
              </span>
            </span>
            <span className="time flex-center" style={{ gap: '6px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <Clock size={16} color="var(--primary)" />
              <span>{item.prepTime} Preparation</span>
            </span>
          </div>

          <p className="details-desc-primary">{item.description}</p>
          <p className="details-desc-secondary">{item.details}</p>

          <div className="divider-line"></div>

          {/* 3. CUSTOMIZER OPTIONS */}
          <div className="customizer-box">
            <h3>Tailor Your Kunda</h3>
            <p className="customizer-subtitle">Customize spices & extra add-ons (optional)</p>
            
            <div className="customizer-list">
              {/* Option 1: Extra egg */}
              <label className="checkbox-custom-item flex-center">
                <input 
                  type="checkbox" 
                  checked={extraEgg}
                  onChange={(e) => setExtraEgg(e.target.checked)}
                />
                <span className="checkbox-box flex-center">
                  {extraEgg && <Check size={12} strokeWidth={3} />}
                </span>
                <span className="option-label">Add Extra Boiled Egg</span>
                <span className="option-cost">+ ₹15</span>
              </label>

              {/* Option 2: Double spicy */}
              <label className="checkbox-custom-item flex-center">
                <input 
                  type="checkbox" 
                  checked={doubleMasala}
                  onChange={(e) => setDoubleMasala(e.target.checked)}
                />
                <span className="checkbox-box flex-center">
                  {doubleMasala && <Check size={12} strokeWidth={3} />}
                </span>
                <span className="option-label">Double Spicy Masala (Andhra Sizzle)</span>
                <span className="option-cost">+ ₹20</span>
              </label>

              {/* Option 3: Keep clay pot */}
              <label className="checkbox-custom-item flex-center">
                <input 
                  type="checkbox" 
                  checked={clayPotKeep}
                  onChange={(e) => setClayPotKeep(e.target.checked)}
                />
                <span className="checkbox-box flex-center">
                  {clayPotKeep && <Check size={12} strokeWidth={3} />}
                </span>
                <span className="option-label" style={{ color: 'var(--secondary)' }}>
                  Keep the Hand-Made Clay Pot!
                </span>
                <span className="option-cost">+ ₹49</span>
              </label>
              
              {/* Option 4: Dropdown choice of raita */}
              <div className="select-custom-item">
                <span className="select-label">Yogurt / Salan Accompaniment:</span>
                <select 
                  value={raitaChoice}
                  onChange={(e) => setRaitaChoice(e.target.value)}
                  aria-label="Select Raita choice"
                >
                  <option value="Classic Creamy Raita">Classic Creamy Raita (Standard)</option>
                  <option value="Spiced Mint Raita">Cool Spiced Mint Raita</option>
                  <option value="Traditional Mirchi Ka Salan">Fiery Mirchi Ka Salan Only</option>
                  <option value="Extra Raita + Salan Both">Double Raita & Salan Combo (+₹10)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="divider-line"></div>

          {/* 4. PURCHASE CONTROLS */}
          <div className="purchase-panel">
            <div className="price-summary-box">
              <span className="price-label">Dynamic Total:</span>
              <div className="dynamic-price">
                <span className="currency">₹</span>
                <span className="val">{computedSinglePrice * quantity}</span>
              </div>
            </div>

            <div className="purchase-buttons">
              {/* Qty count adjust */}
              <div className="qty-panel flex-center">
                <button 
                  className="qty-btn-big flex-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-val-big">{quantity}</span>
                <button 
                  className="qty-btn-big flex-center"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add main button */}
              <button className="btn btn-primary add-big-btn flex-center" onClick={handleAddToCart}>
                <ShoppingBag size={20} />
                <span>Add Earthen Pot</span>
              </button>
            </div>
          </div>

          {/* Successful Addition Popup Notification */}
          {addedPopup && (
            <div className="success-popup-alert flex-center animate-fade-in">
              <Sparkles size={16} color="var(--secondary)" />
              <span>Delicious! Added {quantity} Kunda pot(s) to your basket.</span>
            </div>
          )}
        </div>
      </main>

      {/* 5. CHEF RECOMMENDS */}
      {recommendations.length > 0 && (
        <section className="container section section-recommends">
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 32px 0' }}>
            <span className="section-subtitle" style={{ letterSpacing: '0.1em' }}>Chef Recommendations</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Sizzling Alternatives</h2>
            <p className="brand-tagline">More fiery slow-cooked delights from the same firewood stoves.</p>
          </div>
          
          <div className="grid-responsive">
            {recommendations.map((rec) => (
              <FoodCard key={rec.id} item={rec} />
            ))}
          </div>
        </section>
      )}

      {/* Item Details Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .item-details-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .breadcrumb-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.85rem;
          color: var(--text-muted);
          padding: 24px;
        }

        .back-link {
          color: var(--text-secondary);
          gap: 6px;
          font-weight: 600;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .breadcrumb-row .divider {
          color: var(--border);
        }

        .breadcrumb-row .current-path {
          color: var(--text-primary);
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Layout Grid */
        .details-main {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        /* Left column image panel */
        .details-image-panel {
          position: relative;
          width: 100%;
          height: 480px;
          overflow: hidden;
          padding: 0;
          border: 1px solid var(--border);
        }

        .main-details-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-radial-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(10, 10, 9, 0.6) 100%);
          pointer-events: none;
        }

        .details-badge-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--primary);
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        /* Right column option panel */
        .details-right {
          padding: 40px;
          border: 1px solid var(--border);
        }

        .details-meta-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .details-veg-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .details-veg-badge.veg {
          color: var(--success);
        }

        .details-veg-badge.veg .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--success);
        }

        .details-veg-badge.non-veg {
          color: var(--primary);
        }

        .details-veg-badge.non-veg .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
        }

        .details-title {
          font-size: 2.25rem;
          font-family: var(--font-serif);
          line-height: 1.25;
        }

        .details-desc-primary {
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .details-desc-secondary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .divider-line {
          height: 1px;
          background: var(--border);
          margin: 24px 0;
        }

        /* Customizer forms */
        .customizer-box h3 {
          font-size: 1.15rem;
          font-family: var(--font-sans);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .customizer-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .customizer-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .checkbox-custom-item {
          cursor: pointer;
          justify-content: flex-start;
          gap: 12px;
          user-select: none;
        }

        .checkbox-custom-item input {
          display: none;
        }

        .checkbox-box {
          width: 20px;
          height: 20px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: var(--bg-input);
          transition: var(--transition);
        }

        .checkbox-custom-item input:checked + .checkbox-box {
          background: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 2px 8px rgba(220, 90, 43, 0.25);
        }

        .option-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          flex-grow: 1;
        }

        .option-cost {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
        }

        .select-custom-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }

        .select-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .select-custom-item select {
          background: var(--bg-input);
          border: 1px solid var(--border);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          cursor: pointer;
        }

        /* Purchase Controls block */
        .purchase-panel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .price-summary-box {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .dynamic-price .currency {
          font-size: 1.1rem;
          color: var(--primary);
          font-weight: 700;
          margin-right: 2px;
        }

        .dynamic-price .val {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .purchase-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .qty-panel {
          background: var(--bg-input);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 4px;
          gap: 14px;
        }

        .qty-btn-big {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 700;
          transition: var(--transition);
        }

        .qty-btn-big:hover {
          background: rgba(255,255,255,0.03);
          color: var(--primary);
        }

        .qty-val-big {
          font-size: 1rem;
          font-weight: 700;
          min-width: 20px;
          text-align: center;
        }

        .add-big-btn {
          padding: 14px 32px;
        }

        /* Alert notifications */
        .success-popup-alert {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: var(--success);
          border-radius: var(--radius-md);
          padding: 12px 20px;
          margin-top: 24px;
          gap: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          width: 100%;
        }

        /* Alternatives recommendations section */
        .section-recommends {
          border-top: 1px solid var(--border);
          padding-top: 60px;
        }

        @media (max-width: 992px) {
          .details-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .details-image-panel {
            height: 380px;
          }
          .details-right {
            padding: 30px;
          }
        }

        @media (max-width: 576px) {
          .purchase-panel {
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
          }
          .price-summary-box {
            text-align: center;
          }
          .purchase-buttons {
            justify-content: space-between;
          }
        }
      `}} />
    </div>
  );
}
