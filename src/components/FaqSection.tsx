
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const faqData = [
  {
    question: "What is Convolution?",
    answer: "Convolution is the annual tech fest organised by JUEE, where technology, creativity, and innovation come together. It features exciting events, workshops, competitions, and opportunities to showcase talent.",
  },
  {
    question: "When and where is Convolution happening?",
    answer: "Convolution will take place from 20th to 22nd February, 2025 at the Department of Electrical Engineering, Jadavpur University. Further updates about specific events will be available on our website soon.",
  },
  {
    question: "Who can participate in Convolution?",
    answer: "Any student enrolled in any undergraduate programme interested in exploring, engaging in enthralling activities and undertaking mind-boggling challenges is welcome to participate.",
  },
  {
    question: "How do I register on the website?",
    answer: "To register for any event, click on the “Register” button and create an account. You will receive a verification email. After verifying, log in using your credentials.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, the registrations for the events are completely free of cost.",
  },
];

// --- 1. ScrubText Component ---
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
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center", 
        overflow: "hidden",
        width: "100%",
        gap: "10px" 
      }}
    >
      {chars.map((char, i) => {
        const middleIndex = (totalChars - 1) / 2;
        const startX = (i - middleIndex) * spreadFactor;
        
        return (
          <CharItem 
            key={i} 
            char={char} 
            startX={startX} 
            progress={scrollYProgress} 
          />
        );
      })}
    </div>
  );
};

// --- CharItem ---
const CharItem = ({ 
  char, 
  startX, 
  progress 
}: { 
  char: string; 
  startX: number; 
  progress: MotionValue<number> 
}) => {
  const x = useTransform(progress, [0, 1], [startX, 0]);
  const opacity = useTransform(progress, [0, 0.4, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0, 1], [0.8, 1]);

  return (
    <motion.span
      style={{
        x,
        opacity,
        scale,
        display: "inline-block",
        whiteSpace: "pre",
        willChange: "transform, opacity",
      }}
    >
      {char}
    </motion.span>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const lenis = new Lenis({
        lerp: 0.1, 
        duration: 1.5,
        smoothWheel: true,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div id="faq" className="relative w-full min-h-screen bg-black text-white overflow-hidden pt-32 pb-24 px-4 sm:px-10 font-sans selection:bg-cyan-500/30">

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes float-tilt {
          0% { transform: translateY(0) rotateX(0) rotateY(0); }
          25% { transform: translateY(-12px) rotateX(5deg) rotateY(5deg); }
          50% { transform: translateY(0) rotateX(0) rotateY(0); }
          75% { transform: translateY(12px) rotateX(-5deg) rotateY(-5deg); }
          100% { transform: translateY(0) rotateX(0) rotateY(0); }
        }
      `}</style>

      {/* --- MOBILE VIDEO BACKGROUND (Visible ONLY on Mobile) --- */}
      <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60" 
        >
           <source src="/assets/images/boxrobo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* --- BACKGROUND GRADIENTS (Visible ONLY on Desktop) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/15 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-900/15 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* --- LEFT COLUMN: FAQ --- */}
        <div className="flex flex-col gap-12">

          <div className="text-left space-y-6">
            <ScrubText 
              text="FAQ" 
              className="text-4xl md:text-7xl font-bold tracking-tighter text-white font-[Orbitron] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* MOBILE: gap-3 (Reduced gap)
              DESKTOP: lg:gap-6 (Original gap) 
          */}
          <div className="flex flex-col gap-3 lg:gap-6">
            {faqData.map((data, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`
                    group relative overflow-hidden rounded-2xl border 
                    backdrop-blur-xl shadow-lg transition-all duration-500 cursor-pointer
                    ${isOpen 
                      ? 'border-cyan-500/50 bg-black/60 shadow-cyan-500/20' 
                      : 'border-white/20 bg-black/40 hover:border-white/40 hover:bg-black/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                    }
                  `}
                >
                  <div className="flex items-center justify-between w-full px-8 py-7 select-none gap-4">
                    <span className={`
                      text-xl font-medium tracking-wide transition-all duration-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] flex-1
                      ${isOpen ? 'text-white drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]' : 'text-cyan-50 group-hover:text-white'}
                    `}>
                      {data.question}
                    </span>

                    {/* Arrow Aligned */}
                    <div className={`
                      relative flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 shrink-0
                      ${isOpen ? 'bg-cyan-500 border-cyan-400 rotate-180 shadow-[0_0_15px_rgba(6,182,212,0.8)]' : 'group-hover:border-white/40'}
                    `}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-colors duration-300 ${isOpen ? 'text-black' : 'text-white'}`}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  <div 
                    className={`
                      grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 pt-0">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5"></div>
                        <p 
                          className={`
                            text-slate-200 text-lg leading-relaxed font-light tracking-wide transition-all duration-500
                            ${isOpen ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-2'}
                          `}
                        >
                          {data.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT COLUMN: Bot (RESTORED TO ORIGINAL DESKTOP SPECS) --- */}
        <div className="hidden lg:flex flex-col sticky top-20 w-full items-center gap-0">

          {/* Video Bot - Restored Height h-[450px] */}
          <div className="relative w-full h-[450px]">
            <div className="absolute inset-0 z-10 pointer-events-none [mask-image:radial-gradient(circle_at_center,black_45%,transparent_70%)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                // Restored Scale to 100
                className="w-full h-full object-cover mix-blend-screen opacity-100 scale-100 contrast-125"
              >
                <source src="/assets/videos/boxrobo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
          </div>

          <div
            className="
              relative -mt-8 z-20 flex items-center justify-center w-auto px-6 h-20 
              rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl 
              shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden
            "
            style={{
              animation: 'float-tilt 6s ease-in-out infinite',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

            <span className="relative font-[Orbitron] z-10 text-center text-xs md:text-sm font-bold tracking-[0.15em] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 drop-shadow-sm">
              CHECK ALL YOUR SPAM MAILS FOR UPDATES
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}