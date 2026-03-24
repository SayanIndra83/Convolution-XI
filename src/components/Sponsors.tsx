'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/app/sponsors.css";
import ntpl from "@/assets/images/ConvoSponsors/NTPL.png";
import pes from "@/assets/images/ConvoSponsors/pees.png";
import deis from "@/assets/images/ConvoSponsors/deis.jpg";
import sps from "@/assets/images/ConvoSponsors/sps.png";
import '@/app/sponsors.css';
import FlipLink from "./FlipLink";
import { motion } from "framer-motion";


const Sponsors: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.20, } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div id="sponsors" className="relative w-full h-auto flex flex-col items-center justify-center maxWidthForSections">
      <div className="tech-grid pointer-events-none" />
      <div className="absolute top-0 left-0 bg-linear-to-b from-black/90 to-transparent h-15 w-full pointer-events-none z-69"></div>

      <div className="py-12 h-full w-full relative z-10 flex flex-col items-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pointer-events-none select-none mb-12">
          <h1 className="font-orbitron font-bold text-center text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-linear-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Our Sponsors
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-200/60 to-transparent"></span>
          </h1>
        </motion.div>

        <div className="w-full h-full flex flex-col items-center justify-center">
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center text-xl md:text-2xl mb-4 w-fit"
          >
           Main Sponsor
          </motion.p>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-2 justify-center mb-10">
            <a
              href="https://www.kei-ind.com/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/kei.png"
                alt="main sponsor" height={150} width={150}
                className="bg-cover"
              />
            </a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center md:text-2xl text-xl mb-4 w-fit"
          >
            Co-sponsors
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center items-center mb-10 gap-4">
            <motion.a
              variants={itemVariants}
              href="https://www.techno.co.in/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all p-4 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/techno.png"
                alt="main sponsor" height={200} width={200}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://signotron.in/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all px-4 py-5 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/signotron.png"
                alt="main sponsor" height={210} width={210}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center text-xl md:text-2xl mb-4 w-fit"
          >
           Associate Sponsor
          </motion.p>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-4 justify-center mb-4">
            <a
              href="https://iocl.com/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all p-4 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/iocl2.png"
                alt="main sponsor" height={200} width={200}
                className="bg-cover"
              />
            </a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center text-xl md:text-2xl mt-7 mb-4 w-fit"
          >
           Event Sponsor
          </motion.p>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex gap-4 justify-center mb-4">
            <a
              href="https://www.theiet.org/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl flex items-center justify-center"
            >
              <Image
                src="/sponsors/iet_ju.jpeg"
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center text-xl md:text-2xl mb-4 mt-10 w-fit"
          >
            Technical Sponsors
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap gap-7  justify-center">
            <motion.a
              variants={itemVariants}
              href="https://www.ntplindia.com/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl flex items-center justify-center"
            >
              <Image
                src={ntpl}
                alt="main sponsor" height={120} width={120}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://signalprocessingsociety.org/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl flex items-center justify-center"
            >
              <Image
                src={sps}
                alt="main sponsor" height={120} width={120}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://ieeedeis.org/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl flex items-center justify-center"
            >
              <Image
                src={deis}
                alt="main sponsor" height={120} width={120}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://ieee-pes.org/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl"
            >
              <Image
                src={pes}
                alt="main sponsor" height={120} width={120}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center md:text-2xl text-xl mt-10 mb-4 w-fit"
          >
            Digital Media Partner
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center items-center gap-4">
            <motion.a
              variants={itemVariants}
              href="https://www.telegraphindia.com/edugraph"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/telegraph.png"
                alt="media partner" height={200} width={200}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>


          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="tracking-wide text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] font-orbitron uppercase font-bold text-center md:text-2xl text-xl mt-10 mb-4 w-fit"
          >
            Beverage Partner
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex justify-center items-center gap-4">
            <motion.a
              variants={itemVariants}
              href="https://www.redcowdairy.in/"
              target="_blank"
              className="hover:scale-105 duration-300 transition-all  p-4 bg-white rounded-2xl"
            >
              <Image
                src="/sponsors/redcow.png"
                alt="media partner" height={150} width={150}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* <div className="relative mt-8 opacity-100">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-rajdhani font-semibold text-white tracking-tighter whitespace-nowrap capitalize">
            Coming <span className="text-transparent font-rajdhani w-fit bg-clip-text bg-linear-to-b from-white to-gray-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap">soon..</span>
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;