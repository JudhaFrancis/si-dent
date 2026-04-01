"use client";

import React from "react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Our Location",
    content: "120, Rajakkamangalam Rd, Thalavaipuram, Ponappanadar Colony, Punnai Nagar, Nagercoil, Tamil Nadu 629004",
    link: "https://maps.google.com/?q=SI-DENT+Dental+Clinic+120+Rajakkamangalam+Rd+Thalavaipuram+Ponappanadar+Colony+Punnai+Nagar+Nagercoil+Tamil+Nadu+629004",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Address",
    content: "sidentdentalclinic@gmail.com",
    link: "mailto:sidentdentalclinic@gmail.com",
  },
  {
    icon: (
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" /></svg>
      </div>
    ),
    title: "Phone Number",
    content: (
      <div className="flex flex-col text-gray-400 text-sm leading-relaxed">
        <a href="tel:+917708833633" className="hover:text-primary transition-colors whitespace-nowrap">+91 77088 33633</a>
        <a href="tel:04652265633" className="hover:text-primary transition-colors whitespace-nowrap">04652 265633</a>
      </div>
    ),
    link: "tel:+917708833633", // Primary link
  },
];

const socialMedia = [
  {
    name: "Facebook",
    icon: <i className="fa-brands fa-facebook-f"></i>,
    link: "https://www.facebook.com/sident/",
    color: "hover:bg-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: <i className="fa-brands fa-instagram"></i>,
    link: "https://www.instagram.com/joephinsoundar",
    color: "hover:bg-[#E4405F]",
  },
  {
    name: "YouTube",
    icon: <i className="fa-brands fa-youtube"></i>,
    link: "https://www.youtube.com/channel/UCnHJYNaP7oqerPYIZSmOwAA",
    color: "hover:bg-[#FF0000]",
  },
];

export default function ContactDetails() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 h-full flex flex-col">
      <h3 className="text-2xl font-black text-title font-outfit uppercase tracking-tight mb-8">
        Contact <span className="text-primary">Details</span>
      </h3>
      <div className="space-y-6 flex-grow">
        {contactDetails.map((detail, idx) => {
          const isPhone = detail.title === "Phone Number";
          
          const CardContent = (
            <>
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                {detail.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-[10px] font-black text-title uppercase tracking-[0.2em] mb-1.5 font-outfit opacity-80">
                  {detail.title}
                </h4>
                <div className="text-gray-600 text-sm leading-tight transition-colors font-outfit font-bold">
                  {detail.content}
                </div>
              </div>
            </>
          );

          return (
            <motion.div
              key={idx}
              className="p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {isPhone ? (
                <div className="flex items-start gap-5">
                  {CardContent}
                </div>
              ) : (
                <a 
                  href={detail.link} 
                  target={detail.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-5"
                >
                  {CardContent}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 pt-10 border-t border-gray-100">
        <h4 className="text-xs font-black text-title uppercase tracking-widest mb-6 font-outfit">Follow Our Journey</h4>
        <div className="flex gap-4">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-title transition-all duration-500 hover:text-white hover:-translate-y-2 shadow-sm ${social.color}`}
            >
              {social.name === "Facebook" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
              )}
              {social.name === "Instagram" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
              )}
              {social.name === "YouTube" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
