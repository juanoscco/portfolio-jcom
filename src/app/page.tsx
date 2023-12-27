"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/mocks/projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardProject from "@/components/card-projects";

import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="lg:w-[90%]  lg:rounded-2xl lg:px-16 lg:py-20 bg-white w-full lg:h-full h-screen py-4 px-4 ">
        <section className="mt-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  alt="JCOM"
                  src="https://media.licdn.com/dms/image/D4E03AQGZfm0dgjBp_g/profile-displayphoto-shrink_200_200/0/1693268840900?e=1709164800&v=beta&t=I-wKav9SkOzBxtg7hUpmKfcA1R7XLUT0sZcoz7djb8E"
                />
                <AvatarFallback>JCOM</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Juan Oscco</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Front End developer with experience in building and designing
                  web applications. Skilled in JavaScript, TypeScript, React,
                  Angular, Node.js and more.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Next.js</Badge>
                <Badge>Angular</Badge>
                <Badge>Node.js</Badge>
                <Badge>Firebase</Badge>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <Carousel
                opts={{
                  align: "start",
                }}
                orientation="vertical"
                className="w-full  mt-10"
              >
                <CarouselContent className="-mt-1 md:h-[400px] h-[200px]">
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <CardProject
                        description={project.description}
                        title={project.title}
                        link={project.link}
                        code={project.code}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold">Contact Me</h2>
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">
                  Email: jcom.developer@gmail.com
                </p>
                {/* <p className="text-gray-500 dark:text-gray-400">
                  Phone: +1 123 456 7890 
                  
                </p> */}
                <div className="flex flex-wrap gap-2">
                  <Link href="https://github.com/jcom-dev" target="_blank">
                    <LinkedInLogoIcon height={20} width={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/juanoscco/"
                    target="_blank"
                  >
                    <GitHubLogoIcon height={20} width={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
