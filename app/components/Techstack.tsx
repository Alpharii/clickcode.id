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

// Data Tech Stack (diperbarui)
const techStacks = [
  // Bahasa Pemrograman
  { id: 1, name: "JavaScript", iconName: "ci-javascript" },
  { id: 2, name: "TypeScript", iconName: "ci-typescript" },
  { id: 3, name: "PHP", iconName: "ci-php" },
  { id: 4, name: "Golang", iconName: "ci-golang" },
  { id: 5, name: "Solidity", iconName: "ci-solidity" },

  // Framework dan Library
  { id: 6, name: "Laravel", iconName: "ci-laravel" },
  { id: 7, name: "Node.js", iconName: "ci-nodejs" },
  { id: 8, name: "BunJs", iconName: "ci-bun" },
  { id: 9, name: "AntDesign", iconName: "ci-antdesign" },
  { id: 10, name: "Etherium", iconName: "ci-eth" },
  { id: 11, name: "NextJS", iconName: "ci-nextjs" },
  { id: 12, name: "VueJS", iconName: "ci-vuejs" },
  { id: 13, name: "Tailwind CSS", iconName: "ci-tailwindcss" },
  { id: 14, name: "ReactJS", iconName: "ci-reactjs" },
  { id: 15, name: "React Router", iconName: "ci-reactrouter" },
  { id: 16, name: "ViteJS", iconName: "ci-vitejs" },
  { id: 17, name: "Pinia", iconName: "ci-pinia" },
  { id: 18, name: "NestJS", iconName: "ci-nestjs" },
  { id: 19, name: "Hardhat", iconName: "ci-hardhat" },
  { id: 20, name: "Prisma", iconName: "ci-prisma" },

  // Tools
  { id: 21, name: "Docker", iconName: "ci-docker" },
  { id: 22, name: "MySql", iconName: "ci-mysql" },
  { id: 23, name: "PostgreSQL", iconName: "ci-postgresql" },
  { id: 24, name: "MongoDB", iconName: "ci-mongodb" },
  { id: 25, name: "Figma", iconName: "ci-figma" },
];

const TechStackPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex flex-col justify-center items-center relative overflow-hidden">
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
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10 -mt-32" data-aos="fade-up" data-aos-delay="100">
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
            delay: 1000, // Delay antar slide (1 detik)
            disableOnInteraction: false, // Tetap autoplay setelah interaksi pengguna
          }}
          loop={true} // Aktifkan loop agar slider berputar terus
          className="tech-stack-slider"
        >
          {techStacks.map((tech) => (
            <SwiperSlide key={tech.id}>
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition flex flex-col items-center justify-center p-6" data-aos="fade-up" data-aos-delay="200">
                {/* Render ikon menggunakan <i> tag */}
                <i className={`${tech.iconName} ci-2x mb-4`} />
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