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

export const selectedProductReducer = (state = {}, action) =>{
    switch(action.type){
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state
    }
}
