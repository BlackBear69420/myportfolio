"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#252535] text-slate-400 shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-out hover:text-white hover:ring-white/20
        ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
    >
      <HiArrowUp className="text-lg" />
    </button>
  );
}
