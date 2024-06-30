import { menuList } from "@/commons/constants/menu";

export default function MobileMenu() {
  return (
    <div className="grid grid-cols-3 w-full">
      {menuList.map((item, idx) => (
        <div
          key={idx}
          className="justify-center flex gap-1 flex-col items-center bg-indigo-100 w-auto"
        >
          <div className="text-xl">{item.icon}</div>
          <p className="text-xs">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
