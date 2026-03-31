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
    <section className="py-16 border-y border-gray-200/50 bg-slate-50 overflow-hidden relative group">
      <div className="container mx-auto px-4 mb-4 text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] font-black text-gray-300">Trusted Partners & Technology</p>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scrollAction("left")}
          className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100"
          aria-label="Previous logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={() => scrollAction("right")}
          className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100"
          aria-label="Next logos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex py-4 flex-nowrap overflow-x-auto gap-12 sm:gap-16 lg:gap-20 scroll-smooth scrollbar-hide items-center no-scrollbar"
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
                className="h-12 sm:h-20 lg:h-24 w-auto object-contain transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 px-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
