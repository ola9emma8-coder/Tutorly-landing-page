import { motion } from "motion/react";
import { Gem } from "lucide-react";

export default function Tutor() {
  const tutors = [
    {
      icon: Gem,
      heading: "Tutorly",
      text:
        "A modern, buisness-ready online platform template \nbuilt for course creators, " +
        "academies, and educators",
    },
  ];

  const pages = [
    { heading: "QUICK LINK", links: ["Home \n", "About Us \n", "Courses \n", "Contact Us"] },
    { heading: "COMPANY", links: ["Blog", "Blog Details", "Courses Details", "Mentor Details"] },
    { heading: "OTHERS", links: ["SignUp", "Login", "Style Guide", "Changelog"] },
  ];

  return (
    <div>
      {/* MOBILE & TABLET — hidden on lg */}
      <div className="lg:hidden flex flex-col gap-10 mt-16 px-6">
        {tutors.map((tutor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
            viewport={{ amount: 0.5, once: true }}
            className="flex flex-col gap-3"
          >
            <div className="flex flex-row gap-2 items-center">
              <tutor.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              <h1 className="text-2xl sm:text-3xl font-bold text-black">{tutor.heading}</h1>
            </div>
            <p className="text-black whitespace-pre-line text-sm font-bold">{tutor.text}</p>
          </motion.div>
        ))}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
          {pages.map((page, index) => (
            <div key={index} className="flex flex-col gap-3">
              <motion.h1
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ amount: 0.3, once: true }}
                className="text-base sm:text-lg font-bold whitespace-nowrap text-black"
              >
                {page.heading}
              </motion.h1>
              <div className="flex flex-col gap-1">
                {page.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: linkIndex * 0.1 }}
                    viewport={{ amount: 0.5, once: true }}
                    style={{ wordSpacing: "-2px" }}
                    className="list-none font-bold text-sm text-black"
                  >
                    {link}
                  </motion.li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP — your exact original, hidden below lg */}
      <div className="hidden lg:block">
        <div className="flex flex-row gap-50 mt-20 ml-20">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.6 }}
              viewport={{ amount: 0.5, once: true }}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-row gap-2">
                <tutor.icon className="w-10 h-10 text-blue-500" />
                <h1 className="text-4xl font-bold text-black">{tutor.heading}</h1>
              </div>
              <p className="text-black whitespace-pre-line text-sm font-bold">{tutor.text}</p>
            </motion.div>
          ))}

          <div className="flex flex-row gap-10">
            {pages.map((page, index) => (
              <div key={index} className="flex flex-col gap-3">
                <motion.h1
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.6 }}
                  viewport={{ amount: 0.3, once: true }}
                  className="text-lg font-bold whitespace-nowrap text-black"
                >
                  {page.heading}
                </motion.h1>
                <div className="flex flex-col gap-1">
                  {page.links.map((link, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.7 }}
                      viewport={{ amount: 0.5, once: true }}
                      key={index}
                      style={{ wordSpacing: "-2px" }}
                      className="list-none font-bold text-md text-black"
                    >
                      {link}
                    </motion.li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}