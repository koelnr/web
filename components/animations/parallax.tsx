"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
}

export function Parallax({ children, className }: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate bubbles
      gsap.to(".wash-bubble", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        y: -100,
        opacity: 0,
        stagger: 0.1,
      });

      // Animate car image with zoom
      gsap.to(".car-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        scale: 1.1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
