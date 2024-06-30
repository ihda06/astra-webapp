import MenuItem from "./MenuItem";
import { menuList } from "@/commons/constants/menu";

interface Menu {
  isOpen?: boolean;
}

export default function Menu({ isOpen }: Menu) {
  return (
    <div className="h-full w-full lg:px-4 px-8 flex flex-col gap-2 ">
      {menuList.map((item, idx) => (
        <MenuItem key={idx} {...item} isOpen={isOpen} />
      ))}
    </div>
  );
}
