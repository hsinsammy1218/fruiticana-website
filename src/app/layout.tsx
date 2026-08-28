import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
    "fruit frozen dessert",
    "fruit-based frozen dessert",
    "dairy-free frozen dessert",
    "lactose-free frozen dessert",
    "frozen fruit dessert",
    "fruit classroom resource",
    "nutrition facts for students",
    "school snack program history",
  ],
};

export const viewport: Viewport = {
  themeColor: "#163d2a",
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
      className={`${jakarta.variable} ${inter.variable}`}
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
