import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import {data} from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      taskData: data,
      task: '',
      id: Date.now(),
      completed: false
    }
  }
  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      taskData: [...this.state.taskData, newTodo]
    });
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    })
  }

  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="todo-list">
          {this.state.taskData.map(task => (
              <Todo task={task} />
          ))}
        </div>
            <TodoForm submit={this.addTodo} change={this.handleChanges} value={this.state.task} />
      {/* <form onSubmit={this.addTodo}>
            <input placeholder="todo" onChange={this.handleChanges} value={this.state.task} />
            <button type="submit">Add Todo</button>
            <button onclick="#">Clear Completed</button>
        </form>   */}
      </div>
    );
  }

}
export default App;
