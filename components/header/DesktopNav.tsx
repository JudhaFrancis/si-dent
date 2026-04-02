"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, serviceSubMenu } from "./constants";

interface DesktopNavProps {
  isScrolled: boolean;
  isServicesOpen: boolean;
  setIsServicesOpen: (open: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  checkActive: (href: string) => boolean;
}

export default function DesktopNav({
  isScrolled,
  isServicesOpen,
  setIsServicesOpen,
  dropdownRef,
  checkActive,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
      {navItems.map((item, idx) => {
        const isActive = checkActive(item.href);
        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            {...(item.name === "Services" ? { ref: dropdownRef as any } : {})}
            className="relative"
          >
            {item.name === "Services" ? (
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
                              href={service.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all font-outfit rounded-lg"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`nav-link font-bold font-outfit uppercase tracking-widest text-xs transition-all duration-300 relative group py-2 ${
                  isActive 
                    ? "text-primary" 
                    : (!isScrolled ? "text-white" : "text-title")
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : "w-0"}`}></span>
              </Link>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
}
