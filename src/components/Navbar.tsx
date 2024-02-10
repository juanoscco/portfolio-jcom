"use client";
import React from "react";
import { MoonIcon, RocketIcon, SunIcon } from "@radix-ui/react-icons";

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
            <Link href="/" className="cursor-pointer">
              <DropdownMenuItem>
                Home
              </DropdownMenuItem>
            </Link>
            <Link href="/projects" className="cursor-pointer">
              <DropdownMenuItem>
                Projects
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <section>
        {
          theme === "light" ? (
            <MoonIcon
              className="cursor-pointer size-6"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <SunIcon
              className="cursor-pointer size-6"
              onClick={() => setTheme("light")}
            />
          )}

      </section>
    </nav>
  );
}
