import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Gram Panchayat - Digital Services for Rural Development",
    template: "%s | Gram Panchayat",
  },
  description: "Official digital portal for Gram Panchayat. Access birth certificates, tax payments, and government schemes online. Empowering rural communities with transparent governance.",
  keywords: ["Gram Panchayat", "Rural Development", "Digital India", "Online Services", "Birth Certificate", "House Tax", "Voter List"],
  authors: [{ name: "Gram Panchayat Tech Team" }],
  creator: "Gram Panchayat",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.com",
    title: "Gram Panchayat - Digital Services",
    description: "Empowering rural communities with transparent governance and online services.",
    siteName: "Gram Panchayat Digital Portal",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
        width: 1200,
        height: 630,
        alt: "Gram Panchayat Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gram Panchayat - Digital Services",
    description: "Access government services from home. Digital governance for rural development.",
    images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
