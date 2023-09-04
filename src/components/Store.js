import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
//Redux
import { fetchProducts } from './../redux/products/productsAction';
//components
import Product from './shared/Product';
//css
import styles from '../components/Store.module.css';


const Store = () => {

    const dispatch = useDispatch();
    const productState = useSelector(state=>state.productsState);

    useEffect(()=>{
      if(!productState.products.length) dispatch(fetchProducts())
    },[])

    return (
        <div className = {styles.container}>
          {
            productState.loading ? 
            <h2>Loading ...</h2>:
            productState.error ?
            <p>Something went wrong.</p>:
            productState.products.map(product => <Product key ={product.id} productData={product}/>)
          } 
        </div>
    );
};

export default Store;