import React, {useState} from 'react';
import {Input} from "antd";
import {searchProduct} from "../../../redux/slices/catalogSlice.js";
import {useDispatch} from "react-redux";

import './search.scss';

const Search = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const {Search} = Input;

    const searchProd = (e) => {
        e.preventDefault();
        dispatch(searchProduct(search));
        console.log(search);
        setSearch('');
    }

    return (
        <form onSubmit={searchProd}>
            <label htmlFor="header-search"></label>
            <Search
                className="search"
                style={{width: 304}}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="input search text"
                enterButton
            />
        </form>
    );
};

export default Search;