import { type } from "@testing-library/user-event/dist/type"
import { setProducts, selectedProduct } from "../actions/ProductsAction"
import { actionTypes } from "../constants/action-type"

const intialeState = {
    products : []
}

export const productReducer = (state = intialeState, actions) => {
   switch(actions.type){
    case actionTypes.SET_PRODUCTS:
        return {...state, products: actions.payload }
    default:
        return state
   }
}