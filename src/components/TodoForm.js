import React, {Component} from 'react';

class TodoForm extends Component{
    _handleSubmit(e){

        // get the add todo method hat was sent by parent - APP 
        const {addTodo} = this.props; 

        e.preventDefault();
        const title = this.refs.title.value;
        const todo = {
            title,
            addedOn: new Date().toDateString()
        }
        /**
         * we created the todo object now we can 
         * add it to the state of parent component
         * sing addTodo method
         */
        addTodo(todo);
        this.refs.title.value = ''; // empty the form field
        console.log(todo);
    }

    render(){
        return (
            <div>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <input ref="title" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;