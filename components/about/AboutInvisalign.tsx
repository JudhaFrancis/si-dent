"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const images = [
  {
    src: "/assets/img/about/invisalign_indian_patient.png",
    alt: "Invisalign Treatment India",
  },
  {
    src: "/assets/img/about/invisalign_specialist.png",
    alt: "Expert Consultation",
  },
  {
    src: "/assets/img/about/invisalign_lifestyle.png",
    alt: "Confident Smile",
  },
  {
    src: "/assets/img/about/invisalign_aligners.png",
    alt: "Clear Aligner Technology",
  },
];

export default function AboutInvisalign() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openBookingModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          {/* Slider Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-auto h-[450px] md:h-[520px] group bg-white max-w-[480px] mx-auto lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-title/60 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slider Controls */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                      currentIndex === idx ? "bg-primary w-8" : "bg-white/40 hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white flex items-center justify-center rounded-xl shadow-lg">
                    <i className="fa-solid fa-gem text-primary text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-white uppercase tracking-widest font-outfit">Diamond Provider</h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-3">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">ELITE ORTHODONTIC CARE</span>
              <h2 className="text-3xl sm:text-4xl font-black text-title font-outfit uppercase leading-tight tracking-tight mt-4">
                Invisalign <span className="text-primary italic">Diamond</span> <br />
                Provider In Tamil Nadu
              </h2>
            </div>

            <div className="space-y-6 text-gray-500 font-medium leading-relaxed font-inter">
              <p>
                SI-DENT Dental Clinic is a premier Invisalign provider in Nagercoil and a recognized <span className="text-title font-bold italic">Diamond Invisalign Provider</span> in Tamil Nadu. This elite recognition reflects our expertise and reliability in delivering beautiful smiles using advanced clear aligner technology.
              </p>

              <p>
                Our specialized orthodontic team, including <span className="text-title font-bold">Dr. Veera Shankar</span> and <span className="text-title font-bold">Dr. Leevan Paul</span>, led by <span className="text-title font-bold">Prof. Dr. S.I. Joephin Soundar, MDS</span>, ensures an expert-driven approach to every case.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-outfit">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                    <i className="fa-solid fa-check text-xs text-primary"></i>
                  </div>
                  <span className="text-xs font-black text-title uppercase tracking-widest">3D Scanning</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-outfit">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                    <i className="fa-solid fa-check text-xs text-primary"></i>
                  </div>
                  <span className="text-xs font-black text-title uppercase tracking-widest">AI Treatment Planning</span>
                </div>
              </div>

              <p>
                What truly sets SI-DENT apart is our <span className="text-primary font-bold">in-house aligner production and 3D printing facility</span>. This allows for faster treatment initiation, superior quality control, and cost-effective solutions for our patients.
              </p>
            </div>

            <div className="pt-5">
              <button 
                onClick={openBookingModal}
                className="px-10 py-5 bg-title hover:bg-primary hover:text-title text-white font-black rounded-2xl shadow-xl transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-3"
              >
                Book Invisalign Consultation
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
