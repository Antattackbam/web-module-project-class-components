import React from 'react'

const Todo = (props) =>{
    return(
        <div key = {props.id}>
            <p>{props.task}</p>
        </div>
    )
}

export default Todo