"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
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
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/"
                        className="block text-lg font-medium text-title hover:text-primary transition-colors"
                        onClick={toggleMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className="block text-lg font-medium text-title hover:text-primary transition-colors"
                        onClick={toggleMenu}
                      >
                        Services
                      </Link>
                    </li>
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
              {["Home", "About", "Services", "Our Doctors", "Case Gallery", "Contact"].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "")}`}
                    className={`nav-link font-bold font-outfit uppercase tracking-widest text-xs transition-all duration-300 relative group py-2 ${
                      !isScrolled 
                        ? (item === "Home" ? "text-primary" : "text-white") 
                        : (item === "Home" ? "text-primary" : "text-title")
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      !isScrolled ? "bg-primary w-0" : "bg-primary w-0"
                    }`}></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-4">
              <motion.button
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

