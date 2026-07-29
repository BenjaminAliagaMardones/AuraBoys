import { titulares, suplentes } from "@/data/roster";
import { PlayerCard } from "./PlayerCard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Roster() {
  const total = titulares.length + suplentes.length;

  return (
    <section id="roster" className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
      <SectionHeader
        indice="01"
        titulo="Roster"
        bajada="Los que entran al servidor. Pasá el mouse o tocá una card para ver el nombre y las redes de cada uno."
      />

      {total === 0 ? (
        <Reveal>
          <p className="stamp mt-12 text-steel">El roster todavía no está cargado.</p>
        </Reveal>
      ) : (
        <>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-5">
            {titulares.map((jugador, i) => (
              <Reveal key={jugador.nick} delay={i * 70}>
                <PlayerCard jugador={jugador} indice={i} />
              </Reveal>
            ))}
          </div>

          {suplentes.length > 0 && (
            <div className="mt-14 md:mt-16">
              <div className="mb-5 flex items-center gap-3">
                <span className="stamp text-steel">
                  {suplentes.length > 1 ? "Suplentes" : "Suplente"}
                </span>
                <span className="h-px flex-1 bg-ink-line" />
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-5">
                {suplentes.map((jugador, i) => (
                  <Reveal key={jugador.nick} delay={i * 70}>
                    <PlayerCard jugador={jugador} indice={titulares.length + i} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
