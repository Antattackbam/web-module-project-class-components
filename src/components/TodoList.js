import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props.task)

  return (
    <div>
      <form onSubmit={props.submitHandler}>
        <input
          onChange={props.changeHandler}
          type="text"
          value={props.task}
          name="task"
        />
        <button type="submit">Add Task</button>
        <button>Clear Completed</button>
      </form>
      <div>
        {props.data.dummyData.map((t) => {
          return <Todo key={t.id} task={t.task} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
