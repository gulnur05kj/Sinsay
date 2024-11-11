import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";

export const CartList = () => {
  const { carts, removeFromCart, subtotal } = useContext(CartContext);


  return (
    <>
      <StyledLink>
        <StyledUl>
          <StyledH1>Cart</StyledH1>
          <StyledConst>
            <StyledProducts>
              <p>Product</p>
            </StyledProducts>
            <StyledDiv>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </StyledDiv>
          </StyledConst>
        </StyledUl>
        {carts?.map((item) => (
          <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
        ))}
        <Subtotal>
          <span>Subtotal: ${subtotal.toFixed(2)}</span> 
          <p>Tax included. Shipping calculated at checkout.</p>
          <StyledButton>Checkout</StyledButton>
        </Subtotal>
      </StyledLink>
    </>
  );
};

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: black;
  border: none;
  font-size: 20px;
  color: #ffffff;

  &:hover {
    background-color: #e61b14;
  }
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  margin-top: 50px;

  span {
    font-weight: 500;
    font-size: 25px;
  }
`;

const StyledLink = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 150px;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 120px;
  margin-top: 40px;
  p {
    font-size: 20px;
  }
`;
const StyledUl = styled.div`
  width: 1200px;
  border-bottom: 2px solid black;
`;
const StyledConst = styled.div`
  display: flex;
  justify-content: space-around;
  p {
    font-size: 20px;
  }
`;
const StyledH1 = styled.h1`
  font-size: 61px;
  font-weight: 500;
  text-align: center;
`;
const StyledProducts = styled.div`
  margin-top: 40px;
`;
