"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import MobileToggle from "./MobileToggle";

export default function Header() {
  const pathname = usePathname();
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

  const checkActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && href.startsWith("/") && pathname === href) return true;
    return false;
  };

  return (
    <>
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={toggleMenu} 
        pathname={pathname}
        checkActive={checkActive}
        mobileServicesOpen={mobileServicesOpen}
        setMobileServicesOpen={setMobileServicesOpen}
        openBookingModal={openBookingModal}
      />

      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 w-full ${
          isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between transition-colors duration-300">
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
                    width: 'auto',
                  }}
                  className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <DesktopNav 
              isScrolled={isScrolled}
              isServicesOpen={isServicesOpen}
              setIsServicesOpen={setIsServicesOpen}
              dropdownRef={dropdownRef}
              checkActive={checkActive}
            />

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
                Book Appointment
              </motion.button>
              
              <MobileToggle isScrolled={isScrolled} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
