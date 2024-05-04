"use client";

import Link from "next/link";
import Sidebar from "./sidebar";
import { ModeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navLinks = [
    {
        title: 'Home',
        href: '/home'
    },
    {
        title: 'Profile',
        href: '/profile'
    },
    {
        title: 'Bookmarks',
        href: '/bookmarks'
    },
    {
        title: 'Settings',
        href: '/settings'
    },
]

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex h-16 w-full items-center px-8 sticky top-0 bg-background/50 backdrop-blur justify-between z-50">
      <div className="flex space-x-4 items-center">
        <span className="text-4xl font-Chomsky">MaximSocial</span>
        <Separator orientation="vertical" className="h-8" />
        <span className='first-letter:uppercase'>{pathname.split('/')}</span>
      </div>
      <Sidebar/>
    </header>
  );
}
