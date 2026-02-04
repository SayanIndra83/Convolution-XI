
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation, MotionValue } from "framer-motion";
import Lenis from "lenis";

// --- 1. ScrubText Component (Unchanged) ---
const ScrubText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const chars = text.split("");
  const totalChars = chars.length;
  // Reduced spread slightly for better mobile safety, mostly visual preference
  const spreadFactor = 120;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
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

// --- CharItem Component ---
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

// --- Data ---
const IMAGES = [
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506318137071-a8bcbf675b27?q=80&w=600&auto=format&fit=crop",
];

// --- Sub-Components ---
const GlassCard = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <motion.div
      className="glass-card"
      whileHover={{ scale: 1.05, zIndex: 10, y: -5, transition: { duration: 0.5, ease: "easeOut" } }}
    >
      <img src={imgUrl} alt="Gallery Item" className="glass-image" />
      <div className="shine"></div>
    </motion.div>
  );
};

const MarqueeRow = ({ images, duration = 40, direction = 1 }: { images: string[]; duration?: number; direction?: number }) => {
  const duplicatedImages = [...images, ...images, ...images];
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: direction === 1 ? ["-25%", "0%"] : ["0%", "-25%"], transition: { ease: "linear", duration: duration, repeat: Infinity } });
  }, [controls, direction, duration]);

  useEffect(() => {
    if (isHovered) { controls.stop(); } else {
      controls.start({ x: direction === 1 ? ["-25%", "0%"] : ["0%", "-25%"], transition: { ease: "linear", duration: duration, repeat: Infinity } });
    }
  }, [isHovered, controls, direction, duration]);

  return (
    <div className="marquee-row" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className="marquee-track"
        animate={{ x: direction === 1 ? ["-25%", "0%"] : ["0%", "-25%"] }}
        transition={{ ease: "linear", duration: isHovered ? duration * 2 : duration, repeat: Infinity }}
      >
        {duplicatedImages.map((src, idx) => (<GlassCard key={`${src}-${idx}`} imgUrl={src} />))}
      </motion.div>
    </div>
  );
};

// --- Main Layout ---
const Gallery = () => {

  // --- SMOOTH SCROLL INIT ---
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section className="gallery-section">
      <style>{`
        .gallery-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #000000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          perspective: 1000px;
        }

        .header-container {
          position: relative;
          z-index: 30;
          padding: 60px 20px;
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
          letter-spacing: 10px;
          cursor: default;
          text-align: center;
        }

        .content-wrapper {
          flex-grow: 1;
          width: 100%;
          display: flex;
          flex-direction: column; /* Stacks the marquee rows vertically */
          align-items: center;    /* Centers marquee rows horizontally */
          justify-content: center; /* Centers marquee rows VERTICALLY in the middle */
          position: relative;
          z-index: 10;
          /* Optional: if you want more space between the header and marquee */
          padding-bottom: 50px; 
        }

        .isometric-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          /* This ensures the inner container doesn't have offset margins 
            that push it away from the center */
          margin: 0 auto; 
          transform: scale(1.05);
          mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
        }

        .marquee-row { width: 100%; overflow: visible; padding: 5px 0; }
        .marquee-track { display: flex; gap: 20px; width: max-content; }

        /* --- DESKTOP CARD STYLES --- */
        .glass-card {
          width: 550px; 
          height: 300px; 
          position: relative; 
          border-radius: 16px; 
          overflow: hidden; 
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.03); 
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); 
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          transition: border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        .glass-card:hover { 
          border-color: rgba(0, 240, 255, 0.8); 
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), 0 0 50px rgba(139, 92, 246, 0.3); 
        }
        
        .glass-image { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          opacity: 0.9; 
          transition: opacity 0.5s ease, transform 0.5s ease; 
        }
        
        .glass-card:hover .glass-image { opacity: 1; transform: scale(1); }
        
        .shine {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
        }

        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 768px) {
           .header-container {
              padding: 40px 10px;
           }
           
           .header-title { 
              font-size: 2rem; 
              letter-spacing: 4px;
           }

           .isometric-container {
              gap: 16px; /* Smaller gap between rows */
              /* Reduce fade mask on sides for mobile to show more content */
              mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
           }

           .marquee-track {
              gap: 12px; /* Smaller gap between cards */
           }

           .glass-card {
              /* Responsive Width: 75% of screen width */
              width: 75vw; 
              max-width: 300px;
              /* Proportional height */
              height: 45vw; 
              max-height: 180px;
              border-radius: 12px;
           }
        }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-[#050505] to-black" />
      </div>

      <div className="header-container">
        <ScrubText text="GALLERY" className="header-title" />
      </div>

      <div className="content-wrapper">
        <div className="isometric-container">
          <MarqueeRow images={IMAGES} duration={60} direction={1} />
          <MarqueeRow images={IMAGES} duration={50} direction={-1} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;