"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 h-full">
      <h3 className="text-3xl font-black text-title font-outfit uppercase tracking-tight mb-2">
        Send Us A <span className="text-primary">Message</span>
      </h3>
      <p className="text-gray-500 mb-10">We usually respond within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-title ml-1 font-outfit flex items-center gap-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-outfit text-sm"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-title ml-1 font-outfit">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-outfit text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-title ml-1 font-outfit flex items-center gap-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-outfit text-sm"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-[0.2em] text-title ml-1 font-outfit">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formState.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-outfit text-sm"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-black uppercase tracking-[0.2em] text-title ml-1 font-outfit flex items-center gap-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-outfit text-sm resize-none"
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-10 py-5 bg-primary hover:bg-primary/90 text-black font-black rounded-2xl shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-xs flex items-center justify-center gap-3 group"
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-2xl text-center font-bold text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
      </form>
    </div>
  );
}
