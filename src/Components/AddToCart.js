import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../Styles/Button";
import { useCartContext } from "../Context/Cart_Context";


const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const {id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1)

  const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  return (
    <Wrapper>
      <div className="colors">
        <p className="d-flex justify-content-start align-items-center ">
          Colors:{" "}
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>
      <CartAmountToggle
      amount={amount}
      setDecrease={setDecrease}
      setIncrease={setIncrease} />

      <NavLink to="/cart"
      onClick={()=> addToCart(id, color, amount, product)}
      >
        <Button className="btn">
          Add To Cart
        </Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .btnStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
