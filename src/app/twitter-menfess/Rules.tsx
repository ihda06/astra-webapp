import Card from "@/commons/components/Card";
import { AiOutlineAlert } from "react-icons/ai";

export default function Rules({}) {
  return (
    <Card className="w-full h-full">
      <div className=" h-14 gap-3 text-neutral-700 dark:text-white flex items-center">
        <AiOutlineAlert></AiOutlineAlert>
        <h1 className=" text-base font-bold">Rules</h1>
      </div>
      <ul className="text-[10px] list-disc text-neutral-400 dark:text-neutral-300 ml-4">
        <li>Dilarang mengirim sara</li>
        <li>Dilarang menyebarkan privasi</li>
        <li>Dilarang mengirim tweet menganggu</li>
        <li>Dilarang mengirim tweet spam</li>
        <li>Dilarang promosi</li>
        <li>Dilarang mention akun lain</li>
        <li>Dilarang mengirim link lain</li>
      </ul>
    </Card>
  );
}
