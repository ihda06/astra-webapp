import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full lg:h-screen h-[80%] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">Mau kemana?</h1>
        <p className="text-gray-500">Ga ada apa apa disini ✌️</p>
        <div className="flex justify-center mt-5">
          <Link
            className="px-2 py-1 bg-blue-500 text-white rounded-lg"
            href="/"
          >
            Pulang ke rumah 🏠
          </Link>
        </div>
      </div>
    </div>
  );
}
