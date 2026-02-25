import { MdArrowOutward } from "react-icons/md";

export default function Button() {
  return (
    <a
      href="/Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-600 bg-[#2e2e40] px-4 py-2 font-bold text-white transition-transform ease-out hover:scale-105"
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-slate-200 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
      <span className="relative flex items-center justify-center gap-2 text-sm transition-colors duration-300 group-hover:text-slate-900">
        Resume <MdArrowOutward className="inline-block" />
      </span>
    </a>
  );
}
