"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  CircleHelp,
  Clock3,
  MapPin,
  Menu,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";

function PivotMark({ size = "standard" }: { size?: "standard" | "hero" | "small" }) {
  return (
    <svg className={`pivot-mark pivot-mark--${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Pivot">
      <rect width="32" height="32" rx="7" fill="#0056d6" />
      <g fill="#ffffff" transform="translate(5.5 5.25) scale(0.512)">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.7768 41.1221C1.71775 41.6731 9.76328e-06 39.7946 8.98295e-06 37.6631L0 13.1257C0 9.27113 3.30096 0.201544 12.0172 0.201542C12.0172 0.201542 29.2912 0.201541 40.3596 0.20154C40.7363 5.65744 36.3055 10.4048 30.8366 10.4048H14.2846C12.773 10.4804 9.65911 11.5839 9.29633 15.3931C8.93354 19.2023 9.14517 29.6777 9.29633 34.4392C9.23601 36.5502 7.97235 39.9994 3.7768 41.1221Z" />
        <path d="M13.6044 20.3814V29.7974C13.6044 30.7639 14.869 31.1874 15.4959 30.4517C18.5209 26.9016 20.7202 25.7226 21.5403 25.5964C22.9007 25.3697 26.075 25.5964 27.4355 25.5964C28.5388 25.5964 29.9296 24.4627 30.3831 23.5557L33.9431 16.6232C34.2848 15.9577 33.8016 15.1664 33.0535 15.1664H18.5926C14.5856 15.1664 13.6044 18.7942 13.6044 20.3814Z" />
      </g>
    </svg>
  );
}

function AppleGlyph() {
  return (
    <svg className="apple-glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M17.05 12.54c-.02-2.21 1.8-3.28 1.88-3.33a4.04 4.04 0 0 0-3.18-1.72c-1.34-.14-2.64.8-3.33.8-.7 0-1.77-.78-2.9-.76a4.28 4.28 0 0 0-3.6 2.2c-1.55 2.69-.4 6.65 1.1 8.82.75 1.06 1.62 2.25 2.78 2.21 1.11-.05 1.53-.71 2.87-.71 1.33 0 1.72.71 2.88.68 1.2-.02 1.95-1.07 2.68-2.14a8.77 8.77 0 0 0 1.22-2.48 3.84 3.84 0 0 1-2.4-3.57ZM14.86 6.06a3.92 3.92 0 0 0 .9-2.82 4 4 0 0 0-2.6 1.35 3.74 3.74 0 0 0-.93 2.7 3.3 3.3 0 0 0 2.63-1.23Z" />
    </svg>
  );
}

function GooglePlayGlyph() {
  return (
    <svg className="google-play-glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00d7ff" d="m2.5 3.2 10.6 8.8-10.6 8.8c-.3-.3-.5-.8-.5-1.4V4.6c0-.6.2-1.1.5-1.4Z" />
      <path fill="#00f076" d="m14.1 12-2.8-2.3 2.9-2.4 3.5 2-3.6 2.7Z" />
      <path fill="#ffcf00" d="m2.5 20.8 10.6-8.8 3.6 2.7-12.4 7.1c-.7.4-1.4 0-1.8-1Z" />
      <path fill="#ff3b30" d="m2.5 3.2 12.4 7.1-3.6 2.7L2.5 3.2c.4-1 1.1-1.4 1.8-1Z" />
    </svg>
  );
}

function StoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`store-button${compact ? " store-button--compact" : ""}`} href="#descargar">
      <AppleGlyph />
      {compact ? "Descargar" : "Próximamente en App Store"}
    </a>
  );
}

function DownloadOptions() {
  return (
    <div className="download-options">
      <StoreButton />
      <a className="play-store-button" href="#descargar"><GooglePlayGlyph /> Próximamente en Google Play</a>
    </div>
  );
}

function InterestForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="interest-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="interest-fields">
        <label><span>Tu email</span><input type="email" name="email" placeholder="tu@email.com" required /></label>
        <label><span>Qué buscas</span><select name="interest" defaultValue="jugador"><option value="jugador">Quiero reservar canchas</option><option value="establecimiento">Quiero registrar mi cancha</option></select></label>
        <button className="interest-submit" type="submit">Quiero enterarme <ArrowRight aria-hidden="true" /></button>
      </div>
      <p className="interest-note">Sin spam. Solo te avisaremos cuando Pivot esté disponible.</p>
      {submitted && <p className="interest-success" role="status"><Check aria-hidden="true" /> ¡Listo! Tu interés quedó registrado.</p>}
    </form>
  );
}

const trustPoints = [
  { icon: MapPin, title: "Encuentra cerca", text: "Filtra por deporte, ubicación y horario." },
  { icon: ShieldCheck, title: "Reserva seguro", text: "Confirma tu espacio sin vueltas." },
  { icon: Users, title: "Juega en equipo", text: "Comparte el plan con quienes quieres invitar." },
];

const benefits = [
  { icon: MapPin, title: "Todo cerca de ti", text: "Descubre espacios para jugar sin salir de tu zona." },
  { icon: Clock3, title: "Reserva en minutos", text: "Elige tu horario y confirma tu partido en pocos toques." },
  { icon: Users, title: "Juega acompañado", text: "Arma tu plan y comparte la reserva con tu equipo." },
  { icon: Trophy, title: "Compite a tu ritmo", text: "Encuentra torneos y nuevos retos para tu deporte." },
  { icon: Star, title: "Elige con confianza", text: "Mira valoraciones reales antes de reservar." },
  { icon: ShieldCheck, title: "Pagos seguros", text: "Tu reserva y tu información siempre protegidas." },
];

const managerFeatures = [
  { icon: CalendarDays, title: "Agenda bajo control", text: "Organiza horarios, reservas y disponibilidad desde un solo lugar." },
  { icon: BarChart3, title: "Mira cómo crece", text: "Conoce el movimiento de tu establecimiento y toma mejores decisiones." },
  { icon: Building2, title: "Hecho para tu cancha", text: "Una herramienta dedicada para administrar tu operación sin complicaciones." },
];

export default function LandingPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio"><span>Pivot</span></a>
        <nav className="header-links" aria-label="Navegación principal"><a href="#beneficios">Beneficios</a><a href="#pivot-manager">Para canchas</a><a href="#como-funciona">Cómo funciona</a></nav>
        <StoreButton compact />
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="hero-kicker-dot" /> La forma más simple de reservar</div>
          <PivotMark size="hero" />
          <h1>Tu próximo partido.<br /><span>Empieza aquí.</span></h1>
          <p className="hero-description">Encuentra canchas de fútbol, tenis y pádel. Reserva tu horario y solo preocúpate por jugar.</p>
          <DownloadOptions />
          <p className="store-note">Disponible próximamente para iPhone, Android y Google Play.</p>
        </div>
        <div className="hero-product"><div className="hero-orbit hero-orbit--one" /><div className="hero-orbit hero-orbit--two" /><img className="phone-asset" src="https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F75c2823ba4ed486c8ffe3a3b9de9eb2b" alt="Pantalla de inicio de sesión de Pivot en un iPhone" /><div className="hero-floating-card"><span className="hero-floating-icon"><Check aria-hidden="true" /></span><span><strong>Reserva confirmada</strong><small>Cancha El Campín · 7:00 PM</small></span></div></div>
      </section>

      <section className="proof-strip" aria-label="Beneficios destacados">
        <span><Check aria-hidden="true" /> Fútbol, pádel y tenis</span><span><Check aria-hidden="true" /> Reserva en minutos</span><span><Check aria-hidden="true" /> Todo en un solo lugar</span>
      </section>

      <section className="feature-section" id="beneficios">
        <div className="section-heading"><p className="section-label">Tu juego, a tu manera</p><h2>Encuentra el lugar.<br />Arma el plan.</h2><p>Descubre espacios cerca de ti, compara opciones y reserva el horario perfecto sin llamadas ni complicaciones.</p></div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="trust-section"><div className="section-heading"><p className="section-label">Una mejor forma de jugar</p><h2>Todo lo que necesitas, antes del partido.</h2><p>Pivot conecta la cancha, el horario y tu equipo para que organizar el plan se sienta tan fácil como jugarlo.</p></div><div className="trust-grid">{trustPoints.map(({ icon: Icon, title, text }) => <article className="trust-card" key={title}><div className="trust-card-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="manager-section" id="pivot-manager">
        <div className="manager-intro"><p className="section-label">Para establecimientos</p><h2>Más reservas.<br />Menos operación.</h2><p>Pivot Manager ayuda a dueños y administradores a organizar su agenda, recibir más jugadores y entender cómo crece su cancha desde un solo lugar.</p><a className="text-link" href="#descargar">Quiero conocer Pivot Manager <ArrowRight aria-hidden="true" /></a></div>
        <div className="manager-grid">{managerFeatures.map(({ icon: Icon, title, text }) => <article className="manager-card" key={title}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading"><p className="section-label">Así de simple</p><h2>Menos vueltas.<br />Más juego.</h2></div>
        <div className="steps-list">
          {[['01', 'Encuentra', 'Explora canchas según tu deporte, zona y horario.'], ['02', 'Reserva', 'Elige el espacio, confirma tu hora y paga seguro.'], ['03', 'Juega', 'Invita a tu equipo y disfruta el partido.']].map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="download-section" id="descargar">
        <div className="download-panel"><PivotMark size="standard" /><p className="section-label">Muy pronto en tu bolsillo</p><h2>Menos organizar.<br />Más jugar.</h2><p>Déjanos tu interés y sé de los primeros en reservar con Pivot.</p><InterestForm /><div className="download-trust"><span><ShieldCheck aria-hidden="true" /> Pagos protegidos</span><span><Clock3 aria-hidden="true" /> Reservas rápidas</span></div></div>
      </section>

      <section className="questions-section"><div className="section-heading"><p className="section-label">Preguntas frecuentes</p><h2>Todo claro<br />desde el inicio.</h2><p>Lo importante antes de empezar, en un solo lugar.</p></div><div className="question-list"><article><CircleHelp aria-hidden="true" /><div><h3>¿Cómo reservo una cancha?</h3><p>Busca por deporte y zona, elige un horario disponible y confirma tu reserva desde la app.</p></div></article><article><CircleHelp aria-hidden="true" /><div><h3>¿Puedo reservar para un grupo?</h3><p>Sí. Cuando tengas tu reserva, podrás compartirla con las personas que juegan contigo.</p></div></article><article><CircleHelp aria-hidden="true" /><div><h3>¿Qué deportes encontraré?</h3><p>Empezamos con fútbol, pádel y tenis, y seguiremos sumando espacios para que siempre encuentres dónde jugar.</p></div></article></div></section>

      <footer className="site-footer">
        <div className="footer-main"><a className="brand" href="#inicio"><PivotMark size="small" /><span>Pivot</span></a><div className="footer-cta"><span>¿Tienes una cancha?</span><a className="footer-manager-link" href="#pivot-manager">Registra tu espacio <ArrowRight aria-hidden="true" /></a></div></div>
        <div className="footer-links"><div><a href="#beneficios">Beneficios</a><a href="#como-funciona">Cómo funciona</a><a href="#descargar">Descargar</a></div><div className="social-links" aria-label="Redes sociales"><a href="#" aria-label="Instagram">Instagram</a><a href="#" aria-label="TikTok">TikTok</a><a href="#" aria-label="Facebook">Facebook</a><a href="#" aria-label="LinkedIn">LinkedIn</a></div></div>
        <div className="footer-bottom"><p>© 2025 Pivot. Hecho para jugar.</p><div className="footer-legal"><a href="#">Privacidad</a><a href="#">Términos</a></div></div>
      </footer>
      <div className="floating-bar"><Menu aria-hidden="true" /><span><strong>Pivot</strong><small>Inicio</small></span><StoreButton compact /></div>
    </main>
  );
}
