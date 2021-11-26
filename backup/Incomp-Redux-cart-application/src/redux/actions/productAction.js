 import {ActionTypes} from "../constants/action-types";
 export const setProducts =(products)=>{
     return{
         type: ActionTypes.SET_PRODUCTS,
         playload:products,
     }; 
 };

 export const selectedProduct =(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        playload:product,
    };
};