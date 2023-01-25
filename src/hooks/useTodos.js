import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/actions/edit-todos';

export default function useTodos() {
	const todos = useSelector(state => state);

    const dispatch = useDispatch();

    const handlerAddTodo = (todoValue) => {
        if (todoValue) {
            dispatch(addTodo(todoValue));
        }
    }

    const changeStatus = (id) => {
        dispatch(updateTodo(id));
    }

    const getParrentEl = (parrentID) => {
        dispatch(deleteTodo(parrentID));
    }

    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return {
    	todos, handlerAddTodo, changeStatus, getParrentEl
    }
}