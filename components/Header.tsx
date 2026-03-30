"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

const serviceSubMenu = [
  "Dental Implants",
  "Invisalign Clear Aligners",
  "Digital Smile Design (DSD)",
  "Laser Dentistry",
  "Root Canal Treatment",
  "Teeth Whitening / Bleaching",
  "Veneers & Smile Makeover",
  "CAD-CAM Restorations",
  "Inhouse Aligners & 3D Printing",
  "Full Mouth Rehabilitation",
  "Digital Dentures",
  "Crown & Bridge",
  "General & Preventive Dentistry",
  "Anti-snoring Devices (Sleep Dentistry)",
];

const navItems = ["Home", "About", "Services", "Our Doctors", "Case Gallery", "Contact"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { openBookingModal } = useModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileServicesOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Wrapper */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[99999] flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={toggleMenu}
            ></motion.div>

            {/* Menu Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[300px] h-full bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <button
                  className="absolute top-4 right-4 text-2xl text-title hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="mobile-logo py-6 mb-6 border-b border-gray-100 text-center">
                  <Link href="/" onClick={toggleMenu}>
                    <Image
                      src="/assets/img/sticky/logo.png"
                      alt="Si-Dent"
                      width={150}
                      height={60}
                      className="mx-auto h-16 w-auto"
                    />
                  </Link>
                </div>
                <div className="th-mobile-menu">
                  <ul className="space-y-1">
                    {navItems.map((item) => (
                      <li key={item}>
                        {item === "Services" ? (
                          <>
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="flex items-center justify-between w-full text-lg font-medium text-title hover:text-primary transition-colors py-2"
                            >
                              Services
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2"
                                >
                                  {serviceSubMenu.map((service) => (
                                    <li key={service}>
                                      <Link
                                        href={`#${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                        className="block py-1.5 text-sm text-gray-500 hover:text-primary transition-colors font-outfit"
                                        onClick={toggleMenu}
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "")}`}
                            className="block text-lg font-medium text-title hover:text-primary transition-colors py-2"
                            onClick={toggleMenu}
                          >
                            {item}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 w-full ${
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex h-20 items-center justify-between transition-colors duration-300`}
          >
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="block">
                <Image
                  src="/assets/img/header/sident_logo.png"
                  alt="Si-Dent"
                  width={160}
                  height={48}
                  style={{ 
                    filter: isScrolled ? "brightness(0)" : "none",
                  }}
                  className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
                />
              </Link>
            </motion.div>

            {/* Main Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  {...(item === "Services" ? { ref: dropdownRef } : {})}
                  className="relative"
                >
                  {item === "Services" ? (
                    /* Services with dropdown */
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`nav-link font-bold font-outfit uppercase tracking-widest text-xs transition-all duration-300 relative group py-2 flex items-center gap-1 ${
                          !isScrolled ? "text-white" : "text-title"
                        }`}
                      >
                        Services
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full w-0"></span>
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          >
                            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-4 px-2 w-[680px]">
                              <div className="grid grid-cols-3 gap-x-2">
                                {serviceSubMenu.map((service, i) => (
                                  <Link
                                    key={i}
                                    href={`#${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all font-outfit rounded-lg"
                                  >
                                    {service}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* Regular nav items */
                    <Link
                      href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "")}`}
                      className={`nav-link font-bold font-outfit uppercase tracking-widest text-xs transition-all duration-300 relative group py-2 ${
                        !isScrolled 
                          ? (item === "Home" ? "text-primary" : "text-white") 
                          : (item === "Home" ? "text-primary" : "text-title")
                      }`}
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full w-0"></span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={openBookingModal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden md:block px-6 py-3 rounded-md font-bold transition-all uppercase tracking-wider text-xs ${
                  isScrolled 
                    ? "bg-primary text-white shadow-lg" 
                    : "bg-white text-title shadow-xl hover:bg-primary"
                }`}
              >
                Book Appointment <i className="fa-regular fa-circle-right ml-2 text-sm"></i>
              </motion.button>
              
              {/* Mobile Toggle */}
              <button
                type="button"
                className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                  isScrolled ? "text-title" : "text-white"
                } hover:text-primary`}
                onClick={toggleMenu}
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
