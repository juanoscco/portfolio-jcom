"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useTheme } from "next-themes";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/58866695?v=4"
              alt="@JCOM"
              className="cursor-pointer"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-36">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/projects">Projects</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <section>
        {theme === "dark" ? (
          <MoonIcon
            className="cursor-pointer size-6"
            onClick={() => setTheme("light")}
          />
        ) : (
          <SunIcon
            className="cursor-pointer size-6"
            onClick={() => setTheme("dark")}
          />
        )}
      </section>
    </nav>
  );
}
