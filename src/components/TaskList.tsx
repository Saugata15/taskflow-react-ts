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
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="font-semibold">No tasks found</h3>

        <p className="text-slate-500">Create your first task</p>
      </div>
    );
  }
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
