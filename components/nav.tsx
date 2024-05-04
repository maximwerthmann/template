"use client";

import { Home, Plus, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Nav() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="fixed w-full bottom-0 flex p-4 justify-between space-x-4 items-end">
      <div onClick={() => setCollapsed(!collapsed)} className={`bg-background border relative transition-size duration-500 ${collapsed ? 'h-16 w-16 rounded-full' : 'h-96 w-48 rounded-xl'}`}>
        <div className="flex flex-col p-4 space-y-4">
        <div className="flex items-center justify-between">
                <span>Home</span>
                <Home/>
            </div>
            <div className="flex items-center justify-between">
                <span>Settings</span>
                <Settings/>
            </div>
        </div>
        <Avatar className="h-16 w-16">
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
      </div>
      <Button className="rounded-full h-16 w-16">
        <Plus size={24} />
      </Button>
    </div>
  );
}
