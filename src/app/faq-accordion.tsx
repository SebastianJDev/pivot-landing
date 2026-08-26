"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo reservo una cancha?",
    a: "Busca por deporte y zona, elige un horario disponible y confirma tu reserva desde la app. Recibirás una confirmación al instante.",
  },
  {
    q: "¿Puedo reservar para un grupo?",
    a: "Sí. Cuando tengas tu reserva, podrás compartirla con las personas que juegan contigo. Todos recibirán los detalles.",
  },
  {
    q: "¿Cuánto cuesta usar Pivot?",
    a: "Para jugadores, la app es gratuita. Solo pagas por la reserva que hagas. No hay costos ocultos ni suscripciones para quienes buscan canchas.",
  },
  {
    q: "¿Qué deportes puedo reservar?",
    a: "Pivot cubre fútbol, pádel, tenis, baloncesto y más. La oferta depende de los establecimientos disponibles en tu zona.",
  },
  {
    q: "¿Puedo cancelar una reserva?",
    a: "Sí, puedes cancelar desde la app antes del horario reservado. Las políticas de reembolso dependen de cada establecimiento.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <article
          className={`faq-item${open === i ? " open" : ""}`}
          key={i}
        >
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.q}</span>
            <ChevronDown className="faq-chevron" aria-hidden="true" />
          </button>
          <div className="faq-body">
            <p>{faq.a}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
