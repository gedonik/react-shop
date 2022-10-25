import React, {memo} from 'react';
import ProductItem from "../ProductItem/ProductItem.tsx";
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './productList.scss';

const ProductList: React.FC = () => {
    const filteredProducts = useSelector(state => state.catalog.filteredCat);

    return (
        <div className="container">
            <ul>
                <TransitionGroup className="products">
                    {filteredProducts.map(item => (
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