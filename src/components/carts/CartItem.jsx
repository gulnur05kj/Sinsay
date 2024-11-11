import styled from "styled-components";
import { Icons } from "../../assets";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ id, image, title, price }) => {
  const { increment, decrement, removeFromCart, carts } = useContext(CartContext);
  const cartItem = carts.find(item => item.id === id);

  return (
    <StyledDiv>
      <StyledLi>
        <StyledImg src={image} alt={title} />
        <StyledP>{title}</StyledP>
        <p>${(price * cartItem.quantity).toFixed(2)}</p>
        <StyledDiving>
          <WrapperActions>
            <StyledButton onClick={() => decrement(id)}>-</StyledButton>
            <Count>{cartItem.quantity}</Count>
            <StyledButton onClick={() => increment(id)}>+</StyledButton>
          </WrapperActions>
          <p>${(price * cartItem.quantity).toFixed(2)}</p>
        </StyledDiving>
      </StyledLi>
      <StyledIcons>
        <Icons.Korzina onClick={() => removeFromCart(id)} />
      </StyledIcons>
    </StyledDiv>
  );
};

const StyledDiving = styled.div`
  display: flex;
  gap: 20px;
  p {
    font-weight: 700;
    width: 70px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const StyledP = styled.p`
  margin-left: 80px;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 25px 30px;
  gap: 25px;
  p {
    font-weight: 600;
  }
`;

const Count = styled.span`
  font-size: 21px;
  font-weight: 500;
`;

const StyledImg = styled.img`
  width: 157px;
  height: 157px;
  border: 1px solid black;
  background-color: #000000;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid;
`;

const WrapperActions = styled.div`
  display: flex;
  margin-left: 40px;
  background-color: #cfc9cb;
  width: 110px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 31px;
  font-weight: 300;
  background-color: transparent;
`;

const StyledIcons = styled.div`
  margin-left: 60px;
  margin-top: 30px;
`;
