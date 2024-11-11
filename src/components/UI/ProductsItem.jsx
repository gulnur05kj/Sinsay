import React, { useContext } from "react";
import styled from "styled-components";
import { Icons } from "../../assets";
import { Button } from "./Button";
export const ProductsItem = ({
  image,
  title,
  price,
  id,
  onAddToCart,
  favorite,
  favoritePath,
  AddToFaverit,
}) => {
  return (
    <>
      <StyledCard>
        <Styledimage src={image} alt={title} />
        <p>{title} </p>
        <StyledSvgDiv>
          <b>${price}</b>

          {favorite ? (
            <Icons.BlackHeart
              onClick={() => {
                AddToFaverit(id);
              }}
            />
          ) : (
            <Icons.Heart
              onClick={() => {
                AddToFaverit(id);
              }}
            />
          )}
        </StyledSvgDiv>
        <Button
          onClick={() => {
            onAddToCart({ id, title, image, price, favorite });
          }}
        >
          Add to cart
        </Button>
        {favoritePath === "favorite" && (
          <StyledDelete onClick={() => AddToFaverit(id)}>
            <Icons.Korzina />
            delete
          </StyledDelete>
        )}
      </StyledCard>
    </>
  );
};

const Styledimage = styled.img`
  width: 305px;
  height: 305px;
  border: 2px solid #BCBCBC;
  border-radius: 10px;
  &:hover {
    border: none;
    -webkit-box-shadow: 4px 1px 24px 17px rgba(9, 9, 9, 0.18);
    -moz-box-shadow: 4px 1px 24px 17px rgba(9, 9, 9, 0.18);
    box-shadow: 4px 1px 24px 17px rgba(9, 9, 9, 0.18);
  }
`;

const StyledCard = styled.li`
  width: 304px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  p {
    color: #000000;
    font-size: 15.5px;
    line-height: 18.6px;
    font-weight: 400;
    text-align: center;
  }
  button {
    width: 304px;
    height: 50px;
    background-color: #000000;
    font-size: 17px;
    color: #ffffff;
    border: none;
  }
`;
const StyledSvgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  b {
    color: #000000;
    font-size: 15.5px;
    line-height: 18.6px;
    font-weight: 600;
  }
`;
const StyledDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  cursor: pointer;
`;
