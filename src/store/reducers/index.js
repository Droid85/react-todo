import { ACTION_ADD_TODO, ACTION_DELETE_TODO, ACTION_UPDATE_TODO } from '../actions/edit-todos';

const initialState = sessionStorage.getItem('todos') ? JSON.parse(sessionStorage.getItem('todos')) : [
	{id: 1, title: 'title', isDone: false},
]

const rootReducer = (state = initialState, {type, payload}) => {
	switch(type) {
		case ACTION_ADD_TODO:
			return [...state, {id: payload.id, title: payload.title, isDone: false}]
		case ACTION_DELETE_TODO:
			return [...state.filter(el => el.id !== +payload.id)]
		case ACTION_UPDATE_TODO:
			let newArr = state.map(el => {
	            if (el.id === +payload.id) {
	                el.isDone = !el.isDone
	            }
	            return el
	        })

			return [...newArr]
		default:
			return state
	}
}

export default rootReducer;
