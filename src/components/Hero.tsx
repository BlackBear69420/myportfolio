import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import Button from "./Button";
import GrainOverlay from "./GrainOverlay";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-2xl bg-[#141414] p-8 text-center">
      <GrainOverlay />
      <h1 className="text-2xl font-bold text-white">Sumit Nayak</h1>

      <div className="mt-3 flex items-center justify-center gap-4">
        <Link
          href="https://github.com/BlackBear69420"
          target="_blank"
          className="text-slate-400 transition-colors duration-150 hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub className="text-xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/m-sumit-nayak-057146229/"
          target="_blank"
          className="text-slate-400 transition-colors duration-150 hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </Link>
        <Link
          href="mailto:sumitmnayak@gmail.com"
          className="text-slate-400 transition-colors duration-150 hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope className="text-xl" />
        </Link>
      </div>

      <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white">
        Hey, I&apos;m Sumit - a Software Engineer with 3+ years of experience shipping
        production mobile and web apps, from fintech trading platforms to cross-platform
        products built with Flutter, React Native, and Python.
      </p>

      <div className="mt-6 flex justify-center">
        <Button />
      </div>
    </section>
  );
}
