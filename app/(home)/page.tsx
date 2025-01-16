"use client";

import { useScrollAnimation } from "../lib/hooks/useScrollAnimation";

export default function Home() {
  const firstSection = useScrollAnimation({
    animation: {
      fromVars: { opacity: 0, y: 100 },
      toVars: { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
    },
  });

  const secondSection = useScrollAnimation({
    animation: {
      fromVars: { scale: 0.8, opacity: 0 },
      toVars: { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
    },
    scrub: 1,
    start: "top 80%",
  });

  return (
    <main className="bg-black text-white">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Scroll Down</h1>
      </section>

      <section
        ref={firstSection}
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl">Fade Up Animation</h2>
      </section>

      <section
        ref={secondSection}
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl">Scale Animation with Scrub</h2>
      </section>
    </main>
  );
}
