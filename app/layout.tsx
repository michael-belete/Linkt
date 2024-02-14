import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  // Primary meta tags
  title: {
    template: "%s | Linkt",
    default: "Linkt: Make AI your superpower",
  },
  description:
    "Make AI your superpower with Linkt's AI based solutions. Elevate customer service using AI-powered chatbots, revolutionize insights and visual analytics with our computer vision systems, personalize user experiences through our recommendation systems, and create unique content with our advanced AI-powered content generation systems. Explore Linkt's innovative AI solutions for a transformative digital experience.",
  metadataBase: new URL("https://www.linkt.ai"),
  alternates: {
    canonical: "/",
  },
  // Open Graph /Facebook
  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "Linkt",
    url: `/`,
    title: "Linkt",
    description:
      "Make AI your superpower with Linkt's AI based solutions. Elevate customer service using AI-powered chatbots, revolutionize insights and visual analytics with our computer vision systems, personalize user experiences through our recommendation systems, and create unique content with our advanced AI-powered content generation systems. Explore Linkt's innovative AI solutions for a transformative digital experience.",
    images: ["/meta/og-video.gif", "/meta/cover.png"],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    images: ["/meta/og-video.gif", "/meta/cover.png"],
    site: "@_linktai",
    title: "Linkt",
    description:
      "Make AI your superpower with Linkt's AI based solutions. Elevate customer service using AI-powered chatbots, revolutionize insights and visual analytics with our computer vision systems, personalize user experiences through our recommendation systems, and create unique content with our advanced AI-powered content generation systems. Explore Linkt's innovative AI solutions for a transformative digital experience.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-body text-white font-primary scrollbar-style">
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS || ""} />
    </html>
  );
}
