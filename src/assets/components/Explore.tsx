import { motion } from "motion/react";
import ExploreCourses from "./exploreCourse";
import Begin from "./Begin";
import { ArrowRight } from "lucide-react";

export default function Explore() {
  const courses = [
    {
      text: "ALL COURSE",
      color: "bg-black text-white font-bold border text-[10px]",
      width: "w-25",
    },
    {
      text: "UI/UX DESIGN",
      color: "bg-gray-500/5 text-black border-gray-500/5 font-bold text-[10px]",
      width: "w-22",
    },
    {
      text: "MARKETING",
      color: "bg-gray-500/5 text-black border-gray-500/5 font-bold text-[10px]",
      width: "w-20",
    },
    {
      text: "EMAIL MARKETING",
      color: "bg-gray-500/5 text-black border-gray-500/5 font-bold text-[10px]",
      width: "w-27",
    },
    {
      text: "CONTENT & SEO",
      color: "bg-gray-500/5 text-black border-gray-500/5 font-bold text-[10px]",
      width: "w-25",
    },
    {
      text: "AI & MACHINE LEARNING",
      color: "bg-gray-500/5 text-black border-gray-500/5 font-bold text-[10px]",
      width: "w-35",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="w-full lg:w-265 h-auto lg:h-350 border-white shadow-sm block m-auto bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mt-10 lg:mt-20 text-center px-4"
      >
        Explore our courses
      </motion.h1>

      {/* MOBILE & TABLET pill filters — hidden on lg */}
      <div className="lg:hidden flex gap-2 mt-5 items-center overflow-x-auto px-4 pb-2 scrollbar-hide">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ amount: 0.1, once: true }}
            className={`shrink-0 h-9 px-4 rounded-l-3xl rounded-r-3xl flex items-center justify-center whitespace-nowrap ${course.color}`}
          >
            <p className="text-center">{course.text}</p>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP pill filters — your exact original, hidden below lg */}
      <div className="hidden lg:flex justify-center gap-3 mt-5 items-center">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ amount: 0.3, once: true }}
            className={`${course.width} h-10 rounded-l-3xl rounded-r-3xl ${course.color}`}
          >
            <p className="text-center mt-3">{course.text}</p>
          </motion.div>
        ))}
      </div>

      <ExploreCourses />

      <button
        className="rounded-4xl block m-auto mt-10
        bg-black w-50 h-10 text-white font-bold text-sm"
      >
        <span className="flex flex-row ml-2 mt-2 gap-4.5">
          <p>VIEW ALL COURSES</p>
          <div className="rounded-full -translate-y-2 bg-white w-10 h-10">
            <ArrowRight className="w-5 h-5 mt-2 ml-2.5 text-black" />
          </div>
        </span>
      </button>

      <Begin />
    </motion.section>
  );
}