import Card from "@/commons/components/Card";
import Link from "next/link";

type ItemAppsType = {
  icon: JSX.Element;
  title: string;
  path: string
};

export default function ItemApps({ icon, title, path }: ItemAppsType) {
  return (
    <Link href={path}>
      <Card className="lg:w-[100px] lg:h-[100px] w-full flex lg:flex-col flex-row justify-center items-center gap-1 cursor-pointer hover:scale-105 duration-500 hover:bg-indigo-200">
        <div className="lg:text-4xl basis-1/5 lg:basis-0">{icon}</div>
        <div className="basis-4/5 lg:basis-0 text-center lg:text-xs text-neutral-800 font-semibold">
          {title}
        </div>
      </Card>
    </Link>
  );
}
