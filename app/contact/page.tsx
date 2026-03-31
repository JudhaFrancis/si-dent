import React from "react";
import GlobalHero from "@/components/GlobalHero";
import ContactDetails from "@/components/contact/ContactDetails";
import WorkingHours from "@/components/contact/WorkingHours";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[20%] -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] -right-64 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <GlobalHero 
        span="Get In Touch"
        title={<>Contact <span className="text-primary italic">SI-DENT</span></>}
        subtitle="Have questions about our treatments or want to schedule a visit? We're here to help you achieve your perfect smile."
        breadcrumb={[{ label: "Contact Us", href: "/contact" }]}
      />

      <section className="py-24 -mt-12 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Top Row: Details & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
              <div className="lg:col-span-1 h-full">
                <ContactDetails />
              </div>
              <div className="lg:col-span-2 h-full">
                <ContactForm />
              </div>
            </div>

            {/* Bottom Row: Hours & Map */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
              <div className="lg:col-span-1 h-full">
                <WorkingHours />
              </div>
              <div className="lg:col-span-2 h-full min-h-[450px]">
                <ContactMap />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
