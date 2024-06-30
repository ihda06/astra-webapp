import { BsRobot } from "react-icons/bs";

interface greetingProps {
  className?: string;
  isOpen?: boolean;
}

export default function Greeting({
  className = "",
  isOpen = false,
}: greetingProps) {
  return (
    <div
      className={
        `flex flex-col items-center gap-3 justify-center border-b border-indigo-200 py-3 ` +
        className
      }
    >
      <BsRobot size="25px" className="text-blue-800" />
      {isOpen && (
        <div className="flex flex-col items-center">
          <h1 className=" text-base font-bold">Astra Web App</h1>
          <span className="text-xs text-gray-400">By ihda.anwari</span>
        </div>
      )}
    </div>
  );
}
