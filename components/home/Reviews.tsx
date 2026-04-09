"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "I had a root canal done about 6 months ago and it has been set very well. The tooth feels strong and completely normal with no issues so far. Although it felt a bit costly at the time, the quality of treatment made it absolutely worth it. Very satisfied with the outcome.",
    author: "Aasmi Raja Sekar",
    tag: "Quality Care",
    rating: 5
  },
  {
    text: "Exceptionally good care. Outstanding professionalism. Caring and understanding staff. Very clean environment. Good ambiance. I will strongly recommend Dr. Joephin for all your dental work ups including anesthetic, implants and crowns etc",
    author: "Livingston Easwaradhas",
    tag: "Highly Recommended",
    rating: 5
  },
  {
    text: "We underwent treatments for my children. My daughter had a decayed tooth in front and she hesitates to open her mouth while smiling but after Dr 's wonderful treatment she smiles beautifully without any regrets. My son too had some troubles with the tooth underwent root canal in another clinic and some more issues. Really the treatment is of excellent quality and price worthy. Really thankful",
    author: "Jasmine Gowth",
    tag: "Excellent Results",
    rating: 5
  },
  {
    text: "Very good doctor, very nice front desk helpers. I can form Canada and they helped me get all the necessary treatments before I had to go back the doctor along side the front desk helpers assisted us to make sure we could complete it in our journey. The doctor is a humble and honest man. Definitely recommend",
    author: "Haniel Lordwin",
    tag: "Professional Service",
    rating: 5
  },
  {
    text: "best dental doctors, both wife and husband. they provided the strongest caps for the root-canal treatment. best place for all dental issues in Nagercoil",
    author: "prasad gudipudi",
    tag: "Expert Doctors",
    rating: 5
  },
  {
    text: "Doctor was very kind courteous friendly and very knowledgeable.his wife is very kind and knowledgeable about the treatment and a good explainer.all the staffs are kind courteous and friendly.The doctor and the employee's are very professional.totally I had awesome experience.thank you all.",
    author: "Vanaj Patrick",
    tag: "Awesome Experience",
    rating: 5
  },
  {
    text: "Nice Hospitality, Quick in identifying issues, Suggesting better remedies, No harm to pockets unless or otherwise required, Economically good and Technically advanced treatment, best follow-ups and reviews, Service upto the satisfaction of the deserved.  Keep it up.,,👍👍 …",
    author: "Paulwin Ebenezer",
    tag: "Advanced Treatment",
    rating: 5
  },
  {
    text: "Excellent world class service. Highly advanced equipments. I came from Canada for vacation to my hometown Nagercoil and received a good smile transformation at a reasonable cost. Thanks to S.I DENT clinic .",
    author: "Antonette Rhea",
    tag: "World Class Service",
    rating: 5
  },
  {
    text: "I visited SI-Dent Dental Clinic recently and was thoroughly impressed with the service.Friendly atmosphere and clean environment.Fully satisfied with all dental procedures.",
    author: "Lekshmi Mohan.J",
    tag: "Fully Satisfied",
    rating: 5
  },
  {
    text: "My recent experience with SI-Dent Dental Clinic, Nagercoil for  removal and  restoring of the teeth was very good. Very  systematic procedure and hygienic atmosphere with nominal charges. I thank the Doctor and staff members for their whole hearted support.",
    author: "Krishnan Ramaswamy",
    tag: "Hygienic Atmosphere",
    rating: 5
  }
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <span className="text-primary text-[9px] uppercase tracking-[0.5em] font-black">Patient Satisfaction</span>
              <h2 className="text-2xl sm:text-3xl font-black text-title font-outfit uppercase tracking-tight leading-tight">
                Authentic <span className="text-primary italic">Experiences</span>
              </h2>
              <div className="flex items-center justify-center gap-2 pt-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-primary text-[10px]"></i>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-title uppercase tracking-widest pl-2 border-l border-gray-200">5.0 Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Card */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative group">
                  {/* Quote Icon */}
                  <div className="absolute -top-5 left-10 w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20">
                    <i className="fa-solid fa-quote-left text-white text-base"></i>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-primary text-[10px]"></i>
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-base sm:text-lg font-bold text-title leading-relaxed italic mb-8 font-outfit px-2">
                      &quot;{testimonials[index].text}&quot;
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Verified</span>
                      </div>
                      <h4 className="text-title font-black text-lg uppercase tracking-tight">{testimonials[index].author}</h4>
                      <p className="text-primary font-bold text-[9px] uppercase tracking-widest">{testimonials[index].tag}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-title hover:bg-primary hover:text-white transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </button>

            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    index === i ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-title hover:bg-primary hover:text-white transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
