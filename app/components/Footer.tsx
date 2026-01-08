import React from 'react'
import Link from "next/link";
import Image from "next/image";
const navLinks: { title: string; href: string }[] = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/about" },
  { title: "Actualités", href: "/news" },
  { title: "Boutique", href: "/shop" },
  { title: "Contact", href: "/contact" },
];
const Footer = () => {
  return (
    <div>
            {/* Footer */}
        <footer className="  text-white py-12 border-t-4 border-green-600"  style={{ backgroundColor: "#0A400C" }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Section 1 */}
              <div>
                <h3 className="text-xl   mb-4  " style={{ 
      color: '#D4AF37', 
    }}>Raja Club Athletic</h3>
                <p className="text-gray-300">
                  Club légendaire depuis 1949. Fier, Ambitieux, Légendaire.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-xl   mb-4  " style={{ 
      color: '#D4AF37', 
    }}>Liens Rapides</h3>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-green-400 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-xl   mb-4  " style={{ 
      color: '#D4AF37', 
    }}>Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all"
                  >
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all"
                  >
                    <span className="text-white font-bold">𝕏</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all"
                  >
                    <span className="text-white font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-gray-700">
              <p className="text-gray-400">© 2024 Raja Club Athletic. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
