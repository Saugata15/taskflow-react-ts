import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import type { Priority, SortBy, Task, Theme } from "./types/types";
import SearchBar from "./components/SearchBar";
import CreateTaskModal from "./components/CreateTaskModal";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light";
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<Priority>("all");
  const [sortBy, setSortBy] = useState<SortBy>("priority");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.trim().toLowerCase());

    const matchesPriority =
      priorityFilter === "all" ? true : task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  }).sort((a,b)=>{
    if(sortBy === "priority") {
      const order = {
        high: 3,
        medium: 2,
        low: 1,
      };
      return order[b.priority] - order[a.priority];
    }
    if(sortBy === "newest") {
      return (new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())
    }
    if(sortBy === "oldest") {
      return (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    }
    return 0;
  })

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, theme]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Header theme={theme} setIsModalOpen={setIsModalOpen} />

            <div className="px-8 py-5 flex items-center justify-between gap-3">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <FilterBar
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <div className="px-8">
              <TaskList
                tasks={filteredTasks}
                setTasks={setTasks}
                setIsModalOpen={setIsModalOpen}
                setEditingTask={setEditingTask}
              />
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
