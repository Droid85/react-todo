import React from 'react';
import './TodoInput.css';

class TodoInput extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handlerChangeInput = (e) => {
    	this.setState({
    		inputValue: e.target.value
    	})
    }

    handlerSendInputText = (e) => {
    	if (e.key === 'Enter') {
    		this.handlerSetValue();
    	}
    }

	handlerSetValue = () => {
		this.props.handlerAddTodo(this.state.inputValue)

		this.setState({
			inputValue: ''
		})
	}
	render() {
		return (
			<section className='todo-input_section'>
				<input type='text'
					value={this.state.inputValue}
					placeholder='Enter text'
					id='todoInputValue'
					className='todo-input_input'
					onChange={this.handlerChangeInput}
					onKeyUp={this.handlerSendInputText}
				/>
				<button className='todo-input_button' onClick={this.handlerSetValue}>Add</button>
			</section>
		);
	}
}

export default TodoInput;
