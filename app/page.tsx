import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import DoctorProfile from "@/components/home/DoctorProfile";
import Reviews from "@/components/home/Reviews";
import PartnerSlider from "@/components/home/PartnerSlider";
import Expertise from "@/components/home/Expertise";
export const metadata = {
  title: "Best Dental Clinic in Nagercoil | SI-DENT Advanced Digital Care",
  description: "Experience the best dental care in Nagercoil at SI-DENT. Specializing in Dental Implants, Invisalign, and Digital Smile Design with a 100% digital workflow.",
};

// This is now a Server Component by default (no "use client")
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PartnerSlider />
      <DoctorProfile />
      <Expertise />
      <Reviews />
    </div>
  );
}