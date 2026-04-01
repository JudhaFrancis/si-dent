"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const allServices = [
  { name: "Dental Implants", href: "/services/dental-implants" },
  { name: "Invisalign Clear Aligners", href: "/services/invisalign" },
  { name: "Digital Smile Design (DSD)", href: "/services/digital-smile-design" },
  { name: "Laser Dentistry", href: "/services/laser-dentistry" },
  { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
  { name: "Teeth Whitening / Bleaching", href: "/services/teeth-whitening" },
  { name: "Veneers & Smile Makeover", href: "/services/veneers-smile-makeover" },
  { name: "CAD-CAM Restorations", href: "/services/cad-cam-restorations" },
  { name: "Inhouse Aligners & 3D Printing", href: "/services/inhouse-aligners" },
  { name: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation" },
  { name: "Digital Dentures", href: "/services/digital-dentures" },
  { name: "Crown & Bridge", href: "/services/crown-bridge" },
  { name: "General & Preventive Dentistry", href: "/services/general-dentistry" },
  { name: "Anti-snoring Devices (Sleep Dentistry)", href: "/services/sleep-dentistry" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-title text-white pt-24 pb-6 overflow-hidden font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2.2fr_1fr] gap-12 lg:gap-16 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <Link href="/" className="block">
              <Image
                src="/assets/img/header/sident_logo.png"
                alt="Si-Dent"
                width={150}
                height={50}
                className="h-12 w-auto"
                style={{ width: 'auto' }}
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-base max-w-xs">
              Providing premium dental solutions with a focus on patient comfort and cutting-edge technology.
            </p>
            <div className="flex gap-5">
              {/* Facebook */}
              <motion.a href="https://www.facebook.com/sident/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
              </motion.a>
              {/* Instagram */}
              <motion.a href="https://www.instagram.com/joephinsoundar" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
              </motion.a>
              {/* YouTube */}
              <motion.a href="https://www.youtube.com/channel/UCnHJYNaP7oqerPYIZSmOwAA" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5, scale: 1.1 }} className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>
              </motion.a>
            </div>
          </motion.div>

          {/* All Services */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-outfit mb-8 relative inline-block text-white">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {allServices.map(service => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-gray-400 hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group text-sm"
                >
                  <span className="w-1.5 h-1.5 flex-shrink-0 bg-primary/40 rounded-full group-hover:w-3 group-hover:bg-primary transition-all"></span>
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-outfit mb-8 relative inline-block text-white">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-6">
              {/* Location */}
              <motion.a
                href="https://maps.google.com/?q=SI-DENT+Dental+Clinic+120+Rajakkamangalam+Rd+Thalavaipuram+Ponappanadar+Colony+Punnai+Nagar+Nagercoil+Tamil+Nadu+629004"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" /></svg>
                </div>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  120, Rajakkamangalam Rd, Thalavaipuram, Ponappanadar Colony, Punnai Nagar, Nagercoil, Tamil Nadu 629004
                </p>
              </motion.a>
              {/* Email */}
              <motion.a
                href="mailto:sidentdentalclinic@gmail.com"
                variants={fadeInUp}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg>
                </div>
                <p className="text-gray-400 mt-1 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  sidentdentalclinic@gmail.com
                </p>
              </motion.a>
              {/* Phone */}
              <motion.div
                variants={fadeInUp}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" /></svg>
                </div>
                <div className="flex flex-col text-gray-400 text-sm leading-relaxed">
                  <a href="tel:+917708833633" className="hover:text-primary transition-colors whitespace-nowrap">+91 77088 33633</a>
                  <a href="tel:04652265633" className="hover:text-primary transition-colors whitespace-nowrap">04652 265633</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-white/5 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SI-Dent. Crafted with excellence.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                Powered by
              </span>
              <a href="https://site.agoo.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/img/footer/agoo_logo.png"
                  alt="Agoo Logo"
                  width={80}
                  height={24}
                  className="h-6 w-auto brightness-75 hover:brightness-100 transition-all"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
          pointerEvents: showScrollTop ? "auto" : "none"
        }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <motion.button
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-title shadow-2xl border border-primary/20 transition-all hover:shadow-primary/20"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
        </motion.button>
      </motion.div>
    </footer>
  );
}

