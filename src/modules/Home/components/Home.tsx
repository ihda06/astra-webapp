import Apps from "./Apps";

export default function Home() {
  return (
    <div className="lg:h-full flex items-center w-full">
      <div className="flex px-10 py-28 bg-white flex-col lg:flex-row w-full rounded-xl shadow-xl items-center gap-5 lg:px-10">
        <div className="lg:basis-3/5 lg:text-left text-center">
          <h2 className="text-xs tracking-tighter text-neutral-600 font-semibold">
            Selamat Datang di Lab Penelitian Saya
          </h2>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-indigo-300">
            Astra Web Apps 🤖
          </h1>
        </div>
        <div className="lg:basis-2/5 w-full">
          <Apps />
        </div>
      </div>
    </div>
  );
}
