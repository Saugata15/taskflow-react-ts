import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Tasks_Per_Page } from "../utils/utils";
import type { Task } from "../types/types";

interface PaginationProps {
  tasks: Task[];
  startPageIndex: number;
  setStartPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ tasks, startPageIndex, setStartPageIndex }: PaginationProps) => {
  
  const totalPages = Math.ceil(tasks.length / Tasks_Per_Page);

  return (
    <div className="flex justify-between items-center mt-5 lg:pl-1">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
        text-sm py-2 px-4 rounded-lg"
        onClick={() => setStartPageIndex(Math.max(1, startPageIndex - 1))}
      >
        <ChevronsLeft size={16} />
      </button>
      <p className="text-sm dark:text-white/80">
        {`page ${startPageIndex} of ${totalPages || 1}`}
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium 
        text-sm py-2 px-4 rounded-lg"
        onClick={() =>
          setStartPageIndex(Math.min(totalPages, startPageIndex + 1))
        }
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
