import React from "react";
import { motion } from "framer-motion"; 

const Timeline = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 gap-12">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pointer-events-none select-none mb-5"
        >
          <h1 className="relative font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Timeline
                         <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-200/60 to-transparent"></span>
          </h1>
        </motion.div>
        
        {/* Vertical Timeline Structure */}
        <motion.div 
          className="relative w-full max-w-4xl mx-auto mt-4 ml-4 md:ml-auto border-l-2 border-red-500/30 md:border-l-0 pr-4 md:pr-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
            {/* Central Glowing Line for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-red-500/50 via-orange-500/50 to-amber-500/50 -translate-x-1/2"></div>

<motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:flex-row-reverse group">
                <div className="hidden md:block w-[45%] text-left pl-8">
                    <h4 className="font-orbitron text-xl font-bold text-gray-100 uppercase">Registration Deadline</h4>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-red-400 rounded-full shadow-[0_0_15px_#f97316] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pr-8 text-left md:text-right">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron text-red-100 text-base font-bold tracking-widest uppercase">March 23, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-gray-100 mt-2">Registration Deadline</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">Registration for Decisia will end on 23rd March at 8:00 PM.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 group">
                <div className="hidden md:block w-[45%] text-right pr-8">
                    <h4 className="font-orbitron text-xl font-bold text-red-100 uppercase">Abstract Submission Ends</h4>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pl-8 text-left">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-red-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron text-red-200 text-base font-bold tracking-widest uppercase">March 23, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-red-100 mt-2">Abstract Submission Ends</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">Participants will have to submit their abstracts by 11:59 PM on 23rd March.</p>
                    </div>
                </div>
            </motion.div>

            
            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:flex-row-reverse group">
                <div className="hidden md:block w-[45%] text-left pl-8">
                    <h4 className="font-orbitron text-xl font-bold text-orange-100 uppercase">Result Announcement of Prelims</h4>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-[0_0_15px_#f97316] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pr-8 text-left md:text-right">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-orange-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron text-orange-200 font-bold text-base tracking-widest uppercase">March 25, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-orange-100 mt-2">Preliminary Round</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">Top 10 teams will be shortlisted for the final round after their online pitching.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center group">
                <div className="hidden md:block w-[45%] text-right pr-8">
                    <h4 className="font-orbitron text-xl font-bold text-amber-100 uppercase">Final Round</h4>

                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_15px_#f59e0b] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pl-8 text-left">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-amber-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron font-bold text-amber-300 text-base tracking-widest uppercase">March 27, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-amber-100 mt-2">Final Round</h4>

                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">The shortlisted participants will have to pitch their ideas in front of the judges.</p>
                    </div>
                </div>
            </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;