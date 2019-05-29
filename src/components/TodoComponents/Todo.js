import React from 'react';

class Todo extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.task.task}</p>
            </div>
        );
    }
}

export default Todo;