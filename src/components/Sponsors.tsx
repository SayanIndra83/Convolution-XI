'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@/app/sponsors.css";
import iet from "@/assets/images/ConvoSponsors/iet.png";
import ntpl from "@/assets/images/ConvoSponsors/NTPL.png";
import pes from "@/assets/images/ConvoSponsors/pees.png";
import deis from "@/assets/images/ConvoSponsors/deis.png";
import sps from "@/assets/images/ConvoSponsors/sps.png";
import DecorativeIcons from "./DecorativeIcons";
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
    // Reduced min-height to 60vh as requested
    <div id="sponsors" className="relative w-full h-auto flex flex-col items-center justify-center maxWidthForSections">
      {/* <Cursor magnetic /> */}
      <DecorativeIcons />
      {/* Grid Background */}
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
            className="text-white text-center text-2xl mb-4 w-fit"
          >
            <FlipLink>Main&nbsp;Sponsor</FlipLink>
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
              className="hover:scale-105 p-4 bg-white/70 rounded-3xl"
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
            className="text-white text-center text-xl mb-4 w-fit"
          >
            <FlipLink>Co&nbsp;Sponsor</FlipLink>
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
              className="hover:scale-105 p-4 bg-white/70 rounded-3xl"
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
              className="hover:scale-105 px-4 py-7 bg-white/70 rounded-3xl"
            >
              <Image
                src="/sponsors/signotron.png"
                alt="main sponsor" height={200} width={200}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-center text-2xl mb-4 w-fit"
          >
            <FlipLink>Associate&nbsp;Sponsor</FlipLink>
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
              className="hover:scale-105 p-4 bg-white/70 rounded-3xl"
            >
              <Image
                src="/sponsors/iocl.png"
                alt="main sponsor" height={80} width={100}
                className="bg-cover"
              />
            </a>
          </motion.div>

          <motion.p
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-center text-xl mb-4 mt-10 w-fit"
          >
            <FlipLink>Technical&nbsp;Sponsor</FlipLink>
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap gap-7  justify-center">
            <motion.a
              variants={itemVariants}
              href="https://www.theiet.org/"
              target="_blank"
              className="hover:scale-105 p-6 bg-white/70 rounded-3xl flex items-center justify-center"
            >
              <Image
                src={iet}
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.ntplindia.com/"
              target="_blank"
              className="hover:scale-105 p-6 bg-white/70 rounded-3xl flex items-center justify-center"
            >
              <Image
                src={ntpl}
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://signalprocessingsociety.org/"
              target="_blank"
              className="hover:scale-105 p-6 bg-white/70 rounded-3xl flex items-center justify-center"
            >
              <Image
                src={sps}
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://ieeedeis.org/"
              target="_blank"
              className="hover:scale-105 p-6 bg-white/70 rounded-3xl flex items-center justify-center"
            >
              <Image
                src={deis}
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://ieee-pes.org/"
              target="_blank"
              className="hover:scale-105 p-6 bg-white/70 rounded-3xl"
            >
              <Image
                src={pes}
                alt="main sponsor" height={100} width={100}
                className="bg-cover"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

    </div>

  );
};

export default Sponsors;