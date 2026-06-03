import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative flex-1 max-w-xl max-sm:w-full">
      <Search 
      size={18} 
      className="absolute text-slate-400 dark:text-white/80 left-4 top-1/2 -translate-y-1/2" 
      />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search tasks"
        onChange={(e)=>setSearchTerm(e.target.value)}
        className="outline-none pl-11 py-3 pr-4 w-full rounded-xl border border-slate-300
        bg-white text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100
        dark:bg-slate-800/30 dark:border-slate-600 dark:placeholder:text-white/80 dark:shadow-sm
        dark:shadow-white/5 dark:text-white/90 dark:focus:ring-1"
      />
    </div>
  );
};

export default SearchBar;
