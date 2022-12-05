import {createReducer, createAction} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: ['read a book', 'watch video']
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const addTodo = createAction('ADD_TODO');
export const removeLastTodo = createAction('REMOVE_LAST_TODO');

export default createReducer(initialState, {
    [increment]: function (state) {
        state.count = state.count + 1;
    },
    [decrement]: function (state) {
        state.count = state.count - 1;
    },
    [addTodo]: function (state, action) {
        console.log(action);
        state.todos.push(action.payload);
    },
    [removeLastTodo]: function (state) {
        state.todos.pop();
    },
})
