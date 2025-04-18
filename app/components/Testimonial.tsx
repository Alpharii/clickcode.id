import { Card } from "~/components/ui/card";
import { Star } from "lucide-react";

export const meta = () => {
  return [
    { title: "Testimonial - Clickcode" },
    { name: "description", content: "Lihat apa yang pelanggan kami katakan tentang layanan kami." },
  ];
};

const testimonials = [
  {
    id: 1,
    name: "Andi Prasetyo",
    role: "CEO Startup Teknologi",
    image: "/customer1.jpg",
    quote:
      "Clickcode membantu kami membangun website yang sangat profesional dan responsif. Prosesnya cepat, hasilnya luar biasa!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Dewi",
    role: "Pemilik Toko Online",
    image: "/customer2.jpg",
    quote:
      "Saya sangat puas dengan layanan Clickcode. Website e-commerce saya sekarang lebih mudah digunakan dan penjualan meningkat!",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Manajer Pemasaran",
    image: "/customer3.jpg",
    quote:
      "Tim Clickcode sangat berdedikasi dan komunikatif. Mereka memberikan solusi digital yang tepat sesuai kebutuhan kami.",
    rating: 4,
  },
];

const TestimonialPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Apa Kata Pelanggan Kami?
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Lihat pengalaman nyata dari pelanggan kami yang telah menggunakan layanan Clickcode.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
            {/* Customer Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <image
                src={testimonial.image}
                alt={`${testimonial.name}'s photo`}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Testimonial Content */}
            <div className="p-6 space-y-4">
              {/* Quote */}
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Customer Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialPage;