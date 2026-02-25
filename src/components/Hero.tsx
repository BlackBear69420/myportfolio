import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import Button from "./Button";
import GrainOverlay from "./GrainOverlay";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-2xl bg-[#252535] p-8 text-center">
      <GrainOverlay />
      <div className="relative mx-auto h-20 w-20">
        <Image
          src="/Images/avatar.jpg"
          alt="Sumit Nayak"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover ring-2 ring-slate-700"
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">@sumit_nayak</p>
      <h1 className="mt-1 text-2xl font-bold text-white">Sumit Nayak</h1>

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
          href="mailto:smak3598@gmail.com"
          className="text-slate-400 transition-colors duration-150 hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope className="text-xl" />
        </Link>
      </div>

      <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
        Hey, I&apos;m Sumit — a Software Engineer with 2+ years of professional experience
        contributing to end-to-end software development in production environments.
      </p>

      <div className="mt-6 flex justify-center">
        <Button />
      </div>
    </section>
  );
}
