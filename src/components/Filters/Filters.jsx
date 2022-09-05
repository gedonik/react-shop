import React, {useState} from 'react';
import {Button} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {filterCategory} from "../../redux/slices/dataApiSlice.js";
import {AudioOutlined} from '@ant-design/icons';
import {Input} from 'antd';

import './filters.scss';

const Filters = () => {
    const buttons = ["All", "Men's clothing", "Women's clothing", "Jewelery", "Electronics"];
    const [category, setCategory] = useState(0);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    const {Search} = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const filterCat = (btn, index) => {
        setCategory(index);
        dispatch(filterCategory(btn));
    }


    // const searchProduct = buttons.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container">
            <div className="filters">
                <ul className="filters__list">
                    {buttons.map((button, idx) =>
                        <Button onClick={() => filterCat(button, idx)}
                                className={`filters__item ${category === idx ? 'active' : ''}`} type="primary"
                                key={button}>{button}</Button>
                    )}
                </ul>
                <label htmlFor="header-search"></label>
                <Search className="search" style={{width: 304}} onChange={(e) => setSearch(e.target.value)} placeholder="input search text" enterButton/>
            </div>
        </div>
    );
};

export default Filters;
