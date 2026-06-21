import { motion } from "motion/react";
import { Clock, PlayCircle, Star } from "lucide-react";

export default function ExploreCourses() {
  const courses = [
    {
      image: "/images/communicate.jpeg",
      time: { icon: Clock, number: "20hrs 30 mins" },
      lesson: { icon: PlayCircle, number: "25 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "Communication & soft skills",
      price: { new: "$ 380.50", old: "$420.50 USD" },
      buttonText: "VIEW COURSE",
    },
    {
      image: "/images/web.jpeg",
      time: { icon: Clock, number: "30hrs 50 mins" },
      lesson: { icon: PlayCircle, number: "50 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "Web Development",
      price: { new: "$ 499.99", old: "$680.00 USD" },
      buttonText: "VIEW COURSE",
    },
    {
      image: "/images/AI.jpeg",
      time: { icon: Clock, number: "40hrs 20 mins" },
      lesson: { icon: PlayCircle, number: "60 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "Data Science & AI",
      price: { new: "$ 549.99", old: "$750.00 USD" },
      buttonText: "VIEW COURSE",
    },
    {
      image: "/images/uiux.jpeg",
      time: { icon: Clock, number: "48hrs 30 mins" },
      lesson: { icon: PlayCircle, number: "45 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "UI/UX Design",
      price: { new: "$ 430.00", old: "$600.00 USD" },
      buttonText: "VIEW COURSE",
    },
    {
      image: "/images/market.jpeg",
      time: { icon: Clock, number: "10hrs 20 mins" },
      lesson: { icon: PlayCircle, number: "30 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "Digital Marketing",
      price: { new: "$ 350.00", old: "$480.00 USD" },
      buttonText: "VIEW COURSE",
    },
    {
      image: "/images/business.jpeg",
      time: { icon: Clock, number: "20hrs 40 mins" },
      lesson: { icon: PlayCircle, number: "35 lessons" },
      star: { icon: Star, number: "5.0" },
      course: "Business & Entrepreneurship",
      price: { new: "$ 399.99", old: "$550.00 USD" },
      buttonText: "VIEW COURSE",
    },
  ];

  // Shared card content for mobile/tablet
  const CardContent = ({ course }: { course: (typeof courses)[0] }) => (
    <>
      <img
        src={course.image}
        className="rounded-lg w-full h-40 block m-auto object-cover mt-2"
      />
      <div className="flex flex-row gap-3 sm:gap-5 justify-center mt-1 items-center flex-wrap px-1">
        <div className="flex flex-row gap-1 items-center">
          <course.time.icon className="w-3 h-3 text-gray-500" />
          <p className="text-gray-500 text-xs sm:text-sm font-bold">
            {course.time.number}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <course.lesson.icon className="w-3 h-3 text-gray-500" />
          <p className="text-gray-500 text-xs sm:text-sm font-bold">
            {course.lesson.number}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <course.star.icon className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <p className="text-gray-500 text-xs sm:text-sm font-bold">
            {course.star.number}
          </p>
        </div>
      </div>
      <h2 className="text-base sm:text-lg font-bold text-black ml-2 mt-1">
        {course.course}
      </h2>
      <div className="flex flex-row gap-1 ml-2">
        <p className="font-bold text-sm sm:text-md text-black">{course.price.new}</p>
        <p className="font-bold text-sm sm:text-md text-gray-500 decoration-1 line-through">
          {course.price.old}
        </p>
      </div>
      <button
        className="border-gray-500 hover:text-white hover:bg-black
        border w-[90%] h-7 text-xs sm:text-sm mt-2 transition duration-700 cursor-pointer
        rounded-l-3xl text-center font-bold rounded-r-3xl block mx-auto"
      >
        {course.buttonText}
      </button>
    </>
  );

  return (
    <div>
      {/* MOBILE (< sm): single column */}
      <div className="sm:hidden px-4 mt-5">
        <div className="flex flex-col gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ amount: 0.1, once: true }}
              className="rounded-lg bg-white shadow-sm pb-3 border border-gray-100 w-full max-w-sm mx-auto"
            >
              <CardContent course={course} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* TABLET (sm to below lg): 2-column grid */}
      <div className="hidden sm:block lg:hidden px-6 md:px-10 mt-5">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              viewport={{ amount: 0.1, once: true }}
              className="rounded-lg bg-white shadow-sm pb-3 border border-gray-100"
            >
              <CardContent course={course} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESKTOP lg+: your exact original */}
      <div className="hidden lg:grid lg:grid-cols-3 justify-center mx-auto w-fit gap-x-3 gap-y-3 mt-5">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ amount: 0.1, once: true }}
            className="rounded-lg bg-white shadow-sm w-70 pb-3 border-white"
          >
            <img
              src={course.image}
              className="rounded-lg w-68 h-40 block m-auto object-cover mt-2"
            />
            <div className="flex flex-row gap-5 justify-center mt-1 items-center">
              <div className="flex flex-row gap-1">
                <course.time.icon className="w-3 h-3 text-gray-500 translate-y-1" />
                <p className="text-gray-500 text-sm font-bold">{course.time.number}</p>
              </div>
              <div className="flex flex-row gap-1">
                <course.lesson.icon className="w-3 h-3 text-gray-500 translate-y-1" />
                <p className="text-gray-500 text-sm font-bold">{course.lesson.number}</p>
              </div>
              <div className="flex flex-row gap-1">
                <course.star.icon className="w-3 h-3 translate-y-1 fill-yellow-400 text-yellow-400" />
                <p className="text-gray-500 text-sm font-bold">{course.star.number}</p>
              </div>
            </div>
            <h2 className="text-lg font-bold text-black ml-2">{course.course}</h2>
            <div className="flex flex-row gap-1 ml-2">
              <p className="font-bold text-md text-black">{course.price.new}</p>
              <p className="font-bold text-md text-gray-500 decoration-1 line-through">
                {course.price.old}
              </p>
            </div>
            <button
              className="border-gray-500 hover:text-white hover:bg-black
              border w-65 h-6 text-sm mt-2 transition duration-700 cursor-pointer
              rounded-l-3xl text-center font-bold rounded-r-3xl block m-auto"
            >
              {course.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}