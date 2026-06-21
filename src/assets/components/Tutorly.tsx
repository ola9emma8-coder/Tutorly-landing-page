import { motion } from "motion/react";
import { FaUser, FaSackDollar, FaTrophy, FaStar } from "react-icons/fa6";
export default function Tutorly(){
    const ips = [
        {icon: FaUser, 
         heading: "Expert Instructors",
         text: "Our instructors are creative minds and strategic thinkers"
        },
        {icon: FaSackDollar, 
         heading: "Affordable pricing",
         text: "We're a team of creative minds and strategic thinkers"
        },
    ];
    const ars = [
        {icon: FaTrophy, 
         heading: "Awards",
         text: "But along the way, our work has been honoured"
        },
        {icon: FaStar, 
         heading: "Reviews",
         text: "Strategic placements for testimonials, student success"
        }
    ];

    const Card = ({ item }: { item: typeof ips[0] }) => (
        <div className="flex flex-col gap-3 ml-3 mt-3">
            <item.icon className="w-3 h-3 ml-3 font-black" />
            <div className="flex flex-col gap-0.5">
                <h2 className="text-black text-lg font-bold">{item.heading}</h2>
                <p style={{wordSpacing: "-1px"}} className="text-black text-xs">{item.text}</p>
            </div>
        </div>
    );

    return(
        <div className="mt-10">
            <motion.h1 initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: 'easeIn'}} viewport={{amount: 0.3, once: true}}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black">
              Why Choose Tutorly
            </motion.h1>

            <motion.p initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: "easeIn"}} viewport={{amount: 0.3, once: true}}
            className="text-sm font-bold text-center text-black">
              Designed for better learning. Built for real success. 
            </motion.p>

            {/* MOBILE & TABLET — hidden on lg */}
            <div className="lg:hidden px-4 sm:px-6 mt-5 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                    {[...ips, ...ars].map((item, index) => (
                        <motion.div initial={{opacity: 0, scale: 0.5}} 
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, ease: "easeIn", delay: index * 0.15}} 
                        viewport={{amount: 0.3, once: true}}
                        key={index} className="h-30 border-white shadow-xs bg-white rounded-lg">
                            <Card item={item} />
                        </motion.div>
                    ))}
                </div>
                <motion.img
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: "easeIn"}}
                viewport={{amount: 0.3, once: true}} 
                src="/images/tutorly.jpeg" 
                className="rounded-lg w-full object-cover h-60" />
            </div>

            {/* DESKTOP — your exact original, hidden below lg */}
            <div className="hidden lg:flex flex-row justify-center gap-3 mt-5">
                <div className="flex flex-col gap-3">
                  {ips.map((ip, index) => (
                    <motion.div initial={{opacity: 0, scale: 0.5}} 
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, ease: "easeIn", delay: index * 0.6}} 
                    viewport={{amount: 0.5, once: true}}
                    key={index} className="w-50 h-30 border-white 
                    shadow-xs bg-white rounded-lg">
                        <div className="flex flex-col gap-3 ml-3 mt-3">
                             <ip.icon className="w-3 h-3 ml-3 font-black" />   
                         <div className="flex flex-col gap-0.5">
                              <h2 className="text-black text-lg font-bold">{ip.heading}</h2>
                              <p style={{wordSpacing: "-1px"}} className="text-black text-xs">{ip.text}</p>
                            </div>
                            </div>
                        </motion.div>
                ))}
                </div>

                <motion.img
                initial={{opacity: 0, y: 60}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: "easeIn"}}
                viewport={{amount: 0.3, once: true}} 
                src="/images/tutorly.jpeg" className="rounded-lg w-100 object-cover h-60" />
                
                <div className="flex flex-col gap-3">
                    {ars.map((ar, index) => (
                    <motion.div initial={{opacity: 0, scale: 0.5}} 
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, ease: "easeIn", delay: index * 0.6}} 
                    viewport={{amount: 0.5, once: true}} 
                    key={index} className="w-50 h-30 border-white 
                    shadow-xs bg-white rounded-lg">
                        <div className="flex flex-col gap-3 ml-3 mt-3">
                             <ar.icon className="w-3 h-3 ml-3 font-black" />
                         <div className="flex flex-col gap-0.5">
                              <h2 className="text-black text-lg font-bold">{ar.heading}</h2>
                              <p style={{wordSpacing: "-1px"}} className="text-black text-xs">{ar.text}</p>
                            </div>
                            </div>
                        </motion.div>
                ))}
                </div>
            </div>
        </div>
    )
}