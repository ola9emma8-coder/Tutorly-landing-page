import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const images = [
    { image: "/images/man4.jpeg", top: "-translate-y-0" },
    { image: "/images/man5.jpeg", top: "-translate-y-15" },
    { image: "/images/man6.jpeg", top: "-translate-y-0" },
    { image: "/images/man7.jpeg", top: "-translate-y-15" },
    { image: "/images/man8.jpeg", top: "-translate-y-0" },
    { image: "/images/man9.jpeg", top: "-translate-y-15" },
    { image: "/images/man10.jpeg", top: "-translate-y-0" },
    { image: "/images/man7.jpeg", top: "-translate-y-0" },
    { image: "/images/man10.jpeg", top: "-translate-y-15" },
    { image: "/images/man9.jpeg", top: "-translate-y-0" },
    { image: "/images/man4.jpeg", top: "-translate-y-15" },
    { image: "/images/man5.jpeg", top: "-translate-y-0" },
    { image: "/images/man6.jpeg", top: "-translate-y-15" },
    { image: "/images/man8.jpeg", top: "-translate-y-0" },
  ];

  const things = [
    {
      buttonText: "CAREER",
      bgColor: "bg-yellow-400",
      btntextColor: "text-black",
      margin: "-mt-65",
    },
    { text: "QUALITY", textColor: "text-white" },
    {
      buttonText: "CHANGER",
      bgColor: "bg-white",
      btntextColor: "text-black",
      margin: "-mt-65",
    },
    { text: "WORK", textColor: "text-white" },
    {
      buttonText: "CHANGER",
      bgColor: "bg-purple-400",
      btntextColor: "text-white",
      margin: "-mt-65",
    },
    { text: "SKILLS", textColor: "text-white" },
    {
      buttonText: "CHANGER",
      bgColor: "bg-white",
      btntextColor: "text-black",
      margin: "-mt-65",
    },
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        id="background"
        className="w-full lg:w-265 h-auto lg:h-165 block m-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mt-10 text-center px-4"
        >
          <span className="lg:hidden">
            Upgrade your skills. unlock new opportunities
          </span>
          <span className="hidden lg:inline">
            Upgrade your skills. unlock
            <br />
            <span className="block text-center">new opportunities</span>
          </span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ amount: 0.3, once: true }}
          className="rounded-4xl block m-auto mt-10
          bg-black w-50 h-10 text-white font-bold text-sm"
        >
          <span className="flex flex-row ml-2 mt-2 gap-4.5">
            <p>Explore Our Courses</p>
            <div className="rounded-full -translate-y-2 bg-white w-10 h-10">
              <ArrowRight className="w-5 h-5 mt-2 ml-2.5 text-black" />
            </div>
          </span>
        </motion.button>

        {/* MOBILE & TABLET — hidden on lg */}
        <div className="lg:hidden px-4 mt-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 justify-center">
            {images.map((image, index) => (
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ amount: 0.3, once: true }}
                key={index}
                src={image.image}
                className="w-full h-24 sm:h-32 object-cover rounded-lg"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            {things.map((thing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: index * 0.08 }}
                viewport={{ amount: 0.3, once: true }}
              >
                {thing.buttonText ? (
                  <button
                    className={`w-25 h-8 font-bold text-center text-xs 
                    ${thing.btntextColor} rounded ${thing.bgColor}`}
                  >
                    {thing.buttonText}
                  </button>
                ) : (
                  <p className={`${thing.textColor} font-bold text-center text-xs`}>
                    {thing.text}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* DESKTOP — your exact original, hidden below lg */}
        <div className="hidden lg:block">
          <div
            className="grid grid-cols-7 relative gap-x-3 gap-y-3 mx-auto w-fit
            mt-30 justify-center"
          >
            {images.map((image, index) => (
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ amount: 0.3, once: true }}
                key={index}
                src={image.image}
                className={`w-30 h-40 object-cover ${image.top} rounded-lg`}
              />
            ))}
          </div>

          <div className={`flex relative justify-center items-center gap-8`}>
            {things.map((thing, index) => (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.1 }}
                viewport={{ amount: 0.3, once: true }}
                key={index}
              >
                <button
                  className={`w-25 h-8 font-bold text-center text-xs 
                  ${thing.btntextColor} -mt-55
                  rounded ${thing.bgColor} block m-auto`}
                >
                  {thing.buttonText}
                </button>

                <p
                  className={`${thing.textColor} -translate-x-65 -translate-y-20
                  font-bold text-center text-xs`}
                >
                  {thing.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}