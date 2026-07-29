import Image from "next/image";
import { equipo, sponsors } from "@/data/team";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Sponsors() {
  return (
    <section className="border-t border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader indice="04" titulo="Sponsors" />

        {sponsors.length > 0 ? (
          <Reveal>
            <ul className="mt-12 grid grid-cols-2 gap-px border border-ink-line bg-ink-line md:grid-cols-4">
              {sponsors.map((s) => (
                <li key={s.nombre} className="bg-ink-raised">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-32 items-center justify-center px-6 text-steel transition-colors duration-200 hover:text-paper"
                  >
                    {s.logo ? (
                      <Image
                        src={s.logo}
                        alt={s.nombre}
                        width={s.logoAncho}
                        height={s.logoAlto}
                        className="max-h-10 w-auto max-w-24 opacity-70 transition-opacity duration-200 hover:opacity-100"
                      />
                    ) : (
                      <span className="display text-2xl">{s.nombre}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : (
          /* Hoy no hay sponsors. La seccion funciona como lo que realmente es:
             un espacio abierto, con el contacto a la vista. */
          <Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="bevel-sm flex h-32 flex-col items-center justify-center gap-3 bg-ink outline-1 -outline-offset-1 outline-dashed outline-ink-line"
                  >
                    <Image
                      src="/logo-original.png"
                      alt=""
                      width={1147}
                      height={648}
                      className="w-9 opacity-25"
                    />
                    <span className="stamp text-steel">Libre</span>
                  </div>
                ))}
              </div>

              <div>
                <p className="display text-[clamp(1.75rem,3vw,2.5rem)] text-paper">
                </p>
                <p className="mt-3 text-base leading-relaxed text-mist">
                </p>
                <a
                  href={`mailto:${equipo.contacto}`}
                  className="stamp bevel-sm mt-6 inline-block bg-aura-hot px-6 py-3.5 text-ink transition-colors duration-200 hover:bg-paper"
                >
                  Quiero auspiciar
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
