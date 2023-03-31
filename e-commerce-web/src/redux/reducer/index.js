import { combineReducers } from "redux";
import { productReducer } from "./ProductsReducer";

const reducers = combineReducers({
    allProduct : productReducer,
})

export default reducers;