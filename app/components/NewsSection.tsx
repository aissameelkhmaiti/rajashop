'use client'
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { NewsArticle } from "../types/news";
import { motion } from "framer-motion"; // Ajout de l'import

interface NewsSectionProps {
  articles: NewsArticle[];
}

// Variantes d'animation cohérentes avec le footer
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const NewsSection = ({ articles }: NewsSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setCanScrollLeft(container.scrollLeft > 10);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [articles]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  if (!articles?.length) return null;

  return (
    <section className="py-20 lg:py-28 overflow-hidden" aria-labelledby="news-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 "
        >
          <h2 id="news-title" className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Dernières <span className="text-[#0A400C]">Actualités</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Suivez toute l'actualité du Raja Club Athletic en temps réel.
          </p>
        </motion.header>

        {/* Conteneur Relatif pour les flèches */}
        <div className="relative group">
          
          {/* Flèche Gauche */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 z-30 flex items-center">
              <button
                onClick={() => scroll('left')}
                className="pointer-events-auto ml-2 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="Défiler à gauche"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Flèche Droite */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 z-30 flex items-center justify-end">
              <button
                onClick={() => scroll('right')}
                className="pointer-events-auto mr-2 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
                aria-label="Défiler à droite"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Zone de Scroll Animée */}
          <motion.div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 m-[-1rem] p-[1rem]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {articles.map((article) => (
              <motion.div 
                key={article.id} 
                variants={fadeInUp}
                className="snap-start flex-none w-[85%] sm:w-[45%] lg:w-[calc(33.333%-1rem)]"
              >
                <NewsCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const NewsCard = ({ article }: { article: NewsArticle }) => (
  <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-118 border border-gray-100">
    {/* Conteneur Image */}
    <div className="relative h-70 bg-green-900 overflow-hidden rounded-t-2xl">
      <img 
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      
      <div className="absolute top-4 left-4 z-20">
        <span className="bg-[#0A400C] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          {article.category}
        </span>
      </div>
      
      <div className="absolute bottom-4 left-4 z-20 text-white">
        <time className="text-xs font-medium opacity-90">{article.date}</time>
      </div>
    </div>

    {/* Contenu de la carte */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
        {article.excerpt}
      </p>
      <button className="mt-auto flex items-center text-green-600 font-bold text-sm">
        Lire la suite <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </article>
);