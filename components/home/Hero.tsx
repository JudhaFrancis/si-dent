"use client";

import React from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const { openBookingModal } = useModal();

  return (
    <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden pb-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/home/hero-bg.jpg')",
        }}
      >
        {/* Warm Dark Overlay to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight mb-8 font-outfit uppercase">
            <span className="text-primary italic block sm:inline drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              SI-DENT
            </span>
            <span className="inline-block w-4 sm:w-8"></span>
            <span className="text-white block sm:inline drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Dental Clinic
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center flex-wrap gap-6"
          >
            <button
              onClick={openBookingModal}
              className="group relative px-10 py-5 bg-primary text-secondary font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl overflow-hidden uppercase tracking-widest text-sm cursor-pointer"
            >
              <span className="relative z-10 text-black">Book Appointment</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
