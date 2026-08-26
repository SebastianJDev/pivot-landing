export function AppStoreBadge() {
  return (
    <a
      href="#descargar"
      aria-label="Descargar en App Store"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        height: 52, padding: "0 18px",
        borderRadius: 12, background: "#000", color: "#fff",
        transition: "opacity .2s, transform .2s",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 12.54c-.02-2.21 1.8-3.28 1.88-3.33a4.04 4.04 0 0 0-3.18-1.72c-1.34-.14-2.64.8-3.33.8-.7 0-1.77-.78-2.9-.76a4.28 4.28 0 0 0-3.6 2.2c-1.55 2.69-.4 6.65 1.1 8.82.75 1.06 1.62 2.25 2.78 2.21 1.11-.05 1.53-.71 2.87-.71 1.33 0 1.72.71 2.88.68 1.2-.02 1.95-1.07 2.68-2.14a8.77 8.77 0 0 0 1.22-2.48 3.84 3.84 0 0 1-2.4-3.57ZM14.86 6.06a3.92 3.92 0 0 0 .9-2.82 4 4 0 0 0-2.6 1.35 3.74 3.74 0 0 0-.93 2.7 3.3 3.3 0 0 0 2.63-1.23Z" />
      </svg>
      <div style={{ display: "grid" }}>
        <span style={{ fontSize: 9, lineHeight: 1, letterSpacing: ".02em", opacity: .8 }}>Descargar en</span>
        <span style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-.01em" }}>App Store</span>
      </div>
    </a>
  );
}

export function PlayStoreBadge() {
  return (
    <a
      href="#descargar"
      aria-label="Disponible en Google Play"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        height: 52, padding: "0 16px",
        borderRadius: 12, border: "1.5px solid var(--border)", background: "#fff", color: "var(--text)",
        transition: "border-color .2s, transform .2s",
      }}
    >
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M1 1.5l9.5 9.5L1 20.5V1.5z" fill="#4285F4" />
        <path d="M10.5 11l2.5-2.5 4 2.3-6.5 3.7V11z" fill="#34A853" />
        <path d="M1 20.5l10-9.5-2.5-2.5L1 20.5z" fill="#EA4335" />
        <path d="M1 1.5l7.5 7.5L11 6.5 1 1.5z" fill="#FBBC05" />
      </svg>
      <div style={{ display: "grid" }}>
        <span style={{ fontSize: 9, lineHeight: 1, letterSpacing: ".02em", opacity: .7 }}>Disponible en</span>
        <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-.01em" }}>Google Play</span>
      </div>
    </a>
  );
}
