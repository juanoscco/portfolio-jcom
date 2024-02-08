"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

import { Props } from "@/interface/projects.interface";

export  function LastedProjects({
  title,date,description
}: Props) {

  return (
    <Card className="flex flex-col  gap-3 px-4 py-3 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 w-3/6">
      <div className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <small>{date}</small>
      </div>
      <CardDescription className="max-w-full truncate">{description}</CardDescription>
    </Card>
  );
}
