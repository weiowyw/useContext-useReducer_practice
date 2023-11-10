import {ADD_TO_CART, REMOVE_FROM_CART} from "./constants";

export const add = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const remove = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product
})