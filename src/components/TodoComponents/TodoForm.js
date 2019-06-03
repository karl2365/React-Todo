import React from 'react';
import './Todo.css';


function TodoForm(props) {
    return(
        <form onSubmit={props.submit}>
            <input placeholder="todo" name="task" onChange={props.change} value={props.value} />
            <button>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;