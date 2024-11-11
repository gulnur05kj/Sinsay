import styled from "styled-components";
import { ProductsList } from "../components/UI/ProductsList";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const FavoritePage = () => {
  const { products } = useContext(ProductContext);

  const favoriteProducts = products.filter((product) => product.favorite);
  return (
    <StyledContainer>
      <Title>Wish list</Title>
      <ProductsList products={favoriteProducts} />
    </StyledContainer>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 61px;
  font-weight: 400;
  color: #000;
`;
const StyledContainer = styled.div`
  padding: 150px 0px;

`