import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
//components
import Cart from './shared/Cart';
//Redux
import { clear, checkout } from '../redux/cart/cartAction';
import { Link } from 'react-router-dom';
//css
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {

    const state = useSelector(state => state.cartState);
    const dispatch =useDispatch();
    
    return (
        <div className = {styles.container}>
            <div className = {styles.cartContainer}>
            {state.selectedItems.map(item =><Cart key={item.id} data = {item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className = {styles.payments}>
                    <p><span>Total Items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total} $</p>
                    <div className = {styles.buttonContainer}>
                        <button className = {styles.clear} onClick={()=>{dispatch(clear())}}>Clear</button>
                        <button className = {styles.checkout}  onClick={()=>{dispatch(checkout())}}>Check Out</button>
                    </div>
                </div>
            }

           {
                !state.checkout && state.itemsCounter === 0 && <div className = {styles.complete} >
                    <h3>Watnt to Buy?</h3>
                    <Link to = "/products">Go to Shop</Link>
                </div> 
            }
            {
                state.checkout && <div className = {styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to = "/products">Buy More</Link>
                </div> 
            }
        </div>
    );
};

export default ShopCart;