"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, y = 50, scale, className }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y,
        scale,
        duration: 1,
        delay,
        ease: scale ? "back.out(1.7)" : "power3.out",
      });
    }, elementRef);

    return () => ctx.revert();
  }, [delay, y, scale]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
