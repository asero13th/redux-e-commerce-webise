import React from 'react'
import { useSelector } from 'react-redux';
import useFetchApi from './useFetchApi';
import ProductComponent from './ProductComponent';

const BASE_URL = "https://fakestoreapi.com/products/";

const ProductListing = () => {
    const products = useSelector((state) => state)
    useFetchApi(BASE_URL)
  return (
    <div className="ui grid container  mt-5">
        <ProductComponent />
    </div>
  )
}

export default ProductListing