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
      className="relative w-full pt-20 md:pt-25 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
             backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
             backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 gap-12">
        
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pointer-events-none select-none"
        >
          <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Timeline
          </h1>
        </motion.div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto mt-4 ml-2 md:ml-auto border-l-2 border-blue-500/30 md:border-l-0 pr-4 md:pr-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-purple-500/50 -translate-x-1/2"></div>


             <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:flex-row-reverse group">
                <div className="hidden md:block w-[45%] text-left pl-8">
                      <h4 className="font-orbitron text-xl font-bold text-cyan-400 uppercase">Registration Deadline</h4>
                    </div>
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-fuchsia-500 rounded-full shadow-[0_0_15px_#6366f1] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pr-8 text-left md:text-right">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                           <span className="font-orbitron text-fuchsia-400 font-bold text-base tracking-widest uppercase">March 24, 2026</span>
                        <h4 className="md:hidden font-rajdhani text-lg font-bold text-cyan-400 mt-2">Registration Deadline</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">Registration for AbolTabol will end on 24th March at 11:59 PM.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 group">
                <div className="hidden md:block w-[45%] text-right pr-8">
                    <h4 className="font-orbitron text-xl font-bold text-fuchsia-400 uppercase">Abstract Submission Ends</h4>
                </div>
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pl-8 text-left">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-blue-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron text-cyan-300 font-bold text-base tracking-widest uppercase">March 24, 2026</span>
                        <h4 className="md:hidden font-rajdhani text-lg font-bold text-fuchsia-400 mt-2">Abstract Submission Ends</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">All abstracts to be submitted by 11:59 PM on 24th March.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:flex-row-reverse group">
                <div className="hidden md:block w-[45%] text-left pl-8">
                      <h4 className="font-orbitron text-xl font-bold text-cyan-400 uppercase">Publishing Results of Prelims</h4>
                    </div>
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pr-8 text-left md:text-right">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-indigo-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                           <span className="font-orbitron font-bold text-fuchsia-300 text-base tracking-widest uppercase">March 26, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-cyan-400 mt-2">Publishing Results of Prelims</h4>
                        <p className="font-rajdhani font-semibold text-gray-300 mt-2">The top 9 teams will be shortlisted for the final round.</p>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={cardVariants} className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center group">
                <div className="hidden md:block w-[45%] text-right pr-8">
                      <h4 className="font-orbitron text-xl font-bold text-fuchsia-400 uppercase">Final Round</h4>
                    </div>
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                <div className="md:w-[45%] md:pl-8 text-left">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron font-bold text-cyan-300 text-base tracking-widest uppercase">March 28, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-fuchsia-400 mt-2">Final Round</h4>
                        <p className="font-rajdhani text-gray-300 font-semibold mt-2">The shortlisted teams will have to pitch their concepts before the judges and chief guest.</p>
                    </div>
                </div>
            </motion.div>

            
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;