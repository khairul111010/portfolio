"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type ScrollAnimationProps = {
  trigger?: React.RefObject<HTMLElement>;
  start?: string;
  end?: string;
  animation?: gsap.TweenVars;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
};

export function useScrollAnimation({
  trigger,
  start = "top center",
  end = "bottom center",
  animation = {},
  scrub = false,
  markers = false,
  toggleActions = "play none none reverse",
}: ScrollAnimationProps = {}) {
  const element = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.current,
        {
          opacity: 0,
          y: 100,
          ...animation.fromVars,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ...animation.toVars,
          scrollTrigger: {
            trigger: trigger?.current || element.current,
            start,
            end,
            scrub,
            markers,
            toggleActions,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [trigger, start, end, animation, scrub, markers, toggleActions]);

  return element;
}
