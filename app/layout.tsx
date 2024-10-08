import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Njugush Creatives Limited",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
