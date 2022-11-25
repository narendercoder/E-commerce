import styled from "styled-components";
import CartItem from "../Components/CartItem";
import { useCartContext } from "../Context/Cart_Context";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Components/FormatPrice";

function Cart() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.length === 0 ? (
            <div className="empty-cart-section d-flex flex-column justify-content-center align-items-center">
              <img
                className="empty-cart-img"
                src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt=""
              />
              <p className="empty-cart-title mt-3">Your cart is empty!</p>
              <p className="empty-cart-des">Add items to it now.</p>
              <div className="cart-two-button">
                <NavLink to="/products">
                  <Button>continue Shopping</Button>
                </NavLink>
              </div>
            </div>
          ) : (
            cart.map((curElem) => {
              return (
                <>
                  <CartItem key={curElem.id} {...curElem} />
                </>
              );
            })
          )}
        </div>

        {cart.length === 0 ? (
          <>

          </>
        ) : (
          <>
            <hr />
            <div className="cart-two-button">
              <NavLink to="/products">
                <Button>continue Shopping</Button>
              </NavLink>
              <Button className="btn-clear" onClick={clearCart}>
                clear Cart
              </Button>
            </div>
          </>
        )}

        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Subtotal</p>
              <p><FormatPrice price={total_price}/></p>
            </div>
            <div>
              <p>Shipping Fee:</p>
              <p><FormatPrice price={shipping_fee}/></p>
            </div>
            <hr />
            <div>
              <p>Order total</p>
              <p><FormatPrice price={total_price + shipping_fee}/></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .empty-cart-section {
      .empty-cart-img {
        height: 162px;
      }
      .empty-cart-title {
        font-size: 1.8rem;
        font-weight: 900;
      }
      .empty-cart-des {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .color-style {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
      }
    }
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    .btn-clear {
      background-color: #e74c3c;
    }
  }
  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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
  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }
    div:last-child {
      background-color: #fafafa;
    }
    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }
    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;
      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
