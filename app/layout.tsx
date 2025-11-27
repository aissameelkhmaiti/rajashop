import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raja Club Athletic - Site Officiel",
  description: "Site officiel du Raja Club Athletic de Casablanca",
};

 

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <Header />
        
     

        {/* Contenu principal */}
        <main className="min-h-screen">{children}</main>
       

       <Footer />
  
      </body>
    </html>
  );
}