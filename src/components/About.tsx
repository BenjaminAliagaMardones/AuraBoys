import Image from "next/image";
import { presentacion } from "@/data/team";
import { roster, titulares } from "@/data/roster";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  // Derivado del roster real: no hay cifras inventadas.
  // "Suplente" no es un rol de juego, asi que solo cuenta entre titulares.
  const roles = new Set(titulares.map((j) => j.rol));

  return (
    <section id="equipo" className="border-t border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader indice="02" titulo="El equipo" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <Reveal>
            <p className="display text-[clamp(1.75rem,4vw,3.25rem)] text-paper">
              {presentacion.titular}
            </p>
            <div className="mt-8 flex flex-col gap-5">
              {presentacion.cuerpo.map((parrafo) => (
                <p key={parrafo} className="max-w-xl text-base leading-relaxed text-mist md:text-lg">
                  {parrafo}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-3">
              {[
                { k: "Jugadores", v: String(roster.length) },
                { k: "Roles cubiertos", v: String(roles.size) },
                { k: "Juego", v: "Valorant" },
              ].map((stat) => (
                <div key={stat.k} className="bg-ink-raised px-5 py-6">
                  <dt className="stamp text-steel">{stat.k}</dt>
                  <dd className="display mt-2 text-4xl text-aura">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="bevel-br relative aspect-square overflow-hidden border border-ink-line bg-[linear-gradient(150deg,var(--color-ink),var(--color-aura-deep))]">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,color-mix(in_srgb,var(--color-aura)_28%,transparent)_0%,transparent_62%)]"
              />
              <Image
                src="/logo-original.png"
                alt="Escudo de auraboys"
                width={1147}
                height={648}
                className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2"
              />
              <span className="stamp absolute bottom-5 left-5 text-steel">
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
