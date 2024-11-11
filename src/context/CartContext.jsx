import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const subtotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increment = (id) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCarts((prevCarts) =>
      prevCarts.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const AddToCart = (newProduct) => {
    const isDataPreset = carts.find((v) => v.id === newProduct.id);
    if (!isDataPreset) {
      setCarts((product) => [
        ...product,
        { ...newProduct, quantity: 1 },
      ]);
    } else {
      const currentMap = carts.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCarts(currentMap);
    }
  };

  const removeFromCart = (id) => {
    const updatedCarts = carts.filter((item) => item.id !== id);
    setCarts(updatedCarts);
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        AddToCart,
        removeFromCart,
        increment,
        decrement,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
