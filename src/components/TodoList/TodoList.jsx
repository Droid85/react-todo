import React from 'react';
import './TodoList.css'

class TodoList extends React.Component {
	handlerSetStatus = (e) => {
		if (e.target.tagName === 'LI') {
			e.target.classList.toggle('todo_list-done');
			this.props.changeStatus(e.target.id);
		}
	}

	handlerCloseList = (e) => {
		this.props.getParrentEl(e.target.parentElement.id)
	}
	render() {
		return (
			<section className='todo-list_section'>
				<ul className='todo-list_list'>
					{this.props.todoData.map(item => <
						li key={item.id}
							id={item.id}
							onClick={this.handlerSetStatus}
							className='todo-list_item'>{item.title}
							<button className='list_close-btn' onClick={this.handlerCloseList} >X</button>
						</li>
					)}
				</ul>
			</section>
		)
	}
}

export default TodoList;
