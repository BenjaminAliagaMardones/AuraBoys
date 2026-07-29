import Image from "next/image";
import type { Jugador } from "@/data/roster";
import { SocialIcon } from "./icons";

/**
 * La card de jugador es el componente mas caro de la pagina (DESIGN.md).
 *
 * Sostiene fotos de celular disparejas: contenedor de proporcion fija 3:4,
 * recorte por object-cover, encuadre ajustable por jugador, y un grado de
 * color comun para que fotos con luces distintas se lean como una serie.
 */
export function PlayerCard({ jugador, indice }: { jugador: Jugador; indice: number }) {
  const numero = String(indice + 1).padStart(2, "0");
  const enlaces = Object.entries(jugador.redes ?? {}).filter(([, url]) => Boolean(url));

  return (
    <article className="group relative">
      <div className="bevel-br relative aspect-3/4 overflow-hidden bg-ink-raised">
        {jugador.foto ? (
          <>
            <Image
              src={jugador.foto}
              alt={`${jugador.nick}, ${jugador.rol} de auraboys`}
              fill
              sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
              style={{ objectPosition: jugador.encuadre ?? "50% 20%" }}
              className="photo-grade object-cover transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-104"
            />
            {/* Tinte de marca en las sombras + viñeta: el nivelador que hace
                que fotos tomadas con luces distintas convivan. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-aura-deep/22 mix-blend-color"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,transparent_38%,rgba(0,0,0,0.72)_100%)]"
            />
          </>
        ) : (
          /* Sin foto es un estado disenado, no un hueco roto: el escudo ocupa
             el lugar del retrato y el sello dice por que esta vacio. */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[linear-gradient(155deg,var(--color-aura-deep)_0%,var(--color-ink-raised)_58%,var(--color-ink)_100%)] pb-20">
            <Image
              src="/logo-original.png"
              alt=""
              width={1147}
              height={648}
              className="w-1/2 opacity-20"
            />
            <span className="stamp bevel-sm border border-ink-line px-2.5 py-1.5 text-steel">
              Sin foto
            </span>
          </div>
        )}

        {/* Fundido inferior: garantiza que el nick se lea sobre cualquier foto. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/80 to-transparent"
        />

        <span className="stamp absolute left-4 top-4 text-paper/45">{numero}</span>

        {jugador.capitan && (
          <span className="stamp bevel-sm absolute right-4 top-4 bg-aura-hot px-2.5 py-1.5 text-ink">
            IGL
          </span>
        )}

        {/* pr-8 mantiene el nick lejos del bisel de la esquina inferior derecha. */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pr-8">
          <span className="stamp text-aura">{jugador.rol}</span>
          <h3 className="display mt-1.5 text-[clamp(1.5rem,2.6vw,2.25rem)] text-paper transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:-translate-y-0.5">
            {jugador.nick}
          </h3>
        </div>

        {/* Barra de acento: barre de 0 a 100% en hover. */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-aura-hot transition-transform duration-300 ease-[var(--ease-out-quint)] group-hover:scale-x-100"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <p className="stamp text-steel">{jugador.nombre ?? " "}</p>
        {enlaces.length > 0 && (
          <div className="flex gap-2.5">
            {enlaces.map(([red, url]) => (
              <a
                key={red}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${jugador.nick} en ${red}`}
                className="h-4 w-4 text-steel transition-colors duration-200 hover:text-aura-hot"
              >
                <SocialIcon nombre={red} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
