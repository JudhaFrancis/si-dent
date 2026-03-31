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

export const metadata: Metadata = {
  title: "Si-Dent | Dental Clinic",
  description: "Advanced Dental Care with a personal touch.",
  icons: {
    icon: "/assets/img/header/sident_neta_logo.png",
    shortcut: "/assets/img/header/sident_neta_logo.png",
    apple: "/assets/img/header/sident_neta_logo.png",
  },
};

import { ModalProvider } from "@/context/ModalContext";
import BookingModal from "@/components/BookingModal";
import ScrollToTop from "@/components/ScrollToTop";

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