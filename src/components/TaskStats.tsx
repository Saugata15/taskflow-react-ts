import { CheckCircle2, Clock3, ListTodo, AlertTriangle } from "lucide-react";

interface TaskStatsProps {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  highPriorityTasks: number;
}

const TaskStats = ({
  totalTasks,
  completedTasks,
  inProgressTasks,
  highPriorityTasks,
}: TaskStatsProps) => {
  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: ListTodo,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: CheckCircle2,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: Clock3,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      title: "High Priority",
      value: highPriorityTasks,
      icon: AlertTriangle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white dark:bg-transparent rounded-2xl border border-slate-200 p-5 shadow-sm
              hover:shadow-md transition-all duration-200 dark:border-slate-600 dark:shadow-white/5"
          >
            <div className="flex items-end sm:items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-white/90">{stat.title}</p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white/90">
                  {stat.value}
                </h3>
              </div>

              <div
                className={`h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center 
                    ${stat.iconBg}`}
              >
                <Icon size={24} className={stat.iconColor} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStats;
