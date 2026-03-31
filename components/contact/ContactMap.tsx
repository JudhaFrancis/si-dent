"use client";

import React from "react";

export default function ContactMap() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] h-full border border-gray-50 relative group">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.336154564883!2d77.41940989999999!3d8.1688647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f147983636f3%3A0xe7f9f2571253457!2sSI-DENT%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-700"
      ></iframe>
      <div className="absolute top-4 right-4 z-10">
        <a 
          href="https://maps.google.com/?q=SI-DENT+Dental+Clinic+120+Rajakkamangalam+Rd+Thalavaipuram+Ponappanadar+Colony+Punnai+Nagar+Nagercoil+Tamil+Nadu+629004"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-title shadow-sm hover:bg-primary hover:text-black transition-all flex items-center gap-2"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
          Open In Google Maps
        </a>
      </div>
    </div>
  );
}
