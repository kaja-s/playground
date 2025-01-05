import { Navbar } from "@/app/components/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen justify-center items-center text-5xl font-bold">
        <h1>Welcome to my playground!</h1>
      </div>
    </div>
  );
}
