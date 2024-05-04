import Header from "@/components/header";
import Nav from "@/components/nav";
import PostButton from "@/components/postbutton";
import { PlusCircle } from "lucide-react";

function NoPageSelected() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col space-y-4 items-center">
        <button>
          <PlusCircle size={48} />
        </button>
        <span>No page selected</span>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full ">
      <div className="flex-1 relative hidden lg:flex overflow-auto">
        <NoPageSelected />
      </div>
      <div className="flex-1 relative lg:border-x overflow-auto">
        <Header/>
        {children}
      </div>
      <div className="flex-1 relative hidden lg:flex overflow-auto">
        <NoPageSelected />
      </div>
    </div>
  );
}
