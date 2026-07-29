import Image from "next/image";
import { equipo } from "@/data/team";
import { titulares, suplentes } from "@/data/roster";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden pt-28 md:pt-32"
    >
      {/* Capas de fondo. Todas decorativas: ninguna carga contenido. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Glow de marca, anclado arriba al centro. */}
        <div className="absolute left-1/2 top-[-30%] h-[85vh] w-[135vw] max-w-none -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,var(--color-aura-deep)_0%,transparent_62%)] opacity-90" />
        {/* La marca a escala arquitectonica, centrada y completa: atmosfera,
            no un recorte accidental contra el borde. */}
        <Image
          src="/logo-original.png"
          alt=""
          width={1147}
          height={648}
          priority
          className="absolute left-1/2 top-[42%] w-[150vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.045] md:w-[105vw]"
        />
        {/* Retícula fina: textura de la categoria, no decoracion gratuita. */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-aura)_1px,transparent_1px)] bg-[length:120px_100%] opacity-[0.05]" />
        {/* Fundido hacia el negro para empalmar con el ticker. */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-8 md:pb-14">
        {/* El escudo, solido y a escala: es lo primero que identifica al equipo. */}
        <Image
          src="/logo-original.png"
          alt=""
          width={1147}
          height={648}
          priority
          className="mb-8 h-24 w-auto md:mb-10 md:h-36"
        />

        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 bg-aura-hot" />
          <span className="stamp text-aura">
            {equipo.juego} · {equipo.liga}
          </span>
        </div>

        {/* El titular sangra a lo ancho del viewport: en esta convencion un
            titular timido es un error. */}
        <h1 className="display mt-5 text-[clamp(3.5rem,25.5vw,21rem)] text-paper">
          {equipo.nombre}
        </h1>

        <div className="mt-8 flex flex-col gap-8 border-t border-ink-line pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-mist md:text-lg">
            Un roster de {titulares.length} titulares
            {suplentes.length > 0 && ` y ${suplentes.length} suplente`} compitiendo en{" "}
            <span className="text-paper">
              {equipo.juego} {equipo.liga}
            </span>
            . Estos son.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#roster"
              className="stamp bevel-sm bg-aura-hot px-7 py-4 text-ink transition-colors duration-200 hover:bg-paper"
            >
              Ver el roster
            </a>
            <a
              href="#contacto"
              className="stamp bevel-sm border border-ink-line px-7 py-4 text-paper transition-colors duration-200 hover:border-aura hover:text-aura"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
