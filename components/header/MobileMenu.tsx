"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { serviceSubMenu, navItems } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  checkActive: (href: string) => boolean;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (open: boolean) => void;
  openBookingModal: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  checkActive,
  mobileServicesOpen,
  setMobileServicesOpen,
  openBookingModal,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onClose}
          ></motion.div>

          {/* Menu Content */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-[320px] max-w-[85vw] h-full bg-white shadow-2xl flex flex-col"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header with Logo */}
              <div className="p-8 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white relative">
                <button
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-title hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-gray-100"
                  onClick={onClose}
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
                <div className="flex flex-col items-center justify-center pt-4">
                  <Link href="/" onClick={onClose} className="block group">
                    <Image
                      src="/assets/img/header/sident_logo.png"
                      alt="Si-Dent"
                      width={180}
                      height={60}
                      style={{ filter: "brightness(0)" }}
                      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
                    Digital Dentistry
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow p-6">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = checkActive(item.href);
                    const icon = item.name === "Home" ? "fa-house" :
                                 item.name === "About" ? "fa-user-doctor" :
                                 item.name === "Services" ? "fa-tooth" :
                                 item.name === "Our Doctors" ? "fa-stethoscope" :
                                 item.name === "Facilities" ? "fa-hospital" :
                                 item.name === "Case Gallery" ? "fa-images" :
                                 item.name === "Contact" ? "fa-envelope" : "fa-link";

                    return (
                      <li key={item.name}>
                        {item.name === "Services" ? (
                          <div className="py-2">
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className={`flex items-center justify-between w-full p-3 rounded-xl text-md font-semibold transition-all duration-300 ${
                                mobileServicesOpen ? "bg-primary/5 text-primary" : "text-title hover:bg-gray-50"
                              }`}
                            >
                              <span className="flex items-center gap-4">
                                <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${mobileServicesOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}>
                                  <i className={`fa-solid ${icon} text-sm`}></i>
                                </span>
                                {item.name}
                              </span>
                              <svg
                                className={`w-4 h-4 transition-transform duration-500 ${mobileServicesOpen ? "rotate-180 text-primary" : "text-gray-400"}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
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
                                  transition={{ duration: 0.4, ease: "circOut" }}
                                  className="overflow-hidden mt-1 ml-4 pl-8 border-l border-gray-100"
                                >
                                  {serviceSubMenu.map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        href={service.href}
                                        className="block py-2.5 text-sm font-medium text-gray-500 hover:text-primary transition-colors font-outfit relative group"
                                        onClick={onClose}
                                      >
                                        <span className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`flex items-center gap-4 p-3 rounded-xl text-md font-semibold transition-all duration-300 my-1 ${
                              isActive 
                                ? "bg-primary text-white shadow-md shadow-primary/20" 
                                : "text-title hover:bg-gray-50"
                            }`}
                            onClick={onClose}
                          >
                            <span className={`w-8 h-8 flex items-center justify-center rounded-lg ${isActive ? "bg-white/20" : "bg-gray-100 text-gray-500"}`}>
                              <i className={`fa-solid ${icon} text-sm`}></i>
                            </span>
                            {item.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-primary">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Call for appointment</p>
                      <a href="tel:+917708833633" className="text-title font-bold hover:text-primary transition-colors">+91 77088 33633</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <a href="https://www.facebook.com/sident/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-sm text-title hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/joephinsoundar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-sm text-title hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCnHJYNaP7oqerPYIZSmOwAA" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-sm text-title hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>

                  <button 
                    onClick={() => { onClose(); openBookingModal(); }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    BOOK APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
