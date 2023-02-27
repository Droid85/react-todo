import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/actions/edit-todos';

export default function useTodos() {
	const todos = useSelector(state => state);

    const dispatch = useDispatch();

    const handlerAddTodo = (todoValue) => {
        if (todoValue) {
            dispatch(addTodo({id: Math.random(), title: todoValue}));
        }
    }

    const changeStatus = (id) => {
        dispatch(updateTodo({id: id}));
    }

    const getParrentEl = (parrentID) => {
        dispatch(deleteTodo({id: parrentID}));
    }

    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return {
    	todos, handlerAddTodo, changeStatus, getParrentEl
    }
}
