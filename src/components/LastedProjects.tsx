"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

import { Props } from "@/interface/projects.interface";
import Link from "next/link";

export function LastedProjects({
  title, date, description, slug
}: Props) {

  return (
    <Link href={`/projects/${slug}`} className="sm:w-3/6 w-full cursor-pointer">
      <Card className="flex flex-col gap-3 px-4 py-3 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 ">
        <div className="flex justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <small>{date}</small>
        </div>
        <CardDescription className="max-w-full truncate">{description}</CardDescription>
      </Card></Link>
  );
}
