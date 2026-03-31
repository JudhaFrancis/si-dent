import React from "react";
import GlobalHero from "@/components/GlobalHero";
import AboutClinic from "@/components/about/AboutClinic";
import AboutInvisalign from "@/components/about/AboutInvisalign";

export const metadata = {
  title: "About Us | SI-DENT Dental Clinic - Advanced Digital Dentistry",
  description: "Learn about SI-DENT Dental Clinic,founded and led by Prof. Dr. S.I. Joephin Soundar. Experience 100% digital dentistry in Nagercoil, Tamil Nadu, specialized in Invisalign, implants, and 3D smile design.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <GlobalHero 
        span="Our Legacy & Innovation"
        title={<>Defining Digital <span className="text-primary italic">Dentistry</span></>}
        subtitle="Pioneering technology-driven dental care with a 100% digital workflow."
        breadcrumb={[{ label: "About Us", href: "/about" }]}
      />
      <AboutClinic />
      <AboutInvisalign />
    </div>
  );
}
