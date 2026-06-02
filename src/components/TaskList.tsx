import type React from "react";
import type { Task } from "../types/types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const TaskList = ({
  tasks,
  setTasks,
  setIsModalOpen,
  setEditingTask,
}: TaskListProps) => {
  return (
    <div>
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          setTasks={setTasks}
          setIsModalOpen={setIsModalOpen}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
