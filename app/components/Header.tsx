"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/about" },
  { title: "Actualités", href: "/news" },
  { title: "Boutique", href: "/shop" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-lg" style={{ backgroundColor: "#0A400C" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

      {/* Conteneur du Logo et Titre */}
<div className="flex items-center gap-4">
  {/* Logo */}
  <div className="relative group">
    <img 
      src="/image-removebg-preview.png" 
      alt="Raja Club Athletic" 
      className="h-16 lg:h-20 w-auto transform group-hover:scale-110 transition-transform duration-300" 
    />
    {/* Petit éclat lumineux derrière le logo (optionnel) */}
    <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full -z-10"></div>
  </div>

  {/* Titre avec dégradé Vert & Or */}
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

         <Link
  href="/login"
  className="px-5 py-2 text-[#C5A028] font-bold border-2 border-[#C5A028] rounded-lg hover:bg-[#C5A028] hover:text-green-900 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-900/20"
>
  Se connecter
</Link>

<Link
  href="/signup"
  className="px-5 py-2 text-[#C5A028] font-bold border-2 border-[#C5A028] rounded-lg hover:bg-[#C5A028] hover:text-green-900 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-900/20"
>
  S'inscrire
</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 hover:bg-green-700 rounded-lg transition-colors"
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
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0A400C] px-4 pb-4 space-y-4 animate-slideDown">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white text-lg font-medium hover:text-green-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <hr className="border-green-700" />

          <Link
            href="/login"
            className="block text-white text-lg font-medium border border-green-500 px-4 py-2 rounded-lg text-center hover:bg-green-500 transition-all"
            onClick={() => setOpen(false)}
          >
            Se connecter
          </Link>

          <Link
            href="/signup"
            className="block text-white text-lg font-medium border border-green-500 px-4 py-2 rounded-lg text-center hover:bg-green-500 transition-all"
            onClick={() => setOpen(false)}
          >
            S'inscrire
          </Link>

        </div>
      )}
    </header>
  );
};

export default Header;
