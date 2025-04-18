import { Button } from "../components/ui/button";
import { ArrowRight, Code, ShoppingCart, LayoutDashboard, Search, ShieldCheck, Wrench } from "lucide-react";
import { Card } from "./ui/card";

export const meta = () => {
  return [
    { title: "Our Services - Clickcode" },
    { name: "description", content: "Explore the range of digital services we offer at Clickcode." },
  ];
};

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Layanan Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda tumbuh secara online.
        </p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Service 1: Pembuatan Website Modern */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
          <Code className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">Pembuatan Website Modern</h3>
          <p className="text-gray-700">
            Kami merancang website modern yang menarik, responsif, dan sesuai dengan kebutuhan bisnis Anda.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Service 2: CMS (Content Management System) */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="300">
          <LayoutDashboard className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">CMS (Content Management System)</h3>
          <p className="text-gray-700">
            Kelola konten website Anda dengan mudah menggunakan sistem manajemen konten yang canggih.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Service 3: Website E-commerce */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="400">
          <ShoppingCart className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">Website E-commerce</h3>
          <p className="text-gray-700">
            Bangun toko online yang andal dan user-friendly untuk meningkatkan penjualan produk Anda.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Service 4: Landing Page */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="500">
          <ShieldCheck className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">Landing Page</h3>
          <p className="text-gray-700">
            Buat halaman arahan yang efektif untuk meningkatkan konversi dan branding bisnis Anda.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Service 5: SEO Optimization */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="600">
          <Search className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">SEO Optimization</h3>
          <p className="text-gray-700">
            Optimalkan website Anda agar lebih mudah ditemukan di mesin pencari seperti Google.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>

        {/* Service 6: Maintenance & Support */}
        <Card className="flex flex-col items-center p-6 space-y-4 text-center shadow-md hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="700">
          <Wrench className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold text-gray-900">Maintenance & Support</h3>
          <p className="text-gray-700">
            Dapatkan dukungan teknis dan pemeliharaan rutin untuk menjaga website Anda tetap optimal.
          </p>
          <Button size="sm" variant="link" className="text-primary hover:text-primary/80">
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Card>
      </div>

      {/* Highlight Fitur Unggulan */}
      <div className="container mx-auto px-4 mt-20 mb-20 text-center space-y-12 relative z-10">
        {/* Judul */}
        <h2
          className="text-3xl font-bold text-gray-900"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Fitur Unggulan Kami
        </h2>

        {/* Grid Features */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <Code className="h-16 w-16 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">Desain Responsif</h3>
            <p className="text-gray-700">
              Website kami bekerja dengan sempurna di semua perangkat, baik desktop
              maupun mobile.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
            <ShieldCheck className="h-16 w-16 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">Waktu Pengerjaan Cepat</h3>
            <p className="text-gray-700">
              Kami memastikan proyek selesai tepat waktu tanpa mengorbankan kualitas.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <ShoppingCart className="h-16 w-16 text-primary mx-auto" />
            <h3 className="text-xl font-bold text-gray-900">Harga Terjangkau</h3>
            <p className="text-gray-700">
              Layanan berkualitas tinggi dengan harga yang kompetitif untuk semua
              kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;