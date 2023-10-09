import Card from "@/commons/components/Card";
import Link from "next/link";

export default function Response({ success }: { success?: string }) {
  {
    return (
      <Card className="text-center w-full">
          <div className="">
            <h1 className={"text-sm font-bold text-sky-400"}>Link Tweet ✅</h1>
            {success && (
              <p className="text-xs text-neutral-400 dark:text-neutral-300">
                Simpan link ini baik baik ⚠️
              </p>
            )}
          </div>
          <div className="shadow-sm p-5 rounded-full text-xs break-words">
            {success ? (
              <Link href={`${success}`} className={" underline text-sky-500"}>
                {success}
              </Link>
            ) : (
              <h1 className="text-neutral-400">Kamu belum mengirim menfess</h1>
            )}
          </div>
       
      </Card>
    );
  }
}
