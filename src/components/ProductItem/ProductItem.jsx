import React, {useEffect, useState} from 'react';
import {Button, Rate} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {addProduct} from "../../redux/slices/cartSlice.js";

import './productItem.scss';

const ProductItem = ({id, title, image, rating, price, description}) => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    console.log('product-item');

    const [findItem] = cart.filter(item => item.id === id);

    useEffect(() => {
        findItem ? setAmount(findItem.quantity) : 0;
    }, [findItem])

    const addToCart = () => {
        const product = {
            id: id,
            title: title,
            image: image,
            rating: rating,
            price: price,
            quantity: 1,
        }
        dispatch(addProduct(product))
    }

    return (
        <li className="product-item">
            <article className="product-item__wrapper">
                <div className="product-item__image">
                    <img className="product-item__img" src={image} alt={title}/>
                    <p className="product-item__description">{description}</p>
                </div>
                <div className="product-item__title">{title}</div>
                <Rate className="product-item__rate" allowHalf defaultValue={rating.rate}/>
                <span className="product-item__price">{price} $</span>
                <Button onClick={() => addToCart()}
                        className="product-item__add add-btn" type="primary">
                    {amount ? <span className="add-btn__quantity">{amount === 0 ? null : amount}</span> : null}
                    <span className="add-btn__title">Add to cart</span>
                </Button>
            </article>
        </li>
    );
};

export default ProductItem;