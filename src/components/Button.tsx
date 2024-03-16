import { clsx } from "clsx";
import { MdArrowOutward } from "react-icons/md";

export default function Button() {
  const handleButtonClick = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <a
    onClick={handleButtonClick}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105 text-slate-800"
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        Resume<MdArrowOutward className="inline-block" />
      </span>
    </a>
  );
}
