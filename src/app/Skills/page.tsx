"use client";
import React from "react";
import Lottie from "lottie-react";
import node from "../../../public/lotties/node-js.json";
import react from "../../../public/lotties/react.json";
import java from "../../../public/lotties/java.json";
import git from "../../../public/lotties/git.json";
import sql from "../../../public/lotties/sql.json";
import fire from "../../../public/lotties/firebase.json";
import next from "../../../public/lotties/next.json";
import c from "../../../public/lotties/c.json";
import map from "../../../public/lotties/map.json";
import js from "../../../public/lotties/js.json";
import ui from "../../../public/lotties/ui.json";
import api from "../../../public/lotties/api.json";
import python from "../../../public/lotties/python.json";
import analytics from "../../../public/lotties/analytics.json";
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
  const langs=[
    {name:"Java",animationData:java},
    {name:"C",animationData:c},
    {name:"JS",animationData:js},
    {name:"Python",animationData:python},
  ];
  const Additional=[
    {name:'UI/UX',animationData:ui},
    {name:'Analytics',animationData:analytics},
    {name:'Maps',animationData:map},
    {name:'Testing',animationData:api},
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
          <div className="flex gap-4 flex-wrap justify-center items-center bg-slate-800 border border-gray-300 rounded-lg p-4 py-8  text-xl font-semibold tracking-tight text-slate-700">
              {langs.map((item, index) => (
                <div
                  key={index}
                  className="flex  items-center gap-4 md:p-4 p-2 bg-gray-200 rounded-md md:w-48 md:h-16 w-40 h-16"
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
        </div>
        <div className="w-full">
          <div className="flex my-6 items-center justify-center">
            <Heading size="sm">Additional Skills</Heading>
          </div>
          <div className="flex gap-4 flex-wrap justify-center items-center bg-slate-800 border border-gray-300 rounded-lg p-4 py-8 text-xl font-semibold tracking-tight text-slate-700">
              {Additional.map((item, index) => (
                <div
                  key={index}
                  className="flex  items-center gap-4 md:p-4 p-2 bg-gray-200 rounded-md md:w-48 md:h-16 w-40 h-16"
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
        </div>
      </div>
    </Bounded>
  );
}

export default Page;
