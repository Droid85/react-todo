const API_URL = 'https://63da7ce6b28a3148f688957c.mockapi.io/todos/users/';

export const getTodos = () => {
    return fetch(API_URL)
        .then(resp => resp.json())
}

export const removeTodo = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(resp => resp.json())
}

export const addTodo = (todo) => {
    return  fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
}

export const updateTodo = (todo) => {
    return  fetch(`${API_URL}/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
}
