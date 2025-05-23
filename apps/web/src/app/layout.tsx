import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GlobalSchema from "@/components/seo/global-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | WebCraft Pro",
    default: "WebCraft Pro | Premium Website Design & Development Services",
  },
  description: "Professional website design and development with stunning animations, responsive layouts, and SEO optimization.",
  keywords: ["website design", "web development", "responsive design", "business website", "web services"],
  authors: [{ name: "WebCraft Pro Team" }],
  creator: "WebCraft Pro",
  publisher: "WebCraft Pro",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon.svg" }
    ]
  },
  metadataBase: new URL("https://webcraft.pro"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "WebCraft Pro | Premium Website Design & Development Services",
    description: "Professional website design and development with stunning animations, responsive layouts, and SEO optimization to help your business grow online.",
    url: "https://webcraft.pro",
    siteName: "WebCraft Pro",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "WebCraft Pro - Premium Website Design & Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "WebCraft Pro | Premium Website Design & Development Services",
    description: "Professional website design and development with stunning animations, responsive layouts, and SEO optimization.",
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <GlobalSchema />
          <div className="flex flex-col min-h-svh">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
