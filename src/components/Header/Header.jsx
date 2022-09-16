import React, {memo} from 'react';
import {Link} from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';

import './header.scss';
import {useSelector} from "react-redux";

const Header = () => {
    // const nav = ['Main', 'Products', 'About'];
    const cart = useSelector(state => state.dataApi.cart);
    const total = useSelector(state => state.dataApi.total);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <img src="/vite.svg" alt="logo"/>
                    </Link>

                    <nav className="header__nav">
                        <ul className="header__list">
                            {/*Как тут сделать переход на разные страницы через map ? ?*/}
                            <li className="header__item">
                                <Link className="header__link" to="/">
                                    Main
                                </Link>
                            </li>

                            <li className="header__item">
                                <Link className="header__link" to="/cart">
                                    Cart
                                </Link>
                            </li>

                            <li className="header__item">
                                <Link className="header__link" to="/about">
                                    About
                                </Link>
                            </li>

                            {/*{nav.map(item =>*/}
                            {/*    <li className="header__item" key={item}>*/}
                            {/*        <Link className="header__link" to="/">*/}
                            {/*            {item}*/}
                            {/*        </Link>*/}
                            {/*    </li>*/}
                            {/*)}*/}
                        </ul>
                    </nav>

                    <Link to="/cart" className="header__cart header-cart">
                        <span className="header-cart__total-price">{total} $</span>
                        <span className="header-cart__total-quantity"><ShoppingCartOutlined /> {cart.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);