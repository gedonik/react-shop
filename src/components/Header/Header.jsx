import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {ShoppingCartOutlined} from '@ant-design/icons';

import './header.scss';
import {useSelector} from "react-redux";

const nav = ['Main', 'Cart', 'About'];

const Header = () => {
    const [page, setPage] = useState(0);
    const cart = useSelector(state => state.cart.cart);
    const total = useSelector(state => state.cart.total);

    console.log('header');

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <NavLink to="/">
                        <img className="header__logo" src="/vite.svg" alt="logo"/>
                    </NavLink>

                    <nav className="header__nav">
                        <ul className="header__list">
                            {nav.map((item, idx) =>
                                <li
                                    key={item}
                                    onClick={() => setPage(idx)}
                                    className="header__item"
                                >
                                    <NavLink className={({isActive})=> isActive ? 'header__link--active' : ''}
                                        to={idx === 0 ? '/' : idx === 1 ? '/cart' : idx === 2 ? '/about' : ''}
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <NavLink to="/cart" className="header__cart header-cart">
                        <span className="header-cart__total-price">{total} $</span>
                        <span className="header-cart__total-quantity"><ShoppingCartOutlined/> {cart.length}</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;