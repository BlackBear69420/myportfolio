import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import GrainOverlay from "./GrainOverlay";

const education = [
  {
    institution: "KLE DR. MSSCET",
    degree: "B.E. Computer Science",
    period: "2020 – 2024",
    result: "7.5 GPA",
  },
  {
    institution: "GSS, Belagavi",
    degree: "Science",
    period: "2018 – 2020",
    result: "85%",
  },
];

export default function Education() {
  return (
    <div id="education" className="relative overflow-hidden rounded-2xl bg-[#252535] p-6">
      <GrainOverlay />
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineAcademicCap className="text-xl text-slate-400" />
        <h2 className="text-lg font-bold text-white">Education</h2>
      </div>
      <div className="space-y-3">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="relative flex items-center justify-between rounded-xl bg-[#2e2e40] p-4"
          >
            <div>
              <p className="font-semibold text-white">{edu.institution}</p>
              <p className="text-xs text-slate-400">{edu.degree}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{edu.result}</p>
              <p className="text-xs text-slate-500">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
