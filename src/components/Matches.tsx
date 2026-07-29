import Image from "next/image";
import { partidos, type Partido } from "@/data/team";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const formatoFecha = new Intl.DateTimeFormat("es", {
  day: "2-digit",
  month: "short",
});

function resultado(p: Partido) {
  if (!p.marcador) return null;
  return p.marcador.propio > p.marcador.rival ? "victoria" : "derrota";
}

function FilaPartido({ p }: { p: Partido }) {
  const res = resultado(p);
  const fecha = formatoFecha.format(new Date(`${p.fecha}T00:00:00`));

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink-line py-5 md:grid-cols-[7rem_1fr_auto_7rem] md:gap-6">
      <span className="stamp text-steel">{fecha}</span>

      <div className="min-w-0">
        <p className="display truncate text-2xl text-paper md:text-3xl">{p.rival}</p>
        <p className="stamp mt-1 text-steel">{p.torneo}</p>
      </div>

      {p.marcador ? (
        <span
          className={`display text-3xl md:text-4xl ${
            res === "victoria" ? "text-aura-hot" : "text-steel"
          }`}
        >
          {p.marcador.propio}–{p.marcador.rival}
        </span>
      ) : (
        <span className="stamp text-aura">Por jugar</span>
      )}

      <span className="stamp hidden text-right text-steel md:block">
        {res === "victoria" ? "Victoria" : res === "derrota" ? "Derrota" : "—"}
      </span>
    </li>
  );
}

export function Matches() {
  return (
    <section id="partidos" className="border-t border-ink-line">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          indice="03"
          titulo="Partidos"
          bajada="Resultados y próximos enfrentamientos de la temporada."
        />

        {partidos.length === 0 ? (
          /* Vacio honesto: no se inventan rivales ni marcadores. */
          <Reveal>
            <div className="bevel-br mt-12 flex flex-col items-center gap-5 border border-ink-line bg-ink-raised px-6 py-20 text-center md:py-28">
              <Image
                src="/logo-original.png"
                alt=""
                width={1147}
                height={648}
                className="w-20 opacity-15"
              />
              <p className="display text-3xl text-paper md:text-4xl">
                Todavía no hay partidos cargados
              </p>
              <p className="max-w-md text-base leading-relaxed text-mist">
                Cuando arranque la temporada, acá van a aparecer los resultados y el
                próximo enfrentamiento.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <ul className="mt-12 border-t border-ink-line">
              {partidos.map((p) => (
                <FilaPartido key={`${p.fecha}-${p.rival}`} p={p} />
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
