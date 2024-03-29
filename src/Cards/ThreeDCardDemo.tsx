"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Portfolio Website for DFPL
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Built a website to showcase the organisations Features.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/Images/web.png"
              height="350"
              width="350"
              className="h-60 w-full object-cover group-hover/card:shadow-xl rounded-3xl border-2 border-slate-700"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://partner.dipeat.com/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Live Demo →
            </CardItem>
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Next Js
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  }