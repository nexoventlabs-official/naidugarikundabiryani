import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function FoodCard({ item }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to detail page when clicking "Add"
    addToCart(item, 1, {});
  };

  // Helper to color-code spicy level
  const getSpiceColor = (scale) => {
    if (scale >= 4) return '#E05A2B'; // Andhra Spicy
    if (scale === 3) return '#F39C12'; // Spicy
    if (scale === 2) return '#F1C40F'; // Medium
    return '#27AE60'; // Mild / Cool
  };

  return (
    <Link to={`/menu/${item.id}`} className="food-card-wrapper animate-fade-in">
      <div className="glass-panel food-card">
        {/* Card Header (Image + Overlay Badges) */}
        <div className="food-image-container">
          <img src={item.image} alt={item.name} className="food-image" />
          
          <div className="badge-overlay-top">
            {/* Veg / Non-Veg Indicator */}
            <span className={`veg-dot-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
              <span className="dot"></span>
              {item.isVeg ? 'Veg' : 'Non-Veg'}
            </span>

            {/* Spicy Badge */}
            {item.spicyScale > 0 && (
              <span 
                className="badge badge-spicy flex-center"
                style={{ 
                  backgroundColor: 'rgba(10, 10, 9, 0.8)', 
                  borderColor: getSpiceColor(item.spicyScale),
                  color: getSpiceColor(item.spicyScale),
                  gap: '4px' 
                }}
              >
                <Flame size={12} fill={getSpiceColor(item.spicyScale)} />
                {item.spiceLevel}
              </span>
            )}
          </div>
          
          {item.tags && item.tags.length > 0 && (
            <span className="featured-tag">{item.tags[0]}</span>
          )}
        </div>

        {/* Card Body */}
        <div className="food-info">
          <div className="food-meta">
            <span className="food-rating flex-center">
              <Star size={14} fill="var(--secondary)" color="var(--secondary)" />
              {item.rating} <span className="review-count">({item.reviews})</span>
            </span>
            <span className="food-time">{item.prepTime}</span>
          </div>

          <h3 className="food-title">{item.name}</h3>
          <p className="food-desc">{item.description}</p>

          <div className="food-card-footer">
            <div className="food-price-box">
              <span className="currency">₹</span>
              <span className="price-val">{item.price}</span>
            </div>
            
            <button 
              className="quick-add-btn flex-center"
              onClick={handleQuickAdd}
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Styles local to the FoodCard */}
      <style dangerouslySetInnerHTML={{__html: `
        .food-card-wrapper {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .food-card {
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--border);
        }

        .food-card-wrapper:hover .food-card {
          transform: translateY(-8px);
          border-color: rgba(224, 90, 43, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(224, 90, 43, 0.05);
        }

        .food-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .food-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .food-card-wrapper:hover .food-image {
          transform: scale(1.08);
        }

        .badge-overlay-top {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
        }

        .veg-dot-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(10, 10, 9, 0.85);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .veg-dot-badge.veg {
          border-color: rgba(16, 185, 129, 0.4);
          color: var(--success);
        }

        .veg-dot-badge.veg .dot {
          background-color: var(--success);
        }

        .veg-dot-badge.non-veg {
          border-color: rgba(224, 90, 43, 0.4);
          color: var(--primary);
        }

        .veg-dot-badge.non-veg .dot {
          background-color: var(--primary);
        }

        .veg-dot-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .featured-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: var(--primary);
          color: var(--text-primary);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .food-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .food-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          margin-bottom: 10px;
          color: var(--text-secondary);
        }

        .food-rating {
          font-weight: 600;
          gap: 4px;
        }

        .review-count {
          color: var(--text-muted);
          font-size: 0.75rem;
          margin-left: 2px;
        }

        .food-time {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .food-title {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: var(--text-primary);
          font-family: var(--font-serif);
          letter-spacing: 0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .food-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .food-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid var(--border);
        }

        .food-price-box {
          font-family: var(--font-sans);
          font-weight: 700;
        }

        .food-price-box .currency {
          color: var(--primary);
          font-size: 1rem;
          margin-right: 2px;
        }

        .food-price-box .price-val {
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .quick-add-btn {
          background: rgba(224, 90, 43, 0.1);
          border: 1px solid rgba(224, 90, 43, 0.3);
          color: var(--primary);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          gap: 6px;
        }

        .quick-add-btn:hover {
          background: var(--primary);
          color: var(--text-primary);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(224, 90, 43, 0.2);
        }
      `}} />
    </Link>
  );
}
