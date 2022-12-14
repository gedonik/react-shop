import React from 'react';
import Header from "../components/Header/Header.jsx";
import CartList from "../components/CartList/CartList.jsx";

const Cart = () => {
    return (
        <div className="cart-wrapper">
            <Header/>
            <CartList/>
        </div>
    );
};

export default Cart;