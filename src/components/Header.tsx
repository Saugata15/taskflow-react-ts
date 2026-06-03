import { Moon, Sun, Plus, Menu } from "lucide-react";
import type React from "react";
import type { Theme } from "../types/types";

interface HeaderProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  theme,
  setTheme,
  setIsModalOpen,
  setIsSidebarOpen,
}: HeaderProps) => {
  return (
    <header className="border-b border-slate-200 dark:border-slate-700 px-4 md:px-8 py-5">
      {/* Top Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700
            dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white ">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Stay organized and get things done.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div
            className="p-1 rounded-xl border border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-800 shadow-sm flex items-center gap-1"
          >
            <button
              onClick={() => setTheme("light")}
              className={`p-2 rounded-lg transition-all cursor-pointer
              ${theme === "light" ? "bg-slate-100 text-slate-900" : "text-slate-500"}`}
            >
              <Sun size={16} />
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-lg transition-all cursor-pointer
              ${theme === "dark" ? "bg-slate-700 text-white" : "text-slate-500"}
            `}
            >
              <Moon size={16} />
            </button>
          </div>

          {/* Create Task Button */}
          <div className="">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3.5 bg-blue-600 text-white flex items-center
            justify-center gap-2 rounded-lg text-sm font-medium shadow-sm transition-all
            duration-200 hover:bg-blue-700 max-md:px-3 max-md:py-2.5"
            >
              <Plus size={18} />
              <span className="hidden sm:block xs:inline">Create New Task</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
