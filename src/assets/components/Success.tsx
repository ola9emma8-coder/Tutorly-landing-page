import { motion } from "motion/react";
import { Play } from "lucide-react";
import Learn from "./Learn";

export default function Success() {
  const successes = [
    {
      image: "/images/success.jpeg",
      comment: `"Tutorly's UX Design track was \na complete game-changer"`,
      name: "Mark Manbold",
      role: "UI Designer at Google",
    },
    {
      image: "/images/success1.jpeg",
      comment: `"Everything was explained in a \nsimple, no-fluff way"`,
      name: "Book Clinton",
      role: "AI Engineer at Frebik",
    },
  ];

  const dots = [
    { bgColor: "bg-gray-300" },
    { bgColor: "bg-gray-300" },
    { bgColor: "bg-gray-300" },
    { bgColor: "bg-gray-300" },
    { bgColor: "bg-gray-300" },
    { bgColor: "bg-black" },
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="w-full lg:w-265 h-auto lg:h-250 border-gray-300 overflow-hidden bg-gray-500/5 block m-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mt-10 text-black px-4"
        >
          Success stories that inspire
        </motion.h1>

        <motion.p
          style={{ wordSpacing: "-2px" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-xs sm:text-sm mt-2 font-bold text-center text-black px-4"
        >
          <span className="lg:hidden">
            Our learners have used Tutorly to transition careers, secure
            promotions, and break into competitive industries
          </span>
          <span className="hidden lg:inline">
            Our learners have used Tutorly to transition careers, secure
            promotions,
            <br />
            <span className="block text-center">
              and break into competitive industries
            </span>
          </span>
        </motion.p>

        {/* MOBILE & TABLET — hidden on lg */}
        <div className="lg:hidden mt-5 px-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch gap-5">
            {successes.map((success, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden w-full sm:w-60">
                <motion.img
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.3 }}
                  viewport={{ amount: 0.7, once: true }}
                  src={success.image}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  viewport={{ amount: 0.3, once: true }}
                  className="absolute bottom-4 left-4 right-4 flex flex-col gap-3"
                >
                  <p className="text-white text-xs font-bold whitespace-pre-line">
                    {success.comment}
                  </p>
                  <div className="flex flex-col gap-1 text-xs font-bold">
                    <p className="text-white">{success.name}</p>
                    <p className="text-white">{success.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}

            <div className="relative rounded-lg overflow-hidden w-full sm:w-60">
              <motion.img
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                viewport={{ amount: 0.7, once: true }}
                src="/images/success2.jpeg"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                viewport={{ amount: 0.3, once: true }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2
                rounded-l-3xl rounded-r-3xl w-25 h-8
                bg-white border-white shadow-sm text-black text-sm font-bold"
              >
                <span className="flex flex-row justify-center items-center gap-2">
                  <Play className="w-3 h-3 fill-black" />
                  <p>Play Story</p>
                </span>
              </motion.button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-1 mt-5">
            {dots.map((dot, index) => (
              <div key={index} className={`w-1.5 h-1.5 rounded-full ${dot.bgColor}`} />
            ))}
          </div>
        </div>

        {/* DESKTOP — your exact original, hidden below lg */}
        <div className="hidden lg:block">
          <div className="flex justify-center items-center gap-3">
            {successes.map((success, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative mt-5">
                  <motion.img
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.6 }}
                    viewport={{ amount: 0.7, once: true }}
                    src={success.image}
                    className={`w-60 h-80
                    rounded-lg object-cover`}
                  />
                  <div className="absolute w-60 h-80 inset-0 bg-black/50 rounded-lg"></div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  viewport={{ amount: 0.3, once: true }}
                  className="flex flex-col gap-3 ml-3 -translate-y-23"
                >
                  <p className="text-white text-xs font-bold whitespace-pre-line">
                    {success.comment}
                  </p>
                  <div className="flex flex-col gap-1 text-xs font-bold">
                    <p className="text-white">{success.name}</p>
                    <p className="text-white">{success.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
            <div className="flex flex-col">
              <div className="relative mt-5">
                <motion.img
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  viewport={{ amount: 0.7, once: true }}
                  src="/images/success2.jpeg"
                  className={`w-60 h-80 -translate-y-6
                  rounded-lg object-cover`}
                />
                <div
                  className="absolute w-60 h-80 -translate-y-6
                  inset-0 bg-black/50 rounded-lg"
                ></div>
              </div>
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                viewport={{ amount: 0.3, once: true }}
                className="rounded-l-3xl rounded-r-3xl w-25 h-8 -translate-y-16
                bg-white border-white shadow-sm block m-auto text-black text-sm font-bold"
              >
                <span className="flex flex-row justify-center gap-2">
                  <Play className="w-3 h-3 mt-1 fill-black" />
                  <p>Play Story</p>
                </span>
              </motion.button>
            </div>
          </div>

          <div className="flex justify-center -translate-y-16 items-center gap-1">
            {dots.map((dot, index) => (
              <div key={index} className={`w-1.5 h-1.5 rounded-full ${dot.bgColor}`}></div>
            ))}
          </div>

          <Learn />
        </div>
      </motion.section>
    </div>
  );
}