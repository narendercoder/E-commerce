import React from "react";
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Components/FormatPrice"
import { useCartContext } from "../Context/Cart_Context";
import CartAmountToggle from "./CartAmountToggle";
import {NavLink} from "react-router-dom";

const CartItem = ({ id, name, image, color, price, amount }) => {
   const { removeItem, setDecrease, setIncrease } = useCartContext();
    

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
        <NavLink to={`/singleproduct/${id.split("#000000")[0]}`}>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </NavLink>
        </div>

        <div>
        <NavLink to={`/singleproduct/${id.split("#000000")[0]}`}>
        <p>{name}</p>
        </NavLink>
          
          <p className="color-div">
            <span>Color</span>
            <span
              className="color-style"
              style={{ backgroundColor: color }}
            ></span>
          </p>
        </div>

      </div>

      <div className="cart-hide">
        <p><FormatPrice price={price} /></p>
      </div>

      <CartAmountToggle
      amount={amount}
      setDecrease={()=>setDecrease(id)}
      setIncrease={()=>setIncrease(id)} />

      <div className="cart-hide">
        <p><FormatPrice price={price*amount} /></p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)}/>
      </div>

    </div>
  );
};

export default CartItem;
