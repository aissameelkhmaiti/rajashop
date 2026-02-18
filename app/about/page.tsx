"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Trophy, Calendar, Heart, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Définition des types pour les variantes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen  ">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-emerald-900">Raja Club Athletic</h1>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <Star fill="#D4AF37" color="#D4AF37" size={28} />
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-emerald-700 mt-2 text-lg font-medium">Club Légendaire • Depuis 1949</p>
      </motion.header>

      {/* History Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-700 to-emerald-900 rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Calendar className="text-amber-400" size={32} />
            Notre Histoire
          </h3>
          <div className="space-y-4 text-emerald-50 text-lg leading-relaxed">
            <p>
              Fondé en <span className="font-bold text-amber-400">1949</span>, le Raja Club Athletic 
              est l'institution qui incarne l'âme du football casablancais.
            </p>
            <p>
              Symbole de résistance et d'excellence, le club a transcendé le sport pour devenir 
              un pilier de la culture marocaine.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, value: "32", label: "Titres Nationaux" },
            { icon: Calendar, value: "75+", label: "Ans d'Histoire" },
            { icon: Users, value: "50K+", label: "Supporters Fidèles" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-emerald-600   transition-shadow"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-emerald-700" />
              <h3 className="text-4xl font-black text-emerald-900 mb-2">{stat.value}</h3>
              <p className="text-emerald-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 pb-20"
      >
        <div className="bg-emerald-900 rounded-3xl p-8 overflow-hidden relative shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="text-red-500 fill-red-500" size={32} />
            </motion.div>
            <h3 className="text-3xl font-bold text-white">L'Ambiance Magana</h3>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-inner bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vRAWl5V8ITM"
              title="Ambiance Raja"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;