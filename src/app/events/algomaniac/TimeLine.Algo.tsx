'use client';
import React from 'react';

export default function Timeline() {
    return (
        <section
            id="timeline"
            className="relative h-auto w-full py-10 flex flex-col items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl translate-x-0 xl:translate-x-50">
                
               <h1 className="font-orbitron font-bold text-center text-3xl sm:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-purple-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase relative inline-block mb-10">
                        Timeline
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200/60 to-transparent"></span>
                    </h1>

                
                <div className="relative w-full border-l-2 border-fuchsia-500/30 md:border-l-0 md:flex md:flex-col md:items-center md:gap-8">
                  
                  
                  <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-fuchsia-500/50 via-cyan-500/50 to-purple-500/50 -translate-x-1/2"></div>

                  <div className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:mb-0 group">
                    <div className="hidden md:block w-[45%] text-right pr-8">
                      <h4 className="font-orbitron text-xl font-bold text-fuchsia-400 uppercase">Registration Deadline</h4>
                    </div>
                    <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_15px_#d946ef] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                    <div className="md:w-[45%] md:pl-8 text-left">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-fuchsia-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron text-cyan-300 font-semibold text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">March 25, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-fuchsia-400 mt-2">Registration Deadline</h4>
                        <p className="font-rajdhani  font-semibold text-gray-300 mt-2">Registration for Algomaniac will end on 25th March at 7:00 PM IST.</p>
                      </div>
                    </div>
                  </div>


                  <div className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center mb-8 md:mb-0 md:flex-row-reverse group">
                    <div className="hidden md:block w-[45%] text-left pl-8">
                      <h4 className="font-orbitron text-xl font-bold text-cyan-400 uppercase">Preliminary Round</h4>
                    </div>
                    <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                    <div className="md:w-[45%] md:pr-8 text-left md:text-right">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-cyan-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron font-semibold text-fuchsia-300 text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]">March 25, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-cyan-400 mt-2">Preliminary Round</h4>
                        <p className="font-rajdhani  font-semibold text-gray-300 mt-2">The prelims will be held Online on 25th March from 7:00 - 10:00 PM IST.</p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-8 md:pl-0 w-full md:flex md:justify-between md:items-center group">
                    <div className="hidden md:block w-[45%] text-right pr-8">
                      <h4 className="font-orbitron text-xl font-bold text-fuchsia-400 uppercase">Final Round</h4>
                    </div>
                    <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7] ring-4 ring-black/50 group-hover:scale-125 transition-transform z-10"></div>
                    <div className="md:w-[45%] md:pl-8 text-left">
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                        <span className="font-orbitron font-semibold text-cyan-300 text-sm tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">March 29, 2026</span>
                        <h4 className="md:hidden font-orbitron text-lg font-bold text-purple-500 mt-2 ">On-Site Finals</h4>
                        <p className="font-rajdhani text-gray-300 font-semibold mt-2">The finals will be held offline on 29th March.</p>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        </section>
    );
}