import { motion } from "motion/react";
import { Target, BookOpen, BadgeCheck, Rocket } from "lucide-react";

export default function Begin() {
  const steps = [
    {
      icon: Target,
      heading: "Choose a course",
      text: "Pick from career-focused learning programs",
    },
    {
      icon: BookOpen,
      heading: "Learn through lessons",
      text: "Our instructors are creative minds and strategic thinkers",
      margin: "mt-15",
    },
    {
      icon: BadgeCheck,
      heading: "Get certified",
      text: "Earn certificates to prove your skills and move forward.",
    },
    {
      icon: Rocket,
      heading: "Apply your skills",
      text: "Prove your skills to your world and earn great certificates",
      margin: "mt-15",
    },
  ];

  const StepCard = ({ step }: { step: (typeof steps)[0] }) => (
    <div className="flex flex-col gap-3 sm:gap-5 ml-3 mt-3">
      <div className="bg-gray-500/5 rounded-full w-5 h-5 ml-3 mt-3">
        <step.icon className="w-3 h-3 ml-1 mt-1 font-black" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h2
          style={{ wordSpacing: "-3px" }}
          className="text-black text-base sm:text-lg font-bold"
        >
          {step.heading}
        </h2>
        <p style={{ wordSpacing: "-1px" }} className="text-black text-[10px]">
          {step.text}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-black mt-10 px-4"
      >
        How to begin
        <br className="hidden lg:block" /> learning with tutorly
      </motion.h1>

      {/* MOBILE & TABLET — hidden on lg */}
      <div className="lg:hidden mt-5 px-4">
        <motion.img
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.1, once: true }}
          src="/images/begin.jpeg"
          className="w-full h-48 sm:h-64 object-cover rounded-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ amount: 0.5, once: true }}
              className="w-full h-auto pb-3 border-white shadow-xs bg-white rounded-lg"
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESKTOP — your exact original, hidden below lg */}
      <div className="hidden lg:block">
        <motion.img
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ amount: 0.1, once: true }}
          src="/images/begin.jpeg"
          className="w-265 h-105 mt-5"
        />

        <div
          className="grid grid-cols-2 gap-x-10 gap-y-5 -translate-y-105 mx-auto 
          w-fit justify-center"
        >
          {steps.map((step, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ amount: 0.5, once: true }}
                className={`w-50 h-30 border-white ${step.margin}
                shadow-xs bg-white rounded-lg`}
              >
                <div className="flex flex-col gap-5 ml-3 mt-3">
                  <div className="bg-gray-500/5 rounded-full w-5 h-5 ml-3 mt-3">
                    <step.icon className="w-3 h-3 ml-1 mt-1 font-black" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h2
                      style={{ wordSpacing: "-3px" }}
                      className="text-black text-lg font-bold"
                    >
                      {step.heading}
                    </h2>
                    <p
                      style={{ wordSpacing: "-1px" }}
                      className="text-black text-[10px]"
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}