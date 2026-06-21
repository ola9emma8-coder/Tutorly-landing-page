import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Subscribe() {
  const newss = [
    { icon: Check, text: "Daily design update" },
    { icon: Check, text: "Affliate earning opportunity" },
  ];
  const [email, setEmail] = React.useState<string>("");
  const [ph, setPh] = React.useState<string>("ENTER YOUR EMAIL");

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e;
    setEmail(e.target.value);
  }

  function subscribe(e: React.MouseEvent<HTMLButtonElement>): void {
    e;
    !email ? window.alert("Please input an email") : window.alert("Thanks for subscribing");
  }

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ amount: 0.3, once: true }}
        className="w-[90%] sm:w-[85%] h-auto lg:h-60 block m-auto rounded-lg
        bg-black border-black overflow-hidden mt-20"
      >
        {/* MOBILE & TABLET — hidden on lg */}
        <div className="lg:hidden flex flex-col items-center gap-6 px-6 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-xl sm:text-2xl font-bold text-white text-center"
          >
            Subscribe Our Newsletter for latest Updates
          </motion.h1>

          <div className="flex flex-row flex-wrap justify-center gap-4">
            {newss.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ amount: 0.3, once: true }}
                className="flex flex-row gap-1 items-center"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full bg-white
                  border-white shadow-sm flex justify-center items-center"
                >
                  <news.icon className="w-2 h-2 text-black fill-black" />
                </div>
                <p className="text-white font-bold text-xs">{news.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <motion.input
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.3, once: true }}
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setPh("")}
              onBlur={() => setPh("ENTER YOUR EMAIL")}
              placeholder={ph}
              className="border-white border shadow-sm rounded-3xl w-full h-9
              transition duration-700 placeholder:text-white text-white
              placeholder:pl-3 placeholder:text-xs px-3"
            />

            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.3, once: true }}
              onClick={subscribe}
              className="w-full h-9 bg-white text-black 
              font-bold text-center text-xs hover:bg-gray-100 hover:font-extrabold
              rounded-3xl cursor-pointer hover:transition hover:duration-700 
              hover:ease-in-out not-hover:transition not-hover:ease-in-out
              not-hover:duration-700"
            >
              SUBSCRIBE NOW
            </motion.button>
          </div>
        </div>

        {/* DESKTOP — your exact original, hidden below lg */}
        <div className="hidden lg:block">
          <div className="flex flex-row ml-10 items-center gap-40 mt-20 flex-1">
            <div className="flex flex-col gap-3">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeIn" }}
                viewport={{ amount: 0.3, once: true }}
                className="text-3xl font-bold text-white"
              >
                Subscribe Our Newsletter for <br />
                latest Updates
              </motion.h1>
              <div className="flex flex-row gap-3">
                {newss.map((news, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    viewport={{ amount: 0.3, once: true }}
                    key={index}
                    className="flex flex-row gap-1"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full bg-white mt-1 
                      border-white shadow-sm flex justify-center items-center"
                    >
                      <news.icon className="w-2 h-2 text-black fill-black" />
                    </div>
                    <p className="text-white font-bold text-xs">{news.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <motion.input
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.3, once: true }}
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setPh("")}
                onBlur={() => setPh("ENTER YOUR EMAIL")}
                placeholder={ph}
                className="border-white border shadow-sm rounded-3xl w-62 h-8
                transition duration-700 placeholder:text-white text-white
                placeholder:pl-3 placeholder:text-xs placeholder:-translate-y-0.5"
              />

              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.3, once: true }}
                onClick={subscribe}
                className="w-62 h-8 bg-white text-black 
                font-bold text-center text-xs hover:bg-gray-100 hover:font-extrabold
                rounded-3xl cursor-pointer hover:transition hover:duration-700 
                hover:ease-in-out not-hover:transition not-hover:ease-in-out
                not-hover:duration-700"
              >
                SUBSCRIBE NOW
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}