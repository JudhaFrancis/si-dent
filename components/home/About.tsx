"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <section ref={aboutRef} className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-title mb-8 font-outfit uppercase tracking-tight">
              SI-DENT DENTAL CLINIC
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-outfit text-justify">
              <p>
                <span className="text-primary font-bold">Welcome To SI-DENT Dental Clinic:</span> — SI-DENT Dental Clinic in Nagercoil is one of the best dental clinics in Nagercoil and South Tamil Nadu, offering advanced, technology-driven dental care with a focus on <span className="text-title font-semibold">dental implants, Invisalign clear aligners, and digital dentistry</span>.
              </p>
              <p>
                Led by <span className="text-title font-semibold">Dr. S.I. Joephin Soundar</span>, an experienced prosthodontist and implantologist, the clinic provides painless guided implant surgery, full mouth rehabilitation, smile designing, and CAD-CAM restorations using a 100% digital workflow.
              </p>
              <p>
                As a <span className="text-primary font-bold">Diamond Invisalign Provider</span> in Nagercoil, SI-DENT delivers customized, invisible braces solutions for faster and predictable teeth alignment. With services like intraoral scanning, AI-based smile design, 3D printing, and same-day dentistry, patients experience precise, minimally invasive treatments with superior results.
              </p>
            </div>
          </motion.div>

          {/* Right: Images + Parallax Animation */}
          <div className="lg:w-1/2 flex flex-col gap-12 lg:gap-16">
            <div className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center lg:justify-end">
              {/* Right Image (Foreground Overlap) */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Image
                  src="/assets/img/home/about-main.jpg"
                  alt="Modern SI-DENT Dental Clinic Reception and Facilities in Nagercoil"
                  width={500}
                  height={650}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
