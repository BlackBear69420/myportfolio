import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import GrainOverlay from "./GrainOverlay";

const experiences = [
  {
    role: "Full Stack Developer",
    org: "Infitout Financial Technologies",
    period: "Mar 2024 – Present",
    desc: "Building production-grade fintech products — a cross-platform mobile trading app, real-time web trading platform, algorithmic trading system, and portfolio analysis platform.",
  },
  {
    role: "React Native Developer Intern",
    org: "DFPL",
    period: "Dec 2023 – Feb 2024",
    desc: "Architected a full-featured React Native app with order management, real-time tracking, maps, and payment gateway. Also built a responsive Next.js marketing website.",
  },
  {
    role: "Mobile Application Developer Intern",
    org: "Cwipedia",
    period: "Aug 2023 – Sep 2023",
    desc: "Built a cross-platform edtech app with React Native and Firebase — video streaming, live classes, in-app assessments, and learner progress tracking.",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="relative overflow-hidden rounded-2xl bg-[#252535] p-6">
      <GrainOverlay />
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineBuildingOffice2 className="text-xl text-slate-400" />
        <h2 className="text-lg font-bold text-white">Experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.org} className="relative rounded-xl bg-[#2e2e40] p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-white">{exp.role}</p>
              <span className="shrink-0 text-xs text-slate-500">{exp.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-slate-400">{exp.org}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
