"use client"; // Obligatoire pour Framer Motion

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Ajout de l'import

interface ShopFeatureProps {
  text: string;
}

// Animation pour les points de liste
const ShopFeature = ({ text }: ShopFeatureProps) => (
  <motion.li 
    variants={{
      hidden: { opacity: 0, x: -10 },
      visible: { opacity: 1, x: 0 }
    }}
    className="flex items-center"
  >
    <div className="w-2 h-2 bg-green-900 rounded-full mr-3" />
    <span className="text-gray-600">{text}</span>
  </motion.li>
);

export const ShopSection = () => {
  return (
    <section className="py-20  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Animé */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Boutique <span className="text-[#0A400C]">Officielle</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soutenez le club avec les derniers maillots et produits dérivés.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Côté Gauche: Visuel Produit (Arrive de la gauche) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-green-600 to-emerald-800 flex flex-col items-center justify-center relative">
                
                {/* Overlay Texte */}
                <div className="absolute top-16 text-white text-center z-10">
                  <div className="text-xl font-medium opacity-90">Maillot Domicile 2026</div>
                </div>

                {/* Image du produit avec animation flottante légère */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-4/5 h-4/5 mt-12"
                >
                  <Image
                    src="/34_25_11zon.png" 
                    alt="Maillot Officiel Raja CA 2024"
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity" />
          </motion.div>

          {/* Côté Droit: Détails et CTA (Arrive de la droite avec stagger) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Nouvelle Collection 2026</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Découvrez la dernière collection officielle du Raja Club Athletic. 
                Maillots, accessoires et produits dérivés conçus pour les vrais supporters.
              </p>
            </motion.div>

            <motion.ul className="space-y-4">
              <ShopFeature text="Maillots officiels saison 2025/2026" />
              <ShopFeature text="Produits exclusifs en édition limitée" />
              <ShopFeature text="Livraison sécurisée partout au Maroc" />
            </motion.ul>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link 
                href="/shop"
                className="group bg-green-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-900 transition-all shadow-lg hover:shadow-green-900/20 flex items-center justify-center border-2 border-transparent hover:border-green-900"
              >
                <span>Explorer la Boutique</span>
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/shop/new"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-white transition-all text-center hover:border-[#D4AF37]"
              >
                Nouveautés
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};