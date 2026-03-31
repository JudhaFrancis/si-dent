import React from "react";
import GlobalHero from "@/components/GlobalHero";
import Image from "next/image";

export const metadata = {
  title: "Our Specialists | SI-DENT Dental Clinic",
  description: "Meet the expert dental specialists at SI-DENT Dental Clinic, led by Prof. Dr. S.I. Joephin Soundar.",
};

const TEAM = [
  {
    name: "Dr. S Aspin Divya",
    degrees: "BDS",
    specialty: "General Dental Surgeon",
    image: "aspin.png",
  },
  {
    name: "Prof. Dr. J Mano Christine Angelo",
    degrees: "MDS",
    specialty: "Consultant Endodontics",
    image: "Dr-J-Mano-Christine-Angelo.png",
  },
  {
    name: "Dr. Jeswin Thomas",
    degrees: "MDS",
    specialty: "Pedodontist",
    image: "Dr-Jes.png",
  },
  {
    name: "Dr. Renganath M.J.",
    degrees: "MDS",
    specialty: "Periodontist | Gum Specialist | Zygomatic Implant Expert",
    image: "Dr-Renganath.png",
  },
  {
    name: "Dr. K Gomakumar",
    degrees: "MDS",
    specialty: "Oral Pathologist",
    image: "Dr-Goma.png",
  },
  {
    name: "Dr. RC Neil Anand",
    degrees: "MDS, FOMS",
    specialty: "Maxillofacial Surgeon",
    image: "Dr-neil.png",
  },
  {
    name: "Dr. P Leevan Paul",
    degrees: "MDS",
    specialty: "Orthodontist",
    image: "Dr-Leevan.png",
  },
  {
    name: "Dr. S Veerasankar",
    degrees: "MDS",
    specialty: "Orthodontist | Invisalign Certified Specialist",
    image: "Dr-Veerasankar.png",
  }
];

export default function OurDoctorsPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GlobalHero
        span="Expert Care & Precision"
        title={<>Meet Our <span className="text-primary italic">Specialists</span></>}
        subtitle="A dedicated team of experts delivering world-class, painless digital dentistry."
        breadcrumb={[{ label: "Our Doctors", href: "/our-doctors" }]}
      />

      {/* Chief Surgeon Section - Premium Masterpiece Redesign */}
      <section className="py-24 relative bg-gray-50/30 border-b border-gray-100 overflow-hidden">
        {/* Soft Background Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative overflow-hidden">

            {/* Content Block */}
            <div className="flex-1 w-full text-center lg:text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/10 to-transparent rounded-full mb-8 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[#b48641] font-bold text-[11px] uppercase tracking-[0.2em] pr-2">
                  Clinical Director & Chief Surgeon
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#111111] font-outfit leading-[1.1] tracking-tight mb-4">
                Prof. Dr. S.I. Joephin Soundar
              </h3>

              <span className="inline-block bg-gradient-to-r from-[#d4af37] to-[#b48641] bg-clip-text text-transparent text-2xl font-black font-inter tracking-wider mb-10">
                M.D.S.
              </span>

              {/* Premium Attributes List */}
              <div className="space-y-6 text-left w-full max-w-lg mx-auto lg:mx-0">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-tooth text-primary text-sm"></i>
                  </div>
                  <div>
                    <p className="text-[#334155] font-bold text-lg leading-snug">Prosthodontist & Implantologist</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">Expert in full-mouth rehabilitation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-award text-primary text-sm"></i>
                  </div>
                  <div>
                    <p className="text-[#334155] font-bold text-lg leading-snug">Digital Aesthetic Mastership (Egypt)</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">International certification in digital smiles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-building-columns text-primary text-[13px]"></i>
                  </div>
                  <div>
                    <p className="text-[#334155] font-bold text-lg leading-snug">HOD, Digital Dentistry</p>
                    <p className="text-sm text-gray-500 mt-1 font-medium">At Rajas Dental College & Hospital.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Frame Image - Premium Card */}
            <div className="relative w-full max-w-[420px] lg:w-[460px] aspect-[4/5] flex-shrink-0 mx-auto">
              <div className="absolute inset-0 bg-[#E8E8EC] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 group">
                <Image
                  src="/assets/img/doctors/drjosphine.jpg"
                  alt="Prof Dr SI Joephin Soundar MDS"
                  fill
                  className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialist Team Grid */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">MULTIDISCIPLINARY EXPERTISE</span>
            <h3 className="text-3xl md:text-4xl font-black text-title font-outfit uppercase">
              Our <span className="text-primary italic font-medium lowercase">Specialists</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">A highly skilled team covering all facets of modern digital dentistry.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {TEAM.map((doctor, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-gray-50/80 p-8 rounded-[30px] border border-gray-100/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group">

                {/* Floating Image */}
                <div className="relative w-56 h-56 xl:w-60 xl:h-60 mx-auto rounded-full shadow-md bg-black overflow-hidden transition-all duration-500 mb-6">
                  <Image
                    src={`/assets/img/doctors/${doctor.image}`}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Text Content */}
                <h4 className="text-xl font-black text-title font-outfit mb-3 group-hover:text-primary transition-colors">
                  {doctor.name}
                </h4>
                <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full mb-4 group-hover:border-primary/20 transition-colors">
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest">{doctor.degrees}</span>
                </div>
                <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                  {doctor.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="pb-24 pt-0">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-[#171717] px-8 py-10 md:px-16 md:py-12 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden">
            <h3 className="text-[17px] md:text-lg font-medium text-white/95 font-outfit leading-relaxed italic">
              "Our philosophy is to combine advanced digital technology with profound clinical expertise, ensuring every patient receives precisely tailored, painless, and world-class dental care."
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
