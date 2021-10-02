import React from "react";
import dummyData from "./components/dummyData";
import Home from "./components/styled-components";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { tasks: dummyData };
  }

  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({  
      tasks: [...this.state.tasks, newTask] 
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map( t => {
        if (t.id === id){
          return ({
            ...t,
            completed: !t.completed
          })
        } return t
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter( task => {
        return(!task.completed)
      })
    })
  }

  render() {
    return (
      <Home>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          changeHandler={this.changeHandler}
          clearCompleted={this.clearCompleted}
          addTask={this.addTask}
          submitHandler={this.submitHandler}
          data={this.state.tasks}
        />
        <div>
          {this.state.tasks.map(t => (
            <Todo toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} completed={t.completed} id={t.id} key={t.id} task={t.task} />
          ))}
  
        </div>
      </Home>
    );
  }
}

export default App;
