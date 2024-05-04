"use client";

import {
  Bell,
  Bookmark,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-toggle";
import Logout from "./logout";
import { Label } from "./ui/label";

const navLinks = [
  {
    title: "Home",
    icon: Home,
    href: "/home",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Explore",
    icon: Search,
    href: "/explore",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Bookmarks",
    icon: Bookmark,
    href: "/bookmarks",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="z-50">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>MaximSocial</SheetTitle>
          <SheetDescription>Welcome back, Maxim Werthmann</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full justify-between pt-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((item) => {
                const isActive = pathname == item.href;
                return (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="rounded-md flex items-center"
                  >
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="flex items-center justify-start space-x-4 w-full"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
