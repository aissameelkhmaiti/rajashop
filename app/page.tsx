import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export default function Home() {
  const news: NewsArticle[] = [
    {
      id: 1,
      title: "Victoire Éclatante en Championnat",
      excerpt: "Le Raja s'impose 3-0 lors du derby avec une performance historique de l'équipe.",
      category: "Match",
      date: "15 Nov 2024",
    },
    {
      id: 2,
      title: "Signature d'un Nouveau Talent",
      excerpt: "Le club annonce l'arrivée d'un prometteur international pour renforcer l'effectif.",
      category: "Transfert",
      date: "12 Nov 2024",
    },
    {
      id: 3,
      title: "Préparation Prochain Match",
      excerpt: "L'équipe s'entraîne dur en vue de la prochaine rencontre décisive en coupe.",
      category: "Entraînement",
      date: "10 Nov 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Améliorée */}
      <section
        className="relative text-white py-10 lg:py-15 overflow-hidden"
        style={{ backgroundColor: "#0A400C" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte Hero */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-green-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/20 mb-4">
                  <span className="text-green-200 text-sm font-semibold">
                    Club Légendaire • Depuis 1949
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                  Raja Club
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
                    Athletic
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-green-100 font-light max-w-lg mx-auto lg:mx-0">
                  Fier, Ambitieux, Légendaire
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center justify-center">
                    Découvrir le Club
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Prochain Match
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white">32</div>
                  <div className="text-green-200 text-sm">Titres</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white">75</div>
                  <div className="text-green-200 text-sm">Ans d'Histoire</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white">50K+</div>
                  <div className="text-green-200 text-sm">Fans</div>
                </div>
              </div>
            </div>

            {/* Image Hero */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/image-removebg-preview.png"
                  alt="Raja Club Athletic - Équipe Légendaire"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white text-green-700 px-6 py-3 rounded-2xl shadow-2xl">
                <div className="text-sm font-semibold">Club Officiel</div>
                <div className="text-xs text-gray-600">Depuis 1949</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Dernières <span className="text-green-600">Actualités</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Restez informé des dernières nouvelles et performances du club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-700 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm opacity-90">{article.date}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Lire la suite
                    <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
              Voir toutes les actualités
            </button>
          </div>
        </div>
      </section>

      {/* Section Boutique */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Boutique <span className="text-green-600">Officielle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soutenez le club avec les derniers maillots et produits dérivés
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-2xl font-bold mb-4">
                      Maillot Domicile 2024
                    </div>
                    <div className="text-3xl font-black">Raja CA</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gray-900">
                Nouvelle Collection 2024
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Découvrez la dernière collection officielle du Raja Club
                Athletic. Maillots, accessoires et produits dérivés conçus pour
                les vrais supporters.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Maillots officiels saison 2024
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Produits exclusifs limités
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Livraison gratuite au Maroc
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Explorer la Boutique</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-green-600 hover:text-green-700 transition-all duration-300">
                  Nouveautés
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
