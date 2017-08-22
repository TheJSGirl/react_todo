import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  _addTodo(todo){
    const todos = [todo, ...this.state.todos]
    /**
     * const oldTodos = this.state.todos;
     * const newTodos = oldTodos.push(todo);
     * this.setState({todos: newTodos})
     * todo will be added at the botom (as last element in array)
     */
    this.setState({todos});
  }

  constructor(props){
    super(props);
    this.state = {
      todos: [
        {title: 'Demo todo #1', addedOn: '20 Aug, 2017'},
        {title: 'Demo todo #2', addedOn: '20 Aug, 2017'},
        {title: 'Demo todo #3', addedOn: '21 Aug, 2017'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        Hello Todo
        <TodoForm addTodo={this._addTodo.bind(this)} />
        <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
