import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          category={task.category}
          text={task.text}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
