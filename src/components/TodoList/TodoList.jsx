import React from 'react';
import './TodoList.css';

function TodoList(props) {
	const handlerSetStatus = (e) => {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('todo_list-done');
			props.changeStatus(e.target.id);
		}
	}

	const handlerCloseList = (e) => {
		props.getParrentEl(e.target.parentElement.id)
	}

	return (
		<section className='todo-list_section'>
			<ul className='todo-list_list'>
				{props.todoData.map(item => <
					li key={item.id}
						id={item.id}
						onClick={handlerSetStatus}
						className='todo-list_item'>
						{item.title}
						<button className='list_close-btn' onClick={handlerCloseList} >X</button>
					</li>
				)}
			</ul>
		</section>
	)
}

export default TodoList;