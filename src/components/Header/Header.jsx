import React from 'react';
import {Link} from "react-router-dom";

import './header.scss';
import {useSelector} from "react-redux";

const Header = () => {
    const nav = ['Main', 'Products', 'About us'];
    const products = useSelector(state => state.dataApi.products)

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <img src="/vite.svg" alt="logo"/>
                    </Link>

                    <nav className="header__nav">
                        <ul className="header__list">
                            {nav.map(item =>
                                <li className="header__item" key={item}>
                                    <Link className="header__link" to="/">
                                        {item}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                    <Link to="/cart" className="header__btn">
                        <span>cart</span>
                        <span><strong>{products.length}</strong></span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;