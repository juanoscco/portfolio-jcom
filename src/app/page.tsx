"use client";
import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { myProjects } from "@/mocks/myProjects.mock";
import { LastedProjects } from "@/components/LastedProjects";
import Link from "next/link";
import SelectedProjects from "@/components/SelectedProjects";

export default function Home() {
  // Supongamos que myProjects es tu arreglo de proyectos

  // Filtra los proyectos que tienen una fecha válida (no vacía)
  const projectsWithValidDates = myProjects.filter(project => project.date.trim() !== "");

  // Ordena los proyectos por fecha en orden descendente
  const sortedProjects = projectsWithValidDates.sort((a, b) => {
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);
    return dateB - dateA;
  });

  // Toma los primeros dos proyectos (los más recientes)
  const latestProjects = sortedProjects.slice(0, 2);

  // Ahora latestProjects contiene los dos proyectos más recientes con fechas válidas


  const destacatedProjects = myProjects.filter(project => project.destacated);

  return (
    <section className="flex flex-col gap-16">

      <section className="flex flex-col gap-5">
        <h1 className="text-3xl dark:text-neutral-100 text-neutral-800">
          Hi, I’m Juan 👋
        </h1>
        <h2 className="w-auto max-w-[60ch] leading-6">
          Buen dia, I am a{" "}
          <strong className="font-normal text-orange-500">
            peruvian frontend developer
          </strong>{" "}
          with over{" "}
          <strong className="font-normal text-orange-500">2 years</strong> of
          web experience. I am currently working with{" "}
          <strong className="font-normal text-orange-500">
            NextJS, Angular and Typescript
          </strong>
          . Outside of work, I go running and learning Flutter and Kotlin.
        </h2>
        <ul role="list" className="flex flex-row gap-2">
          <li>
            <a
              href="https://LinkedIn.com/in/juanoscco"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              LinkendIn<span className="sr-only">LinkendIn link</span>
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="https://bento.me/jcom-dev"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              Bento<span className="sr-only">Bento link</span>
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="https://github.com/jcom-dev"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              Github<span className="sr-only">Github link</span>
            </a>
          </li>
        </ul>
      </section>
      <section className="">
        <div className="flex justify-between mb-7">
          <h3 className="text-lg dark:text-neutral-100">Latest projects</h3>
          <Link
            href="/projects"
            className="cursor-pointer underline decoration-dashed underline-offset-8"
          >
            See all projects!
          </Link>
        </div>


        <section className="flex flex-col sm:flex-row gap-4 sm:justify-between">
          {/* list de 2 */}
          {latestProjects.map((item, i) => (
            <LastedProjects {...item} key={i} />
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h3 className="text-lg dark:text-neutral-100">Selected Projects</h3>
        <section className="flex flex-col gap-4">
          {destacatedProjects.map((item, i) => (
            <SelectedProjects {...item} key={i} />
          ))}
          {/* <Card className="flex h-14 px-3  justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400">
            <div className="flex items-center gap-4">
              <h3>Dictionary app</h3>
              <small>React JS react Query zod</small>
            </div>
            <ArrowTopRightIcon />
          </Card>
          <Card className="flex h-14 px-3  justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400">
            <div className="flex items-center gap-4">
              <h3>Dictionary app</h3>
              <small>React JS react Query zod</small>
            </div>
            <ArrowTopRightIcon />
          </Card>
          <Card className="flex h-14 px-3  justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400">
            <div className="flex items-center gap-4">
              <h3>Dictionary app</h3>
              <small>React JS react Query zod</small>
            </div>
            <ArrowTopRightIcon />
          </Card> */}
        </section>
      </section>
      {/* Footer */}
      <section className="flex flex-col gap-4 mb-4">
        <h3 className="text-lg dark:text-neutral-100">Get in touch</h3>
        <p>
          Email me at{" "}
          <a
            href="mailto:juan.osccomori@gmail.com"
            className="hover:text-neutral-100 cursor-pointer"
            rel="noreferrer"
            target="_blank"
          >
            juan.osccomori@gmail.com
            <span className="sr-only">juan.osccomori@gmail.com link</span>
          </a>{" "}
          or follow me via my social links.
        </p>

        <ul role="list" className="flex flex-row gap-2">
          <li>
            <a
              href="https://LinkedIn.com/in/juanoscco"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              LinkendIn<span className="sr-only">LinkendIn link</span>
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="https://bento.me/jcom-dev"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              Bento<span className="sr-only">Bento link</span>
            </a>
          </li>
          <li>/</li>
          <li>
            <a
              href="https://github.com/jcom-dev"
              className="dark:hover:text-neutral-100 hover:text-orange-400 cursor-pointer"
              rel="noreferrer"
              target="_blank"
            >
              Github<span className="sr-only">Github link</span>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
