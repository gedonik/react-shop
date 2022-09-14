import React, {useState} from 'react';
import {CloseOutlined} from '@ant-design/icons';
import {removeProduct} from "../../redux/slices/dataApiSlice.js";

import './cartItem.scss';
import {useDispatch, useSelector} from "react-redux";

const CartItem = ({id, title, image, price, quantity}) => {
    const cart = useSelector(state => state.dataApi.cart);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(quantity);

    const riseQuantity = () => {
        const [findItem] = cart.filter(item => item.id === id);

        if (findItem.quantity >= 0) {
            setAmount(amount + 1);
        }
    }

    const reduceQuantity = () => {
        const [findItem] = cart.filter(item => item.id === id);

        if (findItem.quantity > 0) {
            setAmount(amount - 1);
        }
    }

    return (
        <li className="cart-item">
            <article className="cart-item__wrapper">
                <img className="cart-item__img" src={image} alt={title}/>
                <span className="cart-item__title">{title}</span>
                <span className="cart-item__price">{price} <strong>$</strong></span>
                <div className="cart-item__quantity-wrapper quantity">
                    <button onClick={reduceQuantity} className="quantity__add quantity__btn">-</button>
                    <input className="quantity__value" type="text" onChange={() => setAmount(amount)} value={amount}/>
                    <button onClick={riseQuantity} className="quantity__remove quantity__btn">+</button>
                </div>
                <button onClick={() => dispatch(removeProduct(id))} className="cart-item__remove"><CloseOutlined/>
                </button>
            </article>
        </li>
    );
};

export default CartItem;