"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const expertiseItems = [
  {
    title: "100% Digital Dentistry Clinic in Nagercoil",
    description:
      "Advanced intraoral scanning, CAD-CAM, and AI-driven smile design for precise, comfortable, and modern dental care.",
    image: "/assets/img/home/expertise-scanning.png",
    tag: "Digital Workflow",
  },
  {
    title: "Diamond Invisalign Provider",
    description:
      "Expert in Invisalign clear aligners in Nagercoil, offering invisible braces with predictable and faster results.",
    image: "/assets/img/home/expertise-invisalign.png",
    tag: "Clear Aligners",
  },
  {
    title: "3D Printing & CAD-CAM Technology",
    description:
      "High precision, faster turnaround time, and superior quality restorations.",
    image: "/assets/img/home/expertise-3d-printing.png",
    tag: "Lab Technology",
  },
  {
    title: "Guided Implant Surgery Specialist",
    description:
      "Flapless, minimally invasive dental implant treatments in Nagercoil with faster healing and long-term success.",
    image: "/assets/img/home/expertise-implants.png",
    tag: "Implantology",
  },
  {
    title: "Advanced Digital Smile Design Clinic in Nagercoil",
    description:
      "Experience next-generation smile transformation with AI-driven smile planning and precision technology.",
    image: "/assets/img/home/expertise-ai-smile.png",
    tag: "Cosmetic Dentistry",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-black">
            Why Choose SI-DENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-title mt-4 font-outfit uppercase tracking-tight">
            Our Clinical <span className="text-primary">Expertise</span>
          </h2>
        </motion.div>

        {/* Bento Grid: 2 large on top, 3 below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {expertiseItems.map((item, index) => {
            // First 2 items span 3 cols each (half width), last 3 span 2 cols each (third width)
            const colSpan =
              index < 2 ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <motion.div
                key={index}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${colSpan}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Background Image */}
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay that intensifies on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500"></div>

                  {/* Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-black text-[9px] uppercase tracking-widest font-black rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content overlaid at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-lg sm:text-xl font-black text-white font-outfit uppercase tracking-tight leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-outfit line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
