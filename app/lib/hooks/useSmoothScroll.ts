// lib/hooks/useSmoothScroll.ts
"use client";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";

export function useSmoothScroll() {
  const { lenis } = useScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with correct options
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchInertiaMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      gestureOrientation: "vertical",
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.current.on("scroll", ScrollTrigger.update);

    // Set up the RAF loop
    const raf = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Sync with GSAP ticker
    gsap.ticker.add((time) => {
      lenis.current?.raf(time * 1000);
    });

    // Handle resize
    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      lenis.current?.destroy();
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(() => {});
    };
  }, [lenis]);
}
