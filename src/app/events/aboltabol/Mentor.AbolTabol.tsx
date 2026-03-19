'use client'
import Link from 'next/link';
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Mentor = {
    name: string;
    post: string;
    university: string;
    image: string;
    profile: string
};

type Judge = {
    name: string; 
    description: string;
    image: string;
    details?: string;
};

const judges: Judge[] = [
    {
        name: "Unmesh Ganguly",
        description:"Actor, director, and the creative mind behind 'Bankura Memes'",
        image: "/AbolTabol/Tukai.jpg", 
        details:"https://www.instagram.com/unmesh_ganguly"
        
    },
    {
        name: "Rajita Banerjee",
        description:"The voice of 'Ogo Bideshinee', a digital creator and storyteller bringing Bengali heritage and culture to the global stage.",
        image: "/AbolTabol/Ogo_bideshini.jpg",
        details: "https://www.instagram.com/ogobideshinee"
    },
    {
        name: "Sugata Munshi",
        description:"Professor at Department of Electrical Engineering, Jadavpur University",
        image:"/Mentors/sgm.png",
        details:"https://scholar.google.com/citations?user=4QDUROsAAAAJ&hl=en"
    }
];

const mentors: Mentor[] = [
    {
        name: "Biswajit Bhattacharyya",
        post: "Professor at Department of Electrical Engineering",
        university: "Jadavpur University",
        image: "/Mentors/bjb.png",
        profile: "https://www.researchgate.net/scientific-contributions/Biswajit-Bhattacharyya-2083293274"
    },
    {
        name: "Arabinda Das",
        post: "Professor at Department of Electrical Engineering",
        university: "Jadavpur University",
        image: "/Mentors/ad.png",
        profile:"https://scholar.google.com/citations?user=Oxu-8WcAAAAJ&hl=en"
    },
];


export default function Mentors() {

    const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
  };

    return (
        <section id='judges' className="relative w-full pt-20 md:pt-25 pb-5 flex flex-col items-center justify-center overflow-hidden">

             <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                     backgroundSize: '30px 30px'
                }}
            ></div>

            <div className='maxWidthForSections w-full flex flex-col items-center px-4'>

                {/* Mentors */}
                <motion.div 
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col items-center pointer-events-none select-none mb-10 gap-2">
                    <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-linear-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] uppercase">
                        Mentors
                    </h1>
                    <p className="opacity-90 text-center text-white mt-3 text-base md:text-lg font-rajdhani font-bold tracking-wide">
                        Meet the Mentors of Abol Tabol!
                    </p>
                </motion.div>

                <div className="flex justify-center md:flex-wrap lg:flex-nowrap flex-col md:flex-row gap-2 md:gap-x-6">
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="group  hover:-translate-y-2 hover:bg-white/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] border border-transparent hover:border-purple-500/30 transition-all duration-300 rounded-xl bg-white/20 shadow-black/20 shadow-md backdrop-blur-sm flex py-4 px-3 items-center gap-x-4 sm:max-w-[500px]"
                        >
                            <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-300">
                                {mentor.image ? (
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full font-rajdhani bg-[#592A13] flex items-center justify-center text-3xl font-bold text-white">
                                        {mentor.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-1.5 text-white">
                                  
                                    <h3 className="font-rajdhani text-sm sm:text-[19px] font-bold text-white tracking-wide">
                                        {mentor.name}
                                    </h3>
                                    <Link target="_blank" href={mentor.profile}>
                                        <FaInfoCircle className="hover:text-purple-300 transition-colors duration-300" />
                                    </Link>
                                </div>
                                <p className="text-xs sm:text-[15px] text-slate-200 leading-snug font-rajdhani font-semibold">
                                    {mentor.post}, <br className="hidden sm:block" /> {mentor.university}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Judges */}

                <motion.div 
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-20 flex flex-col items-center pointer-events-none select-none mb-10 gap-2">
                    <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-linear-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] uppercase">
                        Judges
                    </h1>
                    <p className="opacity-90 text-center text-white mt-3 text-base md:text-lg font-rajdhani font-bold tracking-wide">
                        Meet the Judges of Abol Tabol!
                    </p>
                </motion.div>


               <div className="flex flex-wrap justify-center gap-4">
          {judges.map((item, index) => {
                      return (
                        <div
                          key={item.name + index}
                          
                          className="group hover:-translate-y-2 hover:bg-[#ffff]/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] border border-transparent hover:border-purple-500/30 transition-all duration-300 flex flex-col sm:gap-y-2 gap-y-1 items-center font-rajdhani sm:px-4  px-2 sm:py-8 py-6 text-[#ffff] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop-blur-sm rounded-2xl w-[270px]"
                        >
                          <div className="overflow-hidden flex items-center rounded-full size-33 sm:size-38 ">
                            <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                          </div>
          
                          <div className="flex items-center gap-2 mt-1">
                            <h1 className="font-rajdhani text-sm sm:text-[19px] font-bold text-white tracking-wide">
                              {item.name}
                            </h1>
                            {item.details && (
                              <Link target="_blank" href={item.details}>
                                <FaInfoCircle className="hover:text-purple-300 transition-colors duration-300" />
                              </Link>
                            )}
                          </div>
                          
                          <p className="text-xs sm:text-[15px] text-slate-200 leading-snug font-rajdhani font-semibold text-center">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
        </div>

            </div>
        </section>
    )
}