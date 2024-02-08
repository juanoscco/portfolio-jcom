"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

import { Props } from "@/interface/projects.interface";

export default function LastedProjects({
  title,
  description,
  date,
}: Props) {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <small>{date}</small>
      </div>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
