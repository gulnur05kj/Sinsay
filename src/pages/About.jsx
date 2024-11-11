import React, { useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/image/bg.png";
import rz from "../assets/image/rz.png";
import mma from "../assets/image/mma.png";
import { Icons } from "../assets";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <StyledDifing>
        <StyleDiv>
          <StyleHeading>Homepage - About</StyleHeading>
          <div>
            <Styleh1>ABOUT SINSEY</Styleh1>
            <Stylewrap data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <p>
                I wanted to create a radical new <br />
                skincare brand. For too long, the world <br />
                of skincare had been defined by <br />
                exaggerated promises and suspect <br />
                chemicals. After gathering a team of
                <br />
                health and skincare experts, we set out <br />
                together to challenge the industry. That
                <br />
                meant going back to basics.
                <br />
              </p>
              <br />
              <p>
                We wanted to take an autonomous <br />
                approach. Working from the ground up, <br />
                we built an online-only, direct to
                <br />
                customer model, which means we can <br />
                sell premium products with the highest <br />
                quality ingredients at a great price. <br />
              </p>
              <br />
              <p>
                Staying true to our philosophy of <br />
                simplicity and transparency, we intend <br />
                to remain uncompromising in our <br />
                mission to offer consumers a premium <br />
                natural skincare alternative. <br />
                <Stylespan>Ning Li, Typology Founder</Stylespan>
              </p>
            </Stylewrap>
          </div>
        </StyleDiv>
      </StyledDifing>
      <Stylep>
        <Stylexr data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1>OUR FORMULATIONS</h1> <br />
          <p>
            Our philosophy is not to add anything to <br />
            our products to make them stand out; <br />
            instead we pare them back and distil each <br />
            formula down to the most-essential,
            <br />
            natural active ingredients. <br />
          </p>
          <br />
          <p>
            We're tireless in our mission to hunt down <br />
            the best ingredients.Whether in France, <br />
            around Europe or further afield in search of <br />
            exotic extracts,they must be sourced from <br />
            sustainable farms using gentle extraction <br />
            techniques.
          </p>
          <br />
          <p>
            Our formulas are simple, considered and <br />
            effective. Provenance is important to us, so <br />
            you'll always know where our ingredients <br />
            come from.And we'll even show you how <br />
            to create your own skincare formulations <br />
            along the way.
          </p>
          <br />
          <p>
            All formulations are 100% French. Our <br />
            partner laboratories in Bergerac, Aix en <br />
            Provence and Compiègne work with us to <br />
            put their French skincare heritage to good <br />
            use. <br />
          </p>
        </Stylexr>
        <Styleriz></Styleriz>
      </Stylep>
      <Stylegment>
        <StyleMma></StyleMma>
        <StyleText data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Styleship>B CORP CERTIFICATION</Styleship> <br /> <br />
          <Stylekar>
            <p>
              Since it began, our company has strived <br />
              to become more respectful of the <br />
              environment, have a positive impact on <br />
              society, and support customers with <br />
              straight-talking transparency. <br />
            </p>
            <br />
            <p>
              Founded in 2006, the B Corp movement <br />
              brings together companies with a <br />
              common objective: to balance purpose <br />
              and profit by integrating social and <br />
              environmental commitments into their <br />
              economic models. <br />
            </p>
            <br />
            <p>
              The idea is not to become the best in the <br />
              world, but to try to be better for the <br />
              world. B Corp certification allows us to
              <br />
              act on our need to have a positive impact
              <br />
              within our industry and society through
              <br />
              its implementation of concrete guidance
              <br />
              and assessments.
              <br />
            </p>
          </Stylekar>
        </StyleText>
      </Stylegment>
      <div>
        <Stylemobile>
          We investigate the right ingredients for <br />
          each skin typology. Our formulations are <br />
          concise, concentrated, and made in France. <br />
        </Stylemobile>

        <StylemyI>
          <div>
            <Icons.Vegan />
          </div>
          <div>
            <Icons.Bitcoin />
          </div>
          <div>
            <Icons.Vegan />
          </div>
        </StylemyI>
      </div>
    </div>
  );
};

const StyleHeading = styled.p`
  font-size: 21px;
  font-weight: 400;
  padding: 109px 0 0 30px;
`;
const StyleDiv = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  width: 1200px;
  height: 900px;
`;
const Styleh1 = styled.h1`
  font-size: 61px;
  font-weight: 500;
`;

const Stylewrap = styled.div`
  font-size: 22px;
  text-align: right;
`;
const Stylespan = styled.span`
  font-size: 21px;
  font-weight: 400;
`;
const StyledDifing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
//
const Stylexr = styled.div`
  text-align: left;
  white-space: nowrap;
`;
const Styleriz = styled.div`
  background-image: url(${rz});
  background-repeat: no-repeat;
  width: 1200px;
  height: 640px;
`;
const Stylep = styled.div`
  display: flex;
  margin-left: 315px;
  gap: 40px;
`;
//
const StyleMma = styled.div`
  background-image: url(${mma});
  background-repeat: no-repeat;
  width: 560px;
  height: 650px;
`;
const Stylegment = styled.div`
  display: flex;
  padding-left: 152px;
  gap: 44px;
`;
const StyleText = styled.div`
  padding-top: 94px;
`;
const Styleship = styled.h1`
  font-size: 41px;
  font-weight: 500;
  color: #000000;
`;
const Stylekar = styled.div`
  padding-left: 55px;
`;
//
const Stylemobile = styled.p`
  padding: 50px 0 0 550px;
  font-size: 27px;
  font-weight: 400;
`;
const StylemyI = styled.div`
  display: flex;
  gap: 120px;
  padding: 40px 0 0 420px;
`;
