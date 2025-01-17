"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="h-screen flex items-center justify-center border-b border-red-600">
        <h1 className="text-6xl font-bold">Scroll Down</h1>
      </section>

      <section className="h-screen flex items-center justify-center border-b border-red-600">
        <h2 className="text-4xl">Fade Up Animation</h2>
      </section>

      <section className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Scale Animation with Scrub</h2>
      </section>
    </main>
  );
}
