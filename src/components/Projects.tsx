import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import GrainOverlay from "./GrainOverlay";

const projects = [
  {
    name: "Partner App – DFPL",
    description: "Complete mobile app for restaurant operations.",
    image: "/Images/bannner.png",
    link: "https://play.google.com/store/apps/details?id=com.dipeat.partner",
    tech: "React Native",
  },
  {
    name: "React Native CRUD App",
    description: "A CRUD app to maintain user information with Redux & Firebase.",
    image: "/Images/app.png",
    link: "https://github.com/BlackBear69420/react-native-crud-app-using-redux-firebase",
    tech: "React Native",
  },
  {
    name: "Password Generator",
    description: "A mobile app to generate secure passwords.",
    image: "/Images/pass.png",
    link: "https://github.com/BlackBear69420/Passwordgenerator",
    tech: "React Native",
  },
  {
    name: "Movie Booking Website",
    description: "Book TV shows and view details.",
    image: "/Images/tv.png",
    link: "https://tvshow-react-app.vercel.app/",
    tech: "React.js",
  },
  {
    name: "Restaurant Template",
    description: "A complete template for a restaurant website.",
    image: "/Images/Rest.png",
    link: "https://sumitrest.netlify.app/",
    tech: "HTML / CSS / JS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden rounded-2xl bg-[#252535] p-6">
      <GrainOverlay />
      <h2 className="mb-4 text-lg font-bold text-white">Projects</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 rounded-xl bg-[#2e2e40] p-3 transition-colors duration-200 hover:bg-[#363650]"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {project.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-slate-400">
                {project.description}
              </p>
            </div>
            <HiArrowUpRight className="shrink-0 text-slate-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}
