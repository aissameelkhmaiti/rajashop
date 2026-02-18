import type { Metadata } from "next";
<<<<<<< HEAD
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
=======
import { Geist, Geist_Mono } from "next/font/google";
>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
import { ThemeProvider } from "./components/ThemeProvider";
import VisitorTracker from "./components/VisitorTracker";

//  Font texte principal
=======
import { ThemeProvider } from "./components/ThemeProvider"; // On importe le provider

>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

<<<<<<< HEAD
//  Font mono (code / chiffres si besoin)
=======
>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

<<<<<<< HEAD
//  Font sportive pour titres football
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

=======
>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
