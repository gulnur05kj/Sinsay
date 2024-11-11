import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, children, type, ...props }) => {
  return (
    <StyledButton onClick={onClick} type={type} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
   width: 130px;
  height: 49px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 15px;
  transition: 0.3s; 
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 30px 10px rgba(0, 0, 0, 0.2); 
  }
  &:active {
    transform: translateY(+10px); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }
`;
