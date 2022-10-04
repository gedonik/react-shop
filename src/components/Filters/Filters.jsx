import React, {memo} from 'react';
import Filter from '../ui/filter/Filter.jsx';
import Sort from '../ui/sort/Sort.jsx';
import Search from '../ui/search/Search.jsx';

import './filters.scss';

const Filters = () => {
    return (
        <div className="container">
            <div className="filters-wrapper">
                <Filter/>
                <Sort/>
                <Search/>
            </div>
        </div>
    );
};

export default memo(Filters);
