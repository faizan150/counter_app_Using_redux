import Counter from "@/counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 py-5">
      <div className="text-bold text-lg">Counter App</div>
      
      <Counter />
    </main>
  );
}
