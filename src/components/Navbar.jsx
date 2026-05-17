import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onCartToggle }) {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect to make navbar glassmorphic on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo Brand */}
          <Link to="/" className="nav-brand">
            <span className="brand-pot flex-center">
              <Flame size={18} fill="var(--primary)" color="var(--primary)" />
            </span>
            <div className="brand-text">
              <span className="brand-title">Naidu Gari</span>
              <span className="brand-subtitle">Kunda Biryani</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/menu" className={isActive('/menu') ? 'active' : ''}>Menu</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>Our Story</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            </li>
          </ul>

          {/* Nav Controls */}
          <div className="nav-controls">
            {/* Basket Cart Trigger */}
            <button 
              className="cart-trigger flex-center"
              onClick={onCartToggle}
              aria-label="Open cart"
            >
              <ShoppingBasket size={22} />
              {cartCount > 0 && <span className="cart-badge flex-center">{cartCount}</span>}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="mobile-trigger flex-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/menu" className={isActive('/menu') ? 'active' : ''}>Explore Menu</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>Our Traditional Story</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Find Outlets</Link>
            </li>
            <li className="mobile-drawer-footer">
              <button 
                className="btn btn-primary btn-sm flex-center"
                style={{ width: '100%', padding: '12px' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCartToggle();
                }}
              >
                <ShoppingBasket size={18} />
                <span>View Basket ({cartCount})</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Styled Navbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          display: flex;
          align-items: center;
          z-index: 999;
          transition: var(--transition);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 9, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-color: var(--border);
          height: 70px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-pot {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 10px rgba(224, 90, 43, 0.3);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-serif);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: 0.02em;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          padding: 8px 0;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a.active {
          color: var(--primary);
        }

        .nav-links a.active::after {
          width: 100%;
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .cart-trigger {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          color: var(--text-primary);
          cursor: pointer;
          transition: var(--transition);
        }

        .cart-trigger:hover {
          background: var(--primary-glow);
          color: var(--primary);
          border-color: rgba(224, 90, 43, 0.4);
          transform: scale(1.05);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--primary);
          color: var(--text-primary);
          font-size: 0.7rem;
          font-weight: 800;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--bg-deep);
        }

        .mobile-trigger {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Drawer styling */
        .mobile-nav-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          width: 100%;
          background: rgba(10, 10, 9, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          transform: translateY(-120%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 998;
          padding: 24px;
        }

        .navbar.scrolled + .mobile-nav-drawer {
          top: 70px;
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          list-style: none;
        }

        .mobile-nav-links a {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .mobile-nav-links a.active {
          color: var(--primary);
          border-bottom-color: rgba(224, 90, 43, 0.3);
        }

        .mobile-drawer-footer {
          margin-top: 10px;
        }

        /* Responsiveness breakdown */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-trigger {
            display: flex;
          }
          .navbar {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
        }
      `}} />
    </>
  );
}
