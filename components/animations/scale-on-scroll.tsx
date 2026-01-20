"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScaleOnScrollProps {
  children: React.ReactNode;
  fromScale?: number;
  toScale?: number;
  start?: string;
  end?: string;
  className?: string;
}

export function ScaleOnScroll({
  children,
  fromScale = 0.8,
  toScale = 1,
  start = "top 80%",
  end = "top 20%",
  className = "",
}: ScaleOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          scale: fromScale,
          opacity: 0,
        },
        {
          scale: toScale,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: start,
            end: end,
            scrub: 1,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [fromScale, toScale, start, end]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
