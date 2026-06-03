import type { Task } from "../types/types";
import { CalendarDays, Flag, Pencil, Trash2 } from "lucide-react";

interface TaskItemProps {
  item: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const TaskItem = ({
  item,
  setTasks,
  setIsModalOpen,
  setEditingTask,
}: TaskItemProps) => {
  const { id, title, description, priority, dueDate, isCompleted } = item;

  const priorityStyles = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };

  const onDelete = (id: string) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const onToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const onEdit = (id: string) => {
    setEditingTask(item.id === id ? item : null);
    setIsModalOpen(true);
  };

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm 
    hover:shadow-md transition-all duration-200 mt-3 dark:bg-slate-800/30 dark:border-slate-700"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex gap-7 flex-1 items-center">
          <input
            type="checkbox"
            name="isCompleted"
            checked={isCompleted}
            onChange={() => onToggleComplete(id)}
            className="h-4 w-4 cursor-pointer border-slate-300 dark:border-slate-600
             text-blue-600 focus:ring-blue-500  dark:bg-slate-700 
             dark:checked:bg-blue-600 dark:checked:border-blue-600"
          />

          <div className="flex-1">
            <h3
              className={`text-base font-semibold text-slate-900 dark:text-white ${
                isCompleted ? "line-through text-slate-400 dark:text-slate-500" : ""
              }`}
            >
              {title}
            </h3>

            {description && (
              <p
                className={`mt-1 text-sm text-slate-500 dark:text-slate-300
                  ${isCompleted ? "line-through" : ""}`}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-11">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-2.5 py-1.5 rounded-full text-xs font-bold capitalize
                    flex items-center gap-1.5 ${priorityStyles[priority]}`}
            >
              <Flag size={14} />
              {priority}
            </span>
            <div className="flex items-center gap-1 text-sm text-slate-500 
            whitespace-nowrap dark:text-white/80">
              <CalendarDays size={15} />
              {dueDate}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Pencil
              size={16}
              onClick={() => onEdit(id)}
              className="text-slate-600 cursor-pointer hover:text-blue-600
            transition-colors dark:text-white/80 dark:hover:text-blue-500"
            />
            <Trash2
              size={18}
              onClick={() => onDelete(id)}
              className="text-red-600 cursor-pointer hover:text-red-700
            transition-colors dark:text-red-500 dark:hover:text-red-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
