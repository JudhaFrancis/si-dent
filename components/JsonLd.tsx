import React from 'react';

export default function JsonLd() {
  const SITE_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "https://sident.in";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "SI-DENT Dental Clinic",
    "alternateName": "Si-Dent Dental",
    "description": "Advanced Digital Dentistry Clinic in Nagercoil, Tamil Nadu, specializing in Dental Implants, Invisalign, and Digital Smile Design.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/assets/img/header/sident_logo.png`,
    "image": [
      `${SITE_URL}/assets/img/home/about-main.jpg`,
      `${SITE_URL}/assets/img/home/drjosphine.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "120, Rajakkamangalam Rd, Thalavaipuram, Ponappanadar Colony, Punnai Nagar",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.169116,
      "longitude": 77.424360
    },
    "telephone": "+917708833633",
    "additionalTelephone": "04652265633",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Prof. Dr. S.I. Joephin Soundar",
      "jobTitle": "MDS (Prosthodontics)",
      "sameAs": "https://www.instagram.com/joephinsoundar"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Digital Dental Society"
      }
    ],
    "medicalSpecialty": [
      "Prosthodontics",
      "Implantology",
      "Digital Dentistry",
      "Cosmetic Dentistry"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
