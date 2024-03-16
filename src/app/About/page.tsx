"use client";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function About() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <Bounded>
      <div
        ref={component}
        className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]"
      >
        <Heading size="lg" className="col-start-1">
          About Me
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            dignissimos quibusdam vel? Minus veritatis, debitis voluptatibus
            tenetur et maxime porro eaque ipsum animi nobis voluptatem, quam
            sunt iste, ullam ab!
          </p>
        </div>

        {/* <Image
          className="avatar row-start-1 max-w-sm md:col-start-2 md:row-end-3 overflow-hidden rounded-3xl border-2 border-slate-700"
          src="/Images/avatar.jpg"
          alt="avatar"
          width={400}
          height={400}
        /> */}

        {/* <Button /> */}
      </div>

<div className="grid grid-cols-1 items-center md:grid-cols-2">

<div className="py-10  md:py-14 lg:py-16 ">
        <Heading size="lg" className="mb-3">
          Experience
        </Heading>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            React Native Developer
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2023-2024</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>Dipeat.com</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
          <span className="text-2xl text-slate-400">Description</span>
          </div>
        </div>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
           Full Stack Developer
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2023-2024</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>Varcons pvt limited</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
          <span className="text-2xl text-slate-400">Description</span>
          </div>
        </div>
      </div>
      <Image
          className="avatar  overflow-hidden rounded-3xl border-2 border-slate-700"
          src="/Images/dipeat.png"
          alt="Internship certificate"
          width={400}
          height={400}
        />
</div>
<div className="grid grid-cols-1 items-center md:grid-cols-2">
      <div className="py-10  md:py-14 lg:py-16">
        <Heading size="lg" className="mb-3">
          Education
        </Heading>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            KLE DR.MSSCET
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2020-2024</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>CSE</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
          <span className="text-2xl text-slate-400">7.5 Gpa</span>
          </div>
        </div>
        <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
           GSS,Belagavi
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>2018-2020</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>Science</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
          <span className="text-2xl text-slate-400">85 %</span>
          </div>
        </div>
      </div>
      {/* <Image
          className="avatar "
          src="/Images/avatar.jpg"
          alt="avatar"
          width={400}
          height={400}
        /> */}
      </div>
    </Bounded>
  );
}

export default About;
