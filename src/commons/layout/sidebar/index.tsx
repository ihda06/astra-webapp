import { useState } from "react";
import Greeting from "./components/Greeting";
import Menu from "./components/Menu";

export default function Sidebar({}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="hidden lg:flex hover:w-3/12 w-[100px] ml-3 my-3 duration-500 rounded-xl px-3 py-10 flex-col shadow-lg space-y-3 bg-indigo-100"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Greeting isOpen={isOpen}></Greeting>
      <Menu isOpen={isOpen} />
    </div>
  );
}
