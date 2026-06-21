import { motion } from "motion/react";
import Courses from "./Courses";
import Tutorly from "./Tutorly";

export default function CT() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ amount: 0.3, once: true }}
      className="w-full px-4 sm:px-6 lg:px-0 lg:w-265 h-auto lg:h-210 border-gray-300 bg-gray-500/5 block m-auto"
    >
      <Courses />
      <Tutorly />
    </motion.section>
  );
}