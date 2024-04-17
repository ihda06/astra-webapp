import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import Menu from "./sidebar/components/Menu";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-col items-center gap-3 py-5 bg-indigo-100 rounded-b-xl sticky`}
    >
      <div className="flex items-center gap-4">
        <BsRobot size="25px" className="text-neutral-800" />
        <div className="inline-block">
          <h1 className=" text-base font-bold text-blue-900">Hello !! 👋</h1>
          <h2 className="text-[10px] text-blue-400">
            Welcome to Astra Web App
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        {isOpen && <Menu />}
        <div
          className="mobileclick mt-3 w-16 border-t-4 border-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
    </div>
  );
}
