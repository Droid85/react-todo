import React from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import useTodos from './hooks/useTodos';
import './App.css';

function App() {
    const {todos, handlerAddTodo, changeStatus, getParrentEl} = useTodos();

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <TodoList todoData={todos} changeStatus={changeStatus} getParrentEl={getParrentEl} />
            <TodoInput handlerAddTodo={handlerAddTodo} />
        </div>
    );
}

export default App;
