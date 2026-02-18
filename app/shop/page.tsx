<<<<<<< HEAD
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import api from "../api/axios";
// Remplacement de ShoppingCart par Heart
import { Heart, ChevronRight, Loader2, ChevronLeft } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// --- Interfaces ---
interface Category {
  id: number | string;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  category: { name: string };
}

interface PaginationMeta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

const ShopContent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCatId, setSelectedCatId] = useState<number | string>("Tous");
  const [loading, setLoading] = useState(true);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta | null>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const catRes = await api.get("/categories");
        setCategories([{ id: "Tous", name: "Tous" }, ...catRes.data.data]);
        await fetchProducts("Tous", currentPage);
      } catch (err) {
        console.error("Erreur d'initialisation", err);
      }
    };
    loadInitialData();
  }, []);

  const fetchProducts = async (catId: number | string, page: number = 1) => {
    setLoading(true);
    try {
      const url = catId === "Tous" 
        ? `/products?page=${page}` 
        : `/products/category/${catId}?page=${page}`;
      
      const res = await api.get(url);
      
      let productsData = [];
      let metaData = null;
      
      if (res.data.data && Array.isArray(res.data.data)) {
        productsData = res.data.data;
        metaData = res.data.meta || res.data;
      } else if (Array.isArray(res.data)) {
        productsData = res.data;
      } else if (res.data.data && Array.isArray(res.data.data.data)) {
        productsData = res.data.data.data;
        metaData = res.data.data;
      }
      
      setProducts(productsData);
      
      if (metaData && metaData.current_page) {
        setPaginationMeta({
          current_page: metaData.current_page,
          last_page: metaData.last_page,
          per_page: metaData.per_page,
          total: metaData.total
        });
      }
    } catch (err) {
      console.error("Erreur lors du filtrage", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handleCategoryClick = (id: number | string) => {
    setSelectedCatId(id);
    updateUrl(1);
    fetchProducts(id, 1);
  };

  const handlePageChange = (page: number) => {
    updateUrl(page);
    fetchProducts(selectedCatId, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nouvelle fonction pour les favoris
  const toggleFavorite = (product: Product) => {
    console.log(`Produit ajouté aux favoris : ${product.name}`);
    // Ici vous pouvez ajouter votre logique de stockage (LocalStorage ou API)
  };

  return (
    <div className="min-h-screen  ">
      <header className="mx-10 py-10">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
          Boutique <span className="text-green-600">Officielle</span>
        </h2>
        <p className="text-xl text-gray-600">
          Soutenez le club avec les derniers maillots et produits dérivés
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 shadow-sm border-2 
                ${selectedCatId === cat.id 
                  ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A400C] scale-105 shadow-md" 
                  : "bg-[#0A400C] border-[#0A400C] text-white hover:bg-white hover:text-[#0A400C] hover:shadow-lg active:scale-95"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

                   {/* Pagination Controls */}
            {paginationMeta && paginationMeta.last_page > 1 && (
              <div className="flex justify-end items-end gap-2 mt-12 mb-16">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                    currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0A400C] text-white hover:bg-[#0d5a10] shadow-md'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {[...Array(paginationMeta.last_page)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`w-10 h-10 rounded-lg font-bold transition-all ${
                          currentPage === pageNumber
                            ? 'bg-[#D4AF37] text-[#0A400C] shadow-md scale-110'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === paginationMeta.last_page}
                  className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                    currentPage === paginationMeta.last_page ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#0A400C] text-white hover:bg-[#0d5a10] shadow-md'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#0A400C]">
            <Loader2 className="animate-spin mb-4" size={48} />
            <p className="font-bold text-xl">Mise à jour de la boutique...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
                >
                  <div className="h-full relative overflow-hidden">
                    <img 
                      src="https://www.oneallsports.com/cdn/shop/products/White_top_centre_logos_44b51523-b047-45b2-988f-67b150f46b02.png?format=jpg&v=1668163936&width=1800" 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold uppercase bg-white/90 backdrop-blur-sm text-green-900 px-4 py-1.5 rounded-full shadow-sm">
                        {product.category.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-green-600 font-semibold mb-2">● En stock</p>
                    <h3 className="font-bold text-gray-900 text-xl leading-tight mb-2 line-clamp-2">{product.name}</h3>
                    
                    <div className="mt-auto pt-4">
                      <div className="flex items-center justify-between">
                        {/* Prix à gauche */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-[#0A400C]">{product.price}</span>
                          <span className="text-sm font-bold text-gray-500">MAD</span>
                        </div>

                        {/* Bouton Favoris à droite */}
                        <button 
                          onClick={() => toggleFavorite(product)}
                          className="p-3 rounded-full bg-gray-100 text-[#0A400C] hover:bg-red-50 hover:text-red-600 transition-all duration-300 active:scale-90 shadow-sm border border-gray-100"
                          title="Ajouter aux favoris"
                        >
                          <Heart size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </>
        )}
      </main>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>}>
      <ShopContent />
    </Suspense>
  );
}
=======
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
>>>>>>> 63ce3b61e0af74118e6782b36c3436fce3e9d03e
