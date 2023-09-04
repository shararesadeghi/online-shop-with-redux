import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//functions
import { shorten, isIncCart, quantityCount } from '../../helper/functions';
//context
import { CartContext } from '../../context/CartContextProvider';
//icons
import trashIcon from '../../assets/icons/trash.svg';
//css
import styles from '../shared/Product.module.css';

const Product = ({productData}) => {
    const {image, title, price, id} = productData;
    const {state, dispatch} = useContext(CartContext);
    return (
        <div className = {styles.container}>
           <img className = {styles.cardImage} src = {image} alt = "product"/> 
           <h3>{shorten(title)}</h3>
           <p>{`${price} $`}</p>
           <div className = {styles.linkContainer}>
               <Link to = {`/products/${id}`}>Details</Link>
               <div className = {styles.buttonContainer}>
               {quantityCount(state, id) ===1 && <button className = {styles.smallButton} onClick = {() => dispatch({type:"REMOVE_ITEM", payload: productData})}><img src = {trashIcon} alt = "trash"/></button>}
               {quantityCount(state, id) > 1 && <button className = {styles.smallButton} onClick = {() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
               {quantityCount(state, id) > 0 && <span className = {styles.counter}>{quantityCount(state,id)}</span> }
               {
               isIncCart(state, id) ? 
               <button className = {styles.smallButton} onClick = {() => dispatch({type: "INCREASE", payload: productData})}>+</button>:
               <button onClick = {() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
               }
               </div>
           </div>
        </div>
    );
};

export default Product;