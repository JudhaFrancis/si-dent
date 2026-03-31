import React from "react";
import GlobalHero from "@/components/GlobalHero";
import CaseGalleryClient from "@/components/gallery/CaseGalleryClient";

export const metadata = {
  title: "Case Gallery | SI-DENT Dental Clinic",
  description: "View our successful dental cases and informational posters at SI-DENT Dental Clinic.",
};

export default function CaseGalleryPage() {
  const cases = [
    "case-1 .jpg", "case-10 .jpg", "case-11 .jpg", "case-12.jpg", "case-13.jpg",
    "case-14.jpg", "case-15.jpg", "case-16.jpg", "case-17.jpg", "case-18.jpg",
    "case-19.jpg", "case-2 .jpg", "case-20.jpg", "case-3 .jpg", "case-4 .jpg",
    "case-5 .jpg", "case-6 .jpg", "case-7 .jpg", "case-8 .jpg", "case-9 .jpg"
  ];

  const posters = [
    "433317295_817921883686970_2683627596838321354_n.jpg",
    "434119408_820132686799223_2684372326905610951_n.jpg",
    "434485321_832679488877876_6208532901980749383_n.jpg",
    "437694571_835738041905354_7037465379446274360_n.jpg",
    "441029164_845937307552094_2058435072999693788_n.jpg",
    "441067185_845311234281368_5844799194614341335_n.jpg",
    "441196038_850543867091438_5418948377957230126_n.jpg",
    "441307478_848597233952768_3532823422706908159_n.jpg",
    "444893432_859808409498317_5451443329323858446_n.jpg",
    "445241925_862881545857670_8574391366110877606_n.jpg",
    "463299179_959510306194793_7369444391779133013_n.jpg",
    "463406409_959510946194729_1382072987071424296_n.jpg",
    "463596283_959502229528934_2162292182004812753_n.jpg",
    "463596559_959488389530318_3549239210769827696_n.jpg",
    "463622142_959507742861716_9140739954171444326_n.jpg",
    "463661450_959491326196691_315678764561302581_n.jpg",
    "463666352_959496059529551_6256605823190775974_n.jpg",
    "463717886_959498609529296_830916239446723418_n.jpg",
    "463746091_959504879528669_2787422960801347480_n.jpg",
    "463756801_959485696197254_6605392094991350022_n.jpg"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[30%] -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <GlobalHero 
        span="Our Success Stories"
        title={<>Case <span className="text-primary italic">Gallery</span></>}
        subtitle="Explore our portfolio of transformed smiles and informative dental care posters."
        breadcrumb={[{ label: "Case Gallery", href: "/case-gallery" }]}
      />
      
      <CaseGalleryClient cases={cases} posters={posters} />
      
      {/* Social Links Section */}
      {/* Social Links Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        {/* Background Decorative Graphic */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/10 rounded-tl-full blur-2xl pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-title font-outfit uppercase mb-4 tracking-tight">
                Discover More on Our <span className="text-primary italic font-medium lowercase">Socials</span>
            </h3>
            <p className="text-gray-500 mb-12 text-lg font-medium">Follow us for real-time updates, patient stories, and dental tips.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
               <a href="https://www.instagram.com/joephinsoundar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-gray-100 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-brands fa-instagram text-sm text-pink-500"></i>
                  </div>
                  <span className="font-bold text-title font-outfit uppercase tracking-wider text-xs pr-2">Instagram</span>
               </a>
               
               <a href="https://www.facebook.com/sident/photos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-gray-100 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-brands fa-facebook-f text-sm text-blue-600"></i>
                  </div>
                  <span className="font-bold text-title font-outfit uppercase tracking-wider text-xs pr-2">Facebook</span>
               </a>
               
               <a href="https://www.youtube.com/@sidentdentalclinic3624/videos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-6 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md border border-gray-100 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fa-brands fa-youtube text-sm text-red-600"></i>
                  </div>
                  <span className="font-bold text-title font-outfit uppercase tracking-wider text-xs pr-2">YouTube</span>
               </a>
            </div>
        </div>
      </section>
    </div>
  );
}
