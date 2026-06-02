import { Moon, Sun, Plus } from "lucide-react";
import type { Theme } from "../types/types";

interface HeaderProps {
  theme: Theme;
}

const Header = ({ theme }: HeaderProps) => {
  return (
    <header
      className="flex flex-col md:flex-row md:justify-between md:items-center border-b
     border-slate-200 p-8"
    >
      <div>
        <h1 className="text-3xl font-medium pb-2 text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Stay organized and get things done.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="p-1 rounded-xl border border-slate-200 flex items-center gap-1
        bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 "
        >
          <button
            className={`cursor-pointer transition-all p-2 rounded-lg ${
              theme === "dark"
                ? "bg-slate-100 text-slate-900"
                : "text-slate-500"
            }`}
          >
            <Sun size={16} />
          </button>
          <button
            className={`cursor-pointer transition-all p-2 rounded-lg ${
              theme === "dark" ? "bg-slate-700 text-white" : "text-slate-500"
            }`}
          >
            <Moon size={16} />
          </button>
        </div>

        <button
          className="px-5 py-3.5 bg-blue-600 text-white flex items-center gap-1.5 
        cursor-pointer rounded-lg text-sm font-medium shadow-sm transition-all
        duration-200 hover:bg-blue-700"
        >
          <Plus size={18} />
          Create New Task
        </button>
      </div>
    </header>
  );
};

export default Header;
