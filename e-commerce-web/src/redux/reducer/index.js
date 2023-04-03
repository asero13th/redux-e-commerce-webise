import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./ProductsReducer";

const reducers = combineReducers({
    allProduct : productReducer,
    prodct: selectedProductReducer,
})

export default reducers;