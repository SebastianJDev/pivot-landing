"use client"

import { useEffect, useRef } from "react"
import {
  MapPin,
  CalendarDays,
  Trophy,
  Star,
  Clock,
  Shield,
  ChevronRight,
  Zap,
  Heart,
  Users,
} from "lucide-react"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    const targets = el.querySelectorAll(".reveal")
    targets.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  return ref
}

function PhoneMockup() {
  return (
    <div className="phone-frame mx-auto">
      <div className="phone-status-bar">
        <span>9:41</span>
        <span className="flex gap-1 items-center">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="0.5" opacity="0.3" />
            <rect x="4.5" y="5" width="3" height="7" rx="0.5" opacity="0.5" />
            <rect x="9" y="2" width="3" height="10" rx="0.5" opacity="0.7" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
          </svg>
        </span>
      </div>

      <div className="p-5 pt-10 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-text-secondary">Cerca de ti</p>
            <p className="text-sm font-bold">3 canchas disponibles</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {[
            { name: "Cancha El Campín", sport: "Fútbol 5", price: "$25.000/h", rating: 4.8 },
            { name: "Paddle Club Norte", sport: "Pádel", price: "$30.000/h", rating: 4.9 },
            { name: "Tenis City", sport: "Tenis", price: "$20.000/h", rating: 4.7 },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-muted rounded-xl p-3 flex items-center gap-3"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                {i === 0 ? (
                  <Users className="w-5 h-5 text-accent" />
                ) : i === 1 ? (
                  <Zap className="w-5 h-5 text-accent" />
                ) : (
                  <Heart className="w-5 h-5 text-accent" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">{c.name}</p>
                <p className="text-[10px] text-text-secondary">{c.sport}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[10px] font-bold text-accent">{c.price}</p>
                <p className="text-[10px] text-text-tertiary flex items-center gap-0.5 justify-end">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  {c.rating}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="flex-1 bg-accent text-white rounded-xl py-2.5 text-center text-[11px] font-bold">
            Reservar ahora
          </div>
          <div className="bg-muted rounded-xl px-3 flex items-center">
            <CalendarDays className="w-4 h-4 text-text-secondary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const heroRef = useReveal()
  const featuresRef = useReveal()
  const howRef = useReveal()
  const ctaRef = useReveal()

  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">Pivot</span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-text-secondary">
            <a href="#features" className="hover:text-foreground transition-colors">Funciones</a>
            <a href="#how" className="hover:text-foreground transition-colors">Cómo funciona</a>
            <a href="#download" className="hover:text-foreground transition-colors">Descargar</a>
          </div>
          <a href="#download" className="cta-btn !py-2.5 !px-5 !text-sm !rounded-xl">
            Descargar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="reveal inline-flex items-center gap-2 bg-accent-light text-accent px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
              <Zap className="w-3 h-3" />
              Reserva en segundos
            </div>
            <h1 className="reveal text-[clamp(36px,8vw,64px)] font-bold leading-[1.08] tracking-tight mb-5">
              Encuentra tu cancha.
              <br />
              <span className="text-accent">Reserva tu momento.</span>
            </h1>
            <p className="reveal text-lg text-text-secondary leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
              Canchas de fútbol, tenis y pádel cerca de ti. Reserva en minutos, paga como quieras, compite en torneos.
            </p>
            <div className="reveal flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#download" className="cta-btn">
                Empezar ahora
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#how"
                className="px-6 py-3.5 rounded-xl border border-border text-sm font-semibold text-text-secondary hover:bg-muted transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
          <div className="reveal flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Logos / Social proof */}
      <section className="py-10 border-y border-border">
        <div className="max-w-4xl mx-auto px-5 flex flex-wrap justify-center gap-8 sm:gap-14 text-text-tertiary text-sm font-medium">
          <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 en App Store</span>
          <span className="flex items-center gap-2"><Users className="w-4 h-4" /> 10,000+ jugadores</span>
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 500+ canchas</span>
          <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> 200+ torneos</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" ref={featuresRef} className="py-20 sm:py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="reveal text-[clamp(28px,4vw,42px)] font-bold tracking-tight mb-4">
              Todo lo que necesitas para jugar
            </h2>
            <p className="reveal text-text-secondary text-lg max-w-lg mx-auto">
              Desde encontrar una cancha hasta ganar un torneo. Todo en una app.
            </p>
          </div>

          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: MapPin,
                title: "Canchas cerca de ti",
                desc: "Mapa interactivo con todas las canchas disponibles. Filtra por deporte, precio y disponibilidad.",
              },
              {
                icon: CalendarDays,
                title: "Reserva en minutos",
                desc: "Selecciona horario, cancha y método de pago. Confirmación instantánea.",
              },
              {
                icon: Trophy,
                title: "Torneos",
                desc: "Inscríbete en torneos, arma tu equipo y compite por premios.",
              },
              {
                icon: Star,
                title: "Valoraciones",
                desc: "Califica canchas y comparte tu experiencia con la comunidad.",
              },
              {
                icon: Shield,
                title: "Verificación de identidad",
                desc: "Verificación segura de cédula para mayor confianza en torneos.",
              },
              {
                icon: Clock,
                title: "Historial y favoritos",
                desc: "Accede rápido a tus canchas favoritas y reserva de nuevo en un toque.",
              },
            ].map((f, i) => (
              <div key={i} className="reveal feature-card">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" ref={howRef} className="py-20 sm:py-28 px-5 bg-bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="reveal text-[clamp(28px,4vw,42px)] font-bold tracking-tight mb-4">
              Cómo funciona
            </h2>
            <p className="reveal text-text-secondary text-lg max-w-lg mx-auto">
              Tres pasos simples para jugar.
            </p>
          </div>

          <div className="stagger grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Busca",
                desc: "Explora canchas en el mapa o busca por deporte y zona.",
              },
              {
                step: "02",
                title: "Reserva",
                desc: "Elige horario, cancha y forma de pago. Listo.",
              },
              {
                step: "03",
                title: "Juega",
                desc: "Llega, juega y califica tu experiencia.",
              },
            ].map((s, i) => (
              <div key={i} className="reveal text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" ref={ctaRef} className="py-20 sm:py-28 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[clamp(28px,5vw,48px)] font-bold tracking-tight mb-5">
              Tu próximo partido empieza aquí
            </h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto mb-8">
              Descarga Pivot y reserva tu cancha en segundos. Sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="cta-btn !py-4 !px-8 !text-base !rounded-2xl">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                  <path d="M16.52 12.58c-.03-3.04 2.48-4.49 2.59-4.56-1.41-2.06-3.61-2.34-4.39-2.37-1.87-.19-3.66 1.1-4.61 1.1-.96 0-2.44-1.07-4.02-1.04-2.07.03-3.98 1.2-5.04 3.05-2.16 3.73-.55 9.26 1.55 12.29 1.03 1.47 2.26 3.13 3.87 3.07 1.54-.06 2.13-1 3.99-1 1.87 0 2.41 1 4.02.97 1.65-.03 2.7-1.5 3.72-2.97 1.18-1.71 1.67-3.37 1.7-3.45-.04-.02-3.27-1.25-3.3-4.97l-.08-.12zM13.03 3.88C13.85 2.89 14.41 1.55 14.26.2c-1.25.05-2.75.84-3.64 1.83-.79.87-1.49 2.25-1.3 3.57 1.39.11 2.81-.71 3.71-1.72z"/>
                </svg>
                App Store
              </a>
              <a href="#" className="cta-btn !py-4 !px-8 !text-base !rounded-2xl !bg-[#1a1a1a] dark:!bg-[#f0f0f0] dark:!text-[#1a1a1a]">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
                  <path d="M1 1l9.5 10L1 21V1zM11.5 12.5l2.5 2.5-8.5 5 6-7.5zM14 9l2.5-2.5-2.5-2.5L11.5 9 14 9zM11.5 7.5l-8.5-5 8.5 5z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-bold">Pivot</span>
          </div>
          <div className="flex gap-6 text-xs text-text-tertiary">
            <a href="#" className="hover:text-foreground transition-colors">Términos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-colors">Soporte</a>
          </div>
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Pivot. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
