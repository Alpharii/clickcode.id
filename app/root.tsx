import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        delay: 50,
        once: true,
      });
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="FbMzG92KKmM4YxIzaDDqY88ldtV_mmIEsVIoisQLxIc" />

        {/* SEO Meta Tags */}
        <title>ClickCode - Jasa Pembuatan Website CMS Murah dan Profesional</title>
        <meta
          name="description"
          content="ClickCode menyediakan jasa pembuatan website CMS murah dengan desain profesional dan responsif. Layanan kami mencakup website murah, click code cms murah, dan solusi digital terbaik untuk bisnis Anda."
        />
        <meta
          name="keywords"
          content="clickcode, click code, jasa pembuatan website, website cms murah, clickcode id, pembuatan website profesional, website murah, click code cms murah, jasa web design, solusi website murah, layanan pembuatan website"
        />
        <meta name="author" content="ClickCode" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags untuk Media Sosial */}
        <meta property="og:title" content="ClickCode - Jasa Pembuatan Website CMS Murah dan Profesional" />
        <meta
          property="og:description"
          content="ClickCode menyediakan jasa pembuatan website CMS murah dengan desain profesional dan responsif. Solusi terbaik untuk website murah dan click code cms murah."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clickcode.id" />
        <meta property="og:image" content="https://clickcode.id/images/seo-image.jpg" />
        <meta property="og:site_name" content="ClickCode" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ClickCode - Jasa Pembuatan Website CMS Murah dan Profesional" />
        <meta
          name="twitter:description"
          content="ClickCode menyediakan jasa pembuatan website CMS murah dengan desain profesional dan responsif. Solusi terbaik untuk website murah dan click code cms murah."
        />
        <meta name="twitter:image" content="https://clickcode.id/images/seo-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://clickcode.id" />

        {/* Additional SEO Enhancements */}
        <meta name="language" content="id" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="subject" content="Jasa Pembuatan Website CMS Murah dan Profesional" />
        <meta name="copyright" content="ClickCode" />
        <meta name="classification" content="Web Development, CMS, Website Design" />
        <meta name="category" content="Technology, Web Services" />

        <Meta />
        <Links />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}