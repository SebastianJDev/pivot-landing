import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  MapPin,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
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
      <a className="play-store-button" href="#descargar"><Play aria-hidden="true" /> Próximamente en Google Play</a>
    </div>
  );
}

function StorePreviews() {
  const previews = [
    ["App Store", "Agenda en modo oscuro", "https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2Ff1f5f8b57007492888042d1d6b79dac7"],
    ["Google Play", "Agenda en modo claro", "https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F63b46fe4e741400ab41483943e4271dc"],
    ["App Store", "Acceso a Pivot", "https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F78008cace2214c81bca5bc854ec5e518"],
  ];

  return (
    <div className="store-previews" aria-label="Previews temporales de Pivot para las tiendas">
      {previews.map(([platform, title, src]) => <figure className="store-preview" key={src}><img src={src} alt={`${title} de Pivot para ${platform}`} /><figcaption><strong>{platform}</strong><span>{title}</span></figcaption></figure>)}
    </div>
  );
}

function PhonePreview() {
  const courts = [
    ["Cancha El Campín", "Fútbol 5 · 1.2 km", "$25.000/h"],
    ["Paddle Club Norte", "Pádel · 2.8 km", "$30.000/h"],
    ["Tenis City", "Tenis · 3.4 km", "$20.000/h"],
  ];

  return (
    <div className="phone-shell" aria-label="Vista previa de la aplicación Pivot">
      <div className="phone-screen">
        <div className="phone-status"><span>9:41</span><span>● ● ●</span></div>
        <div className="phone-island" />
        <div className="phone-content">
          <div className="phone-greeting"><span>Buenos días</span><strong>Encuentra tu cancha</strong></div>
          <div className="phone-location"><MapPin aria-hidden="true" /><span>Bogotá, Colombia</span><ChevronRight aria-hidden="true" /></div>
          <div className="phone-search">¿Qué deporte quieres jugar?</div>
          <div className="phone-section-title"><strong>Cerca de ti</strong><span>Ver todo</span></div>
          <div className="court-list">
            {courts.map(([name, detail, price], index) => (
              <div className="court-card" key={name}>
                <div className={`court-art court-art--${index + 1}`}><span>{index === 0 ? "5" : index === 1 ? "P" : "T"}</span></div>
                <div className="court-copy"><strong>{name}</strong><span>{detail}</span><span className="court-rating"><Star aria-hidden="true" /> 4.{8 + index}</span></div>
                <b>{price}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="phone-tabbar"><MapPin aria-hidden="true" /><CalendarDays aria-hidden="true" /><Trophy aria-hidden="true" /><span className="phone-profile">S</span></div>
      </div>
    </div>
  );
}

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

const platformPlans = [
  ["Para empezar", "Las herramientas esenciales para publicar tu espacio y comenzar a recibir reservas."],
  ["Para crecer", "Más control de tu agenda, clientes y operación diaria en un mismo lugar."],
  ["Para equipos", "Una solución pensada para establecimientos con más de una cancha o sede."],
];

export default function LandingPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio"><PivotMark size="small" /><span>Pivot</span></a>
        <nav className="header-links" aria-label="Navegación principal"><a href="#beneficios">Beneficios</a><a href="#pivot-manager">Pivot Manager</a><a href="#planes">Planes</a></nav>
        <StoreButton compact />
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <PivotMark size="hero" />
          <p className="eyebrow"><Sparkles aria-hidden="true" /> Tu cancha está más cerca</p>
          <h1>Tu próximo partido.<br /><span>En Pivot.</span></h1>
          <p className="hero-description">Encuentra canchas de fútbol, tenis y pádel. Reserva tu horario y solo preocúpate por jugar.</p>
          <DownloadOptions />
          <p className="store-note">Disponible próximamente para iPhone, Android y Google Play.</p>
        </div>
        <div className="hero-product"><img className="phone-asset" src="https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F75c2823ba4ed486c8ffe3a3b9de9eb2b" alt="Pantalla de inicio de sesión de Pivot en un iPhone" /></div>
      </section>

      <section className="proof-strip" aria-label="Beneficios destacados">
        <span><Check aria-hidden="true" /> Reserva rápida</span><span><Check aria-hidden="true" /> Canchas verificadas</span><span><Check aria-hidden="true" /> Pagos seguros</span>
      </section>

      <section className="feature-section" id="beneficios">
        <div className="section-heading"><p className="section-label">Todo para jugar</p><h2>El plan empieza<br />con una cancha.</h2><p>Pivot reúne todo lo necesario para que organizar un partido sea tan fácil como jugarlo.</p></div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="manager-section" id="pivot-manager">
        <div className="manager-intro"><p className="section-label">Para establecimientos</p><h2>Tu cancha también juega en equipo.</h2><p>Pivot Manager es la app dedicada a dueños y administradores de canchas. Lleva tu operación al siguiente nivel y deja que más personas encuentren tu espacio.</p><a className="text-link" href="#planes">Conoce nuestros planes <ArrowRight aria-hidden="true" /></a></div>
        <div className="manager-grid">{managerFeatures.map(({ icon: Icon, title, text }) => <article className="manager-card" key={title}><div className="benefit-icon"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-heading"><p className="section-label">Así de simple</p><h2>Menos vueltas.<br />Más juego.</h2></div>
        <div className="steps-list">
          {[['01', 'Encuentra', 'Explora canchas según tu deporte, zona y horario.'], ['02', 'Reserva', 'Elige el espacio, confirma tu hora y paga seguro.'], ['03', 'Juega', 'Invita a tu equipo y disfruta el partido.']].map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight aria-hidden="true" /></article>)}
        </div>
      </section>

      <section className="plans-section" id="planes"><div className="section-heading"><p className="section-label">Planes para crecer</p><h2>Elige cómo quieres avanzar.</h2><p>Estamos preparando opciones flexibles para que cada establecimiento encuentre el ritmo que necesita.</p></div><div className="plans-grid">{platformPlans.map(([title, text], index) => <article className={`plan-card${index === 1 ? " plan-card--featured" : ""}`} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="#descargar">Quiero saber más <ArrowRight aria-hidden="true" /></a></article>)}</div></section>

      <section className="download-section" id="descargar">
        <div className="download-panel"><PivotMark size="standard" /><h2>Tu cancha te está esperando.</h2><p>Prepárate para reservar y jugar sin complicaciones.</p><DownloadOptions /><StorePreviews /><small>Previews temporales. Las versiones oficiales estarán disponibles pronto.</small></div>
      </section>

      <section className="questions-section"><div className="section-heading"><p className="section-label">Preguntas</p><h2>Todo claro<br />desde el inicio.</h2></div><div className="question-list"><article><CircleHelp aria-hidden="true" /><div><h3>¿Cómo reservo una cancha?</h3><p>Busca por deporte y zona, elige un horario disponible y confirma tu reserva desde la app.</p></div></article><article><CircleHelp aria-hidden="true" /><div><h3>¿Puedo reservar para un grupo?</h3><p>Sí. Cuando tengas tu reserva, podrás compartirla con las personas que juegan contigo.</p></div></article></div></section>

      <footer className="site-footer"><a className="brand" href="#inicio"><PivotMark size="small" /><span>Pivot</span></a><div><a href="#beneficios">Beneficios</a><a href="#como-funciona">Cómo funciona</a><a href="#descargar">Contacto</a></div><p>© 2025 Pivot. Hecho para jugar.</p></footer>
      <div className="floating-bar"><Menu aria-hidden="true" /><span><strong>Pivot</strong><small>Inicio</small></span><StoreButton compact /></div>
    </main>
  );
}
