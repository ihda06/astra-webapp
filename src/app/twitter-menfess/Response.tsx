import Link from "next/link";

export default function Response({ success }: { success?: string }) {
  {
    return (
      <div className="flex flex-col text-center">
        <div className="">
          <h1 className={"text-sm font-bold text-sky-400"}>Link Tweet ✅</h1>
          <p className="text-xs text-neutral-400">Simpan link ini baik baik ⚠️</p>
        </div>
        <div className="shadow-sm p-5 rounded-full text-xs break-words">
          <Link
            href={`${success}`}
            className={" underline text-sky-500"}
          >
            {success && <>https://twitter.com/CjrFess/status/{success}</>}
          </Link>
        </div>
      </div>
    );
  }
}
