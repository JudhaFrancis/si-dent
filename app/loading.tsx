import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Skeleton (Matching the bg and height) */}
      <section className="relative min-h-[90vh] bg-black/90 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center animate-pulse">
          <div className="h-16 w-3/4 mx-auto bg-white/10 rounded-full mb-8"></div>
          <div className="h-12 w-1/4 mx-auto bg-primary/20 rounded-full"></div>
        </div>
        {/* Pulsing indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10"></div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 animate-pulse">
            <div className="lg:w-1/2 space-y-6">
              <div className="h-10 w-2/3 bg-gray-100 rounded-lg"></div>
              <div className="h-4 w-full bg-gray-50 rounded"></div>
              <div className="h-4 w-full bg-gray-50 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-50 rounded"></div>
            </div>
            <div className="lg:w-1/2 h-[500px] w-full bg-gray-50 rounded-3xl"></div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Skeleton (Dark Placeholder) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 animate-pulse">
            <div className="lg:w-1/2 h-[600px] w-full bg-white/5 rounded-2xl"></div>
            <div className="lg:w-1/2 space-y-8">
              <div className="h-12 w-3/4 bg-white/10 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-2/3 bg-white/5 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Skeleton (Light Mode Card) */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center animate-pulse">
          <div className="h-10 w-1/3 mx-auto bg-gray-200 rounded-lg mb-12"></div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="h-6 w-full bg-gray-200/60 rounded-full"></div>
            <div className="h-6 w-5/6 mx-auto bg-gray-200/60 rounded-full"></div>
            <div className="h-6 w-4/6 mx-auto bg-gray-200/60 rounded-full"></div>
          </div>
          <div className="mt-12 h-4 w-24 mx-auto bg-primary/10 rounded-full"></div>
        </div>
      </section>

      {/* Logo Slider Skeleton */}
      <section className="py-20 border-y border-gray-100 bg-slate-50">
        <div className="container mx-auto px-4 animate-pulse flex justify-between gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 w-32 bg-gray-200/50 rounded-lg shrink-0"></div>
          ))}
        </div>
      </section>

      {/* Services Skeleton */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-8 h-64 bg-gray-50 rounded-2xl border border-gray-100"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
