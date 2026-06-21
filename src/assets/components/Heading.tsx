import { ArrowUpRight } from "lucide-react";

export default function Heading() {
  return (
    <div>
      {/* MOBILE & TABLET — hidden on lg */}
      <div className="lg:hidden flex flex-col gap-5 items-center text-center px-4">
        <h1 className="font-bold text-black text-3xl sm:text-4xl">
          <span className="block">Build skills</span>
          New opportunities.
        </h1>
        <p className="font-bold text-sm text-black max-w-md">
          Tutorly gives you a complete learning experience that helps you gain
          real, job-ready skills and take the next step in your career
        </p>
        <button className="rounded-4xl bg-black w-50 h-10 text-white font-bold text-sm">
          <span className="flex flex-row items-center justify-center gap-2">
            <p>Explore Our Courses</p>
            <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </span>
        </button>
      </div>

      {/* DESKTOP — your exact original, hidden below lg */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-7">
          <h1 className="font-bold whitespace-nowrap text-black text-6xl">
            <span className="block text-center">Build skills</span>
            New opportunities.
          </h1>
          <p className="font-bold text-md whitespace-nowrap text-black">
            Tutorly gives you a complete learning experience that helps you gain real,
            <span className="block text-center">
              job-ready skills and take the next step in your career
            </span>
          </p>
          <button
            className="rounded-4xl block m-auto mt-3 -translate-y-2
            bg-black w-50 h-10 text-white font-bold text-sm"
          >
            <span className="flex flex-row ml-2 mt-2 gap-4.5">
              <p>Explore Our Courses</p>
              <div className="rounded-full -translate-y-2 bg-white w-10 h-10">
                <ArrowUpRight className="w-5 h-5 mt-2 ml-2.5 text-black" />
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}