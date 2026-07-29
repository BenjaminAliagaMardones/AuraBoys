import { equipo, redes } from "@/data/team";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SocialIcon } from "./icons";

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-ink-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[80vh] bg-[radial-gradient(ellipse_at_50%_100%,var(--color-aura-deep)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          indice="05"
          titulo="Seguinos"
          bajada="Streams, clips y todo lo que pasa entre partido y partido."
        />

        <Reveal>
          <ul className="mt-12 grid gap-px border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {redes.map((red) => (
              <li key={red.nombre} className="bg-ink">
                <a
                  href={red.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 px-6 py-7 transition-colors duration-200 hover:bg-ink-raised"
                >
                  <span>
                    <span className="display block text-2xl text-paper">{red.nombre}</span>
                    <span className="stamp mt-1 block text-steel">@{red.handle}</span>
                  </span>
                  <span className="h-6 w-6 shrink-0 text-steel transition-colors duration-200 group-hover:text-aura-hot">
                    <SocialIcon nombre={red.nombre} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="bevel-br mt-6 flex flex-col gap-6 border border-ink-line bg-ink-raised px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="display text-[clamp(1.75rem,3.5vw,2.75rem)] text-paper">
                ¿Buscás equipo o querés auspiciar?
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-mist">
                Escribinos y charlamos. Pruebas de jugadores, sponsors y scrims.
              </p>
            </div>
            <a
              href={`mailto:${equipo.contacto}`}
              className="stamp bevel-sm shrink-0 bg-aura-hot px-7 py-4 text-ink transition-colors duration-200 hover:bg-paper"
            >
              {equipo.contacto}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
