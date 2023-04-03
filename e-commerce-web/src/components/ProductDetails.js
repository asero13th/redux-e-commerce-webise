import React, {useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {selectedProduct, removeselectedProduct} from "../redux/actions/ProductsAction";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch();
  let Product = useSelector((state) => state.product)
  console.log(Product)
  const fetchProductDetail = async (id) =>{

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data))
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() =>{
    if (productId && productId !== "")fetchProductDetail(productId)
    return () =>{
      dispatch(removeselectedProduct())
    }
  },[productId])

  
  return (
    <div className='ui grid container mt-5'>
      
    </div>
  )
}
export default ProductDetails;