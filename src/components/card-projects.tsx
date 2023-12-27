import React from "react";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  code:string;
}

export default function CardProject({ title, description, link, code }: Props) {
  return (
    <div className="p-1 lg:col-span-2 space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-2xl font-bold">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </CardContent>
        <Button>
          <Link href={link} target="_blank">View Project</Link>
        </Button>
        <Button className="ml-2">
          <Link href={code} target="_blank">View Code</Link>
        </Button>
      </Card>
    </div>
  );
}
