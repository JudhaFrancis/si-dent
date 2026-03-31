"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface GlobalHeroProps {
  span?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  bgImage?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function GlobalHero({ span, title, subtitle, bgImage, breadcrumb }: GlobalHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-title overflow-hidden min-h-[450px] flex items-center">
      {/* Background Image with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover opacity-30 select-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-title via-title/70 to-title z-10"></div>
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-20"></div>

      <div className="container mx-auto px-4 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {span && (
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-black">
              {span}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 font-outfit uppercase tracking-tight leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg font-medium font-inter"
            >
              {subtitle}
            </motion.p>
          )}

          <nav className="flex items-center justify-center gap-3 mt-8 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
            {breadcrumb ? (
              breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-gray-700">/</span>
                  <Link href={item.href} className="text-primary">{item.label}</Link>
                </React.Fragment>
              ))
            ) : (
                <>
                    <span className="text-gray-700">/</span>
                    <span className="text-primary">Services</span>
                </>
            )}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
