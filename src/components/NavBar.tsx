"use client";

import React from "react";
import {
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineEnvelope,
  HiOutlinePencilSquare,
  HiOutlineFolder,
} from "react-icons/hi2";

const navItems = [
  { icon: HiOutlineHome, label: "Home", href: "#hero" },
  { icon: HiOutlinePencilSquare, label: "Experience", href: "#experience" },
  { icon: HiOutlineBriefcase, label: "Projects", href: "#projects" },
  { icon: HiOutlineCodeBracket, label: "Skills", href: "#skills" },
  { icon: HiOutlineEnvelope, label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const handleNav = (href: string) => {
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Main navigation">
      <div className="relative flex items-center justify-center gap-8 rounded-b-2xl bg-[#252535] px-8 py-4">
        {/* Grainy texture overlay — border-radius matches rounded-b-2xl so no overflow-hidden needed */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundSize: "161px",
            backgroundRepeat: "repeat",
            backgroundImage:
              "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
            opacity: 0.03,
            borderRadius: "0 0 1rem 1rem",
          }}
        />
        {navItems.map(({ icon: Icon, label, href }) => (
          <div key={label} className="group relative">
            <button
              onClick={() => handleNav(href)}
              className="flex items-center justify-center text-slate-400 transition-colors duration-200 hover:text-white"
              aria-label={label}
            >
              <Icon className="text-[1.3rem]" />
            </button>

            {/* Tooltip — slides down from the icon */}
            <div
              className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 -translate-y-1
                         opacity-0 transition-all duration-200 ease-out
                         group-hover:translate-y-0 group-hover:opacity-100"
            >
              <span className="whitespace-nowrap rounded-lg bg-[#2e2e40] px-2.5 py-1.5 text-xs font-medium text-white shadow-lg">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
