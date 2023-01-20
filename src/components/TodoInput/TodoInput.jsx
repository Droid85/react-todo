import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput(props) {
	const [inputValue, setInputValue] = useState('');

    const handlerChangeInput = (e) => {
    	setInputValue(e.target.value);
    }

    const handlerSendInputText = (e) => {
    	if (e.key === 'Enter') {
    		handlerSetValue();
    	}
    }

	const handlerSetValue = () => {
		props.handlerAddTodo(inputValue);

		setInputValue('');
	}

	return (
		<section className='todo-input_section'>
			<input type='text'
				value={inputValue}
				placeholder='Enter text'
				id='todoInputValue'
				className='todo-input_input'
				onChange={handlerChangeInput}
				onKeyUp={handlerSendInputText}
			/>
			<button className='todo-input_button' onClick={handlerSetValue}>Add</button>
		</section>
	);
}

export default TodoInput;