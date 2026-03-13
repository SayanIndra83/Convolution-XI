import React from "react";
import { motion, } from "framer-motion"; 

const Timeline = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

  const timelineData = [
    {
      date: "28th March",
      title: "Round 1",
      desc: "The prelims are scheduled to be conducted offline on 28th March 2026.",
    },
    {
      date: "29th March",
      title: "Round 2",
      desc: "The second round will push your problem-solving skills to the next level offline.",
    },
    {
      date: "29th March",
      title: "Finale",
      desc: "The ultimate showdown to crown the champions of Eureka! 2026.",
    }
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const , stiffness: 100 } }
  };

  return (
    <div
      id="timeline"
      className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden bg-linear-to-b from-[#2c5111] via-[#243d10] to-[#3a4511] "
    >
      
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
             backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 gap-10">
       <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pointer-events-none select-none mb-2"
        >
          <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-linear-to-b from-gray-300 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Timeline
          </h1>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto z-20"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants} 
              className="group relative bg-[#15290b]/60 backdrop-blur-md border border-[#88d04a]/20 rounded-3xl p-4 flex flex-col items-center text-center  overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#88d04a]/60 "
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

              <div className="bg-[#88d04a]/10 text-[#88d04a] font-orbitron font-bold text-xs md:text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-3 border border-[#88d04a]/20 group-hover:bg-[#88d04a]/20 transition-colors duration-300">
                {item.title}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h2 className="font-orbitron text-xl font-extrabold text-white tracking-wide drop-shadow-md">
                  {item.date}
                </h2>
                
                <div className="w-20 h-0.5 bg-[#88d04a] rounded-full my-2 opacity-60 group-hover:w-30 transition-all duration-300 shadow-[0_0_10px_rgba(136,208,74,0.5)]"></div>
                
                <p className="font-rajdhani text-gray-300 text-base font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      
    </div>
  );
};

export default Timeline;