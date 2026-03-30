"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function BookingModal() {
  const { isBookingModalOpen, closeBookingModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingModalOpen]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,15}$/.test(formData.mobile.replace(/[\s-+]/g, ""))) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowToast(true);
    setFormData({ name: "", mobile: "", email: "", message: "" });
    
    // Close modal after showing toast
    setTimeout(() => {
      setShowToast(false);
      closeBookingModal();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeBookingModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-title border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 sm:p-10">
                <button
                  onClick={closeBookingModal}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-8">
                  <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight mb-2">
                    Book <span className="text-primary italic ml-3">Appointment</span>
                  </h2>
                  <p className="text-gray-400 text-sm">Fill in the details below to schedule your visit.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-tight ml-1">{errors.name}</p>}
                  </div>

                  {/* Mobile & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className={`w-full bg-white/5 border ${errors.mobile ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                      />
                      {errors.mobile && <p className="text-red-500 text-[10px] uppercase font-bold tracking-tight ml-1">{errors.mobile}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold tracking-tight ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="How can we help you?"
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold tracking-tight ml-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-black py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        Confirm Booking
                        <svg className="w-4 h-4 translate-y-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100000] bg-white text-title px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-primary/20 min-w-[320px]"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Booking Sent Successfully!</p>
              <p className="text-gray-500 text-xs">We'll contact you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
