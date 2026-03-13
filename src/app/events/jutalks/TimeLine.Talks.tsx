import React from "react";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="relative w-full pt-20 md:pt-25 pb-5 flex flex-col items-center justify-center overflow-hidden bg-[#FF97E3]"
    >
      
      {/*main content */}
      <div className="relative z-10 flex flex-col items-center justify-between w-full px-4 gap-10">
       <div
          className="flex flex-col items-center pointer-events-none select-none mb-1"
        >
          <h1 className="font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-[#592A13] drop-shadow-sm whitespace-nowrap uppercase">
            Timeline
          </h1>
        </div>
        
       <div className="bg-white/30 backdrop-blur-xl border border-white/50  rounded-3xl p-4 max-w-2xl w-full flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-500">
          
          
          <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 border border-white/80">
            🗓️
          </div>

          <h2 className="font-orbitron text-xl md:text-xl font-bold tracking-wide text-[#592A13] mb-4 drop-shadow-sm">
            29th March
          </h2>
          <h2 className="text-[#a04821] font-orbitron mb-2 font-bold text-xl">04 : 00 PM</h2>
          <p className="font-rajdhani text-base font-semibold tracking-wide text-gray-800 max-w-xl leading-relaxed">
            Join us for a compelling afternoon of discussion, where industry leaders share their most valuable insights.
          </p>
          
        </div>
      </div>
      
    </div>
  );
};

export default Timeline;