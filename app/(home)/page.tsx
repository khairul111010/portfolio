"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />

      <section className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Fade Up Animation</h2>
      </section>

      <Footer />
    </main>
  );
}
