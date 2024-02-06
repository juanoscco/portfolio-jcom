"use client";
import { Card } from "@/components/ui/card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";

export default function ManagerProjects() {
  const [showProjects, setShowProjects] = React.useState(true);

  return (
    <section className="flex flex-col gap-14">
      <div className="flex justify-between items-center">
        <h2 className="text-lg dark:text-neutral-100">Projects</h2>
        <ul className="flex gap-2">
          <li
            className={`cursor-pointer ${
              showProjects
                ? "text-orange-500 underline decoration-dashed underline-offset-8"
                : ""
            }`}
            onClick={() => setShowProjects(true)}
          >
            Next.js
          </li>
          <li
            className={`cursor-pointer ${
              !showProjects
                ? "text-orange-500 underline decoration-dashed underline-offset-8"
                : ""
            }`}
            onClick={() => setShowProjects(false)}
          >
            Angular
          </li>
        </ul>
      </div>

      {/* {showProjects ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <Card>
            <h2>Title</h2>
            <span>Description</span>
            <p>Skills!!</p>
          </Card>
          <Card>Project React!!</Card>
          <Card>Project React!!</Card>
          <Card>Project React!!</Card>
          <Card>Project React!!</Card>
          <Card>Project React!!</Card>
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <Card>Project Angular!!</Card>
          <Card>Project Angular!!</Card>
          <Card>Project Angular!!</Card>
          <Card>Project Angular!!</Card>
          <Card>Project Angular!!</Card>
          <Card>Project Angular!!</Card>
        </section>
      )} */}
      {showProjects ? (
        <section className="flex flex-col gap-4">
          <a
            className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
            href="/posts/the-power-of-react-hooks"
          >
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg">The Power Of React Hooks</h2>
              <div className="flex flex-row items-center gap-4">
                <p>February 2023</p>
                <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur et ultrices blandit neque
              ege
            </p>
          </a>
          <a
            className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
            href="/posts/the-power-of-react-hooks"
          >
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg">The Power Of React Hooks</h2>
              <div className="flex flex-row items-center gap-4">
                <p>February 2023</p>
                <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur et ultrices blandit neque
              ege
            </p>
          </a>
        </section>
      ) : (
        <section className="flex flex-col gap-4">
          <a
            className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
            href="/projects"
          >
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg">The Power Of React Angular</h2>
              <div className="flex flex-row items-center gap-4">
                <p>February 2023</p>
                <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur et ultrices blandit neque
              ege
            </p>
          </a>

          <a
            className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
            href="/projects/"
          >
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg">The Power Of React Angular</h2>
              <div className="flex flex-row items-center gap-4">
                <p>February 2023</p>
                <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur et ultrices blandit neque
              ege
            </p>
          </a>
        </section>
      )}
    </section>
  );
}
