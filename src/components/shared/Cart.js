import React,{useContext} from 'react';
//context
import { CartContext } from '../../context/CartContextProvider';
//functions
import { shorten } from '../../helper/functions';
//icons
import trashIcon from '../../assets/icons/trash.svg';
//css
import styles from '../shared/Cart.module.css';

const Cart = ({data}) => {

    const {dispatch} = useContext(CartContext);
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
               <button onClick = {()=>{dispatch({type:"DEACREASE",payload:data})}}>-</button>:
               <button onClick = {()=>{dispatch({type:"REMOVE_ITEM",payload:data})}}><img src={trashIcon} alt="trash"/></button>
               }
               <button onClick = {()=>{dispatch({type:"INCREASE",payload:data})}}>+</button>
           </div>
        </div>
    );
};

export default Cart;