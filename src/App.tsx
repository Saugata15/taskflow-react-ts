import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import type { Priority, SortBy, Task, Theme } from "./types/types";
import SearchBar from "./components/SearchBar";
import CreateTaskModal from "./components/CreateTaskModal";
import TaskList from "./components/TaskList";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<Priority>("all");
  const [sortBy, setSortBy] = useState<SortBy>("priority");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Header theme={theme} setIsModalOpen={setIsModalOpen} />

            <div className="px-8 py-5">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>

            <div className="px-8">
              <TaskList tasks={tasks} setTasks={setTasks} setIsModalOpen={setIsModalOpen} setEditingTask={setEditingTask} />
            </div>

            {isModalOpen && (
              <CreateTaskModal
                setIsModalOpen={setIsModalOpen}
                setTasks={setTasks}
                editingTask={editingTask}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
