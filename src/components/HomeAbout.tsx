
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Lenis from "lenis";

// --- 1. ScrubText Components (Header) ---
const ScrubText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const chars = text.split("");
  const totalChars = chars.length;
  const spreadFactor = 150;

  return (
    <div ref={containerRef} className={className} style={{ display: "flex", justifyContent: "center", overflow: "hidden", width: "100%" }}>
      {chars.map((char, i) => {
        const middleIndex = (totalChars - 1) / 2;
        const startX = (i - middleIndex) * spreadFactor;
        return <CharItem key={i} char={char} startX={startX} progress={scrollYProgress} />;
      })}
    </div>
  );
};

const CharItem = ({ char, startX, progress }: { char: string; startX: number; progress: MotionValue<number> }) => {
  const x = useTransform(progress, [0, 1], [startX, 0]);
  const opacity = useTransform(progress, [0, 0.4, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0, 1], [0.8, 1]);
  return (
    <motion.span style={{ x, opacity, scale, display: "inline-block", whiteSpace: "pre", willChange: "transform, opacity" }}>
      {char}
    </motion.span>
  );
};

// --- 2. TextReveal Component ---
const TextReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.2 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
  };

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", letterSpacing: "0.02em" }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ marginRight: "6px", display: "inline-block", overflow: "hidden" }}>
          <motion.span variants={wordVariants} style={{ display: "inline-block" }}>{word}</motion.span>
        </span>
      ))}
    </motion.p>
  );
};

// --- 3. Main Layout ---
const HomeAbout = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, duration: 1.8, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <section className="about-section">
      <style>{`
        .about-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #000000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start; 
          perspective: 1000px;
        }

        .header-container {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 30; 
          padding-top: 200px; 
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700;
          font-size: 3rem;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: 12px;
          text-align: center;
        }

        .text-reveal-container {
          position: relative;
          z-index: 30;
          max-width: 900px; 
          padding: 0 40px;
          margin-top: 60px; 
          font-family: 'Times New Roman', serif; 
          font-size: 2.2rem; 
          color: #ffffff; 
          line-height: 1.2;
        }
        
        /* --- MOBILE ADJUSTMENTS --- */
        @media (max-width: 768px) {
           .about-section {
              height: 100vh; /* Lock height to prevent empty space */
              display: flex;
              flex-direction: column;
           }

           .header-container {
              position: relative;
              padding-top: 60px; /* Closer to top */
              padding-bottom: 10px;
           }
           
           .header-title { 
              font-size: 2.2rem; 
              letter-spacing: 6px;
           }
           
           .text-reveal-container { 
              font-size: 1.15rem; 
              max-width: 80%;      /* Narrower width */
              line-height: 1.7;    /* Increased height per line */
              margin-top: 10px; 
              padding: 0;
              text-align: center;
              z-index: 20; 
           }

          .image-wrapper-mobile {
              flex-grow: 0;         /* 1. Stop it from growing to fill the page */
              height: 35vh;        /* 2. Set it to 40% of the screen height (adjust as needed) */
              width: 100%;
              margin-top: 30px;   /* Keep the overlap */
              display: flex;
              justify-content: center;
          }
        }
      `}</style>

      {/* Header */}
      <div className="header-container">
        <ScrubText text="ABOUT" className="header-title" />
      </div>

      {/* Text Reveal Paragraph */}
      <div className="text-reveal-container">
        <TextReveal text={loremText} className="" />
      </div>

      {/* Background/Bottom Image */}
      <div className="image-wrapper-mobile pointer-events-none z-0 relative md:absolute md:top-0 md:left-0 md:w-full md:h-full md:mt-0">
        <img
          src="/assets/images/aboutBg.png"
          alt="Solar System Background"
          className="w-full h-full object-cover object-top opacity-100 md:opacity-55 md:object-contain md:object-left"
        />
      </div>

    </section>
  );
};

export default HomeAbout;