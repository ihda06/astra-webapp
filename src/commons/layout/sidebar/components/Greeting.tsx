import { BsRobot } from "react-icons/bs";

interface greetingProps {
  className?: string;
}

export default function Greeting({ className = "" }: greetingProps) {
  return (
    <div className={`flex items-center gap-3 justify-center ` + className}>
      <BsRobot size="25px" className="text-neutral-800" />
      <div className="inline-block">
        <h1 className=" text-base font-bold text-blue-900">Hello !! 👋</h1>
        <h2 className="text-[10px] text-blue-400">Welcome to Astra Web App</h2>
      </div>
    </div>
  );
}
