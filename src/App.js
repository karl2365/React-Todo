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
      taskData: [...this.state.taskData, newTodo],
      task: '',
      id: Date.now(),
      completed: false
    });
  }

  toggleTask = id => {
    this.setState(prevState => {
      return {
        taskData: prevState.taskData.map(item => {
          if (item.id === id) {
            return{
              ...item, 
              completed: !item.completed

            }
          } else{
            return item;
          }
          
        })
      };
    });
  };

  clearCompleted = () => {
      this.setState(prevState => {
        return{
          taskData: prevState.taskData.filter(item => item.completed === false )
        }
      });
  };


  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
      id: Date.now(),
      completed: false
    })
  }

  render() {

    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <div className="todo-list">
          {this.state.taskData.map(task => (
              <Todo task={task} toggleTask={this.toggleTask} key={task.id}/>
          ))}
        </div>
            <TodoForm submit={this.addTodo} clearCompleted={this.clearCompleted} change={this.handleChanges} value={this.state.task} />
      
      </div>
    );
  }

}
export default App;
