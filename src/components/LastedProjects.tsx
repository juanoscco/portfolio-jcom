"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

export default function LastedProjects() {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <CardTitle>The power of react hooks</CardTitle>
        <small>Feb 2022</small>
      </div>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, non?
      </CardDescription>
    </Card>
  );
}
