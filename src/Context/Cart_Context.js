import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();



const getLocalCartData = () =>{
  let localCartData = localStorage.getItem("StoreCart");
  if(localCartData === []){
    return []
  }
  else {
    return JSON.parse(localCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

    const removeItem = (id) => {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    };


    const clearCart = () =>{
        dispatch({ type: "CLEAR_CART"})
    }


    //ivreament and decrement
     const setDecrease = (id) => {
        dispatch({type: "SET_DECREMENT", payload: id})
      };
    
      const setIncrease = (id) => {
        dispatch({type: "SET_INCREMENT", payload: id})
      }

    //add data to localStorage
    //get vs set

    useEffect(() => {
      // dispatch({type: "CART_TOTAL_ITEM"});
      // dispatch({type: "CART_TOTAL_PRICE"})
      dispatch({type: "CART_ITEM_PRICE_TOTAL"})
     localStorage.setItem("StoreCart", JSON.stringify(state.cart));
    }, [state.cart])
    

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
