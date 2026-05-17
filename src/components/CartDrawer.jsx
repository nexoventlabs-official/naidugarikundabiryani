import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  // Prevent background scroll when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckoutClick = () => {
    onClose();
    navigate('/checkout');
  };

  const handleExploreMenu = () => {
    onClose();
    navigate('/menu');
  };

  // Helper to read customized values in user-friendly text
  const renderCustomizations = (customs) => {
    const list = [];
    if (customs.extraEgg) list.push('+ Extra Boiled Egg (₹15)');
    if (customs.doubleMasala) list.push('+ Double Masala Spicy (₹20)');
    if (customs.clayPotKeep) list.push('+ Keep Hand-Made Clay Pot (₹49)');
    if (customs.raitaChoice) list.push(`Raita: ${customs.raitaChoice}`);
    
    if (list.length === 0) return null;
    return (
      <div className="cart-item-customs">
        {list.map((c, i) => <span key={i} className="custom-tag">{c}</span>)}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title flex-center" style={{ gap: '10px' }}>
            <ShoppingBag size={20} color="var(--primary)" />
            <h2>Your Clay Basket</h2>
          </div>
          <button className="cart-close-btn flex-center" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="cart-body">
          {cart.length === 0 ? (
            /* Empty Cart View */
            <div className="cart-empty-state flex-center">
              <div className="empty-pot-graphic flex-center">
                <ShoppingBag size={48} strokeWidth={1} color="var(--text-muted)" />
              </div>
              <h3>Your basket is empty!</h3>
              <p>Nothing slow-cooking in your earthen pots yet. Add our hot signature biryanis to start your feast.</p>
              <button className="btn btn-primary" onClick={handleExploreMenu}>
                Explore Our Menu
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    {renderCustomizations(item.customizations)}
                    
                    <div className="cart-item-price-row">
                      <div className="cart-item-price">₹{item.price * item.quantity}</div>
                      
                      <div className="cart-item-actions">
                        {/* Qty adjust */}
                        <div className="cart-qty-control flex-center">
                          <button 
                            className="qty-btn flex-center"
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="qty-val">{item.quantity}</span>
                          <button 
                            className="qty-btn flex-center"
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Trash delete */}
                        <button 
                          className="cart-delete-btn flex-center"
                          onClick={() => removeFromCart(item.cartItemId)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Sticky Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-bill-row">
              <span className="label">Clay Pot Packing Fee</span>
              <span className="value free">FREE (Clay Pot Included)</span>
            </div>
            <div className="cart-bill-row total">
              <span className="label">Grand Total</span>
              <span className="value">₹{cartTotal}</span>
            </div>
            
            <button className="btn btn-primary cart-checkout-btn" onClick={handleCheckoutClick}>
              <span>Proceed to Feast</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Cart Drawer specific styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .cart-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 9, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }

        .cart-drawer-panel {
          width: 100%;
          max-width: 440px;
          height: 100%;
          border-radius: 0;
          border-top: none;
          border-bottom: none;
          border-right: none;
          border-left: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.8);
          animation: slideInPanel 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInPanel {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .cart-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cart-header-title h2 {
          font-size: 1.35rem;
          font-family: var(--font-serif);
          color: var(--text-primary);
        }

        .cart-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition);
        }

        .cart-close-btn:hover {
          background: rgba(224, 90, 43, 0.1);
          color: var(--primary);
          border-color: rgba(224, 90, 43, 0.3);
        }

        .cart-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 24px;
        }

        .cart-empty-state {
          height: 80%;
          flex-direction: column;
          text-align: center;
        }

        .empty-pot-graphic {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255,255,255,0.02);
          border: 1px dashed var(--border);
          margin-bottom: 24px;
        }

        .cart-empty-state h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .cart-empty-state p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 30px;
          max-width: 300px;
          line-height: 1.6;
        }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cart-item {
          display: flex;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .cart-item-img {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          border: 1px solid var(--border);
        }

        .cart-item-details {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .cart-item-name {
          font-size: 1rem;
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .cart-item-customs {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 10px;
        }

        .custom-tag {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          padding: 3px 6px;
          border-radius: 4px;
        }

        .cart-item-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .cart-item-price {
          font-weight: 700;
          color: var(--primary);
          font-size: 1.1rem;
        }

        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cart-qty-control {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 2px;
          gap: 8px;
        }

        .qty-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .qty-btn:hover {
          background: rgba(224, 90, 43, 0.1);
          color: var(--primary);
        }

        .qty-val {
          font-size: 0.85rem;
          font-weight: 700;
          min-width: 14px;
          text-align: center;
        }

        .cart-delete-btn {
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }

        .cart-delete-btn:hover {
          color: #EF4444;
          background: rgba(239, 68, 68, 0.08);
        }

        .cart-footer {
          padding: 24px;
          border-top: 1px solid var(--border);
          background: rgba(21, 20, 19, 0.95);
        }

        .cart-bill-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 12px;
          color: var(--text-secondary);
        }

        .cart-bill-row .free {
          color: var(--success);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .cart-bill-row.total {
          border-top: 1px solid var(--border);
          padding-top: 16px;
          margin-bottom: 24px;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .cart-bill-row.total .value {
          color: var(--primary);
        }

        .cart-checkout-btn {
          width: 100%;
          padding: 16px;
          display: flex;
          justify-content: center;
          gap: 10px;
          font-size: 1rem;
        }
      `}} />
    </div>
  );
}
