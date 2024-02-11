import React from 'react'
import { myProjects } from "@/mocks/myProjects.mock"
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    params: { slug: string }
}

export default function Page({ params }: Props) {

    const { slug } = params;

    const project = myProjects.find(project => project.slug === slug);

    return (
        <section className='w-10/12 max-w-2xl m-auto'>
            <Image
                src={`https://source.unsplash.com/random/600x300/?programmer`}
                alt='my-tech-stack'
                width={400}
                height={100}
                className='rounded-lg shadow-md w-full h-auto sm:h-48'
            />

            {project && (
                <section className='flex flex-col-reverse sm:flex-row-reverse mt-5'>
                    <article className='px-5 my-2 sm:block hidden'>
                        <h1 className='text-xl font-bold '>Skills</h1>
                        <ul className="list-disc gap-7  sm:gap-0 sm:pl-4 px-6 sm:px-0 sm:py-4 flex justify-start sm:flex-col">
                            {project.skills.map((skill: string, index: number) => (
                                <li className='px-1 py-1' key={index}>{skill}</li>
                            ))}
                        </ul>
                    </article>


                    <article className=" p-4 rounded-lg ">
                        <h1 className="text-3xl font-bold mb-2">{project?.title}</h1>
                        <p className="mb-2">{project?.description}</p>
                        <p className="mb-2">Date: {project?.date}</p>

                        <article className='sm:hidden block mt-5'>
                            <h1 className='text-xl font-bold '>Skills</h1>
                            <ul className="list-disc gap-7  sm:gap-0 sm:pl-4 px-6 sm:px-0 sm:py-4 py-3 flex flex-wrap justify-start sm:flex-col">
                                {project.skills.map((skill: string, index: number) => (
                                    <li className='px-1 p-1' key={index}>{skill}</li>
                                ))}
                            </ul>
                        </article>

                        <article>
                            <h1 className='text-xl font-bold my-2'>Links</h1>
                            <div className='flex gap-2'>
                                <a href={project.link} target='_blank' rel='noreferrer'>
                                    <GitHubLogoIcon height={20} width={20} className=' rounded-full ' />
                                </a>
                                <a href={project.browser} target='_blank' rel='noreferrer'>
                                    <VercelLogoIcon height={20} width={20} className=' rounded-full ' />
                                </a>
                            </div>
                        </article>
                    </article>

                </section>
            )}
        </section>
    )
}
