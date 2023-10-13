"use client"

import Link from "next/link";
import { itemMenu } from "../../../type/menu";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/menu";

export default function MenuItem({ icon, title, desc, path }: itemMenu) {
    const currentPath = usePathname()
    const url = new URL(path, "http://localhost:3000/");
    const active = currentPath === url.pathname ? "bg-indigo-200" : ""
    const hideMenu = useMenu((state)=>state.hideMenu)
  return (
    <Link href={path} >
      <div className={"w-full py-3 px-5 hover:bg-indigo-200 duration-300 rounded-lg cursor-pointer "+active} onClick={hideMenu}>
        <div className="flex items-center gap-3">
          <div className=" text-4xl">{icon}</div>
          <div className="inline-block">
            <h1 className="text-sm font-semibold text-blue-900">{title}</h1>
            <h2 className="text-[8px] text-neutral-600">{desc}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
