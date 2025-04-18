import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const meta = () => {
  return [
    { title: "Kontak Kami - Clickcode" },
    { name: "description", content: "Hubungi kami untuk konsultasi atau informasi lebih lanjut." },
  ];
};

const ContactPage = () => {
  // State untuk formulir kontak
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handler untuk perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk submit formulir
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Hubungi Kami
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Kami siap membantu Anda. Kirim pesan atau hubungi kami melalui informasi di bawah ini.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Formulir Kontak */}
        <Card className="overflow-hidden shadow-md p-6 space-y-6" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-2xl font-bold text-gray-900">Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Nomor Telepon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <Button type="submit" className="w-full">
              Kirim Pesan
            </Button>
          </form>
        </Card>

        {/* Informasi Kontak */}
        <Card className="overflow-hidden shadow-md p-6 space-y-6" data-aos="fade-left" data-aos-delay="200">
          <h2 className="text-2xl font-bold text-gray-900">Informasi Kontak</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>info@clickcode.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Jl. Teknologi No. 123, Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Peta Lokasi */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.067063904357!2d106.827183!3d-6.229385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786f2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1698732897811!5m2!1sen!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
            ></iframe>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-primary hover:text-primary/80 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-primary hover:text-primary/80 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-primary hover:text-primary/80 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 transition" />
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactPage;