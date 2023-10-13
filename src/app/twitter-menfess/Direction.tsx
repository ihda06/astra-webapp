import Card from "@/commons/components/Card";
import { AiOutlineAlert } from "react-icons/ai";
import { IoFootstepsOutline } from "react-icons/io5"

export default function Direction({}) {
  return (
    <div className="grid grid-cols-1 gap-2">
      <Card className="w-full h-full">
        <div className=" h-14 flex text-neutral-700 dark:text-white items-center gap-3">
          <IoFootstepsOutline/>
          <h1 className="text-base font-bold">Cara menggunakan</h1>
        </div>
        <ul className="text-[10px] list-disc text-neutral-400 dark:text-neutral-300 ml-4">
          <li>Jangan lupa gunakan trigger &quot;Cjr!&quot;</li>
          <li>Contoh : &quot;Cjr! ini menfes aku&quot;</li>
        </ul>
      </Card>
    </div>
  );
}
