import React, {createContext, useReducer} from 'react';
import {add, remove} from "../pages/actionCreators";
import {initialState, reducer} from "../reducers";

export const CartC = createContext(null)

const CartContext = ({children}) => {

    const [store, dispatch] = useReducer(reducer, initialState);

    const handleAddToCart = (product) => {
        dispatch(add(product))
    }

    const handleRemoveFromCart = (product) => {
        dispatch(remove(product))
    }

    const value = {
        store,
        handleAddToCart,
        handleRemoveFromCart
    }
    return (
        <CartC.Provider value={value}>
            {children}
        </CartC.Provider>
    );
};

export default CartContext;