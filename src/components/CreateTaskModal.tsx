import { X, Flag } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import type { FormErrors, Task } from "../types/types";

interface CreateTaskModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  editingTask: Task | null;
}

const CreateTaskModal = ({
  setIsModalOpen,
  setTasks,
  editingTask
}: CreateTaskModalProps) => {
  const [taskItem, setTaskItem] = useState<Task>({
    id: "",
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
    isCompleted: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setTaskItem((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newError: FormErrors = {};
    if (!taskItem.title.trim()) {
      newError.title = "Title is required";
    }
    if (!taskItem.dueDate) {
      newError.dueDate = "Due date is required";
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      return;
    }
    if (editingTask) {
      setTasks((prev) =>
        prev.map((item) => (item.id === editingTask.id ? taskItem : item)),
      );
    } else {
      const newTask = {
        ...taskItem,
        id: crypto.randomUUID(),
      };
      setTasks((prev) => [...prev, newTask]);
    }

    setIsModalOpen(false);
    setTaskItem({
      id: "",
      title: "",
      description: "",
      priority: "low",
      dueDate: "",
      isCompleted: false,
    });
  };

  useEffect(() => {
    if (editingTask) {
      setTaskItem(editingTask);
    }
  }, [editingTask]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm">
      <form
        className="px-4 py-8 sm:p-8 max-w-lg bg-white w-full shadow-lg rounded-lg flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-slate-900 text-xl font-semibold">
            {editingTask ? "Edit Task" : "Create New Task"}
          </h2>
          <X
            size={20}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <div>
          <label
            htmlFor="taskTitle"
            className="text-sm font-semibold text-slate-800 mb-1.5 block"
          >
            Task Title
          </label>
          <input
            id="taskTitle"
            name="title"
            type="text"
            value={taskItem.title}
            onChange={handleChange}
            placeholder="What needs to be done?"
            className="outline-none w-full text-sm border border-slate-300 px-3 py-2.5
            rounded-md shadow-sm transition-all focus:border-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="taskDescription"
            className="text-sm font-semibold text-slate-800 mb-1.5 block"
          >
            Description (Optional)
          </label>
          <textarea
            id="taskDescription"
            name="description"
            value={taskItem.description}
            onChange={handleChange}
            placeholder="Add more details..."
            className="outline-none w-full text-sm border border-slate-300 px-3 py-2.5
            rounded-md shadow-sm transition-all focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start gap-5">
          <div className="flex flex-col flex-1">
            <label
              htmlFor="priority"
              className="text-sm font-semibold text-slate-800 mb-1.5 block"
            >
              Priority
            </label>
            <div className="relative">
              <Flag
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
              />
              <select
                id="priority"
                name="priority"
                value={taskItem.priority}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 bg-white py-3 pl-10 pr-4
                text-sm outline-none transition-all focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <label
              htmlFor="date"
              className="text-sm font-semibold text-slate-800 mb-1.5 block"
            >
              Due Date
            </label>
            <input
              id="date"
              type="date"
              name="dueDate"
              value={taskItem.dueDate}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white py-3 pl-4 pr-4
                text-sm outline-none transition-all focus:border-blue-500"
            />
            {errors.dueDate && (
              <p className="mt-1 ml-1 text-sm text-red-500">{errors.dueDate}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="border border-slate-300 text-sm font-medium px-5 py-3 bg-white
          rounded-md shadow-sm cursor-pointer hover:bg-slate-100 transition-all duration-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="text-white bg-blue-600 text-sm font-medium px-6 py-3 
          rounded-md shadow-sm cursor-pointer hover:bg-blue-700 transition-all duration-200"
          >
            {editingTask ? "Update Task" : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskModal;
