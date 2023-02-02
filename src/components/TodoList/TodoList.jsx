import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import './TodoList.css';

function TodoList(props) {
	const todos = useSelector(state => state.todos.todos);

	const handlerSetStatus = (e) => {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('todo_list-done');
			props.changeStatus(e.target.id);
		}
	}

	const handlerCloseList = (e) => {
		props.getParrentEl(e.target.parentElement.id);
	}

	useEffect(() => {
		if (todos.length) {
			sessionStorage.setItem('todos', JSON.stringify(todos));
		}
	}, [todos])

	return (
		<section className='todo-list_section'>
			<ul className='todo-list_list'>
				{todos.map(item => <
					li key={item.id}
						id={item.id}
						onClick={handlerSetStatus}
						className={item.isDone ? 'todo-list_item todo_list-done' : 'todo-list_item'}>
						{item.title}
						<button className='list_close-btn' onClick={handlerCloseList} >X</button>
					</li>
				)}
			</ul>
		</section>
	)
}

export default TodoList;
