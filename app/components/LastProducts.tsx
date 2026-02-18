"use client";

import React, { useState, useEffect } from 'react';
import api from "../api/axios";
import { Heart, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Ajout de l'import

interface Product {
  id: number;
  name: string;
  price: string;
  category: { name: string };
}

// Variantes pour les animations d'entrée
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const LatestProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await api.get("/products?page=1");
        
        let productsData = [];
        if (res.data.data && Array.isArray(res.data.data)) {
          productsData = res.data.data;
        } else if (res.data.data && Array.isArray(res.data.data.data)) {
          productsData = res.data.data.data;
        }

        setProducts(productsData.slice(0, 4));
      } catch (err) {
        console.error("Erreur chargement nouveautés", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatest();
  }, []);

  const toggleFavorite = (product: Product) => {
    console.log(`Ajouté aux favoris: ${product.name}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="animate-spin text-[#0A400C]" size={40} />
      </div>
    );
  }

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la section avec animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex justify-between items-end  mb-10"
        >
          <header className="mb-12  ">
            <h2 id="news-title" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Nos <span className="text-[#0A400C]">Nouveautés</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Découvrez les derniers articles arrivés en boutique
            </p>
          </header>
          <Link 
            href="/shop" 
            className="hidden md:flex items-center gap-2 text-[#0A400C] font-bold hover:gap-3 transition-all"
          >
            Voir toute la boutique <ArrowRight size={20} />
          </Link>
        </motion.div>
        

        {/* Grille des produits avec Staggering */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={fadeInUp}
              className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              {/* Image & Badge */}
              <div className="h-full relative overflow-hidden">
                <img 
                  src="https://www.oneallsports.com/cdn/shop/products/White_top_centre_logos_44b51523-b047-45b2-988f-67b150f46b02.png?format=jpg&v=1668163936&width=1800" 
                  alt={product.name}
                  className="h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase bg-[#0A400C] text-white px-3 py-1 rounded-full">
                    Nouveau
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-1">{product.name}</h3>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#0A400C]">{product.price}</span>
                    <span className="text-xs font-bold text-gray-500">MAD</span>
                  </div>

                  <button 
                    onClick={() => toggleFavorite(product)}
                    className="p-2.5 rounded-full bg-white text-[#0A400C] hover:text-red-600 shadow-sm border border-gray-100 transition-colors"
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton mobile avec animation d'entrée */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:hidden"
        >
          <Link 
            href="/shop" 
            className="block w-full text-center py-4 bg-[#0A400C] text-white rounded-xl font-bold"
          >
            Voir toute la boutique
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProducts;