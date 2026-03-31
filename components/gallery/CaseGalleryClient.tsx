"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseGalleryClient({ cases, posters }: { cases: string[], posters: string[] }) {
  const [activeTab, setActiveTab] = useState<"cases" | "posters">("cases");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-gray-50 border border-gray-100 p-1 rounded-full relative shadow-sm">
            {["cases", "posters"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative z-10 px-6 py-2.5 rounded-full font-bold text-[11px] tracking-wider uppercase transition-colors duration-300 border-2 ${activeTab === tab ? "text-white border-transparent" : "text-gray-500 hover:text-title border-transparent"}`}
              >
                {tab === "cases" ? "Clinical Cases" : "Educational Posters"}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${activeTab === "posters" ? "xl:grid-cols-3 max-w-5xl mx-auto" : ""}`}
          >
            {activeTab === "cases" && cases.map((file, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(`/assets/img/gallery/cases/${file}`)}
                className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 bg-gray-50 aspect-square border border-gray-100 inset-0 cursor-pointer"
              >
                 <Image
                   src={`/assets/img/gallery/cases/${file}`}
                   alt={`Dental Case ${idx + 1}`}
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            ))}
            
            {activeTab === "posters" && posters.map((file, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(`/assets/img/gallery/posters/${file}`)}
                className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-50 aspect-[4/5] border border-gray-100 cursor-pointer"
              >
                 <Image
                   src={`/assets/img/gallery/posters/${file}`}
                   alt={`Educational Poster ${idx + 1}`}
                   fill
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-6xl h-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Expanded View"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
