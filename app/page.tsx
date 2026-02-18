import { Metadata } from "next";
import { Hero } from "./components/Hero";
import { NewsSection } from "./components/NewsSection";
import { ShopSection } from "./components/ShopSection";
import { NewsArticle } from "./types/news";
import { LatestProducts } from "./components/LastProducts"

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    title: "Victoire Éclatante en Championnat",
    excerpt: "Le Raja s'impose 3-0 lors du derby avec une performance historique de l'équipe.",
    category: "Match",
    date: "15 Nov 2024",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000", // Image stade/foot
  },
  {
    id: 2,
    title: "Signature d'un Nouveau Talent",
    excerpt: "Le club annonce l'arrivée d'un prometteur international pour renforcer l'effectif.",
    category: "Transfert",
    date: "12 Nov 2024",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000", // Image transfert/joueur
  },
  {
    id: 3,
    title: "Préparation Prochain Match",
    excerpt: "L'équipe s'entraîne dur en vue de la prochaine rencontre décisive en coupe.",
    category: "Entraînement",
    date: "10 Nov 2024",
    image: "https://sport.le360.ma/resizer/v2/4ZOMEQXRXJP5TPQ2I47DIJ6QX4.jpg?auth=6a268a7c2a1117c948f8aef6a74120273dd24600721aa8df912450bd7f49f459&smart=true&width=1216&height=684", // Image entraînement
  },
  {
    id: 4,
    title: "Ambiance des Supporters",
    excerpt: "Les fans préparent un tifo exceptionnel pour le prochain match à domicile.",
    category: "Club",
    date: "09 Nov 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl22NmWA4spCx0FTOx4uJd3nHW2vnAYpL78A&s",
  },
  {
    id: 5,
    title: "Académie du Raja",
    excerpt: "Les jeunes pousses du club brillent lors du tournoi international U17.",
    category: "Formation",
    date: "08 Nov 2024",
    image: "https://images.unsplash.com/photo-1518005020480-478a11285bc2?q=80&w=1000",
  },
  {
    id: 6,
    title: "Conférence de Presse",
    excerpt: "L'entraîneur fait le point sur l'état de l'infirmerie avant le déplacement.",
    category: "Médias",
    date: "07 Nov 2024",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000",
  },
  {
    id: 7,
    title: "Nouveau Partenariat",
    excerpt: "Le club signe un contrat majeur pour le développement des infrastructures.",
    category: "Business",
    date: "06 Nov 2024",
    image: "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=1000",
  },
];

export const metadata: Metadata = {
  title: "Raja Club Athletic | Site Officiel",
  description: "Bienvenue sur le site officiel du Raja Club Athletic.",
};

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <h1 className="sr-only">Raja Club Athletic - Accueil</h1>
      <Hero />
      <NewsSection articles={NEWS_DATA} />
      <LatestProducts />
      <ShopSection />
    </main>
  );
}