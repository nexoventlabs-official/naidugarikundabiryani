import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Context
import { CartProvider } from './context/CartContext';

// Core Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppBtn from './components/WhatsAppBtn';

// Page Components
import Home from './pages/Home';
import Menu from './pages/Menu';
import ItemDetails from './pages/ItemDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/StorePolicy';
import TermsConditions from './pages/TermsConditions';

// Custom Helper: Auto-scrolls to the top of page on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout Wrapper to manage cart open state & path rendering
function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      
      {/* 1. Global Navbar */}
      <Navbar onCartToggle={() => setIsCartOpen(!isCartOpen)} />

      {/* 2. Slide-out Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* 3. Floating WhatsApp Support */}
      <WhatsAppBtn />

      {/* 4. Page Content Layout Container */}
      <main style={{ minHeight: 'calc(100vh - 350px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<ItemDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>

      {/* 5. Global Heritage Footer */}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
