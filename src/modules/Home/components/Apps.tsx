import { BsChat, BsChatLeftText, BsTwitter } from "react-icons/bs";
import ItemApps from "./ItemApps";
import { menuList } from "@/commons/constants/menu";

export default function Apps({}) {
  const menu = menuList.filter((item)=>item.title!="Beranda")
  return (
    <>
      <div className="grid lg:grid-cols-2 mx-10 grid-cols-none gap-2">
        {menu.map((item, idx) => (
          <ItemApps key={idx} {...item}></ItemApps>
        ))}
      </div>
    </>
  );
}
