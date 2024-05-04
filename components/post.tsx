"use client";

import {
  BarChart3,
  Bookmark,
  Check,
  Copy,
  Dot,
  Heart,
  Megaphone,
  MessageCircle,
  Repeat,
  Repeat1,
  Reply,
  Send,
  Share,
  Shield,
  ShieldCheck,
  Verified,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { Badge } from "./ui/badge";

export default function Post() {
  const [Like, setLike] = useState(false);
  const [Bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex w-full p-4 space-x-2 max-w-[750px]">
      <Avatar className="h-12 w-12 rounded-md border">
        <AvatarImage src="https://pbs.twimg.com/profile_images/1784562141455917056/57oh_F1e_400x400.jpg" />
        <AvatarFallback className="rounded-md">
          <Megaphone />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span>Maxim Social</span>
            </div>
            <span className="text-muted-foreground text-sm">@maximsocial</span>
          </div>
        </div>
        <div
          className="flex flex-col space-y-2"
          onDoubleClick={() => setLike(!Like)}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            unde ex architecto eos, officiis voluptatum excepturi dolores
            ratione numquam magni alias cum, eligendi atque perspiciatis debitis
            iusto. Aliquid, ratione repellat.
          </p>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center space-x-2 text-xs"
              onClick={() => setLike(!Like)}
            >
              <Heart
                size={20}
                className={`transition-all cursor-pointer duration-300 ${
                  Like
                    ? "fill-red-500 text-red-500 animate-post-action"
                    : " fill-background"
                }`}
              />
              <span>0</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <MessageCircle className="cursor-pointer" size={20} />
              <span>0</span>
            </div>
            <Bookmark
              size={20}
              className={`transition-color cursor-pointer ${
                Bookmarked
                  ? "fill-foreground text-foreground animate-post-action"
                  : "fill-background"
              }`}
              onClick={() => setBookmarked(!Bookmarked)}
            />
          </div>
          <Share size={20} />
        </div>
      </div>
    </div>
  );
}
