"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Worth it. The dentist provides exceptional care with a gentle touch. The office is clean, the staff is friendly, and appointments are punctual. People are really understanding and helpful. I highly recommend their services for a positive dental experience.",
    author: "Firdous Anjum",
    tag: "Exceptional Care"
  },
  {
    text: "This clinic is so professional and hygiene is very well maintained. Dr Joephin employs digital technology while doing his cases... that way it helps you visualise the treatment outcome... I highly recommend",
    author: "Kiran Suz",
    tag: "Digital Precision"
  },
  {
    text: "Best in Kanyakumari district. I'm new to this place this was my 4th and Final dental clinic that I landed with full satisfaction for both my son and I. Extraordinary service with latest technologies I haven't seen any dental clinic that does a root canal without an injection. My 4 year old had his root canal with no fear or pain. I really appreciate the service rendered here",
    author: "Satisfied Parent",
    tag: "Painless Treatment"
  },
  {
    text: "I have done my Smile Designing treatment by Dr Joephin. They look so natural and i cannot stop smiling. The whole process is superb! The staff are amazingly warm and friendly, the atmosphere is very relax and calming. Dr himself so professional but also friendly. He gives honest advice and sets out all your options with no pressure. The whole process was smooth and well planned. Highly recommended !! 💯 Much Appreciated",
    author: "Smile Design Patient",
    tag: "Cosmetic Excellence"
  },
  {
    text: "I witness the digital revolution in dentistry in SI dent, the virtual smile designing done in few clicks. It's easy mode for me to understand my final look of my treatment before the procedure. Atlast I feel awesome with my outcome look of my profile. It's the best clinic in Nagercoil. Thank you for ur excellent service and care",
    author: "Vasuprieya Abisha",
    tag: "Digital Revolution"
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-black">Patient Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-4 font-outfit uppercase tracking-tight leading-tight">Voices of <span className="text-primary">SI-DENT</span></h2>
          </motion.div>

          <div className="relative min-h-[350px] flex items-center justify-center pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full"
              >
                {/* Large Decorative Quote Icon */}
                <div className="flex justify-center mb-4">
                  <svg width="60" height="45" viewBox="0 0 75 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
                    <path d="M70.165 0C61.42 0 54.347 6.136 54.347 13.682C54.347 21.228 61.42 27.364 70.165 27.364C71.306 27.364 72.395 27.26 73.411 27.073C72.529 36.31 66.861 44.596 57.067 49.336L53.488 51.054L57.29 57.854L60.89 56.126C71.69 50.932 79.236 40.542 79.91 28.528C80.057 25.86 80.13 22.84 80.13 19.516C80.13 8.736 75.642 0 70.165 0ZM16.825 0C8.08 0 1.006 6.136 1.006 13.682C1.006 21.228 8.08 27.364 16.825 27.364C17.966 27.364 19.055 27.26 20.071 27.073C19.189 36.31 13.521 44.596 3.727 49.336L0.148 51.054L3.95 57.854L7.55 56.126C18.35 50.932 25.896 40.542 26.57 28.528C26.717 25.86 26.79 22.84 26.79 19.516C26.79 8.736 22.302 0 16.825 0Z" fill="currentColor" />
                  </svg>
                </div>

                <blockquote className="text-lg sm:text-xl font-bold text-gray-800 leading-relaxed px-4 mb-4">
                  "{testimonials[index].text}"
                </blockquote>

                <div className="flex flex-col items-center">
                  <div className="h-[2px] w-12 bg-primary mb-2"></div>
                  <h4 className="text-gray-900 font-black text-xl uppercase tracking-widest">{testimonials[index].author}</h4>
                  <p className="text-primary font-bold text-xs uppercase mt-2">{testimonials[index].tag}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-12 bg-primary" : "w-4 bg-gray-200 hover:bg-gray-300"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
