"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function PartnerSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollAction = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 border-y border-gray-200/50 bg-slate-50 overflow-hidden relative group">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-300 mb-10">Trusted Partners & Technology</p>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Navigation Arrows (Using SVG for 100% reliable visibility) */}
        <button 
          onClick={() => scrollAction("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 opacity-70 hover:opacity-100"
          aria-label="Previous logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={() => scrollAction("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white hover:scale-110 opacity-70 hover:opacity-100"
          aria-label="Next logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex py-6 flex-nowrap overflow-x-auto gap-12 sm:gap-16 md:gap-20 lg:gap-24 scroll-smooth scrollbar-hide items-center no-scrollbar"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {[
            "dsd", "iaoi", "ida", "ips", "Invisalign", "isdr", "isoi", "dds", "Dental-Implant"
          ].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <Image 
                src={`/assets/img/logos/${logo}.png`} 
                alt={`${logo} logo`} 
                width={300} 
                height={150} 
                className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 px-4"
              />
            </div>
          ))}
        </div>
        
        {/* Edge Gradients for clean fade */}
        <div className="absolute left-4 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute right-4 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </section>
  );
}
