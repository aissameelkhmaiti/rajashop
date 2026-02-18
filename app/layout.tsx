import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import VisitorTracker from "./components/VisitorTracker";

//  Font texte principal
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

//  Font mono (code / chiffres si besoin)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  Font sportive pour titres football
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <VisitorTracker />

          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
