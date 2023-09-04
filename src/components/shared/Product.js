import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
//functions
import { shorten, isIncCart, quantityCount } from '../../helper/finctions';
//context
import { addItem,removeItem,increase,decrease } from '../../redux/cart/cartAction';
//icons
import trashIcon from '../../assets/icons/trash.svg';
//css
import styles from '../shared/Product.module.css';

const Product = ({productData}) => {
    const {image, title, price, id} = productData;
    const state = useSelector(state=>state.cartState);
    const dispatch = useDispatch();
    
    return (
        <div className = {styles.container}>
           <img className = {styles.cardImage} src = {image} alt = "product"/> 
           <h3>{shorten(title)}</h3>
           <p>{`${price} $`}</p>
           <div className = {styles.linkContainer}>
               <Link to = {`/products/${id}`}>Details</Link>
               <div className = {styles.buttonContainer}>
               {quantityCount(state, id) ===1 && <button className = {styles.smallButton} onClick = {() => dispatch(removeItem(productData))}><img src = {trashIcon} alt = "trash"/></button>}
               {quantityCount(state, id) > 1 && <button className = {styles.smallButton} onClick = {() => dispatch(decrease(productData))}>-</button>}
               {quantityCount(state, id) > 0 && <span className = {styles.counter}>{quantityCount(state,id)}</span> }
               {
               isIncCart(state, id) ? 
               <button className = {styles.smallButton} onClick = {() => dispatch(increase(productData))}>+</button>:
               <button onClick = {() => dispatch(addItem(productData))}>Add to Cart</button>
               }
               </div>
           </div>
        </div>
    );
};

export default Product;