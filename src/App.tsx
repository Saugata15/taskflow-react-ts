import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import type { Priority, SortBy, Task, Theme } from "./types/types";
import SearchBar from "./components/SearchBar";
import CreateTaskModal from "./components/CreateTaskModal";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<Priority>("all");
  const [sortBy,setSortBy] = useState<SortBy>("priority");
  const [isModalOpen, setIsModalOpen] =useState<boolean>(false);
  const [tasks,setTasks] = useState<Task[]>([]);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Header theme={theme} setIsModalOpen={setIsModalOpen} />
            <div className="px-8 py-5">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            {isModalOpen && <CreateTaskModal setIsModalOpen={setIsModalOpen} setTasks={setTasks} />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
