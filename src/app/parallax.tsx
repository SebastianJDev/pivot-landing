"use client";

import { useEffect, useRef, useState } from "react";

export default function Parallax({ children, speed = 0.3 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            setOffset((center - viewCenter) * speed);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}>
      {children}
    </div>
  );
}
