import { useContext } from "react";
import Banner from "../components/Banner";
import { ProductsList } from "../components/UI/ProductsList";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext";
import { Icons } from "../assets";

export const MainPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Banner />
      <StyledDiving>
        
        <h1>Face care <Icons.Twitter/></h1>
        <ProductsList products={products} />
      </StyledDiving>
    </div>
  );
};
const StyledDiving = styled.div`
   display: flex;
  flex-direction: column;

 h1 {
    padding: 30px 120px;
    font-size: 47px;
    color: #000000;
    font-weight: 500;
  }
`;
