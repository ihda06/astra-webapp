import Card from "@/commons/components/Card";
import Link from "next/link";

type ItemAppsType = {
  icon: JSX.Element;
  title: string;
  path: string;
};

export default function ItemApps({ icon, title, path }: ItemAppsType) {
  return (
    <Link href={path}>
      <Card className="lg:w-[100px] lg:h-[100px] w-full flex lg:flex-col flex-row justify-center items-center gap-1 cursor-pointer hover:scale-105 duration-500 hover:bg-indigo-100">
        <div className="lg:text-lg basis-1/5 text-xl">{icon}</div>
        <div className="basis-4/5 text-center lg:text-xs text-neutral-800 font-semibold text-base">
          {title}
        </div>
      </Card>
    </Link>
  );
}
