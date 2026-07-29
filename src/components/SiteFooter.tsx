import Image from "next/image";
import { equipo } from "@/data/team";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-line pt-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-original.png" alt="" width={1147} height={648} className="h-8 w-auto" />
            <span className="stamp text-steel">
              {equipo.juego} · {equipo.liga}
            </span>
          </div>
          <p className="stamp text-steel">
            © {new Date().getFullYear()} {equipo.nombre}
          </p>
        </div>
      </div>

      {/* Cierre anclado: el nombre a escala completa, cortado por el borde
          inferior. Es el ultimo gesto de la pagina. */}
      <div className="overflow-hidden" aria-hidden>
        <p className="display -mb-[0.18em] w-full text-center text-[22.5vw] leading-none text-paper/8">
          {equipo.nombre}
        </p>
      </div>
    </footer>
  );
}
