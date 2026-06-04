import type React from "react";
import type { Task } from "../types/types";
import TaskItem from "./TaskItem";
import {Tasks_Per_Page} from "../utils/utils";

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
  startPageIndex: number;
}

const TaskList = ({
  tasks,
  setTasks,
  setIsModalOpen,
  setEditingTask,
  startPageIndex,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="font-semibold text-slate-900 dark:text-white">No tasks found</h3>

        <p className="text-slate-500 dark:text-slate-400">
          Create your first task
        </p>
      </div>
    );
  }
  const tasksToShow = tasks.slice((startPageIndex - 1) * Tasks_Per_Page, startPageIndex * Tasks_Per_Page);
  return (
    <div>
      {tasksToShow.map((item) => (
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
