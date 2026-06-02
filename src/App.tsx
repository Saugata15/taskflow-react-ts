import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import type { Theme } from "./types/types";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="flex">
          <Sidebar />

          <main className="flex-1">
            <Header theme={theme} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
