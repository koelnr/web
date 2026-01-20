"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  stagger?: number;
  y?: number;
  duration?: number;
  className?: string;
  childSelector?: string;
}

export function ScrollReveal({
  children,
  stagger = 0,
  y = 60,
  duration = 0.8,
  className,
  childSelector = ".reveal-item"
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (stagger > 0) {
        gsap.from(childSelector, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y,
          stagger,
          duration,
          ease: "power3.out",
        });
      } else {
        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y,
          duration,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, y, duration, childSelector]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
