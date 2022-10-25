import React, {memo} from 'react';
import Filter from '../ui/filter/Filter.js';
import Sort from '../ui/sort/Sort.js';
import Search from '../ui/search/Search.js';

import './filters.scss';

const Filters: React.FC = () => {
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
