import React from 'react'
import { myProjects } from "@/mocks/myProjects.mock"
import Image from 'next/image';

interface Props {
    params: { slug: string }
}

export default function Page({ params }: Props) {

    const { slug } = params;

    const project = myProjects.find(project => project.slug === slug);

    return (
        <section className='w-11/12 max-w-2xl m-auto'>
            <Image
            src={`https://source.unsplash.com/random/600x300/?programmer`}
            alt='my-tech-stack'
            width={400}
            height={500}
            />
            <h1>{project?.title}</h1>
            <p>Slug: {slug}</p>
            {project && (
                <div>
                    <p>Fecha: {project.date}</p>
                    <p>Descripción: {project.description}</p>
                    <p>Tipo: {project.type}</p>
                    <p>Skills: {project.skills.join(', ')}</p>
                    <a href={project.link}>Enlace al Repositorio</a>
                </div>
            )}
        </section>
    )
}
