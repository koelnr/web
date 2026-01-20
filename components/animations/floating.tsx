"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FloatingProps {
  children: React.ReactNode;
  duration?: number;
  y?: number;
  delay?: number;
  className?: string;
}

export function Floating({
  children,
  duration = 3,
  y = 20,
  delay = 0,
  className = "",
}: FloatingProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        y: -y,
        duration: duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: delay,
      });
    }, elementRef);

    return () => ctx.revert();
  }, [duration, y, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
