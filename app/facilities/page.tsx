import React from "react";
import GlobalHero from "@/components/GlobalHero";

export const metadata = {
  title: "Digital Dental Facilities | SI-DENT Dental Clinic",
  description: "Explore the world-class digital dental facilities at SI-DENT Dental Clinic in Nagercoil, featuring OPG, 5D scanners, laser dentistry, and 3D printing.",
};

export default function FacilitiesPage() {
  const highlights = [
    { title: "Fully Digital Clinic", desc: "Advanced end-to-end digital workflow.", icon: "fa-laptop-medical" },
    { title: "OPG & Digital X-Ray", desc: "For accurate and precise diagnosis.", icon: "fa-x-ray" },
    { title: "5D Intraoral Scanners", desc: "AI-Based treatment planning integration.", icon: "fa-microscope" },
    { title: "Digital Smile Design", desc: "Powered by NemoSmile 3D technology.", icon: "fa-face-smile" },
    { title: "In-House 3D Printing", desc: "Custom aligner and surgical guide fabrication.", icon: "fa-cubes" },
    { title: "CAD-CAM Milling", desc: "Upcoming rare in-house milling unit.", icon: "fa-cogs" },
    { title: "Laser Dentistry", desc: "Pain-free procedures and teeth whitening.", icon: "fa-wand-magic-sparkles" },
    { title: "German Dental Units", desc: "Premium imported units for ultimate comfort.", icon: "fa-chair" },
    { title: "B-Class Autoclave", desc: "International complete sterilization standards.", icon: "fa-shield-virus" },
    { title: "Guided Implant Surgery", desc: "Predictable digital workflow systems.", icon: "fa-tooth" },
    { title: "Paperless Records", desc: "Premium, seamless patient experience.", icon: "fa-file-invoice" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <GlobalHero
        span="Infrastructure & Innovation"
        title={<>World-Class Digital <span className="text-primary italic">Facilities</span></>}
        subtitle="Experience cutting-edge technology and precision at our advanced dental center."
        breadcrumb={[{ label: "Facilities", href: "/facilities" }]}
      />

      {/* Intro Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">THE DIGITAL ADVANTAGE</span>
            <h2 className="text-3xl md:text-5xl font-black text-title font-outfit uppercase leading-tight tracking-tight mt-4">
              Pioneering Digital <br className="hidden md:block" /> <span className="text-primary italic font-medium lowercase">Dentistry</span> in Nagercoil
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed font-inter font-medium pt-4">
              SI-DENT Dental Clinic stands as one of the most advanced digital dental clinics in Nagercoil and South Tamil Nadu, equipped with cutting-edge technology to deliver precision, comfort, and predictable results. Designed as a fully digital, patient-centric dental center, our infrastructure combines innovation with clinical excellence under the leadership of Prof. Dr. S.I. Joephin Soundar, MDS.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">CORE HIGHLIGHTS</span>
            <h3 className="text-3xl md:text-4xl font-black text-title font-outfit uppercase">Our Facility Features</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">Comprehensive, state-of-the-art diagnostic and treatment tools under one roof.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(209,160,84,0.12)] border border-gray-50 hover:border-primary/30 transition-all duration-500 group flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:-translate-y-2 transition-all duration-500 border border-primary/10">
                  <i className={`fa-solid ${item.icon} text-2xl text-primary group-hover:text-white transition-colors duration-500`}></i>
                </div>
                <h4 className="text-lg font-bold text-title font-outfit mb-3 group-hover:text-primary transition-colors flex-grow">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section - Professional Grid */}
      <section className="py-24 relative bg-gray-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-3xl md:text-4xl font-black text-title font-outfit uppercase">
              The <span className="text-primary italic font-medium lowercase">SI-DENT</span> Difference
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              A fully integrated digital dental environment designed for precision, safety, and ultimate comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Block 1 */}
            <div className="bg-white p-10 border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                <i className="fa-solid fa-microscope text-2xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold text-title font-outfit mb-4 uppercase">Advanced Diagnostics</h4>
              <p className="text-gray-600 leading-relaxed font-inter">
                We offer advanced diagnostic facilities including <strong className="text-title font-bold">OPG (panoramic X-ray)</strong> and digital radiography, ensuring accurate diagnosis with minimal radiation. Our clinic is powered by German-imported dental treatment units, delivering superior ergonomics and patient comfort. With strict infection control protocols, we maintain international standards using a <strong className="text-title font-bold">B-Class digital autoclave</strong> (SkyDent) and a dedicated sterilization zone.
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-10 border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                <i className="fa-solid fa-tooth text-2xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold text-title font-outfit mb-4 uppercase">Complete Digital Workflow</h4>
              <p className="text-gray-600 leading-relaxed font-inter">
                At the core of our practice is complete digital dentistry, featuring <strong className="text-title font-bold">intraoral scanners, 5D scanning technology</strong>, AI-based treatment planning, and Digital Smile Design using <strong className="text-title font-bold">NemoSmile 3D</strong>—allowing patients to visualize outcomes before treatment. Our advanced laser units enable painless procedures and laser teeth whitening, ensuring faster healing and improved comfort.
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-10 border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                <i className="fa-solid fa-print text-2xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold text-title font-outfit mb-4 uppercase">In-House Production</h4>
              <p className="text-gray-600 leading-relaxed font-inter">
                SI-DENT is among the few clinics in India equipped with <strong className="text-title font-bold">in-house 3D printing and aligner fabrication</strong>, providing faster, customized orthodontic and surgical solutions. With an upcoming <strong className="text-title font-bold">CAD-CAM milling unit</strong>, we are moving towards a fully integrated in-house digital lab, enabling same-day restorations with unmatched precision and efficiency.
              </p>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-10 border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                <i className="fa-solid fa-star text-2xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold text-title font-outfit mb-4 uppercase">Premium Extras</h4>
              <p className="text-gray-600 leading-relaxed font-inter">
                Additional premium facilities include <strong className="text-title font-bold">DSLR dental photography</strong> for case documentation, digital shade matching systems, guided implant surgery planning software (NemoScan & Exocad), facial analysis integration, and chairside patient education systems. Our clinic also supports <strong className="text-title font-bold">paperless digital records</strong>, uninterrupted power backup, and a premium patient comfort environment.
              </p>
            </div>
          </div>

          <div className="mt-24 text-center max-w-3xl mx-auto bg-[#171717] p-10 md:p-14 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-primary/10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/90 rounded-[14px] flex items-center justify-center shadow-lg -rotate-12">
              <i className="fa-solid fa-quote-left text-lg text-white"></i>
            </div>
            <p className="text-[15px] md:text-[16px] font-semibold text-white/95 leading-loose font-outfit mt-4">
              If you are searching for the best dental clinic in <span className="text-primary font-bold">Nagercoil</span> with advanced facilities, digital dentistry technology, OPG, laser treatment, 3D printing, CAD-CAM, Invisalign, and AI‑based treatment planning, <span className="font-black uppercase">SI-DENT DENTAL CLINIC</span> offers unmatched innovation, precision, and excellence in modern dentistry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
