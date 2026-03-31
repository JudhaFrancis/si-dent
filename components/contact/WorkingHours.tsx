"use client";

import React from "react";

const workingHours = [
  { day: "Monday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Tuesday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Wednesday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Thursday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Friday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Saturday", morning: "9:30 AM - 1:00 PM", evening: "4:30 PM - 9:30 PM" },
  { day: "Sunday", morning: "Closed", evening: "" },
];

export default function WorkingHours() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <h3 className="text-2xl font-black text-title font-outfit uppercase tracking-tight flex items-center gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="flex items-center gap-2">
            Working <span className="text-primary">Hours</span>
          </span>
        </h3>
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100/50">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Open Now</span>
        </div>
      </div>

      <div className="space-y-5 flex-grow">
        {workingHours.map((item) => (
          <div key={item.day} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
            <span className="font-bold text-sm tracking-widest uppercase text-title font-outfit">{item.day}</span>
            <div className="flex flex-col sm:items-end mt-1 sm:mt-0">
              <span className={`text-xs font-bold font-outfit ${item.morning === "Closed" ? "text-red-500" : "text-gray-600"}`}>
                {item.morning}
              </span>
              {item.evening && (
                <span className="text-xs font-bold font-outfit text-gray-500">
                  {item.evening}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-2xl border border-primary/10">
        <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
          <span className="font-bold text-primary italic uppercase mr-1">Note:</span>
          Emergency cases are attended to beyond these hours upon prior appointment.
        </p>
      </div>
    </div>
  );
}
