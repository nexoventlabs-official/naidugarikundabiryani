import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Send, Calendar, Clock, Users } from 'lucide-react';

export default function Contact() {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [outlet, setOutlet] = useState('Jubilee Hills, Hyderabad');
  const [type, setType] = useState('General Query');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Please fill in all primary fields (Name, Email, Phone).");
      return;
    }
    // Simulate API submit
    setSubmitted(true);
    // Reset states after brief show
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setDate('');
      setTime('');
      setSubmitted(false);
    }, 4000);
  };

  const outlets = [
    {
      city: 'Hyderabad',
      name: 'Jubilee Hills Flagship',
      address: 'Plot 482, Road No. 36, Near Metro Station, Jubilee Hills, Hyderabad - 500033',
      phone: '+91 98765 43210',
      email: 'hyd.jh@naidugarikunda.com',
    },
    {
      city: 'Vijayawada',
      name: 'Benz Circle Kitchen',
      address: 'Shop No 14, Ground Floor, Benz Circle Junction, Vijayawada - 520010',
      phone: '+91 98765 43212',
      email: 'vja.bc@naidugarikunda.com',
    },
    {
      city: 'Bangalore',
      name: 'Indiranagar Earthen Outlet',
      address: '100 Feet Road, Next to Metro Pillar 42, Indiranagar, Bangalore - 560038',
      phone: '+91 98765 43214',
      email: 'blr.in@naidugarikunda.com',
    }
  ];

  return (
    <div className="contact-page">
      {/* 1. HERO HEADER */}
      <header className="contact-hero flex-center">
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <span className="section-subtitle">Reach Out To Us</span>
          <h1 className="contact-title text-gradient-spicy">Find Our Kitchens</h1>
          <p className="contact-subtitle">Get in touch for catering, tabletop bookings, or quick complaints</p>
        </div>
        <div className="contact-hero-overlay"></div>
      </header>

      {/* 2. MAIN LAYOUT CONTAINER */}
      <main className="container contact-main">
        {/* Left Side: Contact Form */}
        <div className="contact-left glass-panel">
          <h2>Send Earthen Message</h2>
          <p className="form-lead">Planning a family catering event or want to reserve a table? Fill out your details below.</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row two-col">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter full name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row two-col">
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="10-digit mobile" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Select Nearest Outlet</label>
                <select value={outlet} onChange={(e) => setOutlet(e.target.value)} aria-label="Outlet location choice">
                  <option value="Jubilee Hills, Hyderabad">Jubilee Hills, Hyderabad</option>
                  <option value="Benz Circle, Vijayawada">Benz Circle, Vijayawada</option>
                  <option value="Indiranagar, Bangalore">Indiranagar, Bangalore</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Select Query Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Type of contact query">
                <option value="General Query">General Feedback / Query</option>
                <option value="Table Reservation">Tabletop Booking (Dine-in)</option>
                <option value="Bulk Catering">Bulk Catering / Office Party</option>
                <option value="Clay Pot Returns">Clay Pot Return/Refund Program</option>
              </select>
            </div>

            {/* If reservation is selected, render extra date & time selectors */}
            {(type === 'Table Reservation' || type === 'Bulk Catering') && (
              <div className="form-row three-col animate-fade-in" style={{ marginTop: '10px' }}>
                <div className="form-group">
                  <label className="flex-center" style={{ justifyContent: 'flex-start', gap: '6px' }}>
                    <Calendar size={14} color="var(--primary)" />
                    <span>Booking Date</span>
                  </label>
                  <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="flex-center" style={{ justifyContent: 'flex-start', gap: '6px' }}>
                    <Clock size={14} color="var(--primary)" />
                    <span>Preferred Time</span>
                  </label>
                  <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="flex-center" style={{ justifyContent: 'flex-start', gap: '6px' }}>
                    <Users size={14} color="var(--primary)" />
                    <span>Guests</span>
                  </label>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} aria-label="Number of dining guests">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="4">4 People</option>
                    <option value="6">6+ People</option>
                    <option value="10">10+ (Party size)</option>
                  </select>
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Special Instructions / Message</label>
              <textarea 
                rows="4" 
                placeholder="Mention any food allergies, spice preferences or catering details..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn flex-center">
              <Send size={16} />
              <span>Send Sizzling Message</span>
            </button>
          </form>

          {/* Submission Success Box */}
          {submitted && (
            <div className="submit-success-toast flex-center animate-fade-in">
              <div className="toast-icon flex-center">
                <Check size={18} color="#ffffff" strokeWidth={3} />
              </div>
              <div className="toast-text">
                <h4>Message Received!</h4>
                <p>Thank you! Our traditional kitchen representative will contact you in 15 minutes to confirm.</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Outlets List */}
        <div className="contact-right">
          <h2 style={{ marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Our Kitchen Directory</h2>
          
          <div className="outlets-list">
            {outlets.map((o, idx) => (
              <div key={idx} className="outlet-card glass-panel">
                <div className="outlet-header">
                  <span className="outlet-city-badge">{o.city}</span>
                  <h3>{o.name}</h3>
                </div>
                
                <div className="outlet-body">
                  <div className="outlet-row flex-center" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                    <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <p className="addr">{o.address}</p>
                  </div>
                  
                  <div className="outlet-row flex-center" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                    <Phone size={16} color="var(--primary)" />
                    <a href={`tel:${o.phone.replace(/\s+/g, '')}`}>{o.phone}</a>
                  </div>
                  
                  <div className="outlet-row flex-center" style={{ justifyContent: 'flex-start', gap: '10px' }}>
                    <Mail size={16} color="var(--primary)" />
                    <a href={`mailto:${o.email}`}>{o.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact styling CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .contact-page {
          min-height: 100vh;
          padding-top: var(--header-height);
        }

        .contact-hero {
          position: relative;
          height: 300px;
          background: linear-gradient(180deg, rgba(42, 21, 12, 0.4) 0%, var(--bg-deep) 100%);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, var(--bg-deep) 100%);
          pointer-events: none;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
          font-size: 1rem;
        }

        /* Layout Grid */
        .contact-main {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        /* Left Side: Form styling */
        .contact-left {
          padding: 40px;
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .contact-left h2 {
          font-size: 1.8rem;
          font-family: var(--font-serif);
          margin-bottom: 8px;
        }

        .form-lead {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          gap: 20px;
        }

        .form-row.two-col {
          grid-template-columns: 1fr 1fr;
        }

        .form-row.three-col {
          grid-template-columns: 1.2fr 1fr 1fr;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, .form-group select, .form-group textarea {
          background: var(--bg-input);
          border: 1px solid var(--border);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 10px rgba(224, 90, 43, 0.15);
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-btn {
          margin-top: 10px;
          padding: 16px;
          font-size: 1rem;
        }

        /* Success Toast overlay */
        .submit-success-toast {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 9, 0.96);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
          gap: 16px;
        }

        .toast-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--success);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .toast-text h4 {
          font-size: 1.35rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--success);
          margin-bottom: 8px;
        }

        .toast-text p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 320px;
        }

        /* Right Side: Outlets List styling */
        .outlets-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .outlet-card {
          padding: 30px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .outlet-card:hover {
          border-color: rgba(224, 90, 43, 0.25);
          transform: translateY(-3px);
        }

        .outlet-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }

        .outlet-city-badge {
          align-self: flex-start;
          background: rgba(224, 90, 43, 0.1);
          color: var(--primary);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }

        .outlet-header h3 {
          font-size: 1.25rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: var(--text-primary);
        }

        .outlet-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .outlet-body p.addr {
          line-height: 1.5;
        }

        .outlet-body a:hover {
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .contact-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .form-row.two-col, .form-row.three-col {
            grid-template-columns: 1fr;
          }
          .contact-left {
            padding: 30px 20px;
          }
        }
      `}} />
    </div>
  );
}
