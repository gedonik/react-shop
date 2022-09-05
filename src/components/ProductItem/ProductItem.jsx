import React from 'react';
import {Button, Rate} from 'antd';

import './productItem.scss';

const ProductItem = ({title, image, rating, price, description}) => {

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
                <Button className="product-item__btn" type="primary">
                    <span>0</span>
                    <span>Add to cart</span>
                </Button>
            </article>
        </li>


    );
};

export default ProductItem;