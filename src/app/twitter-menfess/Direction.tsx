import Card from "@/commons/components/Card";

export default function Direction({}) {
  return (
    <div className="grid grid-cols-1 gap-2">
      <Card className="w-full h-full">
        <div className=" h-14 flex items-center">
          <h1 className=" text-base text-neutral-700 font-bold mb-4">Cara menggunakan</h1>
        </div>
        <ul className="text-[10px] list-disc text-neutral-400 dark:text-neutral-300 ml-4">
          <li>Jangan lupa gunakan trigger "Cjr!"</li>
          <li>Contoh : "Cjr! ini menfes aku"</li>
        </ul>
      </Card>
      <Card className="w-full h-full">
        <div className=" h-14 flex items-center">
          <h1 className=" text-base text-neutral-700 font-bold mb-4">Rules</h1>
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
    </div>
  );
}
