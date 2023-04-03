import { actionTypes } from "../constants/action-type";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeselectedProduct = (product) => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product,
    }
}
export const makerequest = (product) => {
    return {
        type: actionTypes.makerequest,
    }
}