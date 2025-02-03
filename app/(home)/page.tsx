"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Scroll Down</h1>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Fade Up Animation</h2>
      </section>

      <Footer />
    </main>
  );
}
