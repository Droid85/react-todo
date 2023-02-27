import { useState, useEffect } from 'react';

export default function useTodos() {
	const [todos, setTodos] = useState([]);

    const handlerAddTodo = (todoValue) => {
        let todo = {title: todoValue, completed: false};

        if (todoValue) {
            setTodos([...todos, todo]);

            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {'Content-Type': 'application/json'}
            })
                .then(res => res.json())
                .then(data => setTodos([...todos, data]))
        }
    }

    const changeStatus = (id) => {
        let newItem = todos.find(todo => todo.id === +id);
        newItem = {...newItem, completed: !newItem.completed};

        let newArr = todos.map(el => el.id === id ? newItem : el);

        setTodos(newArr);

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {'Content-Type': 'application/json'}
        })
    }

    const getParrentEl = (parrentID) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${parrentID}`, {
            method: 'DELETE'
        });

        setTodos([...todos.filter(el => el.id !== +parrentID)]);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, []);

    return {
    	todos, handlerAddTodo, changeStatus, getParrentEl
    }
}