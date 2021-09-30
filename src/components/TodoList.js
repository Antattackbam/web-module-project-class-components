import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { 
      task: "" 
    };
  }

  changeHandler = (e) => {

    this.setState({ task: e.target.value });
  };

  submitHandler = (e) => {
    const t = this.state.task
  
    e.preventDefault();
    this.props.addTask(t);
    alert('Task added: ' + t)
    this.setState({task: ''})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} value={this.state.task} type="text" name="task" />
          <button type="submit">Add Task</button>
          <button>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
