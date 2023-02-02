import { useState, useEffect } from 'react';
import {createTodo, deleteTodo, toggleTodo} from "../store/actions/";
import {useDispatch} from 'react-redux';

export default function useTodos() {
    const dispatch = useDispatch();

    const handlerAddTodo = (todoValue) => {
        dispatch(createTodo(todoValue));
    }

    const changeStatus = (id) => {
        dispatch(toggleTodo(id));
    }

    const getParrentEl = (parrentID) => {
        dispatch(deleteTodo(parrentID));
    }

    return {
    	handlerAddTodo, changeStatus, getParrentEl
    }
}
