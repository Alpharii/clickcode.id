import { CheckCircle, BadgeDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    title: "Basic",
    price: "Rp 200.000/bulan",
    features: [
      "Landing Page",
      "Desain responsif",
      "Revisi 3x",
      "Deployment gratis",
    ],
    tech: ["ReactJS", "RemixJS", "Tailwind CSS", "PHP", "Laravel"],
  },
  {
    title: "Standard",
    price: "Rp 500.000/bulan",
    features: [
      "CMS/Company Profile",
      "Desain custom",
      "Revisi 5x",
      "Form & Integrasi Dasar",
    ],
    tech: ["Laravel", "ExpressJS", "NestJS", "VueJS", "NextJS", "RemixJS"],
  },
  {
    title: "Enterprise",
    price: "Rp 7.000.000 +",
    features: [
      "E-Commerce / Custom App",
      "Fitur lengkap & admin panel",
      "Revisi tidak terbatas",
      "Integrasi pembayaran",
    ],
    tech: ["NestJS", "ExpressJS", "Golang", "GoFiber", "Gin", "NextJS", "RemixJS"],
  },
];

export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden"
      id="pricing"
    >
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

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Pilih Paket yang Sesuai</h2>
          <p className="text-muted-foreground mb-12 text-gray-600">
            Kami menggunakan teknologi modern seperti Laravel, PHP, NestJS, ExpressJS, StrapiJS, Golang, Gin, GoFiber, NextJS, VueJS, RemixJS, dan ReactJS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <Card className="flex flex-col flex-1 justify-between bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <CardHeader className="bg-gradient-to-b from-primary to-primary/70 text-white py-6">
                  <div className="flex items-center justify-center gap-2">
                    <BadgeDollarSign className="w-6 h-6" />
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  </div>
                  <p className="text-3xl font-bold text-center mt-2">
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 p-6 justify-between">
                  <div>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mb-2 text-gray-600">
                      Teknologi yang digunakan:
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs justify-center">
                      {plan.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Pesan Sekarang
                    </Button>
                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      * Semua paket sudah termasuk deployment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
