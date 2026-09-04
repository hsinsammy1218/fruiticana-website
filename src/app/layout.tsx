import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-fraunces",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const brandScript = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-brand-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.shortDescription,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.shortDescription,
  },
  robots: { index: true, follow: true },
  keywords: [
    "Fruiticana",
    "Fruiticana Creamless Ice Cream",
    "creamless ice cream",
    "fruit-based frozen dessert",
    "the new way to eat fruit",
    "Fruiticana vision for schools and students",
    "school cafeteria frozen dessert",
    "healthy snack program dessert",
    "frozen dessert for school students",
    "Connecticut Team Nutrition",
    "lactose-free frozen dessert concept",
  ],
};

export const viewport: Viewport = {
  themeColor: "#244b2a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.shortDescription,
    logo: `${site.url}/icon.svg`,
    slogan: site.tagline,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${nunito.variable} ${brandScript.variable}`}
    >
      <body>
        <SkipLink />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ScrollReveal />
        <JsonLd data={orgLd} />
        <JsonLd data={websiteLd} />
      </body>
    </html>
  );
}
