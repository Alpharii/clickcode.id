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
    { title: "ClickCode.id" },
    { name: "ClickCode.id", content: "Jasa Pembuatan Website Modern Dengan Harga Terjangkau" },
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
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
          <Loader2 className="animate-spin h-12 w-12 text-primary mb-4" />
          <p className="text-gray-600 text-lg">Memuat halaman...</p>
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