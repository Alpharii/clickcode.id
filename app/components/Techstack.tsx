import { Card } from "~/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS Swiper
import "swiper/css/autoplay"; // Import Autoplay module
import { Autoplay } from "swiper/modules";

export const meta = () => {
  return [
    { title: "Tech Stack - Clickcode" },
    { name: "description", content: "Lihat teknologi yang kami gunakan untuk membangun solusi digital." },
  ];
};

// Data Tech Stack
const techStacks = [
  { id: 1, name: "Laravel", icon: "/icons/laravel.svg" },
  { id: 2, name: "PHP", icon: "/icons/php.svg" },
  { id: 3, name: "NestJS", icon: "/icons/nestjs.svg" },
  { id: 4, name: "ExpressJS", icon: "/icons/expressjs.svg" },
  { id: 5, name: "StrapiJS", icon: "/icons/strapi.svg" },
  { id: 6, name: "Golang", icon: "/icons/golang.svg" },
  { id: 7, name: "Gin", icon: "/icons/gin.svg" },
  { id: 8, name: "GoFiber", icon: "/icons/gofiber.svg" },
  { id: 9, name: "NextJS", icon: "/icons/nextjs.svg" },
  { id: 10, name: "VueJS", icon: "/icons/vuejs.svg" },
  { id: 11, name: "RemixJS", icon: "/icons/remixjs.svg" },
  { id: 12, name: "ReactJS", icon: "/icons/reactjs.svg" },
  { id: 13, name: "Docker", icon: "/icons/docker.svg" },
  { id: 14, name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { id: 15, name: "MongoDB", icon: "/icons/mongodb.svg" },
  { id: 16, name: "Prisma", icon: "/icons/prisma.svg" },
  { id: 17, name: "Figma", icon: "/icons/figma.svg" },
];

const TechStackPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Teknologi Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Kami menggunakan berbagai teknologi terkini untuk memastikan solusi digital yang efisien, scalable, dan inovatif.
        </p>
      </div>

      {/* Tech Stack Slider */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Default: 2 slides di mobile
          breakpoints={{
            768: {
              slidesPerView: 3, // 3 slides di tablet
            },
            1024: {
              slidesPerView: 5, // 5 slides di desktop
            },
          }}
          autoplay={{
            delay: 1000, // Delay antar slide (0.5 detik)
            disableOnInteraction: false, // Tetap autoplay setelah interaksi pengguna
          }}
          loop={true} // Aktifkan loop agar slider berputar terus
          className="tech-stack-slider"
        >
          {techStacks.map((tech) => (
            <SwiperSlide key={tech.id}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition flex flex-col items-center justify-center p-6" data-aos="fade-up" data-aos-delay="200">
                <img src={tech.icon} alt={`${tech.name} logo`} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechStackPage;