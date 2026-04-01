import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { ModalProvider } from "@/context/ModalContext";
import BookingModal from "@/components/BookingModal";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || process.env.API_URL || "https://sident.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL.replace(/\/$/, "")),
  title: {
    default: "SI-DENT | Best Dental Clinic in Nagercoil | Digital Dentistry",
    template: "%s | SI-DENT Dental Clinic"
  },
  description: "Advanced Digital Dentistry in Nagercoil. SI-DENT specializing in Dental Implants, Invisalign Diamond Provider, and AI-driven Smile Design by Prof. Dr. S.I. Joephin Soundar.",
  applicationName: "SI-DENT Dental Clinic",
  keywords: ["Best Dentist Nagercoil", "Dental Implants Nagercoil", "Invisalign Nagercoil", "Digital Smile Design Tamil Nadu", "Root Canal Treatment Nagercoil", "Zirconia Crowns Nagercoil", "Digital Dentistry India"],
  authors: [{ name: "Prof. Dr. S.I. Joephin Soundar" }],
  creator: "SI-DENT",
  publisher: "SI-DENT Dental Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SI-DENT | Advanced Digital Dental Care in Nagercoil",
    description: "Experience the next generation of dentistry with 100% digital workflows and specialist-driven care by Dr. Joephin Soundar.",
    url: SITE_URL,
    siteName: "SI-DENT",
    images: [
      {
        url: "/assets/img/home/about-main.jpg",
        width: 1200,
        height: 630,
        alt: "SI-DENT | Clinical Excellence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SI-DENT | Best Dental Clinic Nagercoil",
    description: "100% Digital Dentistry. Implants, Invisalign & Smile Design.",
    images: ["/assets/img/home/about-main.jpg"],
  },
  icons: {
    icon: "/assets/img/header/sident_neta_logo.png",
    shortcut: "/assets/img/header/sident_neta_logo.png",
    apple: "/assets/img/header/sident_neta_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ModalProvider>
          <JsonLd />
          <ScrollToTop />
          <Header />
          <main>{children}</main>
          <Footer />
          <BookingModal />
        </ModalProvider>
      </body>
    </html>
  );
}