import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Check, ShieldCheck, Truck, Flame, Sparkles, MapPin, CreditCard, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Checkout Phase: 'form' -> 'tracking'
  const [phase, setPhase] = useState('form');

  // Input states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('cod'); // cod, upi, card
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Simulated Order Tracker Step: 1 -> 5
  const [trackStep, setTrackStep] = useState(1);

  // Auto progression of simulated delivery steps
  useEffect(() => {
    if (phase !== 'tracking') return;

    const timers = [];
    
    // Step 2: Preparing in Oven after 4.5s
    timers.push(setTimeout(() => setTrackStep(2), 4500));
    
    // Step 3: Packing Clay Pot after 9s
    timers.push(setTimeout(() => setTrackStep(3), 9000));
    
    // Step 4: Dispatched with Rider after 14s
    timers.push(setTimeout(() => setTrackStep(4), 14000));
    
    // Step 5: Delivered/Arrived after 19s
    timers.push(setTimeout(() => setTrackStep(5), 19000));

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [phase]);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'KUNDALOVE' || promoCode.trim().toUpperCase() === 'FIRST20') {
      setPromoApplied(true);
      setDiscount(Math.round(cartTotal * 0.2)); // 20% discount
    } else {
      alert("Invalid Code. Try 'KUNDALOVE' or 'FIRST20'!");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert("Please fill in all delivery details.");
      return;
    }
    // Transition to simulated real-time tracking
    setPhase('tracking');
  };

  const handleBackToMenu = () => {
    clearCart();
    navigate('/menu');
  };

  // Helper for customization listings
  const renderCustoms = (customs) => {
    const list = [];
    if (customs.extraEgg) list.push('Boiled Egg');
    if (customs.doubleMasala) list.push('Double Masala');
    if (customs.clayPotKeep) list.push('Retained Clay Pot');
    if (customs.raitaChoice) list.push(customs.raitaChoice);
    if (list.length === 0) return null;
    return <span className="checkout-item-sub">{list.join(' • ')}</span>;
  };

  /* ================== PHASE 2: REAL-TIME SIMULATED TRACKING VIEW ================== */
  if (phase === 'tracking') {
    return (
      <div className="checkout-page flex-center" style={{ minHeight: '90vh' }}>
        <div className="container tracking-container flex-center">
          <div className="tracking-card glass-panel animate-fade-in">
            
            {/* Header */}
            <div className="tracking-header flex-center" style={{ flexDirection: 'column' }}>
              <div className="pulsing-pot-icon flex-center">
                <Flame size={32} fill="var(--primary)" color="var(--primary)" />
              </div>
              <span className="live-pill flex-center">
                <span className="ping-dot"></span>
                <span>Live Earthen Cooking Tracker</span>
              </span>
              <h2>Ovens Fired Up, {name}!</h2>
              <p>Your order ID is <strong>#KUNDA-{Math.floor(100000 + Math.random() * 900000)}</strong>. Sit tight while we slow-cook your feast.</p>
            </div>

            {/* Simulated milestones */}
            <div className="tracking-milestones">
              
              {/* Node 1 */}
              <div className={`milestone-node ${trackStep >= 1 ? 'active' : ''} ${trackStep > 1 ? 'completed' : ''}`}>
                <div className="milestone-icon flex-center">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div className="milestone-details">
                  <h3>Order Confirmed</h3>
                  <p>Our kitchen has received your custom ingredients selections and printed your token.</p>
                </div>
              </div>

              {/* Node 2 */}
              <div className={`milestone-node ${trackStep >= 2 ? 'active' : ''} ${trackStep > 2 ? 'completed' : ''}`}>
                <div className="milestone-icon flex-center">
                  {trackStep === 2 ? <Flame size={16} className="spinning-cooking" /> : <Check size={16} strokeWidth={3} />}
                </div>
                <div className="milestone-details">
                  <h3>Clay Pot Baking ("Dum")</h3>
                  <p>Individual raw clay pot selected, oiled in Desi ghee, layered with premium Basmati, and sealed with wheat dough over charcoal beds.</p>
                </div>
              </div>

              {/* Node 3 */}
              <div className={`milestone-node ${trackStep >= 3 ? 'active' : ''} ${trackStep > 3 ? 'completed' : ''}`}>
                <div className="milestone-icon flex-center">
                  {trackStep === 3 ? <Sparkles size={16} className="pulsing-pot-icon" /> : <Check size={16} strokeWidth={3} />}
                </div>
                <div className="milestone-details">
                  <h3>Insulated Clay Wrapping</h3>
                  <p>Dough seal opened releasing piping steam. Clay pot is placed in thermal bubble pouches to preserve clay pot heat and aroma.</p>
                </div>
              </div>

              {/* Node 4 */}
              <div className={`milestone-node ${trackStep >= 4 ? 'active' : ''} ${trackStep > 4 ? 'completed' : ''}`}>
                <div className="milestone-icon flex-center">
                  {trackStep === 4 ? <Truck size={16} /> : <Check size={16} strokeWidth={3} />}
                </div>
                <div className="milestone-details">
                  <h3>Rider Dispatched</h3>
                  <p>Our earthenware delivery agent is riding hot towards your coordinate: <em>{address.slice(0, 40)}...</em></p>
                </div>
              </div>

              {/* Node 5 */}
              <div className={`milestone-node ${trackStep >= 5 ? 'active' : ''}`}>
                <div className="milestone-icon flex-center">
                  <Gift size={16} />
                </div>
                <div className="milestone-details">
                  <h3>Arrived & Enjoy!</h3>
                  <p>Your aromatic, wood-stove Kunda Biryani has arrived! Carefully unwrap the clay pot and savor with cold raita.</p>
                </div>
              </div>

            </div>

            {/* Footer actions */}
            <div className="tracking-footer flex-center" style={{ gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '30px', marginTop: '20px' }}>
              <button className="btn btn-primary" onClick={handleBackToMenu}>
                Clear Basket & Back to Menu
              </button>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary flex-center"
              >
                WhatsApp Delivery Desk
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }

  /* ================== PHASE 1: STANDARD CHECKOUT FORM VIEW ================== */
  return (
    <div className="checkout-page">
      <header className="checkout-header-banner flex-center">
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Billing & Logistics</span>
          <h1 className="checkout-title text-gradient-spicy">Confirm Your Earthen Feast</h1>
        </div>
      </header>

      {cart.length === 0 ? (
        /* Fallback if checkout is empty */
        <div className="container empty-checkout flex-center glass-panel">
          <ShoppingBag size={48} color="var(--text-muted)" style={{ marginBottom: '20px' }} />
          <h2>Your checkout basket is empty!</h2>
          <p style={{ margin: '12px 0 24px', color: 'var(--text-secondary)' }}>You cannot place orders without filling your earthen clay pots first.</p>
          <Link to="/menu" className="btn btn-primary">
            Browse Biryanis Menu
          </Link>
        </div>
      ) : (
        /* Main split panel grid */
        <main className="container checkout-main">
          
          {/* Left Form */}
          <div className="checkout-left glass-panel">
            <h2>Delivery Address & Payment</h2>
            <p className="lead-desc">Provide your logistics details to let our kitchen prepare the earthen shipments.</p>
            
            <form onSubmit={handlePlaceOrder} className="checkout-form">
              <div className="form-group">
                <label>Receiver Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter full name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>10-Digit Mobile Number *</label>
                <input 
                  type="tel" 
                  placeholder="Enter contact number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Delivery Address *</label>
                <textarea 
                  rows="3" 
                  placeholder="Enter flat number, street name, apartment details, and city..." 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Payment selection */}
              <div className="payment-select-box">
                <label className="section-label">Preferred Payment Mode:</label>
                
                <div className="payment-options">
                  {/* Option 1: COD */}
                  <label className={`pay-option ${payment === 'cod' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod" 
                      checked={payment === 'cod'} 
                      onChange={() => setPayment('cod')}
                    />
                    <MapPin size={18} />
                    <div className="pay-text">
                      <h4>Cash / UPI on Delivery</h4>
                      <p>Pay at your doorstep</p>
                    </div>
                  </label>

                  {/* Option 2: UPI */}
                  <label className={`pay-option ${payment === 'upi' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="upi" 
                      checked={payment === 'upi'} 
                      onChange={() => setPayment('upi')}
                    />
                    <Sparkles size={18} />
                    <div className="pay-text">
                      <h4>Instant UPI (Paytm/GPay)</h4>
                      <p>Scan code for instant slow-cook start</p>
                    </div>
                  </label>

                  {/* Option 3: Cards */}
                  <label className={`pay-option ${payment === 'card' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card" 
                      checked={payment === 'card'} 
                      onChange={() => setPayment('card')}
                    />
                    <CreditCard size={18} />
                    <div className="pay-text">
                      <h4>Credit / Debit Card</h4>
                      <p>Secure global card processing</p>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary place-order-btn flex-center">
                <Flame size={18} fill="#ffffff" />
                <span>Confirm & Fire Up Oven (₹{cartTotal - discount})</span>
              </button>
            </form>
          </div>

          {/* Right Invoice Panel */}
          <div className="checkout-right glass-panel">
            <h2>Gourmet Summary</h2>
            
            {/* Basket Items List */}
            <div className="checkout-items-summary">
              {cart.map((item) => (
                <div key={item.cartItemId} className="summary-item">
                  <div className="summary-qty flex-center">{item.quantity}x</div>
                  <div className="summary-details">
                    <h4>{item.name}</h4>
                    {renderCustomizations(item.customizations)}
                  </div>
                  <div className="summary-price">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <div className="promo-box flex-center">
              <input 
                type="text" 
                placeholder="PROMO CODE (e.g. KUNDALOVE)" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
              />
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={handleApplyPromo}
                disabled={promoApplied}
              >
                {promoApplied ? 'Applied' : 'Apply'}
              </button>
            </div>

            {/* Invoice Bill details */}
            <div className="checkout-bill-details">
              <div className="bill-row">
                <span>Items Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              
              {promoApplied && (
                <div className="bill-row discount flex-center" style={{ justifyContent: 'space-between', color: 'var(--success)' }}>
                  <span>20% Promo Discount</span>
                  <span>- ₹{discount}</span>
                </div>
              )}

              <div className="bill-row">
                <span>Clay Pot Packing Fee</span>
                <span className="free">FREE</span>
              </div>

              <div className="bill-row">
                <span>Earthen Insulation Delivery</span>
                <span className="free">FREE</span>
              </div>

              <div className="divider-line"></div>

              <div className="bill-row total">
                <span>Grand Total</span>
                <span>₹{cartTotal - discount}</span>
              </div>
            </div>

            <div className="security-oath flex-center">
              <ShieldCheck size={18} color="var(--success)" />
              <span>100% Traditional Hygiene & Safe Checkout</span>
            </div>
          </div>

        </main>
      )}

      {/* Checkout Page Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .checkout-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .checkout-header-banner {
          height: 220px;
          background: linear-gradient(180deg, rgba(42, 21, 12, 0.4) 0%, var(--bg-deep) 100%);
          margin-bottom: 40px;
        }

        .checkout-title {
          font-size: 2.5rem;
          font-weight: 850;
        }

        /* Fallback view when empty */
        .empty-checkout {
          flex-direction: column;
          padding: 60px 40px;
          text-align: center;
          max-width: 500px;
          margin: 40px auto;
          border: 1px solid var(--border);
        }

        .empty-checkout h2 {
          font-size: 1.5rem;
        }

        /* Main Grid split */
        .checkout-main {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        /* Left Column Details form */
        .checkout-left {
          padding: 40px;
          border: 1px solid var(--border);
        }

        .checkout-left h2 {
          font-size: 1.65rem;
          font-family: var(--font-serif);
          margin-bottom: 8px;
        }

        .lead-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Radio Options */
        .payment-select-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }

        .section-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pay-option {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--bg-input);
          border: 1px solid var(--border);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition);
          user-select: none;
        }

        .pay-option:hover {
          border-color: rgba(224, 90, 43, 0.2);
        }

        .pay-option.active {
          border-color: var(--primary);
          background: rgba(224, 90, 43, 0.03);
          box-shadow: 0 4px 15px rgba(220, 90, 43, 0.05);
        }

        .pay-option input[type="radio"] {
          accent-color: var(--primary);
          width: 18px;
          height: 18px;
        }

        .pay-text h4 {
          font-size: 0.95rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .pay-text p {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .place-order-btn {
          margin-top: 15px;
          padding: 18px;
          font-size: 1.05rem;
        }

        /* Right Column Basket Invoice Summary */
        .checkout-right {
          padding: 40px;
          border: 1px solid var(--border);
          align-self: flex-start;
        }

        .checkout-right h2 {
          font-size: 1.35rem;
          font-family: var(--font-serif);
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 12px;
        }

        .checkout-items-summary {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 250px;
          overflow-y: auto;
          margin-bottom: 24px;
          padding-right: 8px;
        }

        .summary-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9rem;
        }

        .summary-qty {
          width: 32px;
          height: 24px;
          background: rgba(224, 90, 43, 0.1);
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .summary-details {
          flex-grow: 1;
        }

        .summary-details h4 {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .checkout-item-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 3px;
        }

        .summary-price {
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Promo code */
        .promo-box {
          background: var(--bg-input);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 4px 4px 4px 16px;
          margin-bottom: 24px;
        }

        .promo-box input {
          width: 100%;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .promo-box input::placeholder {
          color: var(--text-muted);
        }

        /* Invoice breakdown */
        .checkout-bill-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .checkout-bill-details .free {
          color: var(--success);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .checkout-bill-details .bill-row {
          display: flex;
          justify-content: space-between;
        }

        .checkout-bill-details .bill-row.total {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .checkout-bill-details .bill-row.total span:last-child {
          color: var(--primary);
        }

        .security-oath {
          margin-top: 24px;
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.12);
          border-radius: var(--radius-sm);
          padding: 12px;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        /* ================== TRACKING SIMULATION STYLES ================== */
        .tracking-card {
          width: 100%;
          max-width: 580px;
          padding: 40px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
        }

        .pulsing-pot-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(224, 90, 43, 0.1);
          border: 2px solid var(--primary);
          margin-bottom: 20px;
          animation: pulseIcon 1.5s infinite ease-in-out;
        }

        @keyframes pulseIcon {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(224, 90, 43, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 15px 5px rgba(224, 90, 43, 0.2); }
        }

        .live-pill {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #EF4444;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          gap: 6px;
          margin-bottom: 12px;
        }

        .ping-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #EF4444;
          animation: pingPulse 1s infinite alternate;
        }

        @keyframes pingPulse {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }

        .tracking-header h2 {
          font-size: 1.8rem;
          font-family: var(--font-serif);
          margin-bottom: 8px;
          text-align: center;
        }

        .tracking-header p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-align: center;
          max-width: 440px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Milestones node list */
        .tracking-milestones {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 28px;
          gap: 30px;
          margin-bottom: 32px;
        }

        .tracking-milestones::before {
          content: '';
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 11px;
          width: 2px;
          background: var(--border);
        }

        .milestone-node {
          position: relative;
          display: flex;
          gap: 16px;
          opacity: 0.25;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .milestone-node.active {
          opacity: 1;
        }

        .milestone-icon {
          position: absolute;
          left: -28px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-deep);
          border: 2px solid var(--border);
          color: var(--text-muted);
          transition: var(--transition);
          z-index: 10;
        }

        .milestone-node.active .milestone-icon {
          border-color: var(--secondary);
          background: rgba(245, 158, 11, 0.1);
          color: var(--secondary);
          box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
        }

        .milestone-node.completed .milestone-icon {
          border-color: var(--success);
          background: var(--success);
          color: var(--bg-deep);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .milestone-details h3 {
          font-size: 1rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
          transition: var(--transition);
        }

        .milestone-node.completed .milestone-details h3 {
          color: var(--success);
        }

        .milestone-node.active:not(.completed) .milestone-details h3 {
          color: var(--secondary);
        }

        .milestone-details p {
          color: var(--text-secondary);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        /* Cooking spinner animation */
        .spinning-cooking {
          animation: spinnerCooking 2s infinite linear;
        }

        @keyframes spinnerCooking {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .checkout-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .checkout-left, .checkout-right, .tracking-card {
            padding: 30px 20px;
          }
          .checkout-title {
            font-size: 1.85rem;
          }
        }
      `}} />
    </div>
  );
}
