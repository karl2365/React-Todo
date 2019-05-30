import React from 'react';
import './Todo.css';

const Todo = props => {
    
    return (
        <div className={`todo${props.task.completed ? ' completed' : ''}`} onClick={() => props.toggleTask(props.task.id)}>
            {props.task.task}
        </div>
    );

};

export default Todo;