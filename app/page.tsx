"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden pb-32">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/img/home/background.jpg')",
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
              <Link
                href="#contact"
                className="group relative px-10 py-5 bg-primary text-secondary font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl overflow-hidden uppercase tracking-widest text-sm"
              >
                <span className="relative z-10 text-black">Book Appointment</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-title mb-4 font-outfit uppercase tracking-wider">
              Our Professional Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { title: "General Dentistry", description: "Comprehensive check-ups and cleanings for your entire family." },
              { title: "Cosmetic Surgery", description: "Veneers, whitening, and smile makeovers to boost your confidence." },
              { title: "Dental Implants", description: "Permanent, natural-looking solutions for missing teeth." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <span className="text-2xl font-bold">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-title mb-4 font-outfit">{service.title}</h3>
                <p className="text-body leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-outfit">Ready to Smile with Confidence?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Joint our 5000+ satisfied patients and experience the difference of modern dental technology.
            </p>
            <button className="px-10 py-4 bg-white text-secondary rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}