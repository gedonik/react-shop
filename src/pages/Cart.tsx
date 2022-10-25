import React from 'react';
import Header from "../components/Header/Header.js";
import CartList from "../components/CartList/CartList.js";

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <Header/>
            <CartList/>
        </div>
    );
};

export default Cart;