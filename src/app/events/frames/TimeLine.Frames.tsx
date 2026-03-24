import React from "react";
import Image from "next/image";

const Timeline = () => {
  // --- Timeline Data ---
  const timelineData = [
    { date: "25th March, 2026", title: "Registration Closes", time: "12:00 PM IST" },
    { date: "25th March, 2026", title: "Submission Deadline", time: "12:00 PM IST" },
    { date: "27th March - 28th March 11:59 PM IST", title: "Voting Period" }
  ];

  return (
    <div
      id="timeline"
      className="relative w-full min-h-[50vh] lg:min-h-[80vh] pb-10 lg:pb-0 flex flex-col items-center justify-center overflow-hidden "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#52BAFF] -z-20"></div>

      {/* clouds and aeroplanes */}
       <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
              
              {/* Two Aeroplanes - Sized and positioned exactly like the screenshots */}
              <Image 
                src="/Frames/aeroplane.png" 
                alt="aeroplane" 
                width={100} 
                height={60} 
                className="absolute top-[12%] left-[8%] md:left-[50%] w-16 md:w-20 h-auto opacity-100 -scale-x-100" 
              />
              <Image 
                src="/Frames/aeroplane.png" 
                alt="aeroplane" 
                width={100} 
                height={60} 
                className="hidden  md:absolute bottom-[5%] left-[30%] md:left-[45%] w-16 md:w-20 h-auto opacity-100 " 
              />
              <Image 
                src="/Frames/aeroplane.png" 
                alt="aeroplane" 
                width={100} 
                height={60} 
                className="absolute top-[55%] md:top-[60%] right-[5%] md:right-[5%] w-16 md:w-20 h-auto opacity-100  -scale-x-100" 
              />
      
              {/* Clouds - Scattered to match the sky aesthetic */}
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute top-[8%] left-[30%] w-10 md:w-14 h-auto opacity-80 " />
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute top-[18%] right-[25%] w-12 md:w-16 h-auto opacity-80" />
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute top-[45%] left-[10%] w-10 md:w-14 h-auto opacity-80" />
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute bottom-[25%] right-[20%] w-12 md:w-16 h-auto opacity-80" />
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute bottom-[15%] left-[25%] w-14 md:w-20 h-auto opacity-80" />
              <Image src="/Frames/cloud.png" alt="cloud" width={80} height={50} className="absolute bottom-[8%] right-[40%] w-10 md:w-14 h-auto opacity-80 " />
            </div>
      
      {/* --- TIMELINE HEADING --- */}
      <div className="absolute top-10 lg:top-10 w-full z-40 flex justify-center px-6">
        <h1 className="relative z-20 font-orbitron font-bold text-center text-3xl md:text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-t from-gray-200 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] whitespace-nowrap uppercase">
            Timeline
          </h1>
      </div>

      
      <div className="relative z-20 w-full max-w-6xl mx-auto flex items-center justify-center lg:justify-between px-6 lg:px-12 -translate-y-15 lg:-translate-y-30 mt-20 lg:mt-0">

       
        <div className="relative z-30 flex flex-col items-center text-center lg:text-left w-full lg:w-1/2 translate-y-20 lg:translate-y-28">
          
          {/*Timeline*/}
          <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-6 bottom-4 w-1 bg-[#0A5C7A]/20 -translate-x-1/2 rounded-full"></div>

            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex items-center w-full mb-6 last:mb-0 ${isLeft ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A5C7A] rounded-full border-2 border-[#84D4FF] shadow-[0_0_10px_rgba(10,92,122,0.4)] z-10"></div>

                  {/* Frosted Glass Card */}
                  <div className={`w-[45%] ${isLeft ? 'pr-4 md:pr-6 text-right' : 'pl-4 md:pl-6 text-left'}`}>
                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:bg-white/60 transition-colors duration-300">
                      <h3 className="font-orbitron font-bold text-[#0A5C7A] text-sm md:text-base leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="font-rajdhani font-semibold text-[#0A5C7A]/80 text-xs md:text-sm">
                        {item.date}
                      </p>
                      <p className="font-rajdhani font-semibold text-[#0A5C7A]/80 text-xs md:text-sm">
                        {item.time}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
          {/* ----------------------------------------------------------- */}

        </div>

        {/* camera and spotlight */}
        <div className="hidden lg:flex relative w-1/2 justify-end z-10 translate-x-[17%]">
          
          <div className="relative w-[450px] xl:w-[500px]">
            
            <div 
              className="absolute z-[-1] pointer-events-none"
              style={{ 
                right: '75%', 
                top: '67%', 
                transform: 'translateY(-50%)',
                width: '300vw', 
                height: '220vw', 
                clipPath: 'polygon(100% 50%, 0 0, 0 100%)', 
                background: 'linear-gradient(270deg, #84D4FF 0%, #B9E9FF 65%, #E2F8FF 100%)'
              }}
            />

            <Image 
              src="/Frames/badawalacamera.png" 
              alt="Timeline Camera"
              width={700}
              height={700}
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
              priority
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Timeline;