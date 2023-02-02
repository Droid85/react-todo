import React, {useEffect} from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import useTodos from './hooks/useTodos';
import {useDispatch} from 'react-redux';
import {fetchTodos, refreshTodo} from './store/actions/';
import './App.css';

function App() {
    const {todos, handlerAddTodo, changeStatus, getParrentEl} = useTodos();
    const dispatch = useDispatch();

    useEffect(() => {
        let refreshData = JSON.parse(sessionStorage.getItem('todos'));

        if (refreshData && refreshData.length > 0) {
            dispatch(refreshTodo(refreshData))
        } else {
            dispatch(fetchTodos())
        }
    }, [])

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoList todoData={todos} changeStatus={changeStatus} getParrentEl={getParrentEl} />
            <TodoInput handlerAddTodo={handlerAddTodo} />
        </div>
    );
}

export default App;