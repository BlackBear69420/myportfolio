"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        <div className="flex items-center justify-between">
          <NameLogo name={"Home"} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-y-0" : "translate-y-[-100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
            <React.Fragment >
            <li>
            <Link href="/About" onClick={() => setOpen(false)}>
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">About</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Skills" onClick={() => setOpen(false)}>
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">skills</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Projects" onClick={() => setOpen(false)}>
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">Projects</span>
              </div>
            </Link>
          </li>
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
            </React.Fragment>
          <li>
            <Button/>
          </li>
        </div>
        <DesktopMenu />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter text-slate-700"
    >
      {name}
    </Link>
  );
}


function DesktopMenu() {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-3 bg-transparent py-0 md:flex">
      <React.Fragment>
        <ul className="flex flex-row gap-1">
          <li>
            <Link href="/About">
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">About</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Skills">
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">Skills</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Projects">
              <div className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
                <span className="absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8" />
                <span className="relative">Projects</span>
              </div>
            </Link>
          </li>
        </ul>
        <span
          className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
          aria-hidden="true"
        >
          /
        </span>
      </React.Fragment>
      <li>
        <Button />
      </li>
    </div>
  );
}
