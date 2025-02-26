import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <span className="text-2xl">Maxim's <span className="border py-1 px-4 rounded-full font-bold">NextJS <span className="text-blue-500">15</span></span> Template</span>
      </div>
    </div>
  );
}
