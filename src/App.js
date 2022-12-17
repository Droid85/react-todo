import React from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoInput from './components/TodoInput/TodoInput';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                {id: 1, title: 'title', isDone: false}
            ]
        }
    }

    handlerAddTodo = (todoValue) => {
        if (todoValue) {
            this.setState({
                rows: [...this.state.rows, {id: Math.random(), title: todoValue, isDone: false}]
            })
        }
    }

    changeStatus = (id) => {
        let newArr = this.state.rows.map(el => {
            if (el.id === +id) {
                el.isDone = !el.isDone
            }
            return el
        })
        this.setState({
            rows: [...newArr]
        })
    }

    getParrentEl = (parrentID) => {
        this.setState({
            rows: [...this.state.rows.filter(el => el.id !== +parrentID)]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>ToDo App</h1>
                <TodoList todoData={this.state.rows} changeStatus={this.changeStatus} getParrentEl={this.getParrentEl} />
                <TodoInput handlerAddTodo={this.handlerAddTodo} />
            </div>
        );
    }
}

export default App;