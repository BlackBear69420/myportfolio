import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Sumit Nayak
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Sumit Nayak
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            <React.Fragment>
              <li>
                <Link href="/About">
                  <span
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                    )}
                  >
                    About
                  </span>
                </Link>
              </li>
              <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
              </span>
              <li>
                <Link href="/Skills">
                  <span
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                    )}
                  >
                    Skills
                  </span>
                </Link>
              </li>
              <span
                className="text-4xl font-thin leading-[0] text-slate-400"
                aria-hidden="true"
              >
                /
              </span>
              <li>
                <Link href="/Projects">
                  <span
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
                    )}
                  >
                    Projects
                  </span>
                </Link>
              </li>
           
            </React.Fragment>
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end gap-4">
  <Link href="https://github.com/BlackBear69420" target="_blank">
    <span
      className={clsx(
        "p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
      )}
    >
      <FaGithub />
    </span>
  </Link>

  <Link href="https://www.instagram.com/sumit__nayak__/" target="_blank">
    <span
      className={clsx(
        "p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
      )}
    >
      <FaInstagram />
    </span>
  </Link>

  <Link href="https://www.linkedin.com/in/m-sumit-nayak-057146229/" target="_blank">
    <span
      className={clsx(
        "p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
      )}
    >
      <FaLinkedin />
    </span>
  </Link>
</div>

      </div>
    </Bounded>
  );
}
