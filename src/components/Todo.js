import React, {Component} from 'react';
import propTypes from 'prop-types';

class Todo extends Component{
    render(){
        const todo = this.props.todo;
        return(
            <li>
                <strong>{todo.title}</strong>
                <p>{todo.addedOn}</p>
            </li>
        );
    }
}

export default Todo;

Todo.propTypes = {
    todo: propTypes.object.isRequired
}