import React from "react";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import GrainOverlay from "./GrainOverlay";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden rounded-2xl bg-[#252535] p-6 text-center">
      <GrainOverlay />
      <p className="text-base font-bold text-white">Sumit Nayak</p>
      <p className="mt-1 text-xs text-slate-500">
        © {new Date().getFullYear()} All rights reserved
      </p>
      <div className="mt-4 flex justify-center gap-5">
        <Link
          href="https://github.com/BlackBear69420"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors duration-150 hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl" />
        </Link>
        <Link
          href="mailto:smak3598@gmail.com"
          className="text-slate-400 transition-colors duration-150 hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope className="text-2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/m-sumit-nayak-057146229/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors duration-150 hover:text-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
      </div>
    </footer>
  );
}
