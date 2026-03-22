'use client'
import Link from 'next/link';
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bjb from "../../../../public/Mentors/qm.jpeg"


export default function QuizMaster() {

    const headerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
    };

    return (
        <section id='master' className="relative w-full pt-20 pb-10 flex flex-col items-center justify-center overflow-hidden">

             <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                     backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                     backgroundSize: '30px 30px'
                }}
            ></div>
            
            <div className='maxWidthForSections w-full flex flex-col items-center px-4'>

                {/* Header Section */}
                <motion.div 
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col items-center pointer-events-none select-none mb-8 gap-2"
                >
                    <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-linear-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] uppercase">
                        Quiz Master
                    </h1>
                </motion.div>

                <div className="group hover:-translate-y-2 hover:bg-[#ffff]/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] border border-transparent hover:border-purple-500/30 transition-all duration-300 flex flex-col sm:gap-y-2 gap-y-1 items-center font-sans sm:px-4 sm:py-8 px-2 py-6 text-[#ffff] bg-[#ffff]/20 shadow-sm shadow-black/20 backdrop-blur-sm rounded-2xl mx-auto sm:max-w-[350px] max-w-[80vw] min-w-[250px]">
                    <div className="overflow-hidden flex items-start rounded-full size-56 mb-2">
                        <img 
                            src={bjb.src} 
                            alt="quizmaster"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1">
                        <h2 className="font-rajdhani text-sm sm:text-[19px] font-bold text-white tracking-wide">
                            Samanway Banerjee
                        </h2>
                        <Link target="_blank" href="https://www.instagram.com/saswata_acharya?igsh=MWoxdXVtcDBicGo4bg==" className="">
                            <FaInfoCircle className="hover:text-purple-300 transition-colors duration-300" />
                        </Link>
                    </div>
          
                    <p className="text-center text-xs sm:text-[15px] text-slate-200 leading-snug font-rajdhani font-semibold mt-1">
                        A renowned quizmaster and media professional, known for hosting engaging quizzes across schools, colleges, and corporates.
                    </p>
                </div>

            </div>
        </section>
    )
}