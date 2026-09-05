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
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden rounded-2xl bg-[#141414] p-6">
      <GrainOverlay />
      <h2 className="mb-4 text-lg font-bold text-white">Projects</h2>
      <div className="space-y-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-4 rounded-xl bg-[#1f1f1f] p-3 transition-colors duration-200 hover:bg-[#2a2a2a]"
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
