import { useContext } from "react";
import { AuthContext } from "../context/LoginContext";
import { Login } from "../components/auth/Login";
import { MainPage } from "../pages/MainPage";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { FavoritePage } from "../pages/FavoritePage";
import { About } from "../pages/About";
import { OrderPage } from "../pages/OrderPage";

export const MainLayout = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? (
          <MainPage />
        ) : isLoggedIn === "cart" ? (
          <OrderPage />
        ) : isLoggedIn === "favorite" ? (
          <FavoritePage />
        ) : isLoggedIn == "about" ? (
          <About />
        ) : (
          <Login />
        )}
        <Footer />
      </StyledCono>
    </div>
  );
};
const StyledCono = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
