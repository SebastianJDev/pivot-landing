"use client";

import { useEffect, useState } from "react";

const sections = ["beneficios", "pivot-manager", "planes"];

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
          {id === "pivot-manager" ? "Para canchas" : id === "beneficios" ? "Beneficios" : "Planes"}
        </a>
      ))}
    </nav>
  );
}
