import React from 'react';
import classes from './Card.module.css';

const Cart = (props) => {
return <div className={classes.cart}> {props.children}</div>
}

export default Cart;