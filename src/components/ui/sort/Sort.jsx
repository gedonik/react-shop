import React from 'react';
import {Select} from "antd";
import {useDispatch} from "react-redux";
import {sortProducts} from "../../../redux/slices/catalogSlice.js";

import './sort.scss';

const Sort = () => {
    const {Option} = Select;
    const dispatch = useDispatch();

    const onChange = (value) => {
        dispatch(sortProducts(value));
    };

    return (
        <Select
            className="sort"
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
    );
};

export default Sort;