import Link from "next/link";
import { itemMenu } from "../../../type/menu";
import { usePathname } from "next/navigation";
import { useMenu } from "@/context/menu";

type MenuItemProps = itemMenu & {
  isOpen?: boolean;
};

export default function MenuItem({
  icon,
  title,
  desc,
  path,
  isOpen = true,
}: MenuItemProps) {
  const currentPath = usePathname();
  console.log(currentPath, "currentPath");
  console.log(path, "path");

  const active = () => {
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };
  const hideMenu = useMenu((state) => state.hideMenu);
  return (
    <Link href={path}>
      <div
        className={
          "w-full p-3 bg-none hover:bg-white duration-300 rounded-lg cursor-pointer " +
          (active() ? "bg-white" : "")
        }
        onClick={hideMenu}
      >
        <div className="flex items-center gap-3">
          <div className="text-lg">{icon}</div>
          {isOpen && (
            <div className="inline-block">
              <h1 className="text-sm font-semibold text-blue-900">{title}</h1>
              <h2 className="text-[8px] text-neutral-600">{desc}</h2>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
