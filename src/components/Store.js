import React,{useContext} from 'react';
//Context
import { ProductsContext } from './../context/ProductContextProvider';
//components
import Product from './shared/Product';
//css
import styles from '../components/Store.module.css';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div className = {styles.container}>
          {products.map(product => <Product key = {product.id} productData = {product}/>)}  
        </div>
    );
};

export default Store;