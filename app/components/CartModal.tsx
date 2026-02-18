"use client";
import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay avec backdrop blur */}
      <div
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container - Slide from Right */}
      <div className="fixed right-0 top-0 bottom-0 z-[101] flex items-center pointer-events-none">
        <div 
          className="bg-white dark:bg-zinc-900 rounded-l-3xl shadow-2xl w-full max-w-md h-full p-8 md:p-12 relative pointer-events-auto animate-[slideInRight_0.4s_ease-out] overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton Fermer */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 p-2 rounded-full  hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-200 group z-10"
            aria-label="Fermer"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
          </button>

          {/* Content centered vertically */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Titre */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Votre sac est vide  
            </h2>

          {/* Illustration avec les boîtes cadeaux RCA */}
          <div className="relative h-56 flex items-end justify-center mb-10 overflow-visible">
            {/* Particules décoratives flottantes */}
            <div className="absolute top-6 left-1/4 w-3 h-3 bg-[#D4AF37] rounded-full opacity-70 animate-[float_3s_ease-in-out_infinite]" />
            <div className="absolute top-4 right-1/4 w-2 h-2 bg-[#0A400C] rounded-full opacity-50 animate-[float_4s_ease-in-out_infinite_0.5s]" />
            <div className="absolute top-12 left-1/3 w-2.5 h-2.5 bg-[#D4AF37] rounded-full opacity-60 animate-[float_3.5s_ease-in-out_infinite_1s]" />

            {/* Boîte Gauche */}
            <div 
              className="absolute bottom-0 left-[10%] w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-2xl shadow-lg transform -rotate-12 transition-transform hover:rotate-0 hover:scale-105 duration-300"
              style={{
                border: '2px solid rgba(10, 64, 12, 0.2)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/image-removebg-preview.png" 
                  alt="RCA Logo" 
                  className="h-10 md:h-12 opacity-30 grayscale"
                />
              </div>
              {/* Noeud décoratif */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#0A400C]/20 rounded-t-full" />
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-4 h-4 border-2 border-[#0A400C]/20 rounded-full" />
                <div className="w-4 h-4 border-2 border-[#0A400C]/20 rounded-full" />
              </div>
            </div>

            {/* Boîte Centrale (Principale) */}
            <div className="relative z-10 w-28 h-28 md:w-36 md:h-36">
              <div 
                className="w-full h-full bg-gradient-to-br from-[#0A400C] to-[#0d5a10] rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                style={{
                  border: '4px solid white',
                  boxShadow: '0 20px 60px rgba(10, 64, 12, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                }}
              >
                <img 
                  src="/image-removebg-preview.png" 
                  alt="Raja Club Athletic" 
                  className="h-16 md:h-24 drop-shadow-2xl"
                />
              </div>
              {/* Noeud élaboré */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-white dark:bg-zinc-900 rounded-t-full border-2 border-[#D4AF37]" />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-3">
                <div className="w-6 h-6 border-3 border-[#D4AF37] bg-white dark:bg-zinc-900 rounded-full shadow-lg" />
                <div className="w-6 h-6 border-3 border-[#D4AF37] bg-white dark:bg-zinc-900 rounded-full shadow-lg" />
              </div>
              {/* Brillance */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none" />
            </div>

            {/* Boîte Droite */}
            <div 
              className="absolute bottom-0 right-[10%] w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-lg transform rotate-12 transition-transform hover:rotate-0 hover:scale-105 duration-300"
              style={{
                border: '2px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/image-removebg-preview.png" 
                  alt="RCA Logo" 
                  className="h-10 md:h-12 opacity-25 grayscale"
                />
              </div>
              {/* Noeud décoratif */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#D4AF37]/20 rounded-t-full" />
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-4 h-4 border-2 border-[#D4AF37]/20 rounded-full" />
                <div className="w-4 h-4 border-2 border-[#D4AF37]/20 rounded-full" />
              </div>
            </div>
          </div>

            {/* Bouton CTA */}
            <button
              onClick={onClose}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#0A400C] to-[#0d5a10] hover:from-[#0d5a10] hover:to-[#0A400C] text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-900/30 active:scale-[0.98] relative overflow-hidden group"
            >
              <span className="relative z-10">Continuer vos achats</span>
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};

export default CartModal;