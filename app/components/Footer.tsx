import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white py-12 relative overflow-hidden">
      {/* Background Gradient Blur */}
      <div
        data-aos="fade"
        data-aos-delay="100"
        className="absolute w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl top-[-100px] left-[-100px] z-0"
      />
      <div
        data-aos="fade"
        data-aos-delay="300"
        className="absolute w-[400px] h-[400px] bg-indigo-300/10 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Content */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-extrabold text-gray-900">Clickcode</h2>
        <p className="text-muted-foreground">
          Solusi digital inovatif untuk bisnis Anda.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-4">
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

        {/* Copyright */}
        <p className="text-sm text-muted-foreground mt-8">
          © 2025 Clickcode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;