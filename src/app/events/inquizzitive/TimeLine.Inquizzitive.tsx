import React from "react";
import { motion, Variants } from "framer-motion"; 

const Timeline = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

  
  const timelineData = [
    {
      date: "26th March",
      title: "Registration Deadline",
      desc: "Registration for Inquizzitive will end on 26th March at 11:59 PM.",
    },
    {
      date: "27th March",
      title: "D - day",
      desc: "Prelims will be held offline. This will be followed by the Finals.",
    }
  ];

  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div
      id="timeline"
      className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
             backgroundSize: '30px 30px'
        }}
      ></div>

      {/*main content */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full px-2 md:px-4 gap-12 md:gap-20">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pointer-events-none select-none mb-2"
        >
          <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Timeline
          </h1>
        </motion.div>
        
        <motion.div 
          className="flex flex-row justify-center gap-3 md:gap-8 w-full max-w-3xl mx-auto z-20"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants} 
              className="group relative flex-1 bg-[#34246B]/30 backdrop-blur-md border border-yellow-400/20 rounded-2xl md:rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_15px_40px_rgba(250,204,21,0.15)]"
            >
              {/* Subtle top inner highlight for 3D card effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

              {/* Pill Badge for Round Name */}
              <div className="bg-yellow-400/10 text-yellow-400 font-orbitron font-bold text-xs md:text-sm tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors duration-300">
                {item.title}
              </div>

              {/* Main Date */}
              <div className="relative z-10 flex flex-col items-center">
                <h2 className="font-orbitron text-xl font-extrabold text-white tracking-wide drop-shadow-md whitespace-nowrap">
                  {item.date}
                </h2>
                
                {/* Crisp Solid Yellow Divider */}
                <div className="w-8 md:w-20 h-0.5 bg-yellow-400 rounded-full my-2 opacity-60 group-hover:w-25 transition-all duration-300"></div>
                
                {/* Description */}
                <p className="font-rajdhani text-gray-300 text-base font-semibold leading-relaxed">
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