import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, Users, Star, Award } from "lucide-react";

export const meta = () => {
  return [
    { title: "About Us - Clickcode" },
    { name: "description", content: "Learn more about Clickcode, our mission, and our team." },
  ];
};

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl top-[-50px] left-[-50px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[300px] h-[300px] bg-green-300/20 rounded-full blur-2xl bottom-[-50px] right-[-50px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <Badge variant="secondary" className="text-sm font-medium">
          <Star className="h-4 w-4 mr-2" />
          Tentang Kami
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Kami Membangun Solusi Digital Modern
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Clickcode didirikan pada tahun 2025 dengan tujuan untuk membantu bisnis tumbuh melalui teknologi digital yang inovatif dan efisien.
        </p>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text */}
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-gray-900">Cerita Kami</h2>
          <p className="text-gray-700">
            Clickcode dimulai sebagai sebuah ide sederhana untuk membantu usaha kecil dan menengah memanfaatkan kekuatan web. Dengan lebih dari 5 tahun pengalaman, kami telah berkembang menjadi mitra terpercaya bagi banyak bisnis dalam menciptakan solusi digital yang inovatif.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />Berpengalaman di industri digital.
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Tim ahli yang berdedikasi dan berpengalaman.
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" /> Komitmen terhadap kepuasan pelanggan.
            </li>
          </ul>
          <Button size="lg" className="bg-primary hover:bg-primary/90 transition">
            <a href="/contact" className="flex items-center gap-2">
              Hubungi Kami <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-[400px]" data-aos="zoom-in" data-aos-delay="300">
          <img
            src="/team.jpg"
            alt="Our Team"
            className="w-full h-full object-cover rounded-xl shadow-2xl ring-2 ring-primary/30"
          />
        </div>
      </div>
    </section>
  );
};

export default About;