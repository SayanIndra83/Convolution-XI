'use client'
import React from 'react'
import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';
import { motion, Variants } from "framer-motion"

type Mentor = {
    name: string;
    post: string;
    university: string;
    image: string;
    profile?: string;
};

type Judge = {
    name: string; 
    description: string;
    image: string;
    details?: string;
};

const mentors: Mentor[] = [
    {
        name: "Debangshu Dey",
        post: "Professor at Department of Electrical Engineering",
        university: "Jadavpur University",
        image: "/Mentors/dsd.png",
        profile: "#" 
    },
    {
        name: "Suddhasatwa Chakraborty",
        post: "Professor at Department of Electrical Engineering",
        university: "Jadavpur University",
        image: "/Mentors/sdc.png",
        profile: "#" 
    },
];

const judges: Judge[] = [
    {
        name: "Rishiraj Acharya",
        description:"Machine Learning Engineer, IntelliTeck Health",
        image: "/Mentors/rishiraj.jpeg", 
    },
    {
        name: "Ronit Banerjee",
        description:"DevOps Engineer (R&D) Keysight Technologies",
        image: "/Mentors/ronit.jpeg", 
    },
    {
        name: "Biswajit Bhattacharyya",
        description:"Professor at Department of Electrical Engineering, Jadavpur University",
        image: "/Mentors/bjb.png", 
        details:"https://www.researchgate.net/scientific-contributions/Biswajit-Bhattacharyya-2083293274"
    },
    
];

export default function Mentors() {
    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section id='judges' className="relative w-full py-10 flex flex-col items-center justify-center bg-transparent z-10">

            <div className='maxWidthForSections w-full flex flex-col items-center px-4'>

                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center pointer-events-none select-none mb-12"
                >
                    <h1 className="font-orbitron font-bold text-center text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase relative inline-block">
                        Mentors
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"></span>
                    </h1>
                    <p className="opacity-90 text-center text-slate-800 mt-5 text-base sm:text-lg font-rajdhani font-bold tracking-wide">
                        Meet the Mentors of SparkHack!
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-5xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative flex items-center gap-5 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 hover:border-fuchsia-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(217,70,239,0.2)] hover:-translate-y-1"
                        >
                            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-fuchsia-400 transition-colors duration-300">
                                {mentor.image ? (
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center text-2xl font-bold text-white">
                                        {mentor.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-rajdhani text-sm sm:text-[19px] font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300">
                                        {mentor.name}
                                    </h3>
                                    {mentor.profile && (
                                        <Link target="_blank" href={mentor.profile}>
                                            <FaInfoCircle className="hover:text-fuchsia-400 transition-colors duration-300 text-white" />
                                        </Link>
                                    )}
                                </div>

                                <p className="font-rajdhani text-sm sm:text-[15px] text-cyan-300 font-semibold leading-tight mb-1">
                                    {mentor.post}
                                </p>
                                <p className="font-rajdhani text-xs sm:text-sm text-gray-300">
                                    {mentor.university}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-20 flex flex-col items-center pointer-events-none select-none mb-12"
                >
                    <h1 className="font-orbitron font-bold text-center text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase relative inline-block">
                        Judges
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/80 to-transparent"></span>
                    </h1>
                    <p className="opacity-90 text-center text-slate-800 mt-5 text-base sm:text-lg font-rajdhani font-bold tracking-wide">
                        Meet the Judges of SparkHack!
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 lg:gap-10 w-full max-w-5xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {judges.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative flex flex-col items-center gap-y-3 p-6 sm:p-8 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 hover:border-fuchsia-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(217,70,239,0.2)] hover:-translate-y-2 w-[270px] sm:w-[300px]"
                        >
                            <div className="relative shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-fuchsia-400 transition-colors duration-300 mb-2">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
            
                            <div className="flex items-center gap-2 mt-1">
                                <h1 className="font-rajdhani text-sm sm:text-[19px] font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300 tracking-wide text-center">
                                    {item.name}
                                </h1>
                                {item.details && (
                                    <Link target="_blank" href={item.details}>
                                        <FaInfoCircle className="hover:text-fuchsia-400 transition-colors duration-300 text-white" />
                                    </Link>
                                )}
                            </div>

                            <p className="font-rajdhani text-xs sm:text-[15px] text-cyan-300 font-semibold leading-snug text-center">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}