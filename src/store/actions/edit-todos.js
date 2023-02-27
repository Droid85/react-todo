export const ACTION_ADD_TODO = 'ACTION_ADD_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_TODO';

export const addTodo = (payload) => ({type: ACTION_ADD_TODO, payload});
export const deleteTodo = (payload) => ({type: ACTION_DELETE_TODO, payload});
export const updateTodo = (payload) => ({type: ACTION_UPDATE_TODO, payload});
