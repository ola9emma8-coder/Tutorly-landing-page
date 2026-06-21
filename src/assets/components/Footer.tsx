import { motion } from "motion/react";
import Subscribe from "./Subscribe";
import Tutor from "./Tutor";
import { FaGithub, FaXTwitter, FaGlobe, FaWhatsapp } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

export default function Footer() {
  const goToGithub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.open("https://github.com/ola9emma8-coder", "_blank", "noopener, noreferrer");
  };
  const goToTwitterAccount = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.open("https://x.com/@olaemmma", "_blank", "noopener, noreferrer");
  };
  const goToPortofolio = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.open("https://olamide-portfolio-x6ov.vercel.app", "_blank", "noopener, noreferrer");
  };
  const goToWhatsApp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.open("https://wa.me/2347086575277", "_blank", "noopener, noreferrer");
  };

  const tools = [
    { icon: FaGithub, onclick: goToGithub },
    { icon: FaXTwitter, onclick: goToTwitterAccount },
    { icon: FaGlobe, onclick: goToPortofolio },
    { icon: FaWhatsapp, onclick: goToWhatsApp },
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="w-full lg:w-265 h-auto lg:h-190 block m-auto bg-white shadow-sm
        border-white overflow-hidden mt-0.5"
      >
        <Subscribe />

        <Tutor />

        {/* MOBILE & TABLET — hidden on lg */}
        <div className="lg:hidden">
          <hr className="text-black/15 mx-6 mt-10" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mx-6 mt-8 mb-10">
            <TypeAnimation
              className="text-black font-bold text-sm text-center sm:text-left"
              sequence={[
                `\u00A9 ${new Date().getFullYear()} Designed.All rights reserved`,
                2000,
                "",
                2000,
                `\u00A9 ${new Date().getFullYear()} Designed.All rights reserved`,
              ]}
              speed={50}
              repeat={Infinity}
            />
            <div className="flex flex-row gap-3 justify-center sm:justify-start">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ amount: 0.5, once: true }}
                  onClick={tool.onclick}
                  className="w-7 h-7 rounded-full bg-black flex items-center justify-center"
                >
                  <tool.icon className="w-4 h-4 text-white cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP — your exact original, hidden below lg */}
        <div className="hidden lg:block">
          <hr className="text-black/15 ml-20 mt-20 w-[90%]" />

          <div className="flex flex-row justify-between items-center ml-20 mt-20 mr-20">
            <TypeAnimation
              className="text-black font-bold text-md"
              sequence={[
                `\u00A9 ${new Date().getFullYear()} Designed.All rights reserved`,
                2000,
                "",
                2000,
                `\u00A9 ${new Date().getFullYear()} Designed.All rights reserved`,
              ]}
              speed={50}
              repeat={Infinity}
            />
            <div className="flex flex-row gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ amount: 0.5, once: true }}
                  key={index}
                  onClick={tool.onclick}
                  className="w-7 h-7 rounded-full bg-black flex items-center justify-center"
                >
                  <tool.icon className="w-4 h-4 text-white cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}