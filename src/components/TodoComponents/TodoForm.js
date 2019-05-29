import React from 'react';



function TodoForm(props) {
    return(
        <form onSubmit={props.submit}>
            <input placeholder="todo" onChange={props.change} value={props.value} />
            <button>Add Todo</button>
            <button onclick="#">Clear Completed</button>
        </form>
    );
}

export default TodoForm;