import React, {memo} from 'react';
import ProductItem from "../ProductItem/ProductItem.jsx";
import {useSelector} from "react-redux";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import './productList.scss';


const ProductList = () => {
    console.log('product-list');

    const filteredProducts = useSelector(state => state.catalog.filteredCat);

    // const products = useSelector(state => state.catalog.products);
    // const currCat = useSelector(state => state.catalog.currentCategory);
    //
    // const filteredProducts = products.filter(item => {
    //     if (currCat=== 'all') {
    //         return products;
    //     } else {
    //         return item.category === currCat;
    //     }
    // });

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