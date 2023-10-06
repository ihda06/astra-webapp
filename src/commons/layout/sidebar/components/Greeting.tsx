import { useMenu } from "@/context/menu";
import useIsMobile from "@/hooks/useIsMobile";
import { AiOutlineMinus } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import Menu from "./Menu";
import { menuList } from "@/commons/constants/menu";

interface greetingProps {
  className?: string;
}

export default function Greeting({ className = "" }: greetingProps) {
  const isMobile = useIsMobile();
  const menu = useMenu((state)=>state.isOpen)
  const toggleMenu = useMenu((state)=>state.toggleMenu)

  const hanldeClickMenu = ()=>{
    toggleMenu()
  }

  return (
    <div className="lg:inline-block flex flex-col gap-5 lg:gap-0 items-center">
      <div className={`flex items-center gap-3 ` + className}>
        <BsRobot size="25px" />
        <div className="inline-block">
          <h1 className=" text-base font-bold text-blue-900">Hello !! 👋</h1>
          <h2 className="text-[10px] text-blue-400">
            Welcome to Astra Web App
          </h2>
        </div>
      </div>
      {isMobile && (
        <>
          {menu && <Menu contents={menuList} />}
          <div className="mobileclick w-16 border-t-4 border-indigo-500" onClick={hanldeClickMenu}></div>
        </>
      )}
    </div>
  );
}
