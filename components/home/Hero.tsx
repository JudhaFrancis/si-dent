"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const HERO_SLIDES = [
  {
    type: "main",
    title: { brand: "SI-DENT", main: "Dental Clinic" },
    subtitle:
      "Excellence in Dental Care with Advanced Technology and Compassionate Care.",
    cta: "Book Appointment",
    badge: "/assets/img/home/hero/SI-DENT.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "invisalign",
    title: {
      main: "Invisalign Clear Aligners",
      author: "Certified Invisalign Provider",
    },
    subtitle:
      "The clear alternative to braces. No brackets, no wires – just the smile you've always wanted.",
    image: "/assets/img/services/invisalign_hero_1774948363337.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "dds",
    title: { main: "Digital Dental Society", author: "DDS Member Excellence" },
    subtitle: "Digital Dental Society Certified Dental Clinic.",
    stamp: "/assets/img/home/hero/DDS-CERTIFIED-stamp.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
  {
    type: "dsd",
    title: {
      main: "Digital Smile Design",
      author: "by Prof. Dr. S.I. Joephin Soundar",
    },
    subtitle: "Experience the future of smile makeovers.",
    badge: "/assets/img/home/hero/Digital-smile-center.png",
    bg: "/assets/img/home/hero-bg.jpg",
  },
];

export default function Hero() {
  const modal = useModal();
  const openBookingModal = modal?.openBookingModal || null;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);


  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

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
          {/*  Background Safe */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide?.bg || "/fallback.jpg"}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-white"
              >
                <h1 className="text-3xl text-white lg:text-5xl font-bold mb-4">
                  {slide?.title?.main}
                </h1>

                {slide?.title?.author && (
                  <p className="text-white/70 mb-2">{slide.title.author}</p>
                )}

                <p className="text-white/70 mb-6">{slide?.subtitle}</p>

                {openBookingModal && (
                  <button
                    onClick={openBookingModal}
                    className="bg-primary text-black px-6 py-3 rounded-lg"
                  >
                    Book Appointment
                  </button>
                )}
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center"
              >
                {/*  SAFE IMAGE RENDERING */}

                {slide?.badge && (
                  <Image
                    src={slide.badge}
                    alt="badge"
                    width={300}
                    height={300}
                  />
                )}

                {slide?.image && (
                  <Image
                    src={slide.image}
                    alt="image"
                    width={300}
                    height={300}
                  />
                )}

                {slide?.stamp && (
                  <Image
                    src={slide.stamp}
                    alt="stamp"
                    width={300}
                    height={300}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`cursor-pointer transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? "w-8 h-1.5 bg-primary"
                : "w-2 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
