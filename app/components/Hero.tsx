"use client"; // Obligatoire pour les animations dans Next.js (App Router)

import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, Variants } from "framer-motion";

/**
 * Configurations des animations (Variants)
 * L'ajout du type : Variants règle l'erreur TypeScript vue sur votre capture d'écran.
 */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre l'apparition de chaque enfant
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section className="relative text-white py-10 lg:py-15 overflow-hidden" style={{ backgroundColor: "#0A400C" }}>
      {/* Background Image avec fondu initial */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <Image src="/coverrr.jpg" alt="Raja Club Athletic Cover" fill className="object-cover" priority />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Section Texte avec Stagger Animation */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.div variants={itemVariants} className="inline-block bg-green-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/20 mb-4">
                <span className="text-green-200 text-sm font-semibold">Club Légendaire • Depuis 1949</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                Raja Club <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">Athletic</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-green-100 font-light max-w-lg mx-auto lg:mx-0">
                Fier, Ambitieux, Légendaire
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 text-[#D4AF37] font-bold border-2 border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-green-900 transition-all duration-300 shadow-lg shadow-yellow-900/20 group"
              >
                <span className="flex items-center">
                  Découvrir le Club <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#064e3b" }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
              >
                Prochain Match
              </motion.button>
            </motion.div>

            



            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto lg:mx-0">
              <StatItem label="Titres" value="32" />
              <StatItem label="Ans d'Histoire" value="75" />
              <StatItem label="Fans" value="50K+" />
            </motion.div>
          </motion.div>

          {/* Section Vidéo avec animation d'entrée spécifique */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HeroVideo />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <motion.div 
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-2xl lg:text-3xl font-bold text-white"
    >
      {value}
    </motion.div>
    <div className="text-green-200 text-sm">{label}</div>
  </div>
);

const HeroVideo = () => (
  <div className="relative mb-20">
    <motion.div 
      whileHover={{ rotate: 0, scale: 1.02 }}
      initial={{ rotate: 2 }}
      className="relative rounded-2xl overflow-hidden transition-transform duration-500 shadow-2xl aspect-video"
    >
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/QHsF9_PqXS4?autoplay=1&mute=1&loop=1" title="Raja CA" frameBorder="0" allowFullScreen></iframe>
    </motion.div>
    
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute -bottom-6 -left-6 bg-white text-green-700 px-6 py-3 rounded-2xl shadow-2xl z-10 mx-25"
    >
      <div className="text-sm font-semibold">Club Officiel</div>
      <div className="text-xs text-gray-600">Depuis 1949</div>
    </motion.div>
  </div>
);