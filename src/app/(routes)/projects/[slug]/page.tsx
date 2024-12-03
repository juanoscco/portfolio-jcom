import { projects as allProjects } from "@/mocks";
import { notFound } from "next/navigation";
import { Header } from "@/app/components";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default function page(
  { params }: Props,
) {
  const slug = params?.slug;

  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div
      className="bg-zinc-50 min-h-screen"
    >
      <Header project={project} views={100} />
      <article className=" m-auto max-w-2xl py-14">
        <a
          href=""
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg border border- border-transparent transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <img
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
            src={project.image}
            alt={project.imageAlt}
          />
        </a>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {project.extendedDescription}
        </p>
      </article>
    </div>
  )
}
