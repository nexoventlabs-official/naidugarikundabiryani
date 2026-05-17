import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBtn() {
  const whatsappNumber = '919876543210'; // Traditional mockup number
  const message = encodeURIComponent("Hello Naidu Gari team! I would like to place a Kunda Biryani delivery order.");
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      className="pulse-glow"
      title="Order on WhatsApp"
    >
      <MessageCircle size={28} color="#ffffff" strokeWidth={2.5} />
      <span style={styles.tooltip}>Order on WhatsApp</span>
    </a>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    backgroundColor: '#25D366', // Authentic WhatsApp Green
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    zIndex: 9999,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  tooltip: {
    position: 'absolute',
    right: '72px',
    backgroundColor: 'rgba(21, 20, 19, 0.95)',
    color: '#f5f2eb',
    padding: '8px 14px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    border: '1px solid #2c2925',
    whiteSpace: 'nowrap',
    opacity: 0,
    transform: 'translateX(10px)',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
  }
};

// CSS trick: display tooltip on hover
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  styleSheet.insertRule(`
    a[title="Order on WhatsApp"]:hover span {
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
    a[title="Order on WhatsApp"]:hover {
      transform: scale(1.08) translateY(-3px) !important;
    }
  `, styleSheet.cssRules.length);
}
