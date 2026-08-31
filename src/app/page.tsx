import { ArrowRight } from "lucide-react";

import ScrollReveal from "./scroll-reveal";
import ScrollProgress from "./scroll-progress";
import NavTracker from "./nav-tracker";
import FaqAccordion from "./faq-accordion";
import Parallax from "./parallax";
import PhoneFrame from "./phone-frame";
import { AppStoreBadge, PlayStoreBadge } from "./store-badges";

function PivotMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const cls = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8";
  return (
    <svg className={cls} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-label="Pivot">
      <rect width="32" height="32" rx="8" fill="#0056d6" />
      <g fill="#fff" transform="translate(5.5 5.25) scale(.512)">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.7768 41.1221C1.71775 41.6731 9.76328e-06 39.7946 8.98295e-06 37.6631L0 13.1257C0 9.27113 3.30096 0.201544 12.0172 0.201542C12.0172 0.201542 29.2912 0.201541 40.3596 0.20154C40.7363 5.65744 36.3055 10.4048 30.8366 10.4048H14.2846C12.773 10.4804 9.65911 11.5839 9.29633 15.3931C8.93354 19.2023 9.14517 29.6777 9.29633 34.4392C9.23601 36.5502 7.97235 39.9994 3.7768 41.1221Z" />
        <path d="M13.6044 20.3814V29.7974C13.6044 30.7639 14.869 31.1874 15.4959 30.4517C18.5209 26.9016 20.7202 25.7226 21.5403 25.5964C22.9007 25.3697 26.075 25.5964 27.4355 25.5964C28.5388 25.5964 29.9296 24.4627 30.3831 23.5557L33.9431 16.6232C34.2848 15.9577 33.8016 15.1664 33.0535 15.1664H18.5926C14.5856 15.1664 13.6044 18.7942 13.6044 20.3814Z" />
      </g>
    </svg>
  );
}

