import { Props } from "@/interface/projects.interface";


export const myProjects: Props[] = [
    {
      title: "Angular Components",
      slug: "angular-components",
      date: "2023-01-01",
      description:
        "A collection of reusable Angular components for building dynamic web applications.",
      destacated: false,
      type: "Angular",
      link: "https://github.com/jcom-dev/windbnb",
      skills: ["Angular", "TypeScript", "SASS/SCSS"],
    },
    {
      title: "My Gallery",
      slug: "my-gallery",
      date: "2023-02-01",
      description:
        "An image gallery application built with Next.js and React for showcasing personal photos and images.",
      destacated: true,
      type: "Next.js",
      link: "https://github.com/jcom-dev/my-gallery",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Quiz Country",
      slug: "quiz-country",
      description:
        "A quiz application focused on testing knowledge about countries and their capitals.",
      date: "2023-06-30",
      destacated: false,
      link: "https://github.com/jcom-dev/quiz-country",
      type: "Next.js",
      skills: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Random quote Generator",
      slug: "random-quote-generator",
      date: "2023-03-01",
      description:
        "A tool for generating random quotes and phrases sourced from the quote garden API.",
      type: "Next.js",
      link: "https://github.com/jcom-dev/random-quote-generator",
      destacated: true,
      skills: ["Next.js", "Tailwind CSS", "quote garden API"],
    },
    {
      title: "todo App",
      slug: "todo-app",
      date: "2023-04-01",
      description:
        "A task management application for creating, organizing, and tracking daily to-do lists and tasks.",
      destacated: true,
      type: "Next.js",
      link: "https://github.com/jcom-dev/to-do-app",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "windbnb",
      slug: "windbnb",
      description: "A project to clone the Airbnb site for Windbnb in Angular.",
      date: "2023-06-30",
      link: "https://github.com/jcom-dev/windbnb",
      destacated: false,
      type: "Angular",
      skills: ["Angular", "TypeScript", "SASS/SCSS"],
    },
  
  

  // {
  //   title: "Weather App",
  //   description:
  //     "An application to check the current weather and forecast for several upcoming days based on the location.",
  //   date: "February 2023",
  //   destacated: true,
  //   type: "Angular",
  //   skills: ["Angular", "TypeScript", "OpenWeatherMap API", "Bootstrap"],
  // },
  // {
  //   title: "E-commerce Website",
  //   description:
  //     "A fully functional e-commerce website with features for browsing products, adding items to cart, and completing purchases.",
  //   date: "March 2022",
  //   destacated: true,
  //   type: "Nextjs",
  //   skills: ["Next JS", "Node.js", "Chadcn UI", "Express.js", "Stripe API"],
  // },
  // {
  //   title: "Dashboard Management",
  //   description:
  //     "A comprehensive dashboard for managing various aspects of a hotel, including reservations, room management, staff administration, and reporting.",
  //   date: "February 2023",
  //   destacated: true,
  //   type: "Angular",
  //   skills: [
  //     "Angular",
  //     "Firebase",
  //     "Angular Material",
  //     "Charts.js",
  //     "Authentication",
  //   ],
  // },
];
