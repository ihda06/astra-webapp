"use client"

import { menuList } from "@/commons/constants/menu";
import Greeting from "./components/Greeting";
import Menu from "./components/Menu";
import useIsMobile from "@/hooks/useIsMobile";

export default function Sidebar({}) {
  const isMobile = useIsMobile();
  return (
    <div className="h-full lg:rounded-r-3xl lg:rounded-bl-none rounded-b-3xl bg-indigo-100 w-full p-3 flex flex-col shadow-lg">
      <div className="basis-1/6 flex items-center justify-center ">
        <Greeting></Greeting>
      </div>
      {!isMobile && (
        <div className="basis-5/6 ">
          <Menu contents={menuList}></Menu>
        </div>
      )}
    </div>
  );
}
