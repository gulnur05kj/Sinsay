import React, { useState, useEffect } from "react";
import Restor1 from "../icons/Restor.png";
import Restor2 from "../assets/image/banerpng.png";
import Restor3 from "../assets/image/crems.png";
import styled from "styled-components";

const Banner = () => {
  const banners = [Restor2, Restor1, Restor3];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <div>
      <BannerStyle src={banners[currentBannerIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;

const BannerStyle = styled.img`
  width: 100%;
  height: 100vh;
`;

// const TextStyle = styled.h2`
//   font-family: Montserrat;
//   font-size: 61px;
//   font-weight: 500;
//   line-height: 73.2px;
//   align-items: center;
//   color: #000000;
//   position: relative;
//   bottom: 280px;
//   left: 100px;
//   width: 45vh;
//   height: 0%;
//   display: block;
//   overflow: hidden;
//   width: 30%;
// `;
