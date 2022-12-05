import React from 'react';
import {Button, Space, Typography} from "antd";

const CounterField = ({count, increment, decrement, ...props}) => {
    return (
        <div>
            <Typography.Title>{count}</Typography.Title>
            <Space wrap>
                <Button type="primary" onClick={increment}>increment</Button>
                <Button type="primary" danger onClick={decrement}>decrement</Button>
            </Space>
        </div>
    );
};

export default CounterField;