import styled from "styled-components";
import { ProductsItem } from "./ProductsItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/LoginContext";
import { ProductContext } from "../../context/ProductContext";

export const ProductsList = ({ products = [], favorite }) => {
  const { AddToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { onAddToFavorite } = useContext(ProductContext);
  return (
    <StyledContainer>
      {products.map((card) => (
        <ProductsItem
          key={card.id}
          onAddToCart={AddToCart}
          {...card}
          AddToFaverit={onAddToFavorite}
          favoritePath={isLoggedIn}
        />
      ))}
    </StyledContainer>
  );
};
const StyledContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 120px 20px;
  padding: 100px;
`;
