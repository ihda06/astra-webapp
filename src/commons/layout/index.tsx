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
        <div className="mt-5 mb-10 lg:mt-0 lg:mb-0 py-5 px-8 bg-indigo-50 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
