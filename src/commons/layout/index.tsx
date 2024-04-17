"use client";
import { ReactNode } from "react";
import Sidebar from "./sidebar";
import MobileHeader from "./MobileHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <header className="lg:py-5 lg:hidden">
        <MobileHeader />
      </header>
      <main className="transition-all duration-300 w-full h-screen flex">
        <Sidebar />
        <div className="w-full lg:overflow-y-auto ">{children}</div>
      </main>
    </div>
  );
}
