import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, addTodo, removeLastTodo, togglePostsIsFetching} from "./reducers/toolkitSlice-reducer";
import CounterField from "./components/counterField/CounterField";
import TodoList from "./components/todoList/TodoList";

const addAsyncTodo = (startPos = 0, limit = 5) => {
    return (dispatch) => {
        dispatch(togglePostsIsFetching(true));
        fetch(`https://jsonplaceholder.typicode.com/todos?_start=${startPos}&_limit=${limit}`)
            .then(response => response.json())
            .then(json => json.map(j => dispatch(addTodo(j.title))))
            .then(() => dispatch(togglePostsIsFetching(false)))
    }
}

function App() {
    const count = useSelector(state => state.toolkitSlice.count);
    const todos = useSelector(state => state.toolkitSlice.todos);
    const postsIsFetching = useSelector(state => state.toolkitSlice.postsIsFetching);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <CounterField
                    count={count}
                    increment={() => dispatch(increment())}
                    decrement={() => dispatch(decrement())}
                />
                <TodoList
                    todos={todos}
                    addTodo={(text) => dispatch(addTodo(text))}
                    removeLastTodo={() => dispatch(removeLastTodo())}
                    postsIsFetching={postsIsFetching}
                    addAsyncTodo={(startPos, limit) => dispatch(addAsyncTodo(startPos, limit))}
                />
            </div>
        </div>
    );
}

export default App;
