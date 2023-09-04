import React from 'react';
import {useDispatch} from 'react-redux';
//Redux Actions
import { increase,decrease,removeItem } from '../../redux/cart/cartAction';
//functions
import { shorten } from '../../helper/finctions';
//icons
import trashIcon from '../../assets/icons/trash.svg';
//css
import styles from '../shared/Cart.module.css';

const Cart = ({data}) => {

    const dispatch = useDispatch();
    const {title,image,quantity,price} = data;

    return (
        <div className = {styles.container}>
            <img className = {styles.productImage} src = {image} alt = "product"/>
           <div className = {styles.data}>
               <h3>{shorten(title)}</h3>
               <p>{price} $</p>
           </div> 
           <div>
               <span className = {styles.quantity}>{quantity}</span>
               </div>
           <div className = {styles.buttonContainer}>
               {quantity > 1 ?
               <button onClick = {()=>{dispatch(decrease(data))}}>-</button>:
               <button onClick = {()=>{dispatch(removeItem(data))}}><img src={trashIcon} alt="trash"/></button>
               }
               <button onClick = {()=>{dispatch(increase(data))}}>+</button>
           </div>
        </div>
    );
};

export default Cart;