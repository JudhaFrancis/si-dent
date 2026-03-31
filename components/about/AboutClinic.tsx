"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutClinic() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-3">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">THE DIGITAL REVOLUTION</span>
              <h2 className="text-3xl sm:text-4xl font-black text-title font-outfit uppercase leading-tight tracking-tight mt-4">
                About <span className="text-primary">SI-DENT</span> <br />
                Dental Clinic
              </h2>
            </div>

            <div className="space-y-6 text-gray-500 font-medium leading-relaxed font-inter">
              <p>
                SI-DENT Dental Clinic is one of the best dental clinics in Nagercoil and South Tamil Nadu, known for delivering advanced, technology-driven dental care with precision, comfort, and excellence. Founded and led by <span className="text-title font-bold">Prof. Dr. S.I. Joephin Soundar, MDS</span>, a renowned prosthodontist, implantologist, and digital dentistry expert.
              </p>
              
              <div className="flex items-start gap-4 p-5 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary shadow-lg">
                  <i className="fa-solid fa-microscope text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="text-xs font-black text-title uppercase tracking-widest mb-1">100% Digital Workflow</h4>
                  <p className="text-[13px] text-gray-600">Integrating advanced technologies such as intraoral scanning, 5D scanning systems, and AI-based treatment planning.</p>
                </div>
              </div>

              <p>
                As a Digital Dental Society certified digital dentistry clinic and a Digital Smile Center approved by the Indian Dental Association, SI-DENT stands at the forefront of modern dentistry. We utilize 3D printing, CAD-CAM restorations, and NemoSmile 3D smile design software to deliver highly accurate and predictable treatments.
              </p>

              <p>
                With German-imported dental units, advanced laser systems, OPG digital imaging, and international sterilization protocols (B-Class autoclave), SI-DENT ensures the highest standards of safety, hygiene, and patient comfort.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="space-y-1 border-l-2 border-primary pl-4">
                <span className="text-2xl font-black text-title font-outfit uppercase">12+</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Years of Experience</p>
              </div>
              <div className="space-y-1 border-l-2 border-primary pl-4">
                <span className="text-2xl font-black text-title font-outfit uppercase">Cert.</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Digital Dental Society</p>
              </div>
            </div>
          </motion.div>

          {/* Image Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:ml-auto"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-[480px] mx-auto lg:mx-0 border-4 border-white">
              <Image
                src="/assets/img/about/about.jpg"
                alt="Digital Dentistry Clinic"
                width={600}
                height={750}
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl -z-0 max-w-[480px]"></div>
            
            {/* Award Floating */}
            <div className="absolute top-6 -left-8 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-50 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-xl">
                <i className="fa-solid fa-trophy text-primary text-xl"></i>
              </div>
              <div>
                <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">Trusted By</span>
                <span className="block text-xs font-bold text-title">Thousands of Patients</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
