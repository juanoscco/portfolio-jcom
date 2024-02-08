"use client"
import React from "react";
import { Card } from "./ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Props } from "@/interface/projects.interface";


export default function SelectedProjects({ title, skills }: Props) {
  return <Card className="flex h-14 px-3  justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400">
    <div className="flex items-center gap-4">
      <h3>{title}</h3>
      <small>
        {skills.map((skill: any, index: any) => (
          <span key={index}>
            {index > 0 && ' • '}
            {skill.includes('(') ? skill : <span>{skill}</span>}
          </span>
        ))}
      </small>

    </div>
    <ArrowTopRightIcon />
  </Card>;
}
