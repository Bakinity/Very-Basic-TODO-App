import React, { useState } from "react";

import classes from "./TodoListForm.module.css";

const TodoListForm = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const taskInputHandler = (event) => {
    setTask(event.target.value);
  };

  const addInputHandler = (event) => {
    event.preventDefault();

    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(tasks);
    }
  };

  const deleteTask = (text) => {
    const newTasks = tasks.filter((task) => {
      return task !== text;
    });
    setTasks(newTasks);
  };

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>You have {tasks.length} Todos </h1>
      {tasks?.length > 0 ? (
        <div className={classes.listDiv}>
          {tasks.map((task, index) => (
            <div>
              <p className={classes.p} key={index}>
                {task}
              </p>
              <button
                className={classes.delete}
                onClick={() => deleteTask(task)}
              >
                x
              </button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}
      <div className={classes.inputDiv}>
        <input
          className={classes.input}
          type='text'
          name='task'
          value={task}
          placeholder='Enter Item'
          onChange={taskInputHandler}
        ></input>
        <button
          className={classes.addButton}
          type='submit'
          onClick={addInputHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TodoListForm;
