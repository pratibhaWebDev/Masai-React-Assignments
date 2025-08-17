
import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <div className="task-item" style={{ marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "8px",
        }}
      >
        {task.description} ({task.priority})
      </span>
    </div>
  );
};

export default TaskItem;
