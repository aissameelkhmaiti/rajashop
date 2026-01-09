"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/about" },
  { title: "Actualités", href: "/news" },
  { title: "Boutique", href: "/shop" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Simulation d'un nombre d'articles dans le panier
  const cartCount = 2; 

  useEffect(() => setMounted(true), []);

  return (
    <header className="shadow-lg sticky top-0 z-50 transition-colors duration-300" style={{ backgroundColor: "#0A400C" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* Conteneur du Logo et Titre */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Link href="/" className="inline-block">
              <img
                src="/image-removebg-preview.png"
                alt="Raja Club Athletic"
                className="h-16 lg:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full -z-10"></div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl lg:text-2xl font-bold tracking-tighter uppercase leading-none text-white">
              RCA
            </h1>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green-300 font-medium transition-all duration-300 relative group"
            >
              {link.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Bouton Panier (Desktop) */}
          <Link href="/cart" className="relative p-2 text-[#D4AF37] hover:text-white transition-colors">
            <ShoppingBagIcon className="h-7 w-7" />
            {mounted && cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Bouton Dark Mode */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-green-900 transition-all duration-300"
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}

          <Link
            href="/login"
            className="px-5 py-2 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-green-900 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-900/20"
          >
            Se connecter
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-green-900 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-900/20"
          >
            S'inscrire
          </Link>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 md:hidden">
            {/* Panier Mobile */}
            <Link href="/cart" className="relative p-2 text-[#D4AF37]">
                <ShoppingBagIcon className="h-6 w-6" />
                {mounted && cartCount > 0 && (
                  <span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartCount}
                  </span>
                )}
            </Link>

            {mounted && (
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 text-[#D4AF37] border border-[#D4AF37] rounded-md"
                >
                    {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
            )}
            
            <button
            className="text-white p-2 hover:bg-green-700 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            >
            {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            )}
            </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0A400C] px-4 pb-4 space-y-4 animate-slideDown border-t border-green-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white text-lg font-medium hover:text-green-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <Link
                href="/login"
                className="text-center py-2 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-lg"
                onClick={() => setOpen(false)}
            >
                Login
            </Link>
            <Link
                href="/signup"
                className="text-center py-2 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-lg"
                onClick={() => setOpen(false)}
            >
                Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;