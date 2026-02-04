
"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";

// --- Types ---
interface TeamMember {
  id: string;
  name: string;
  post: string;
  imageUrl: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

// --- Data ---
const teamMembers: TeamMember[] = [
  {
    id: '1', name: "Jahid Mamud", post: "Secretary",
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/jahid-mamud/",
    instagram: "https://www.instagram.com/jem_.__/",
  },
  {
    id: '2', name: "Ritam Kundu", post: "Joint Secretary",
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/ritam-kundu-394612257",
    instagram: "https://www.instagram.com/ritamkundu.__/",
  },
  {
    id: '3', name: "Siddhanta Ghosh", post: "Treasurer",
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/siddhanta-ghosh",
    instagram: "https://www.instagram.com/ghosh_siddhanta2k3/",
    facebook: "https://www.facebook.com/profile.php?id=100089382764364",
  },
  {
    id: '4', name: "Akash Bag", post: "Tech Lead",
    imageUrl: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/akashbag0903/",
    instagram: "https://www.instagram.com/akash09.dev/",
  },
  {
    id: '5', name: "Arindam Pradhan", post: "Design Lead",
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/arindam-pradhan/",
    instagram: "https://www.instagram.com/arindam_ju01/",
  },
  {
    id: '6', name: "Aritra Kumar Dutta", post: "Sponsorship Lead",
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/aritra-dutta-1752b4304",
    instagram: "https://www.instagram.com/_travelling.tesla/",
    facebook: "https://www.facebook.com/share/19VD7DQ6Ei/",
  },
  {
    id: '7', name: "Reejul Chattaraj", post: "Content Lead",
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/reejul-chattaraj-85a09727a",
    instagram: "https://www.instagram.com/_reeejul",
    facebook: "https://www.facebook.com/share/19gMsP3Ce7/",
  },
  {
    id: '8', name: "Sinjan Dinda", post: "Logistics Lead",
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/sinjan-dinda-a70861276",
    instagram: "https://www.instagram.com/dinda_sinjan",
    facebook: "https://www.facebook.com/share/15soztURSb/",
  },
  {
    id: '9', name: "Arunava Roy", post: "PR Lead",
    imageUrl: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop',
    linkedin: "https://www.linkedin.com/in/arunava-roy-176a4527b",
    instagram: "https://www.instagram.com/arunava_roy_10/",
    facebook: "https://www.facebook.com/share/1BLg4SPrKK/",
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
const CharItem = ({ char, startX, progress }: { char: string; startX: number; progress: MotionValue<number> }) => {
  const x = useTransform(progress, [0, 1], [startX, 0]);
  const opacity = useTransform(progress, [0, 0.4, 1], [0, 1, 1]);
  const scale = useTransform(progress, [0, 1], [0.8, 1]);

  return (
    <motion.span
      style={{ x, opacity, scale, display: "inline-block", whiteSpace: "pre", willChange: "transform, opacity" }}
    >
      {char}
    </motion.span>
  );
};

// --- ANIMATION VARIANTS FOR STAGGER ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, 
            delayChildren: 0.2,   
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// --- MAIN COMPONENT ---
const Teams: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.5, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section className="relative w-full h-auto bg-black text-white overflow-hidden py-20 px-2 md:px-8 font-sans">
      
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* --- Header with Metaverse Hover Effect --- */}
        <div className="mb-20 md:mb-24 relative w-full flex flex-col items-center group cursor-pointer">
          <ScrubText text="OUR TEAM" className="header-title relative z-10" />
          
          {/* SVG Line Animation */}
          <div className="absolute -bottom-2 w-[200px] md:w-[300px] h-[4px] overflow-hidden">
             <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 300 4"
                initial="hidden"
                whileHover="visible"
             >
                <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#a054fd" />
                    </linearGradient>
                </defs>
                <motion.line 
                    x1="0" y1="2" x2="300" y2="2"
                    stroke="url(#neonGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    variants={{
                        hidden: { pathLength: 0, opacity: 0, x: -150 },
                        visible: { 
                            pathLength: [0, 1, 1], 
                            opacity: [0, 1, 0],    
                            x: [ -150, 0, 150 ],   
                            transition: { 
                                duration: 1.2, 
                                ease: "easeInOut",
                                times: [0, 0.5, 1] 
                            }
                        }
                    }}
                />
             </motion.svg>
          </div>
        </div>

        {/* --- Animated Layout --- */}
        <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="flex flex-wrap justify-center gap-3 w-full md:gap-8">
                {teamMembers.map((member) => (
                    // MOBILE: 50% width minus gap to fit 2 columns.
                    // DESKTOP: Auto width (returns to original size defined in Card)
                    <motion.div key={member.id} variants={cardVariants} className="w-[calc(50%-0.375rem)] md:w-auto">
                        <Card member={member} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>

      {/* --- Global Styles --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Share+Tech+Mono&family=Inter:wght@700;900&display=swap');

        .header-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          cursor: default;
          text-align: center;
          font-size: 3rem; 
        }

        @media (max-width: 768px) {
            .header-title {
                font-size: 2rem; 
            }
        }
      `}</style>
    </section>
  );
};

// --- Card Component ---
const Card: React.FC<{ member: TeamMember }> = ({ member }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.card__box-anim', { opacity: 0 });
    }, elRef);
    return () => ctx.revert();
  }, []);

  const onEnter = () => {
    if (tlRef.current) tlRef.current.kill();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'expo' }
      })
      .addLabel('start', 0)
      
      // ANIMATION: Scales UP on hover
      .fromTo('.card__img', 
        { filter: 'saturate(100%) brightness(100%)', scale: 1 }, 
        { scale: 1.1, filter: 'saturate(200%) brightness(70%)' }, 
        'start'
      )

      .fromTo('.card__box-anim', 
        { 
          opacity: 0, 
          xPercent: (i, target) => target.classList.contains('card__box--a') ? -100 : 100,
          yPercent: (i, target) => target.classList.contains('card__box--a') ? -100 : 100
        }, 
        { opacity: 1, xPercent: 0, yPercent: 0 }, 
        'start'
      );

      tlRef.current = tl;
    }, elRef);
  };

  const onLeave = () => {
    if (tlRef.current) tlRef.current.kill();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'expo' }
      })
      .addLabel('start', 0)

      .to('.card__img', 
        { scale: 1, filter: 'saturate(100%) brightness(100%)' }, 
        'start'
      )

      .to('.card__box-anim', {
        opacity: 0,
        xPercent: (i, target) => target.classList.contains('card__box--a') ? -100 : 100,
        yPercent: (i, target) => target.classList.contains('card__box--a') ? -100 : 100
      }, 'start');

      tlRef.current = tl;
    }, elRef);
  };

  return (
    <div 
      ref={elRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      // MOBILE: rounded-3xl (Apple Style Curve)
      // DESKTOP: md:rounded-2xl (Preserved)
      className="card relative w-full aspect-square md:w-[250px] md:h-[250px] cursor-pointer overflow-hidden group grid grid-cols-2 grid-rows-2 gap-2 rounded-3xl md:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl"
    >
      {/* Background Image */}
      <div 
        className="card__img absolute top-0 left-0 w-full h-full z-[1] bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${member.imageUrl})` }}
      />

      {/* --- Box A: Top Left --- */}
      {/* MOBILE: rounded-tl-3xl to match outer border */}
      {/* DESKTOP: md:rounded-tl-2xl (Preserved) */}
      <div className="card__box-anim card__box--a z-[2] p-2 md:p-3 flex flex-col justify-center bg-white/10 backdrop-blur-md border-r border-b border-white/20 rounded-tl-3xl md:rounded-tl-2xl rounded-br-lg shadow-lg">
        <div className="font-[Orbitron] text-xs md:text-sm font-bold text-white tracking-wide leading-tight">
          {member.name}
        </div>
        <div className="text-[9px] md:text-[10px] font-[Share_Tech_Mono] text-white/80 mt-1 uppercase tracking-wider">
           {member.post}
        </div>
      </div>

      {/* --- Box B & C Empty --- */}
      <div className="z-[2] pointer-events-none"></div>
      <div className="z-[2] pointer-events-none"></div>

      {/* --- Box D: Bottom Right (Socials) --- */}
      {/* MOBILE: rounded-br-3xl to match outer border */}
      {/* DESKTOP: md:rounded-br-2xl (Preserved) */}
      <div className="card__box-anim card__box--d z-[2] p-2 md:p-3 flex flex-col justify-end items-end bg-white/10 backdrop-blur-md border-l border-t border-white/20 rounded-br-3xl md:rounded-br-2xl rounded-tl-lg shadow-lg">
        <div className="flex gap-1 md:gap-2 text-white">
            {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    {/* ORIGINAL LINKEDIN SVG PATH */}
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                </a>
            )}
            {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                    {/* ORIGINAL INSTAGRAM SVG PATH */}
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                </a>
            )}
            {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                     {/* ORIGINAL FACEBOOK SVG PATH */}
                     <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                     </svg>
                </a>
            )}
        </div>
      </div>

    </div>
  );
};

export default Teams;