"use client";
import gsap from "gsap";
import ReactLenis, { LenisRef } from "lenis/react";
import { FC, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const SmoothScroll: FC<Props> = ({ children }) => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ duration: 0.7, lerp: 2 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
