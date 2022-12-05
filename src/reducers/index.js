import {combineReducers, configureStore} from '@reduxjs/toolkit';
import toolkitReducer from "./toolkit-reducer";
import toolkitSliceReducer from "./toolkitSlice-reducer";

const rootReducer = combineReducers({
    toolkit: toolkitReducer,
    toolkitSlice: toolkitSliceReducer
});

export const store = configureStore({
    reducer: rootReducer,
})