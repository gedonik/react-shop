import React, {useCallback, useState} from 'react';
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {filterCategories} from "../../../redux/slices/catalogSlice.js";

import './filter.scss';

const Filter: React.FC = () => {
    const buttons = useSelector(state => state.catalog.categories);
    const [category, setCategory] = useState(0);
    const dispatch = useDispatch();

    const filterCat = useCallback((index:number, category:string) => {
        setCategory(index);
        dispatch(filterCategories(category));
    }, [])

    return (
        <ul className="filter">
            {buttons.map((button, idx:number) =>
                <Button
                    onClick={() => filterCat(idx, button.key)}
                    className={`filter__item ${category === idx ? 'active' : ''}`}
                    type="primary"
                    key={idx}
                >
                    {button.title}
                </Button>
            )}
        </ul>
    );
};

export default Filter;