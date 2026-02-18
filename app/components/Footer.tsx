"use client"; // Obligatoire pour les animations avec Framer Motion
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/about" },
  { title: "Actualités", href: "/news" },
  { title: "Boutique", href: "/shop" },
  { title: "Contact", href: "/contact" },
];

const partners = [
  { name: "Marsa Maroc", logo: "/Marsamaroc-logo.png" },
  { name: "Coca Cola", logo: "/Coca-Cola_logo.svg.png" },
  { name: "Changan", logo: "/changan.png" },
  { name: "Anker", logo: "/Anker_logo.svg.png" },
];

const payments = [
  { name: "Visa", logo: "/Visa_Inc._logo.svg" },
  { name: "Mastercard", logo: "/Mastercard-logo.svg" },
  { name: "CMI", logo: "/cmicard.png" },
  { name: "Maestro", logo: "/Maestro_Logo.svg" },
];

// Variantes pour les animations d'entrée
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Footer = () => {
  return (
    <footer className="text-white py-12 mt-4 border-t-4" style={{ 
      backgroundColor: "#0A400C",
        
    }}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- SECTION PARTENAIRES --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer} // Changé pour permettre le stagger des enfants
          className="pb-12 border-b border-white/10"
        >
          <motion.p variants={fadeInUp} className="text-center text-xs uppercase tracking-[0.2em] mb-8 text-gray-400 font-medium">
            Nos Partenaires Officiels
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp} // Animation d'entrée pour chaque logo
                whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                className="relative w-24 h-12 md:w-32 md:h-16 opacity-60  transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- SECTION INFOS --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12"
        >
          {/* Club */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl mb-4 font-bold" style={{ color: '#D4AF37' }}>
              Raja Club Athletic
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Club légendaire depuis 1949. <br />
              Fier, Ambitieux, Légendaire.
            </p>
          </motion.div>

          {/* Liens */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl mb-4 font-bold" style={{ color: '#D4AF37' }}>
              Liens Rapides
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4AF37] hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl mb-4 font-bold" style={{ color: '#D4AF37' }}>
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              {['f', '𝕏', 'in'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: "#D4AF37", color: "#0A400C" }}
                  className="w-10 h-10 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center transition-colors"
                >
                  <span className="font-bold">{social}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- SECTION BAS DE PAGE --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.div variants={fadeInUp} className="text-gray-400 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} Raja Club Athletic. Tous droits réservés.
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-4 order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 mr-2">Paiement sécurisé</span>
            {payments.map((method, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} // Animation d'entrée pour chaque icône de paiement
                whileHover={{ scale: 1.2 }}
                className="relative w-12 h-8 opacity-80"
              >
                <Image
                  src={method.logo}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;