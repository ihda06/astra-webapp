import Container from "@/commons/components/Container";

export default function Home({}) {
  return (
    <Container className="h-full">
      <div className="h-full flex">
        <div className="flex bg-white flex-col lg:flex-row w-full rounded-xl shadow-xl items-center p-7 gap-5">
          <div className="">
            <h5 className="text-xs">Welcome</h5>
            <h1 className=" font-extrabold">Astra</h1>
            <h2 className="font-extrabold">Web App</h2>
            <h5 className="text-7xl">By Ihda Anwari</h5>
          </div>
        </div>
      </div>
    </Container>
  );
}
