import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // On importe le provider

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
    // suppressHydrationWarning est nécessaire pour éviter les erreurs de console avec next-themes
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#051a06] transition-colors duration-300`}>
        
        {/* Le ThemeProvider enveloppe tout le contenu */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <Header />
          
          {/* Contenu principal */}
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}