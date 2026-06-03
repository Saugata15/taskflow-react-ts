import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  X,
} from "lucide-react";
import type { Theme } from "../types/types";

interface SidebarProps {
  theme: Theme;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  {
    id: 1,
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: 2,
    label: "Tasks",
    icon: CheckSquare,
    active: false,
  },
  {
    id: 3,
    label: "Calendar",
    icon: Calendar,
    active: false,
  },
  {
    id: 4,
    label: "Stats",
    icon: BarChart3,
    active: false,
  },
  {
    id: 5,
    label: "Settings",
    icon: Settings,
    active: false,
  },
];

const Sidebar = ({ theme, isOpen, setIsOpen }: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-slate-200
          bg-white transition-transform duration-300 dark:border-slate-700 dark:bg-slate-900
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:translate-x-0`}
      >
        <div className=" flex items-center border-b border-slate-200 px-6 py-6 dark:border-slate-700">
          <img
            src={theme === "dark" ? "./logo-transparent.png" : "./logo.png"}
            alt="logo"
            className="w-40"
          />
          <div className="flex justify-end pl-4 lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100
             dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                    ${
                      item.active
                        ? `bg-blue-50 text-blue-600 font-medium dark:bg-blue-900/30 dark:text-blue-300`
                        : `text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800`
                    }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 p-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <img
              src="./Avatar.png"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />

            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Saugata Das
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
