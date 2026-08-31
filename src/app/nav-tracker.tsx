"use client";

import { useEffect, useState } from "react";

const sections = ["que-es", "clubes", "como-funciona", "pivot-manager"];

export default function NavTracker() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="header-nav" aria-label="Navegación principal">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
        >
          {id === "que-es" ? "La app" : id === "clubes" ? "Clubes" : id === "como-funciona" ? "Cómo funciona" : "Para canchas"}
        </a>
      ))}
    </nav>
  );
}
