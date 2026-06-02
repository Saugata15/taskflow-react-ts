import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative flex-1">
      <Search 
      size={18} 
      className="absolute text-slate-400 left-4 top-1/2 -translate-y-1/2" 
      />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search tasks"
        onChange={(e)=>setSearchTerm(e.target.value)}
        className="outline-none pl-11 py-3 pr-4 w-full rounded-md border border-slate-200
        bg-white text-sm transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default SearchBar;
