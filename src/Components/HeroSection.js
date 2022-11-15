import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";

function HeroSection({ myData }) {
  const { name } = myData;

  return (
    <Wrapper >
      <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to</p>
          <h1>{name}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            magni, adipisci totam quas consequatur dignissimos tempora incidunt
            a ipsa fugit facere, obcaecati laborum? Dolor itaque eius
            perferendis nam, dignissimos voluptatum.
          </p>
          <NavLink>
            <Button></Button>
          </NavLink>
        </div>
        <div className="hero-section-image">
          <figure>
            <img
              src="images/ecommerce.jpg"
              alt="hero-section-img"
              className="img-style"
            />
          </figure>
        </div>
      </div>
      </div>
      
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 9rem 0;
  /* background-color: #f9f3f0; */

  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .herosection-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(53, 119, 240, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      left: 0;
      top: 10%;
      background-color: rgba(53, 119, 240, 0.4);
    }
  }
`;
export default HeroSection;