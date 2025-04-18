import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS Swiper
import "swiper/css/navigation"; // Import Navigation module
import "swiper/css/pagination"; // Import Pagination module
import "swiper/css/autoplay"; // Import Autoplay module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const meta = () => {
  return [
    { title: "Portfolio - Clickcode" },
    { name: "description", content: "Lihat contoh proyek nyata yang telah kami selesaikan untuk berbagai industri." },
  ];
};

const PortfolioPage = () => {
  // State untuk filter kategori
  const [activeFilter, setActiveFilter] = useState("all");

  // Data proyek dengan beberapa gambar per proyek
  const projects = [
    {
      id: 1,
      title: "Toko Online Modern",
      category: "e-commerce",
      description: "Website e-commerce untuk toko fashion modern.",
      images: ["/project1.jpg", "/project1-2.jpg", "/project1-3.jpg"], // Beberapa gambar
      link: "#",
    },
    {
      id: 2,
      title: "Startup Teknologi",
      category: "startup",
      description: "Platform inovatif untuk startup teknologi.",
      images: ["/project2.jpg", "/project2-2.jpg", "/project2-3.jpg"],
      link: "#",
    },
    {
      id: 3,
      title: "Blog Pribadi",
      category: "blog",
      description: "Blog pribadi untuk penulis konten kreatif.",
      images: ["/project3.jpg", "/project3-2.jpg", "/project3-3.jpg"],
      link: "#",
    },
    {
      id: 4,
      title: "Website Perusahaan",
      category: "corporate",
      description: "Website profesional untuk perusahaan manufaktur.",
      images: ["/project4.jpg", "/project4-2.jpg", "/project4-3.jpg"],
      link: "#",
    },
    {
      id: 5,
      title: "Restoran Online",
      category: "e-commerce",
      description: "Sistem pemesanan online untuk restoran lokal.",
      images: ["/project5.jpg", "/project5-2.jpg", "/project5-3.jpg"],
      link: "#",
    },
  ];

  // Filter proyek berdasarkan kategori
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Portofolio Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Lihat contoh proyek nyata yang telah kami selesaikan untuk berbagai industri.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto px-4 mt-8 flex justify-center gap-4 relative z-10">
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("all")}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Semua
        </Button>
        <Button
          variant={activeFilter === "e-commerce" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("e-commerce")}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          E-commerce
        </Button>
        <Button
          variant={activeFilter === "blog" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("blog")}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Blog
        </Button>
        <Button
          variant={activeFilter === "corporate" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("corporate")}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Corporate
        </Button>
        <Button
          variant={activeFilter === "startup" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter("startup")}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Startup
        </Button>
      </div>

      {/* Projects Slider */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // 1 slide di mobile
          breakpoints={{
            768: {
              slidesPerView: 2, // 2 slides di tablet
            },
            1024: {
              slidesPerView: 3, // 3 slides di desktop
            },
          }}
          navigation // Tombol navigasi (panah kiri dan kanan)
          pagination={{ clickable: true }} // Pagination (bulatan di bawah slider)
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay setiap 3 detik
          loop={true} // Aktifkan loop agar slider berputar terus
          className="portfolio-slider"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition">
                {/* Image Slider */}
                <div className="relative w-full h-48">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="image-slider"
                  >
                    {project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <Button size="sm" asChild>
                    <a href={project.link} className="flex items-center gap-2">
                      Lihat Proyek <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioPage;