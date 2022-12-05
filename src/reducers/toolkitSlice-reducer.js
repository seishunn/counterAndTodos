import {createSlice} from "@reduxjs/toolkit";

const toolkitSliceReducer = createSlice({
    name: 'toolkitSlice',
    initialState: {
        count: 0,
        todos: ['read a book', 'watch video'],
        postsIsFetching: false
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1;
        },
        decrement(state) {
            state.count = state.count - 1;
        },
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeLastTodo(state) {
            state.todos.pop();
        },
        togglePostsIsFetching(state, action) {
            state.postsIsFetching = action.payload;
        }
    }
});

export default toolkitSliceReducer.reducer;
export const {increment, decrement, addTodo, removeLastTodo, togglePostsIsFetching} = toolkitSliceReducer.actions;