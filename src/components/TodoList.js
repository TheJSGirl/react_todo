import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component{
    render(){
        const {todos} = this.props;
        let i = 0;
        // const todos = this.props.todos
        return(
            <ul>
                {
                    // starting jsx code
                    todos.map((todo) => <Todo key={i++} todo={todo} />)
                }
            </ul>
        );
    }
}

export default TodoList;