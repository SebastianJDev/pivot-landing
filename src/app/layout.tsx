import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pivot — Encuentra tu cancha. Reserva tu momento.",
  description:
    "Todo lo que necesitas para jugar está a unos cuantos toques de distancia. Canchas cerca de ti, reservas en minutos, torneos para competir.",
  openGraph: {
    title: "Pivot — Encuentra tu cancha",
    description: "Reserva fútbol, pádel y tenis sin complicaciones.",
    type: "website",
    images: [{ url: "https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F75c2823ba4ed486c8ffe3a3b9de9eb2b", alt: "Vista de la app Pivot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pivot — Encuentra tu cancha",
    description: "Reserva fútbol, pádel y tenis sin complicaciones.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F184638e85c1e4e768a02fdcc4204e005%2F75c2823ba4ed486c8ffe3a3b9de9eb2b"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
