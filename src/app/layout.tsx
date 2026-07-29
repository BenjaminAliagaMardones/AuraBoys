import type { Metadata, Viewport } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import { equipo } from "@/data/team";
import "./globals.css";

/* Ambas familias son de Omnibus-Type, fundicion argentina: misma region
   cultural que el equipo y disenadas para titulares de alta energia. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${equipo.nombre} — ${equipo.juego} ${equipo.liga}`,
  description: `Roster y equipo de ${equipo.nombre}, equipo de ${equipo.juego} compitiendo en ${equipo.liga}.`,
  openGraph: {
    title: `${equipo.nombre} — ${equipo.juego} ${equipo.liga}`,
    description: `Roster y equipo de ${equipo.nombre}.`,
    locale: "es",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${archivo.variable} ${chivoMono.variable}`}>
      <body className="antialiased">
        <a
          href="#roster"
          className="stamp sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-aura-hot focus:px-4 focus:py-3 focus:text-ink"
        >
          Ir al roster
        </a>
        {children}
      </body>
    </html>
  );
}
