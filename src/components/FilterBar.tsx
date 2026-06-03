import type { Priority, SortBy } from "../types/types";

interface FilterBarProps {
  priorityFilter: Priority;
  setPriorityFilter: (priority: Priority) => void;
  sortBy: SortBy;
  setSortBy: (sortBy: SortBy) => void;
}

const FilterBar = ({
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
}: FilterBarProps) => {
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriorityFilter(e.target.value as Priority);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortBy);
  };

  return (
    <div className="flex items-center gap-3">
      <select
        className="rounded-md border border-slate-300 outline-none bg-white px-4 py-3 text-sm focus:border-blue-500"
        value={priorityFilter}
        onChange={handlePriorityChange}
      >
        <option value="all"> All Priorities </option>
        <option value="high"> High </option>
        <option value="medium"> Medium </option>
        <option value="low"> Low </option>
      </select>

      <select
        className="rounded-md border border-slate-300 outline-none bg-white px-4 py-3 text-sm focus:border-blue-500"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="newest"> Sort: Newest </option>
        <option value="oldest"> Sort: Oldest </option>
        <option value="priority"> Sort: Priority </option>
      </select>
    </div>
  );
};

export default FilterBar;
