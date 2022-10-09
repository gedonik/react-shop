import React, {memo} from 'react';
import {CloseOutlined} from '@ant-design/icons';
import {reduceQuantity, riseQuantity, removeProduct} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";

import './cartItem.scss';

const CartItem = ({id, title, image, price, quantity}) => {
    const dispatch = useDispatch();

    return (
        <li className="cart-item">
            <article className="cart-item__wrapper">
                <img className="cart-item__img" src={image} alt={title}/>
                <span className="cart-item__title">{title}</span>
                <span className="cart-item__price">{price} $</span>
                <div className="cart-item__quantity-wrapper quantity">
                    <button onClick={() => dispatch(reduceQuantity(id))} className="quantity__add quantity__btn">-</button>
                    <input className="quantity__value" type="text" value={quantity} readOnly/>
                    <button onClick={() => dispatch(riseQuantity(id))} className="quantity__remove quantity__btn">+</button>
                </div>
                <span className="cart-item__total"><strong>{price * quantity} $</strong></span>
                <button onClick={() => dispatch(removeProduct(id))} className="cart-item__remove"><CloseOutlined/>
                </button>
            </article>
        </li>
    );
};

export default memo(CartItem);