import React, { useContext } from "react";
import styled from "styled-components";
import { Input } from "./UI/Input";
import { Icons } from "../assets/index";
import { Button } from "./UI/Button";
import { AuthContext } from "../context/LoginContext";

export const Footer = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  return (
    <StyledFooter>
      <StyledNewsletter>
        <StyledLink href="#"> Contact Us</StyledLink>
        <StyledDivs>
          <StyledLink href="#">+7784568930283</StyledLink>
          <StyledLink href="#">Sinseybeaut@gmail.com</StyledLink>
          <StyledLink href="#">
            Monday-Friday <br />
            10:00 am to 17:00 pm
          </StyledLink>
        </StyledDivs>
        <StyledDIV>
          <Icons.Twitter />
          <Icons.Facebook />
          <Icons.Instagram />
        </StyledDIV>
        <StyledOffical href="#">
          © 2023 SINSEY Official. Powered by Shopify
        </StyledOffical>
      </StyledNewsletter>
      <StyledNewsletter>
        <StyledLink href="#">Shop</StyledLink>
        <StyledDivs>
          <StyledLink href="#" onClick={() => setIsLoggedIn("about")}>
            About
          </StyledLink>
          <StyledLink href="#">Product</StyledLink>
          <StyledLink href="#">Reviews</StyledLink>
          <StyledLink href="#">Contact</StyledLink>
        </StyledDivs>
      </StyledNewsletter>
      <StyledNewsletter>
        <StyledLink href="#">Newsletter</StyledLink>
        <StyledDivs>
          <StyledNav href="#">
            Sign up for exclusive offers ,original
            <br /> stories,events and more.
          </StyledNav>
          <StyledInput placeholder="Enter email" />
          <StyledButton>Subscribe</StyledButton>
        </StyledDivs>
      </StyledNewsletter>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 1, 280px;
  height: 360;
  padding: 47px 92px 48px 92px;
  background-color: #cfc9cb;
  display: flex;
  justify-content: space-around;
`;
const StyledOffical = styled.a`
  font-weight: 400px;
  font-size: 14px;
  line-height: 19.6px;
  color: #676869;
  padding-top: 30px;
`;
const StyledDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledDIV = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  gap: 31px;
`;
const StyledInput = styled(Input)`
  width: 310px;
  height: 48.19px;
  max-width: 310px;
  background-color: #ffffff;
  padding-left: 16px;
  font-weight: 400px;
  font-size: 16px;
  line-height: 19px;
  color: #171717;
  border-radius: 3px;
  border: none;
`;

const StyledButton = styled(Button)`
  width: 130px;
  height: 49px;
  border: 1px;
  border: none;
  background-color: #000000;
  color: white;
`;
const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledLink = styled.a`
  font-weight: 400;
  font-size: 21px;
  line-height: 25.2px;
  align-items: center;
  color: #000000;
`;

const StyledNav = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #676869;
`;
