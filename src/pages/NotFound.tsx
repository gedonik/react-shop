import React from 'react';
import {Link} from "react-router-dom";
import {CaretLeftOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import './notFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2 className="not-found__title">Page Not Found</h2>
            <Link to="/">
                <Button className="not-found__to-main" type="primary" icon={<CaretLeftOutlined/>} size={"large"}>
                    Back to main page
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;