import {  useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/ProductsAction"
function useFetchApi(url) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        dispatch(setProducts(response.data))
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [url]);
}
export default useFetchApi;