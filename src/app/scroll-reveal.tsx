"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-r]").forEach((el) => el.classList.add("v"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute("data-rd");
            if (delay) setTimeout(() => el.classList.add("v"), parseInt(delay) * 100);
            else el.classList.add("v");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-r]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
