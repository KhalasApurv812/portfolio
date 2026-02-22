import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apurv Khalas | Frontend Developer",
  description:
    "Frontend Developer with 3.5+ years experience in React, Vue, and Next.js. Building scalable web apps.",
  keywords: [
    "Apurv Khalas",
    "Frontend Developer India",
    "React Developer",
    "Vue Developer",
    "Next.js Developer",
  ],
  openGraph: {
    title: "Apurv Portfolio",
    description: "Frontend Developer Portfolio",
    url: "https://yourdomain.vercel.app",
    siteName: "Apurv Portfolio",
    type: "website",
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
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
