import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import DoctorProfile from "@/components/home/DoctorProfile";
import Reviews from "@/components/home/Reviews";
import PartnerSlider from "@/components/home/PartnerSlider";
import Expertise from "@/components/home/Expertise";
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