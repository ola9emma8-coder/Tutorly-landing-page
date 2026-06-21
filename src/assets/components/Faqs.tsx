import { motion } from "motion/react";

export default function Faqs() {
  const faqs = [
    {
      sign: "+",
      question: "What type of courses do you offer?",
      height: "h-10",
      bgColor: "bg-gray-500/5",
      textColor: "text-black",
    },
    {
      sign: "x",
      question: "Are the courses beginner-friendly?",
      answer:
        "Yes our courses are deisgned to be beginner friendly while also offering value " +
        "to advanced learners. \nEach course starts with core concepts and gradually progresses " +
        "to more advanced topics",
      height: "h-20",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      sign: "+",
      question: "How do i access the courses after enrolling?",
      height: "h-10",
      bgColor: "bg-gray-500/5",
      textColor: "text-black",
    },
    {
      sign: "+",
      question: "Are the courses self-placed?",
      height: "h-10",
      bgColor: "bg-gray-500/5",
      textColor: "text-black",
    },
    {
      sign: "+",
      question: "Do i receive a certificate after completion?",
      height: "h-10",
      bgColor: "bg-gray-500/5",
      textColor: "text-black",
    },
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="w-full lg:w-265 h-auto lg:h-120 block m-auto bg-gray-500/5 border-gray-300 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mt-10 px-4"
        >
          Frequently asked questions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-black text-xs sm:text-sm font-bold mt-2 text-center px-4"
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
        <div className="lg:hidden flex flex-col justify-center items-center mt-7 gap-3 px-4 pb-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.15 }}
              viewport={{ amount: 0.6, once: true }}
              className={`bg-white border-gray-500/5 border w-full sm:w-[85%] md:w-[70%]
              h-auto py-2 rounded-lg`}
            >
              <div className="flex flex-row mt-2 gap-2">
                <span
                  className={`rounded-full block text-center ml-2 ${faq.textColor}
                  w-5 h-5 shrink-0 text-sm ${faq.bgColor}`}
                >
                  {faq.sign}
                </span>
                <p
                  style={{ wordSpacing: "-1px" }}
                  className="text-sm font-bold flex-1 pr-3
                  whitespace-pre-wrap text-black"
                >
                  {faq.question}
                  <br />
                  <span className="text-[10px] text-black font-bold">
                    {faq.answer}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP — your exact original, hidden below lg */}
        <div className="hidden lg:flex flex-col justify-center items-center mt-7 gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: index * 0.3 }}
              viewport={{ amount: 0.6, once: true }}
              key={index}
              className={`bg-white border-gray-500/5 border w-[50%]
              ${faq.height} rounded-lg`}
            >
              <div className="flex flex-row mt-2 gap-2">
                <span
                  className={`rounded-full block text-center ml-2 ${faq.textColor}
                  w-5 h-5 text-sm ${faq.bgColor}`}
                >
                  {faq.sign}
                </span>
                <p
                  style={{ wordSpacing: "-1px" }}
                  className="text-sm font-bold flex-1
                  whitespace-pre-wrap text-black"
                >
                  {faq.question}
                  <br />
                  <span className="text-[10px] text-black font-bold">
                    {faq.answer}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}