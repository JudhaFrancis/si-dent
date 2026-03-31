"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceData } from "@/constants/services";

interface ServiceDetailProps {
  service: ServiceData;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-0"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] font-black">Professional Service</span>
              <h2 className="text-4xl sm:text-5xl font-black text-title font-outfit uppercase leading-tight tracking-tight">
                {service.title.split(' ')[0]} <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-xl font-bold text-gray-400 font-outfit border-l-4 border-primary pl-6">
                {service.subtitle}
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base font-inter text-justify">
              {service.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {service.stats.map((stat, i) => (
                <div key={i} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-title font-bold text-sm tracking-tight">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            className="relative group lg:sticky lg:top-32"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src={`/assets/img/services${service.heroImage}`}
                alt={service.title}
                width={800}
                height={1000}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl">
                    <i className="fa-solid fa-microscope"></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Clinical Excellence</p>
                    <p className="text-title font-bold text-sm">Advanced Digital Workflow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
