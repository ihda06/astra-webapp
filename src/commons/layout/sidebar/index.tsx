import Greeting from "./components/Greeting";
import Menu from "./components/Menu";

export default function Sidebar({}) {
  return (
    <div className="hidden max-w-[550px] lg:flex py-5">
      <div className="rounded-r-3xl bg-indigo-100 p-3 flex flex-col shadow-lg">
        <Greeting className="h-40 w-64"></Greeting>
        <Menu />
      </div>
    </div>
  );
}
