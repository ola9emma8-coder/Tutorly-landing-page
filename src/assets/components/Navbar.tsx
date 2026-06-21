import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gem, ArrowRight, Menu, X } from "lucide-react";

export default function NavBar() {
  const pages: string[] = ["HOME", "ABOUT", "COURSE", "BLOG"];
  const auths: string[] = ["CART", "LOGIN"];
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* MOBILE & TABLET — hidden on lg */}
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ amount: 0.1 }}
        className="lg:hidden rounded-3xl w-[92%] sm:w-[85%] top-3 sticky z-50 block m-auto shadow-sm mt-5 bg-white overflow-hidden"
      >
        <div className="flex flex-row justify-between items-center px-4 h-12">
          <Gem className="w-6 h-6 text-blue-500" />
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-black"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
              className="px-4 pb-4 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3">
                {pages.map((page, index) => (
                  <p
                    key={index}
                    className="text-black cursor-pointer text-sm font-bold"
                  >
                    {page}
                  </p>
                ))}
              </div>

              <div className="flex flex-row gap-4">
                {auths.map((auth, index) => (
                  <p key={index} className="font-bold text-sm text-black">
                    {auth}
                  </p>
                ))}
              </div>

              <button
                className="rounded-4xl bg-black w-full h-10 text-white font-bold text-sm"
              >
                <span className="flex flex-row justify-center items-center gap-2">
                  <p>SIGNUP</p>
                  <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* DESKTOP — your exact original, hidden below lg */}
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ amount: 0.1 }}
        className="hidden lg:block rounded-3xl w-156 h-10 top-0 sticky z-50 m-auto shadow-sm mt-10 bg-white"
      >
        <div className="flex flex-row gap-20">
          <div className="flex flex-row gap-3 ml-2 mt-2">
            <Gem className="w-7 h-7 text-blue-500" />
            <div className="flex flex-row gap-5">
              {pages.map((page, index) => (
                <p key={index} className="text-black cursor-pointer text-md font-bold">
                  {page}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-row mt-2 gap-3">
            {auths.map((auth, index) => (
              <div key={index} className="font-bold text-md text-black">
                <p>{auth}</p>
              </div>
            ))}
            <button
              className="rounded-4xl -translate-y-2
              bg-black w-30 h-10 text-white font-bold text-md"
            >
              <span className="flex flex-row ml-2 mt-2 gap-2">
                <p>SIGNUP</p>
                <div className="rounded-full -translate-y-2 bg-white w-10 h-10">
                  <ArrowRight className="w-5 h-5 mt-2 ml-2 text-black" />
                </div>
              </span>
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}