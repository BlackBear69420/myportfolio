"use client"
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
          duration:1.3,
          ease: "power3.inOut",
        },
      );

    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <Bounded>
      <div ref={component} className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="lg" className="col-start-1">
          About Me
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            dignissimos quibusdam vel? Minus veritatis, debitis voluptatibus
            tenetur et maxime porro eaque ipsum animi nobis voluptatem, quam
            sunt iste, ullam ab!
          </p>
        </div>

        <Image
          className="avatar row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          src="/Images/avatar.jpg"
          alt="avatar"
          width={400}
          height={400}
        />

        <Button />
      </div>

      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <>
          <Heading size="lg" className="col-start-1">
            Experience
          </Heading>
          <Heading as="h3" size="sm">
            React Native Developer
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              dignissimos quibusdam vel? Minus veritatis, debitis voluptatibus
              tenetur et maxime porro eaque ipsum animi nobis voluptatem, quam
              sunt iste, ullam ab!
            </p>
          </div>
        </>
      </div>
    </Bounded>
  );
}

export default About;
