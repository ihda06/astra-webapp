import Card from "@/commons/components/Card";
import Link from "next/link";
import { AiOutlineAlert } from "react-icons/ai";

export default function Verify() {
  return (
    <Card className="w-full">
      <div className=" h-14 gap-3 text-neutral-700 dark:text-white flex items-center">
        <AiOutlineAlert></AiOutlineAlert>
        <h1 className=" text-base font-bold">
          Anda belum memverifikasi akun anda
        </h1>
      </div>
      <div className="">
        <p className="text-sm text-neutral-400 dark:text-neutral-300 ">
          Silahkan lakukan verifikasi terlebih dahulu, dengan menghubungi admin{" "}
          <Link
            href="https://t.me/ihdaanwari"
            className="text-blue-500 underline"
          >
            klik disini
          </Link>
        </p>
        <p className="text-sm text-neutral-400 dark:text-neutral-300 ">
          Jika sudah mendapatkan pesan konfirmasi, silahkan lakukan refresh
        </p>
      </div>
    </Card>
  );
}
