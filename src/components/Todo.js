import React from 'react'

const Todo = (props) =>{

    const clickHandler = () => {
        props.toggleCompleted(props.id)
    }

    return(
        <div onClick={clickHandler} key = {props.id} className={`${props.completed ? 'completed' : ''}`}>
            <p>{props.task}</p>
        </div>
    )
}

export default Todo