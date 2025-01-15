"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root ref={lenisRef}>
      <Navbar />
      <Footer />
    </ReactLenis>
  );
}
