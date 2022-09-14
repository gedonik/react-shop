import React, {useState, useMemo} from 'react';
import {Button, Select} from 'antd';
import {useDispatch} from "react-redux";
import {filterCategory, sortProducts, searchProduct} from "../../redux/slices/dataApiSlice.js";
import {Input} from 'antd';

import './filters.scss';

const Filters = () => {
    const buttons = ["All", "Men's clothing", "Women's clothing", "Jewelery", "Electronics"];
    const [category, setCategory] = useState(0);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const {Search} = Input;
    const {Option} = Select;

    const filterCat = (btn, index) => {
        setCategory(index);
        dispatch(filterCategory(btn));
    }

    const searchProd = (e) => {
            setSearch(e.target.value);
            dispatch(searchProduct(search));
            console.log(search);
    }

    const onChange = (value) => {
        dispatch(sortProducts(value));
    };

    return (
        <div className="container">
            <div className="filters">
                <ul className="filters__list">
                    {buttons.map((button, idx) =>
                        <Button
                            onClick={() => filterCat(button, idx)}
                            className={`filters__item ${category === idx ? 'active' : ''}`}
                            type="primary"
                            key={button}
                        >
                            {button}
                        </Button>
                    )}
                </ul>

                <Select
                    showSearch
                    placeholder="Select a sort"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                >
                    <Option value="rating-to-low">Rating to low</Option>
                    <Option value="rating-to-high">Rating to high</Option>
                    <Option value="price-to-low">Price to low</Option>
                    <Option value="price-to-high">Price to high</Option>
                </Select>

                <label htmlFor="header-search"></label>
                <Search
                    value={search}
                    className="search"
                    style={{width: 304}}
                    onChange={(event) => searchProd(event)}
                    placeholder="input search text"
                    enterButton
                />
            </div>
        </div>
    );
};

export default Filters;