const venues = [
  { name: "Club Deportivo Norte", addr: "Cra 15 #80-20, Bogotá", img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80" },
  { name: "Padel City", addr: "Calle 72 #11-40, Bogotá", img: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80" },
  { name: "Tenis Club Bogotá", addr: "Cra 7 #45-12, Bogotá", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80" },
  { name: "Fútbol Arena", addr: "Av Boyacá #80-31, Bogotá", img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80" },
  { name: "Deportes Total", addr: "Calle 134 #15-20, Bogotá", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&q=80" },
];

const testimonials = [
  { name: "Andrés M.", from: "Bogotá", text: "Reservar una cancha nunca fue tan fácil. En dos toques ya tengo mi partido confirmado.", init: "A" },
  { name: "Laura G.", from: "Medellín", text: "Me encanta poder ver las canchas cerca de mi casa con precio y disponibilidad al instante.", init: "L" },
  { name: "Carlos R.", from: "Cali", text: "Uso Pivot cada semana con mi grupo de fútbol. Es rápido, seguro y sin complicaciones.", init: "C" },
];

export default function LandingPage() {
  return (
    <main>
      <ScrollProgress />

      <header className="header">
        <a className="header-brand" href="#inicio">
          <PivotMark size="sm" /><span>Pivot</span>
        </a>
        <NavTracker />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a className="header-cta" href="#descargar">Descargar</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero container" id="inicio">
        <div className="hero-text">
          <h1 data-r>Encuentra <em>canchas</em> y <em>jugadores</em> cerca de ti.</h1>
          <p className="hero-sub" data-r data-rd="1">
            Reserva canchas de fútbol, tenis y pádel. Conecta con otros jugadores y disfruta del deporte sin complicaciones.
          </p>
          <div className="hero-actions" data-r data-rd="2">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>
          <p className="hero-note" data-r data-rd="3">Disponible próximamente para iPhone y Android.</p>
        </div>
        <Parallax speed={0.15}>
          <div data-r="scale" data-rd="1">
            <PhoneFrame src="/screenshots/client-main-mobile.png" alt="Pivot - Login" />
          </div>
        </Parallax>
      </section>

      {/* Stats */}
      <div className="container">
        <div className="stats" data-r>
          <div><div className="stat-num">500+</div><div className="stat-label">Canchas</div></div>
          <div><div className="stat-num">10k+</div><div className="stat-label">Jugadores</div></div>
          <div><div className="stat-num">50+</div><div className="stat-label">Clubes</div></div>
        </div>
      </div>

      {/* What is Pivot */}
      <section className="section container" id="que-es">
        <div className="section-header" data-r>
          <div className="section-label">Qué es Pivot</div>
          <h2>Todo lo que necesitas para jugar, en una sola app.</h2>
          <p>Pivot conecta jugadores con canchas y clubes de tu zona. Reserva, paga y disfruta sin llamadas ni mensajes.</p>
        </div>
        <div className="product-board" data-r="scale" aria-label="Vista previa de las herramientas de Pivot">
          <div className="board-heading"><span className="live-dot" /> Disponibilidad en tiempo real <strong>Hoy, 24 jun</strong></div>
          <div className="board-main">
            <div className="court-card"><img src="/padel-city-court.png" alt="Cancha 3 de Padel City" /><div className="court-lines" /><span className="court-badge">Cancha 03</span><strong>Padel City</strong><small>4 jugadores · 90 min</small></div>
            <div className="booking-list"><div><span className="booking-time">18:00</span><span><b>Cancha sintética</b><small>Club Deportivo Norte</small></span><em>Disponible</em></div><div><span className="booking-time">19:30</span><span><b>Cancha de pádel</b><small>Padel City</small></span><em>Disponible</em></div><div><span className="booking-time">21:00</span><span><b>Cancha cubierta</b><small>Tenis Club Bogotá</small></span><em>2 cupos</em></div></div>
          </div>
          <div className="board-footer"><span><strong>12</strong> reservas hoy</span><span><strong>98%</strong> ocupación</span><a href="#descargar">Explorar clubes <ArrowRight /></a></div>
        </div>
      </section>

      {/* Venues */}
      <section className="section section-alt" id="clubes">
        <div className="container">
          <div className="section-header center" data-r>
            <div className="section-label">Clubes destacados</div>
            <h2>Las mejores canchas cerca de ti.</h2>
            <p>Encuentra tu próximo partido por ubicación, deporte y disponibilidad.</p>
          </div>
          <div className="venues-scroll">
            {venues.map((v, i) => (
              <article className="venue-card" key={v.name} data-r data-rd={i % 3 + 1}>
                <div className="venue-img">
                  <img src={v.img} alt={v.name} loading="lazy" />
                </div>
                <div className="venue-info">
                  <div className="venue-topline"><span className="venue-sport">Disponible hoy</span><span className="venue-rating">4.9 ★</span></div>
                  <h3>{v.name}</h3>
                  <p>{v.addr}</p>
                  <div className="venue-bottomline"><span>Desde $45.000</span><span>· 1.2 km</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section container" id="como-funciona">
        <div className="section-header center" data-r>
          <div className="section-label">Cómo funciona</div>
          <h2>Así de simple.</h2>
        </div>
        <div className="steps-grid">
          {[
            { n: "01", title: "Busca", text: "Explora canchas por deporte, zona y horario disponible." },
            { n: "02", title: "Reserva", text: "Elige tu cancha, confirma el horario y paga seguro desde la app." },
            { n: "03", title: "Juega", text: "Invita a tu equipo, llega a la cancha y disfruta del partido." },
          ].map(({ n, title, text }, i) => (
            <div className="step-card" key={n} data-r data-rd={i + 1}>
              <div className="step-num">{n}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manager */}
      <section className="section section-alt" id="pivot-manager">
        <div className="container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            <div data-r="left">
              <div className="section-label">Para clubes</div>
              <h2 style={{ margin: "0 0 18px", fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-.05em", lineHeight: 1 }}>
                Tu club también juega en equipo.
              </h2>
              <p style={{ color: "var(--text-2)", fontSize: 17, lineHeight: 1.6, margin: "0 0 28px" }}>
                Pivot Manager es la herramienta para administrar tu establecimiento. Controla reservas, horarios y pagos desde un solo lugar.
              </p>
              <a className="btn btn-primary" href="#planes" style={{ display: "inline-flex" }}>
                Conoce los planes <ArrowRight />
              </a>
            </div>
            <div className="manager-board" data-r="right" aria-label="Panel de gestión de Pivot Manager">
              <div className="manager-top"><span className="manager-avatar">PD</span><span><b>Panel del club</b><small>Padel City</small></span><span className="manager-status">Activo</span></div>
              <div className="manager-metrics"><div><small>Reservas hoy</small><strong>38</strong><span>+12% esta semana</span></div><div><small>Ingresos</small><strong>$1.8M</strong><span>+8.4% este mes</span></div></div>
              <div className="schedule-label"><b>Agenda de hoy</b><span>Ver calendario <ArrowRight /></span></div>
              <div className="schedule-row"><b>18:00</b><span>Cancha 01 <small>Fútbol 5</small></span><i>Confirmada</i></div>
              <div className="schedule-row"><b>19:30</b><span>Cancha 04 <small>Pádel · 4 jugadores</small></span><i>Confirmada</i></div>
              <div className="schedule-row"><b>21:00</b><span>Cancha 02 <small>Tenis</small></span><i>Por confirmar</i></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container" id="testimonios">
        <div className="section-header center" data-r>
          <div className="section-label">Lo que dicen</div>
          <h2>Jugadores que ya usan Pivot.</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={t.name} data-r data-rd={i + 1}>
              <div className="testimonial-stars">★★★★★</div>
              <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.init}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-from">{t.from}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download CTA */}
      <section className="section container" id="descargar">
        <div className="download-panel" data-r="scale">
          <div className="download-text">
            <h2>Tu cancha te está esperando.</h2>
            <p>Descarga Pivot y empieza a reservar en minutos.</p>
            <div className="download-actions">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>
          </div>
          <Parallax speed={0.1}>
            <div className="download-phone">
              <PhoneFrame src="/screenshots/client-login-mobile.png" alt="Pivot - Reserva" />
            </div>
          </Parallax>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container" id="preguntas">
        <div className="section-header center" data-r>
          <div className="section-label">Preguntas</div>
          <h2>Todo claro desde el inicio.</h2>
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <FaqAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <a className="header-brand" href="#inicio">
          <PivotMark size="sm" /><span>Pivot</span>
        </a>
        <div className="footer-links">
          <a href="#que-es">Qué es Pivot</a>
          <a href="#clubes">Clubes</a>
          <a href="#descargar">Contacto</a>
        </div>
        <p className="footer-copy">&copy; 2025 Pivot. Hecho para jugar.</p>
      </footer>

      {/* Mobile floating bar */}
      <div className="floating-bar">
        <PivotMark size="sm" />
        <span><strong>Pivot</strong><small>Inicio</small></span>
        <a className="btn btn-primary" style={{ height: 42, padding: "0 16px", fontSize: 14, borderRadius: 12 }} href="#descargar">Descargar</a>
      </div>

      <ScrollReveal />
    </main>
  );
}
