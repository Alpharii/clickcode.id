import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { Loader2 } from "lucide-react";
import About from "../components/About";
import ServicesPage from "~/components/Services";
import PortfolioPage from "~/components/Portfolio";
import TestimonialPage from "~/components/Testimonial";
import TechStackPage from "~/components/Techstack";
import ContactPage from "~/components/Contact";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "ClickCode.id - Jasa Pembuatan Website Modern | Harga Terjangkau" },
    { name: "description", content: "Kami menyediakan jasa pembuatan website modern dengan harga terjangkau. Dapatkan desain profesional, responsif, dan SEO-friendly di ClickCode.id." },
    { name: "keywords", content: "clickcode, jasa pembuatan website, website cms murah, clickcode id, pembuatan website profesional, website murah" },
    { property: "og:title", content: "ClickCode.id - Jasa Pembuatan Website Modern" },
    { property: "og:description", content: "Kami menyediakan jasa pembuatan website modern dengan harga terjangkau. Dapatkan desain profesional, responsif, dan SEO-friendly di ClickCode.id." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://clickcode.id" },
    { name: "twitter:title", content: "ClickCode.id - Jasa Pembuatan Website Modern" },
    { name: "twitter:description", content: "Kami menyediakan jasa pembuatan website modern dengan harga terjangkau. Dapatkan desain profesional, responsif, dan SEO-friendly di ClickCode.id." },
  ];
};

// Fungsi untuk memuat aset (misalnya gambar)
const loadAssets = async () => {
  const assets = [
    "/hero.jpg", // Gambar di HeroSection
    "/logo.png", // Logo di Navbar
    "/team.jpg"
  ];

  // Memuat setiap gambar sebagai Promise
  const loadImage = (src: string) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });

  // Menunggu semua gambar selesai dimuat
  await Promise.all(assets.map(loadImage));
};

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memuat semua aset
    loadAssets()
      .then(() => {
        setLoading(false); // Set loading menjadi false setelah semua aset dimuat
      })
      .catch((error) => {
        console.error("Error loading assets:", error);
        setLoading(false); // Tetap set loading ke false jika ada error
      });
  }, []);

  return (
    <div>
      {/* Loading Screen */}
      {loading ? (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white max-w-screen">
        <Loader2 className="animate-spin h-12 w-12 text-primary sm:h-10 sm:w-10 mb-4" />
        <p className="text-gray-600 text-lg sm:text-base text-center">
          Memuat halaman...
        </p>
        <p className="text-gray-500 text-sm sm:text-xs mt-2 text-center">
          Jasa pembuatan website modern dengan harga terjangkau.
        </p>
      </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <ServicesPage />
          <PortfolioPage />
          <TestimonialPage />
          <TechStackPage />
          <ContactPage />
          <Footer />
        </>
      )}
    </div>
  );
}