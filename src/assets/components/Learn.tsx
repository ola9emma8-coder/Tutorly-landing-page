import { motion } from "motion/react";

export default function Learn() {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const steps = [
    {
      image: "/images/skills.jpeg",
      type: "AI trends",
      date: `${formatted}`,
      text: `The skills employers are looking \nfor in ${new Date().getFullYear()}`,
    },
    {
      image: "/images/career.jpeg",
      type: "Career",
      date: `${formatted}`,
      text: "How to choose the right course \nfor your career path",
    },
    {
      image: "/images/online.jpeg",
      type: "Design",
      date: `${formatted}`,
      text: "The secret to staying motivated \nduring online courses",
    },
  ];

  return (
    <div className="mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black px-4"
      >
        Learn smarter. grow faster
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="text-xs sm:text-sm text-black font-bold mt-2 text-center px-4"
      >
        Find lessons, strategies, and insights to excel in online learning in your
        <span className="lg:hidden"> career.</span>
        <span className="hidden lg:block lg:text-center">career.</span>
      </motion.p>

      {/* MOBILE & TABLET — hidden on lg */}
      <div className="lg:hidden mt-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col gap-3 w-full max-w-sm">
              <div className="flex flex-col gap-2">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.2 }}
                  viewport={{ amount: 0.5, once: true }}
                  src={step.image}
                  className="rounded-lg w-full h-40 object-cover"
                />
                <motion.p
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeIn", delay: index * 0.2 }}
                  viewport={{ amount: 0.3, once: true }}
                  className="text-gray-500 font-bold text-[10px]"
                >
                  {step.type} | {step.date}
                </motion.p>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn", delay: index * 0.25 }}
                viewport={{ amount: 0.3, once: true }}
                className="font-bold text-black whitespace-pre-line text-sm"
              >
                {step.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP — your exact original, hidden below lg */}
      <div className="hidden lg:flex justify-center items-center mt-5 gap-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <motion.img
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.6 }}
                viewport={{ amount: 0.5, once: true }}
                src={step.image}
                className="rounded-lg w-60 h-40 object-cover"
              />
              <motion.p
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeIn", delay: index * 0.4 }}
                viewport={{ amount: 0.3, once: true }}
                className="text-gray-500 font-bold text-[10px]"
              >
                {step.type} | {step.date}
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeIn", delay: index * 0.5 }}
              viewport={{ amount: 0.3, once: true }}
              className="font-bold text-black whitespace-pre-line text-sm"
            >
              {step.text}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}