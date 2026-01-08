import React from 'react';
import { Users, Trophy, Calendar, Heart, MapPin, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen  "  style={{ backgroundColor: "#0A400C" }}>
      {/* Header */}
      <header className="  shadow-lg border-b-4 border-green-500"  style={{ backgroundColor: "#0A400C" }}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-white">Raja Club Athletic</h1>
            <div className="flex gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
            </div>
          </div>
          <p className="text-green-300 mt-2 text-lg">Club Légendaire • Depuis 1949</p>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fier, Ambitieux, Légendaire
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Plus qu'un club, une passion qui unit des millions de supporters à travers le monde. 
            Le Raja Club Athletic incarne l'excellence, la tradition et l'esprit combatif du football marocain.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-green-400/30 hover:border-green-400 transition-all">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">32</h3>
            <p className="text-green-200 text-lg">Titres Nationaux</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-green-400/30 hover:border-green-400 transition-all">
            <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">75+</h3>
            <p className="text-green-200 text-lg">Ans d'Histoire</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-green-400/30 hover:border-green-400 transition-all">
            <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2">50K+</h3>
            <p className="text-green-200 text-lg">Supporters Fidèles</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-red-500 fill-red-500" size={32} />
            <h3 className="text-3xl font-bold text-white">L'Ambiance Légendaire du Raja</h3>
          </div>
          <p className="text-green-100 mb-6 text-lg">
            Découvrez la passion incomparable de nos supporters, les Green Boys, qui font vibrer 
            chaque match et transforment notre stade en forteresse.
          </p>
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-black/30">
            <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/vRAWl5V8ITM"
  title="Ambiance Raja Club Athletic"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Calendar className="text-yellow-400" size={32} />
            Notre Histoire
          </h3>
          <div className="space-y-4 text-green-100 text-lg leading-relaxed">
            <p>
              Fondé en <span className="text-yellow-400 font-bold">1949</span>, le Raja Club Athletic 
              de Casablanca est l'un des clubs les plus titrés et respectés du continent africain.
            </p>
            <p>
              Avec ses couleurs emblématiques vert et blanc, le Raja a su conquérir le cœur de millions 
              de supporters à travers le Maroc et le monde entier. Le club symbolise la fierté marocaine, 
              l'excellence sportive et des valeurs de solidarité et de combativité.
            </p>
            <p>
              Champions du Maroc à de nombreuses reprises, vainqueurs de la Ligue des Champions de la CAF, 
              le Raja continue d'écrire les plus belles pages du football marocain et africain.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Star className="text-yellow-400 fill-yellow-400" size={32} />
            Nos Valeurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-800/30 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Excellence</h4>
              <p className="text-green-100">
                Nous visons l'excellence dans chaque match, chaque entraînement, chaque action pour 
                honorer nos couleurs et nos supporters.
              </p>
            </div>
            <div className="bg-green-800/30 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Passion</h4>
              <p className="text-green-100">
                La passion est notre moteur. Elle unit nos joueurs, notre staff et nos millions de 
                supporters dans un même élan de fierté.
              </p>
            </div>
            <div className="bg-green-800/30 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Tradition</h4>
              <p className="text-green-100">
                Nous honorons notre riche histoire tout en construisant l'avenir du football marocain 
                et africain.
              </p>
            </div>
            <div className="bg-green-800/30 rounded-lg p-6 border border-green-500/30">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Solidarité</h4>
              <p className="text-green-100">
                Le Raja, c'est une grande famille unie par des valeurs de respect, de fraternité et 
                d'entraide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className=" py-12 border-t-4 border-green-500"  style={{ backgroundColor: "#0A400C" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Rejoignez la Famille du Raja
          </h3>
          <p className="text-green-200 text-lg mb-6">
            Vivez la passion du football marocain et africain
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Devenir Membre
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg border border-green-400 transition-colors">
              Boutique Officielle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;