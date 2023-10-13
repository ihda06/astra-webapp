import Apps from "./Apps";

export default function Home() {
  return (
    <>
      <div className="h-full flex relative">
        <div className="w-14 h-14 lg:w-40 lg:h-40 bg-indigo-200 rounded-tl-lg rounded-br-[300px] absolute "></div>
        <div className="flex px-10 py-28 bg-white flex-col lg:flex-row w-full rounded-xl shadow-xl items-center gap-5 lg:px-10">
          <div className="basis-3/5 lg:text-left text-center">
            <h2 className="text-xs tracking-tighter text-neutral-600 font-semibold">Selamat Datang di Lab Penelitian Saya</h2>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-indigo-300">Astra Web Apps 🤖</h1>
          </div>
          <div className="basis-2/5 w-full">
            <Apps/>
          </div>
        </div>
      </div>
    </>
  );
}
