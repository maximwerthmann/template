import { ModeToggle } from "@/components/theme-toggle";
import { Dot } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex-1 hidden lg:flex items-center justify-center inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="flex items-center justify-center h-full w-full">
        <span className="text-8xl font-Chomsky">Maxim Social</span>
        </div>
      </div>
      <div className="lg:w-96 px-16 h-full flex flex-col items-center justify-center lg:border-l relative">
      {children}
      </div>
    </div>
  );
}
