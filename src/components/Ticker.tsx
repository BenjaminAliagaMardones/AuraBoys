import { equipo } from "@/data/team";

/**
 * Ticker de la categoria. El contenido sale de datos reales (nombre del
 * equipo, juego, liga) — no hay eslogans inventados.
 */
export function Ticker() {
  const items = [equipo.nombre, equipo.juego, equipo.nombre, equipo.liga];
  // Duplicado exacto: el keyframe recorre -50% y el bucle queda invisible.
  const loop = [...items, ...items];

  return (
    <div
      className="relative flex overflow-hidden border-y border-ink-line bg-ink-raised py-4 select-none"
      aria-hidden
    >
      <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
        {loop.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="display text-2xl text-paper md:text-3xl">{item}</span>
            <span className="h-2 w-2 shrink-0 rotate-45 bg-aura-hot" />
          </span>
        ))}
      </div>
    </div>
  );
}
