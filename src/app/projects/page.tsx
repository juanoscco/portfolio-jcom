"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { myProjects } from "@/mocks/myProjects.mock"

export default function ManagerProjects() {
  const [showProjects, setShowProjects] = React.useState(true);

  const angularProjects = myProjects.filter(item => item.type === 'Angular');
  const nextProjects = myProjects.filter(item => item.type === 'Next.js');

  return (
    <section className="flex flex-col gap-14">
      <div className="flex justify-between items-center">
        <h2 className="text-lg dark:text-neutral-100">Projects</h2>
        <ul className="flex gap-2">
          <li
            className={`cursor-pointer ${showProjects
              ? "text-orange-500 underline decoration-dashed underline-offset-8"
              : ""
              }`}
            onClick={() => setShowProjects(true)}
          >
            Next.js
          </li>
          <li
            className={`cursor-pointer ${!showProjects
              ? "text-orange-500 underline decoration-dashed underline-offset-8"
              : ""
              }`}
            onClick={() => setShowProjects(false)}
          >
            Angular
          </li>
        </ul>
      </div>
      {showProjects ? (
        <section className="flex flex-col gap-4">
          {nextProjects.map((item, i) => (
            <a
              className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
              href="/posts/the-power-of-react-hooks"
              key={i}
            >
              <div className="flex w-full items-center justify-between">
                <h2 className="text-lg">{item.title}</h2>
                <div className="flex flex-row items-center gap-4">
                  <p>{item.date}</p>
                  <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <p>
                {item.description}
              </p>
            </a>
          ))}

        </section>
      ) : (
        <section className="flex flex-col gap-4">
          {angularProjects.map((item, i) => (
            <a
              className="group flex flex-col gap-2 border-t border-neutral-700 py-4 transition-all dark:hover:text-neutral-100"
              href="/projects"
              key={i}
            >
              <div className="flex w-full items-center justify-between">
                <h2 className="text-lg">{item.title}</h2>
                <div className="flex flex-row items-center gap-4">
                  <p>{item.date}</p>
                  <ArrowTopRightIcon className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <p>
                {item.description}
              </p>
            </a>
          ))}



        </section>
      )}
    </section>
  );
}
