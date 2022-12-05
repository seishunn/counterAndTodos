import React from 'react';
import {Button, Divider, List, Space} from "antd";

const TodoList = ({todos, postsIsFetching, addTodo, removeLastTodo, addAsyncTodo, ...props}) => {
    return (
        <div style={{margin: '20px 0'}}>
            <Space wrap>
                <Button
                    type="primary"
                    onClick={() => addTodo(prompt('Add todo:', ''))}
                >Add todo</Button>
                <Button type="primary" danger onClick={removeLastTodo}>Remove last
                    todo</Button>
                <Button type="primary" onClick={addAsyncTodo} loading={postsIsFetching}>Load
                    todos</Button>
            </Space>
            <Divider orientation="left">Todo list</Divider>
            <List
                bordered
                dataSource={todos}
                renderItem={(todo) => (
                    <List.Item>
                        {todo}
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TodoList;