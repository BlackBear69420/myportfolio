"use client";
import React from "react";
import Lottie from "lottie-react";
import node from "../../../public/lotties/node-js.json";
import react from "../../../public/lotties/react.json";
import html from "../../../public/lotties/html.json";
import git from "../../../public/lotties/git.json";
import sql from "../../../public/lotties/sql.json";
import fire from "../../../public/lotties/firebase.json";
import next from "../../../public/lotties/next.json";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

function Page() {
  const items = [
    { name: "Node Js", animationData: node },
    { name: "React", animationData: react },
    { name: "Next Js", animationData: next },
    { name: "GIT", animationData: git },
    { name: "MySql", animationData: sql },
    { name: "Firebase", animationData: fire },
  ];

  return (
    <Bounded>
      <div className="flex mb-6 items-center justify-center">
        <Heading size="md">Skills</Heading>
      </div>

      <div className=" flex gap-4 flex-wrap items-center justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex  items-center gap-4 md:p-4 p-2 bg-gray-100 rounded-md md:w-48 md:h-16 w-40 h-16"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden ">
              <Lottie animationData={item.animationData} loop={true} />
            </div>
            <span className="md:text-lg sm:text-sm font-semibold text-slate-800">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="grid md:px-20 grid-cols-1 md:grid-cols-2 gap-8 justify-items-center md:mt-16">
        <div className="w-full">
          <div className="flex my-6 items-center justify-center">
            <Heading size="sm">Programming Languages</Heading>
          </div>
          <div className="justify-center bg-gray-100 border border-gray-300 rounded-lg p-4 space-y-4 text-2xl font-semibold tracking-tight text-slate-700">
            <p>Java</p>
            <p>C Programming</p>
            <p>Python</p>
            <p>Javascript</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex my-6 items-center justify-center">
            <Heading size="sm">Additional Skills</Heading>
          </div>
          <div className="justify-center bg-gray-100 border border-gray-300 rounded-lg p-4 space-y-4 text-2xl font-semibold tracking-tight text-slate-700">
            <p>Java</p>
            <p>C Programming</p>
            <p>Python</p>
            <p>Javascript</p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}

export default Page;
