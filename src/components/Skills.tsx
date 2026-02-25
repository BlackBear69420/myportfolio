import React from "react";
import GrainOverlay from "./GrainOverlay";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiFirebase,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const tools = [
  {
    icon: MdOutlinePhoneAndroid,
    name: "React Native",
    desc: "Mobile Development",
    color: "text-blue-400",
  },
  {
    icon: SiReact,
    name: "React.js",
    desc: "UI Framework",
    color: "text-cyan-400",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    desc: "React Framework",
    color: "text-white",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    desc: "Backend Runtime",
    color: "text-green-400",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    desc: "Type-safe JS",
    color: "text-blue-500",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    desc: "Web Language",
    color: "text-yellow-400",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    desc: "Backend Service",
    color: "text-yellow-500",
  },
  {
    icon: SiRedux,
    name: "Redux",
    desc: "State Management",
    color: "text-purple-400",
  },
  {
    icon: SiGit,
    name: "Git",
    desc: "Version Control",
    color: "text-red-400",
  },
  {
    icon: SiFigma,
    name: "Figma",
    desc: "Design Tool",
    color: "text-pink-400",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    desc: "CSS Framework",
    color: "text-cyan-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden rounded-2xl bg-[#252535] p-6">
      <GrainOverlay />
      <h2 className="mb-4 text-lg font-bold text-white">Skills</h2>
      <div className="grid grid-cols-2 gap-3">
        {tools.map(({ icon: Icon, name, desc, color }) => (
          <div
            key={name}
            className="relative flex items-center gap-3 rounded-xl bg-[#2e2e40] p-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1e1e2e]">
              <Icon className={`text-xl ${color}`} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{name}</p>
              <p className="truncate text-xs text-slate-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
