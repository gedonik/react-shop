import React, {memo} from 'react';
import ProductItem from "../ProductItem/ProductItem.jsx";
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './productList.scss';

const ProductList = () => {
    console.log('product-list');

    const filteredCatalog = useSelector(state => state.catalog.filteredCat);

    return (
        <div className="container">
            <ul>
                <TransitionGroup className="products">
                    {filteredCatalog.map(item => (
                            <CSSTransition
                                key={item.title}
                                timeout={300}
                                classNames="product-animate"
                            >
                                <ProductItem {...item} key={item.id}/>
                            </CSSTransition>
                        )
                    )}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default memo(ProductList);