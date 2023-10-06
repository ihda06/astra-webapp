import { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-5">
      <header className="basis-1/6 lg:py-5">
        <Sidebar />
      </header>
      <main className="basis-5/6 transition-all duration-300 w-full h-screen overflow-y-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}
