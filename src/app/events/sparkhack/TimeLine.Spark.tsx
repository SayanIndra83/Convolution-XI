import React from "react";
import { motion, Variants } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    {
      date: "March 18, 2026",
      title: "Registration Deadline",
      desc: "Registration for SparkHack will end on 18th March at 12:00 PM",
      icon: "🚨",
      color: "from-cyan-400 to-cyan-500",
      borderColor: "border-cyan-400"
    },
    {
      date: "March 18, 2026",
      title: "PPT Submission Ends",
      desc: "Participants must submit their PPTs by 11:59 PM IST.",
      icon: "📑",
      color: "from-cyan-400 to-cyan-500",
      borderColor: "border-cyan-400"
    },
    {
      date: "TBD",
      title: "Shortlist Announcement",
      desc: "The list of shortlisted teams for the presentation round will be released.",
      icon: "📢",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-blue-400"
    },
    {
      date: "March 21, 2026",
      title: "Online Pitching Round",
      desc: "Shortlisted teams will pitch their ideas to the panel of judges via Google Meet.",
      icon: "💻",
      color: "from-blue-500 to-indigo-500",
      borderColor: "border-indigo-400"
    },
    {
      date: "TBD",
      title: "Online Pitch Results",
      desc: "Results of the 2nd round will be announced, and the top 10 teams will be shortlisted.",
      icon: "🚀",
      color: "from-indigo-500 to-violet-500",
      borderColor: "border-violet-400"
    },
    {
      date: "March 28, 2026",
      title: "Grand Finale",
      desc: "Top 10 teams will present their prototypes offline to the judges.",
      icon: "🏆",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-purple-400"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div
      id="timeline"
      className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 max-w-5xl mx-auto">
        
       <motion.div
                 variants={headerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 className="flex flex-col items-center pointer-events-none select-none mb-20"
               >
          <h1 className="font-orbitron font-bold text-center text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase relative inline-block">
            Timeline
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-400/80 to-transparent"></span>
          </h1>
        </motion.div>

        <motion.div 
          className="relative w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/40 md:-translate-x-1/2 rounded-full z-0">
             <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-indigo-400 to-purple-500 rounded-full opacity-60"></div>
          </div>

          <div className="flex flex-col w-full relative z-10">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative w-full mb-10 md:mb-12 group"
                >
                  <div className={`absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 ${item.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-xl z-20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300`}>
                    {item.icon}
                  </div>

                  <div className={`w-full pl-15 md:pl-0 md:w-[45%] ${isEven ? 'md:mr-auto md:pr-10 md:text-right' : 'md:ml-auto md:pl-10 md:text-left'}`}>
                    
                    {/* Glassmorphism Card */}
                    <div className={`bg-white/60 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                      
                      <div className={`inline-block px-4 py-1.5 mb-3 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold tracking-wider uppercase shadow-sm`}>
                        {item.date}
                      </div>
                      
                      <h3 className="font-orbitron text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-rajdhani font-semibold text-slate-600 text-base leading-relaxed">
                        {item.desc}
                      </p>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Timeline;