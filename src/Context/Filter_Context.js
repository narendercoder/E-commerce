import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import filterReducer from "../reducer/filterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
}

export const FilterContextProvider = ({children}) => {

   const {products} = useProductContext();

   const [state, dispatch] = useReducer(filterReducer, initialState);

   //to set grid view
   const setGridView = () =>{
    return dispatch({type: "SET_GRIDVIEW"})
   }

   useEffect(()=>{
    dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
   },[products])

   return (
   <FilterContext.Provider value={{...state, setGridView}}>
   {children}
   </FilterContext.Provider>
   )
}
export const useFilterContext = () =>{
    return useContext(FilterContext);
}