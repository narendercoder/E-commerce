import React from "react";
import styled from "styled-components";
import { FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <>
      <span key={index} className="product-rating">
        {
          stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>

     </>
      
    );
  });
  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStar}
        <p>{reviews} customer reviews</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .product-rating .icon {
      font-size: 2rem;
      color: #ffa500 !important;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;
