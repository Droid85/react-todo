import {addTodo, removeTodo, updateTodo, getTodos} from '../../api';

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export const ACTION_REFRESH_TODO = 'ACTION_REFRESH_TODO';
export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';

export const fetchTodos = () => (dispatch) => {
    let todos = getTodos()
        .then(data => dispatch({
            type: ACTION_SET_TODOS,
            payload: data
        }))
}

export const refreshTodo = (todosData) => (dispatch) => {
    dispatch({
        type: ACTION_REFRESH_TODO,
        payload: todosData
    })
}

export const createTodo = (title) => (dispatch) => {
    addTodo({title: title, isDone: false})

    dispatch({
        type: ACTION_CREATE_TODO,
        payload: {title: title, isDone: false}
    })
}

export const deleteTodo = (id) => (dispatch) => {
    removeTodo(id)

    dispatch({
        type: ACTION_DELETE_TODO,
        payload: id
    })
}

export const toggleTodo = (id) => (dispatch, getState) => {
    const {todos} = getState()
    const todo = todos.todos.find(item => item.id === id)

    const newTodo = {...todo, isDone: !todo.isDone}

    updateTodo(newTodo)

    dispatch({
        type: ACTION_TOGGLE_TODO,
        payload: newTodo
    })
}
