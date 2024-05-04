"use client";

import { Bell, Home, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    icon: Home,
  },
  {
    href: "/explore",
    icon: Search,
  },
  {
    href: "/notifications",
    icon: Bell,
  },
  {
    href: "/profile",
    icon: User,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="h-16 w-full border-t sticky bottom-0 flex bg-background items-center justify-evenly">
      {navLinks.map((item) => {
        const isActive = pathname == item.href;
        return (
          <Link
            href={item.href}
            key={item.href}
            className={`flex items-center relative flex-col after:h-[2px] after:bg-foreground after:absolute after:top-8 after:rounded-full transition-transform after:transition-transform duration-500 ${isActive ? 'text-foreground after:w-full' : 'text-muted-foreground after:w-0 transition-all'}`}
          >
            <item.icon size={24}/>
          </Link>
        );
      })}
    </div>
  );
}
