"use client";
import Image from "next/image";
import NextNProgress from "nextjs-progressbar";

// components
import Hero from "@/components/Hero";
import Upcoming from "@/components/Upcoming";
import Feature from "@/components/Feature";
import Book from "@/components/Book";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NextNProgress
        color="#ffffff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Hero />
      <Upcoming />
      <Feature />
      <Book />
    </main>
  );
}
