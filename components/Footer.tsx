"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

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
    <footer className="relative bg-title text-white pt-24 pb-12 overflow-hidden font-body">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/assets/img/bg/footer-bg.png')" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
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
              />
            </Link>
            <p className="text-gray-400 leading-relaxed text-base max-w-xs">
              Providing premium dental solutions with a focus on patient comfort and cutting-edge technology.
            </p>
            <div className="flex gap-5">
              {[
                { icon: "fa-facebook-f", href: "#" },
                { icon: "fa-linkedin-in", href: "#" },
                { icon: "fa-instagram", href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary text-white transition-all duration-300 border border-white/10"
                >
                  <i className={`fab ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-outfit mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              {["Home", "About Us", "Services", "Contact"].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:w-3 group-hover:bg-primary transition-all"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spacer/Services */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
             <h3 className="text-xl font-bold font-outfit mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              {["Teeth Whitening", "Root Canal", "Dental Implants", "Braces"].map(service => (
                <li key={service} className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:w-3 group-hover:bg-primary transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold font-outfit mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-6">
              {[
                { icon: "fa-location-dot", text: "Floor 1, Subash Street, Nagercoil, TN" },
                { icon: "fa-envelope", text: "hello@si-dent.com" },
                { icon: "fa-phone", text: "+91 89034 89173" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <p className="text-gray-400 mt-1 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-white/5 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Si-Dent. Crafted with excellence.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-500 hover:text-primary text-xs uppercase tracking-widest transition-colors font-bold">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary text-xs uppercase tracking-widest transition-colors font-bold">
                Terms of Service
              </Link>
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
          whileHover={{ y: -5, backgroundColor: "#00a8cc" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl border border-white/10"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      </motion.div>
    </footer>
  );
}

