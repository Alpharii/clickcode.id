import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Code, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
    className="relative min-h-[calc(100vh-80px)] pt-24 flex items-center bg-gradient-to-br from-slate-50 to-white px-4 overflow-hidden pb-10"
    >    
    {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[300px] h-[300px] bg-pink-300/30 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Wrapper */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kolom Gambar (Kiri) */}
        <div className="relative w-full h-[400px] mx-auto">
          {/* Gambar Mockup */}
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src="/hero.jpg"
            alt="Website Mockup"
            className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-primary/30"
          />
          {/* Ikon Code Animasi */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute -top-6 -left-6 bg-white shadow-md rounded-full p-3 animate-bounce"
          >
            <Code className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Kolom Teks (Kanan) */}
        <div className="text-left space-y-6">
          {/* Badge */}
          <Badge
            data-aos="fade-right"
            data-aos-delay="200"
            variant="secondary"
            className="px-3 py-1 rounded-full text-sm w-fit flex items-center gap-1"
          >
            <Sparkles className="h-4 w-4 text-yellow-500" />
            Solusi Digital Modern
          </Badge>

          {/* Judul */}
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Bangun Website <span className="text-primary">Profesional</span> & Menarik
          </h1>

          {/* Subjudul */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg text-muted-foreground"
          >
            Tampil beda dengan website berkualitas yang cepat, mobile-friendly, dan mengesankan.
          </p>

          {/* Tombol CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition">
              <a href="/contact" className="flex items-center gap-2">
                Hubungi Kami <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="/services">Lihat Layanan</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;