import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";

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

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen border-r border-slate-200 bg-white">
      <div className="px-6 py-6 border-b border-slate-200">
        <img src="./logo.png" alt="logo" className="w-42" />
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all 
                    duration-200 ${
                      item.active
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src="./Avatar.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-sm text-slate-900">Saugata Das</p>
            <p className="text-xs text-slate-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
