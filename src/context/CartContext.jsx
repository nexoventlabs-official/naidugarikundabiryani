import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('kunda_biryani_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('kunda_biryani_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, customizations = {}) => {
    setCart((prevCart) => {
      // Create a unique key for the item based on its ID and active customizations
      const customString = Object.entries(customizations)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([key, val]) => `${key}:${val}`)
        .join('|');
      
      const cartItemId = `${product.id}-${customString}`;

      // Check if product is already in cart with EXACT same customizations
      const existingItemIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Calculate dynamic customized price based on options
        let extraCost = 0;
        if (customizations.extraEgg) extraCost += 15;
        if (customizations.doubleMasala) extraCost += 20;
        if (customizations.clayPotKeep) extraCost += 49; // keeping the clay pot!
        
        return [
          ...prevCart,
          {
            ...product,
            cartItemId,
            quantity,
            customizations,
            basePrice: product.price,
            price: product.price + extraCost,
          },
        ];
      }
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + amount;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
