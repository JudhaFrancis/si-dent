"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DoctorProfile() {
  return (
    <section className="py-20 bg-[#0a0c12] overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left: Authoritative Bio */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-2">
              <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">Clinical Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 font-outfit uppercase leading-tight tracking-tight mt-2 text-right lg:text-left">
              Prof. Dr. S.I. Joephin Soundar, <span className="text-primary tracking-normal">MDS</span>
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed text-base font-inter text-justify">
              <p className="border-l-2 border-primary pl-6 py-2 italic text-gray-300 bg-white/5 rounded-r-lg">
                Renowned Prosthodontist, Implantologist, and Digital Dentistry Expert. Head of the Department of Digital Dentistry at Rajas Dental College & Hospital.
              </p>

              <p>
                Dr. Joephin Soundar completed his BDS and MDS from Tamil Nadu Dr. M.G.R. Medical University and brings over <span className="text-white font-bold">12+ years of clinical experience</span> in advanced dental care. He is a <span className="text-white font-bold">Board Certified Digital Dentist</span> accredited by the Digital Dental Society under the mentorship of Dr. Mahmoud Ezzat.
              </p>

              <p>
                Widely recognized as one of the <span className="text-primary font-semibold">best implantologists in Nagercoil</span>, Dr. Joephin specializes in dental implants, Invisalign treatment, digital smile designing, and full mouth rehabilitation using cutting-edge digital workflows.
              </p>

              <p>
                As an innovative clinician and educator, he resides as an expert in advanced software platforms such as <span className="text-white">Exocad</span>, <span className="text-white">Nemotec</span>, and <span className="text-white">Blender for Dental</span>, ensuring precision-driven, minimally invasive treatments with superior results.
              </p>

              <p>
                With multiple scientific publications and a passion for hands-on training, Dr. Joephin continues to contribute to modern dentistry, making him a trusted name for patients seeking the best for their smile in South Tamil Nadu.
              </p>
            </div>

            {/* Key Qualifications Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md ml-auto lg:ml-0">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/40 transition-colors">
                <p className="text-primary font-bold text-xl mb-1">12+</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Years Experience</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/40 transition-colors">
                <p className="text-primary font-bold text-xl mb-1">MDS</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">Post Graduation</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Professional Portrait */}
          <motion.div
            className="relative group lg:ml-auto order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-[480px] mx-auto lg:mx-0">
              <Image
                src="/assets/img/home/drjosphine.jpg"
                alt="Prof. Dr. S.I. Joephin Soundar"
                width={600}
                height={750}
                className="w-full h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Overlay Gradient for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
