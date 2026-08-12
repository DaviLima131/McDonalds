import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Product } from '../data/produtos';
 
type CartItem = {
  product: Product;
  quantity: number;
};
 
type CartContextType = {
  items: CartItem[];
  itemCount: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  formatCurrency: (value: number) => string;
};
 
const CartContext = createContext<CartContextType | undefined>(undefined);
 
function parsePrice(value: string): number {
  const normalized = value
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.')
    .trim();
 
  return Number(normalized || 0);
}
 
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
 
  const addItem = (product: Product, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);
 
      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
 
      return [...currentItems, { product, quantity }];
    });
  };
 
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
 
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };
 
  const removeItem = (productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  };
 
  const clearCart = () => {
    setItems([]);
  };
 
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + parsePrice(item.product.price) * item.quantity, 0);
  }, [items]);
 
  const itemCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);
 
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
 
  const value = useMemo(
    () => ({
      items,
      itemCount,
      total,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      formatCurrency,
    }),
    [items, itemCount, total],
  );
 
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
 
export function useCart() {
  const context = useContext(CartContext);
 
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
 
  return context;
}