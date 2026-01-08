import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "DigiHome | Premium Luxury Property Website Design Agency",
  description: "We create stunning, conversion-focused websites for luxury mansions, towers, and premium apartments across Japan. Transform your prestigious property into a digital masterpiece.",
  keywords: ["luxury property", "real estate website", "Japan property", "mansion website", "tower design", "premium apartments", "Tokyo real estate", "luxury web design"],
  authors: [{ name: "DigiHome" }],
  creator: "DigiHome",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digihome.jp",
    siteName: "DigiHome",
    title: "DigiHome | Premium Luxury Property Website Design",
    description: "Japan's premier digital agency for luxury real estate. We create stunning websites for mansions, towers, and premium apartments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigiHome - Luxury Property Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiHome | Premium Luxury Property Website Design",
    description: "Japan's premier digital agency for luxury real estate websites.",
    creator: "@digihome",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900" suppressHydrationWarning>
        <LanguageProvider>
          <SplashScreen>
            {children}
          </SplashScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
