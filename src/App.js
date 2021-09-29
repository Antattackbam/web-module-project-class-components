import React from 'react'
import dummyData from './components/dummyData'
import Home from './components/styled-components'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {dummyData}
    console.log(this.state)
  }

  changeHandler = (e) => {
    this.setState = {task: e.target.value}
  }

  addTask = (id, newItem) =>{
    this.setState = {...dummyData, newItem}
  }

  submitHandler = (e) =>{
    e.preventDefault()
    const newItem = {}
  }

  render() {
    return (
      <Home>
        <h2>Welcome to your Todo App!</h2>
        <TodoList changeHandler={this.changeHandler} submitHandler={this.submitHandler} task={this.state.task} data={this.state}/>
      </Home>
    );
  }
}

export default App;
