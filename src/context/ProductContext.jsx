import { createContext, useState } from "react";
import { PRODUCTS } from "../utils/constants/products";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const AddToFavoriteHandler = (id) => {
    const currentMap = products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setProducts(currentMap)
  };

  return (
    <ProductContext.Provider value={{ products, onAddToFavorite: AddToFavoriteHandler }}>
      {children}
    </ProductContext.Provider>
  );
};
