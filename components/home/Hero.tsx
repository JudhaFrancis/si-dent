"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const HERO_SLIDES = [
  {
    type: "main",
    title: { brand: "SI-DENT", main: "Dental Clinic" },
    subtitle: "Excellence in Dental Care with Advanced Technology and Compassionate Care.",
    cta: "Book Appointment",
    badge: "/assets/img/home/hero/SI-DENT.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "invisalign",
    title: { main: "Invisalign Clear Aligners", author: "Certified Invisalign Provider" },
    subtitle: "The clear alternative to braces. No brackets, no wires – just the smile you've always wanted.",
    image: "/assets/img/services/invisalign_hero_1774948363337.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "dds",
    title: { main: "Digital Dental Society", author: "DDS Member Excellence" },
    subtitle: "Digital Dental Society Certified Dental Clinic. Committed to the highest standards of digital workflows and elite patient care.",
    stamp: "/assets/img/home/hero/DDS-CERTIFIED-stamp.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "dsd",
    title: { main: "Digital Smile Design", author: "by Prof. Dr. S.I. Joephin Soundar" },
    subtitle: "KOL in Digital Dentistry | Certified Digital Smile Center. Experience the future of smile makeovers.",
    badge: "/assets/img/home/hero/Digital-smile-center.png",
    bg: "/assets/img/home/hero-bg.jpg",
  }
];

export default function Hero() {
  const { openBookingModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-black py-10 lg:py-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110 animate-slow-zoom"
            style={{
              backgroundImage: `url('${HERO_SLIDES[currentSlide].bg}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>
            <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            {/* 2-Column Grid Layout used for ALL slides for consistency */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center lg:text-left text-center lg:pt-32 lg:pb-28 pt-10 pb-16">
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="order-1 lg:order-1"
              >
                {HERO_SLIDES[currentSlide].type === "main" && (
                  <p className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-[10px] sm:text-xs drop-shadow-lg">
                    Premium Dental Solutions
                  </p>
                )}
                
                {HERO_SLIDES[currentSlide].type === "invisalign" && (
                  <p className="text-[#00AEEF] font-black uppercase tracking-[0.4em] mb-4 text-[10px] sm:text-xs drop-shadow-lg">
                    Clear Aligners
                  </p>
                )}

                {HERO_SLIDES[currentSlide].type === "dds" && (
                  <p className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-[10px] sm:text-xs drop-shadow-lg">
                    Certified Clinical Excellence
                  </p>
                )}

                {HERO_SLIDES[currentSlide].type === "dsd" && (
                  <p className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-[10px] sm:text-xs drop-shadow-lg">
                    Smile Transformation
                  </p>
                )}
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] font-outfit uppercase mb-6 drop-shadow-2xl">
                  {HERO_SLIDES[currentSlide].type === "main" ? (
                    <>
                      <span className="text-primary italic">{HERO_SLIDES[currentSlide].title.brand}</span>
                      <br />
                      {HERO_SLIDES[currentSlide].title.main}
                    </>
                  ) : (
                    <>
                      {HERO_SLIDES[currentSlide].title.main.split(' ').slice(0, -1).join(' ')} <span className="text-primary italic">{HERO_SLIDES[currentSlide].title.main.split(' ').pop()}</span>
                      <span className="block text-lg sm:text-xl lg:text-2xl font-bold mt-3 text-white/80 lowercase tracking-normal font-inter">
                        {HERO_SLIDES[currentSlide].title.author}
                      </span>
                    </>
                  )}
                </h1>
                
                <p className="text-xs sm:text-base lg:text-lg text-white/70 font-medium tracking-wide mb-8 max-w-md mx-auto lg:mx-0 lg:border-l-2 lg:border-primary lg:pl-5 leading-relaxed">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>
              </motion.div>

              {/* Right Column: Visual Component */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="flex justify-center lg:justify-end relative order-2 lg:order-2"
              >
                {/* Visual content based on slide type */}
                {HERO_SLIDES[currentSlide].type === "main" && (
                  <div className="relative group p-3 bg-white/5 backdrop-blur-sm rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                    <Image
                      src={HERO_SLIDES[currentSlide].badge!}
                      alt="Clinic Identity"
                      width={320}
                      height={320}
                      className="w-full max-w-[180px] sm:max-w-[280px] h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute -top-3 -left-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl">
                      <p className="text-[8px] uppercase font-black tracking-widest text-primary">Est. Quality</p>
                      <p className="text-base sm:text-lg font-bold leading-none">Since 2024</p>
                    </div>
                  </div>
                )}

                {HERO_SLIDES[currentSlide].type === "invisalign" && (
                  <div className="relative group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[#00AEEF]/10 rounded-full blur-[60px] sm:blur-[80px] -z-10 animate-pulse"></div>
                    <Image
                      src={HERO_SLIDES[currentSlide].image!}
                      alt="Invisalign Aligners"
                      width={420}
                      height={420}
                      className="w-full max-w-[220px] sm:max-w-[380px] h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl scale-75 sm:scale-90">
                      <p className="text-[8px] uppercase font-black tracking-widest text-[#00AEEF]">Invisalign</p>
                      <p className="text-sm sm:text-base font-bold">Clear Transformation</p>
                    </div>
                  </div>
                )}

                {HERO_SLIDES[currentSlide].type === "dds" && (
                  <div className="relative group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-[60px] sm:blur-[80px] -z-10 animate-pulse"></div>
                    <Image
                      src={HERO_SLIDES[currentSlide].stamp!}
                      alt="DDS Certified Stamp"
                      width={380}
                      height={380}
                      className="w-full max-w-[200px] sm:max-w-[320px] h-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-4 -right-4 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl max-w-[140px] sm:max-w-[170px]">
                      <p className="text-[8px] uppercase font-black text-primary tracking-[0.2em] mb-1">Status</p>
                      <p className="text-[10px] sm:text-xs font-bold leading-tight">Certified Dental Clinic</p>
                    </div>
                  </div>
                )}

                {HERO_SLIDES[currentSlide].type === "dsd" && (
                  <div className="relative group p-3 bg-white/5 backdrop-blur-sm rounded-[2rem] lg:rounded-[2.5rem] border border-white/10">
                    <Image
                      src={HERO_SLIDES[currentSlide].badge!}
                      alt="DSD Identity"
                      width={320}
                      height={320}
                      className="w-full max-w-[180px] sm:max-w-[280px] h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute -bottom-4 -right-4 p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl max-w-[140px] sm:max-w-[170px]">
                      <p className="text-[8px] uppercase font-black text-primary tracking-[0.2em] mb-1">Clinic Status</p>
                      <p className="text-[10px] sm:text-xs font-bold leading-tight">100% Certified Center</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 sm:gap-6">
        <button
          onClick={prevSlide}
          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hidden sm:flex"
        >
          <i className="fa-solid fa-chevron-left text-[10px] sm:text-xs"></i>
        </button>

        <div className="flex gap-2 sm:gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`cursor-pointer transition-all duration-500 rounded-full h-1 ${
                currentSlide === idx ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hidden sm:flex"
        >
          <i className="fa-solid fa-chevron-right text-[10px] sm:text-xs"></i>
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 hidden lg:flex"
      >
        <span className="text-white/20 text-[9px] uppercase font-black vertical-text tracking-[0.5em]">SI-DENT</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
