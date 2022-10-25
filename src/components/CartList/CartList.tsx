import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../CartItem/CartItem.tsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {clearCart} from "../../redux/slices/cartSlice.js";
import {Button} from 'antd';

import './cartList.scss';

const CartList: React.FC = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

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
            {cart.length ?
                <Button className="cart-list__remove" onClick={() => dispatch(clearCart())} type="primary" danger>Clear All</Button>
                : ''}
        </div>
    );
};

export default memo(CartList);