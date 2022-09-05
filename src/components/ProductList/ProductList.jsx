import React from 'react';
import ProductItem from "../ProductItem/ProductItem.jsx";
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './productList.scss';

const ProductList = () => {
    const filtered = useSelector(state => state.dataApi.filteredCat);

    console.log(filtered);

    return (
        <div className="container">
            <ul >
                <TransitionGroup className="products">
                    {filtered.map(item =>
                        <CSSTransition
                            key={item.title}
                            timeout={300}
                            classNames="product-animate"
                        >
                            <ProductItem {...item} key={item.id}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </ul>
        </div>

    );
};

export default ProductList;