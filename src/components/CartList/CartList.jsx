import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "../CartItem/CartItem.jsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './cartList.scss';

const CartList = () => {
    const cart = useSelector(state => state.dataApi.cart);

    return (
        <div className="container">
            <ul className="cart-list">
                <TransitionGroup>
                {cart.length ?
                    cart.map(item =>
                        <CSSTransition
                            key={item.title}
                            timeout={300}
                            classNames="cart-animate"
                        >
                        <CartItem {...item} key={item.id}/>
                        </CSSTransition>)
                    : <h2 className="loading">No Product in cart</h2>}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default CartList;