import { Reveal } from "./Reveal";

export function SectionHeader({
  indice,
  titulo,
  bajada,
}: {
  /** Numero de seccion, en mono. Ej: "01". */
  indice: string;
  titulo: string;
  bajada?: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 border-b border-ink-line pb-8 md:flex-row md:items-end md:justify-between md:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="stamp text-aura-hot">{indice}</span>
            <span className="h-px w-10 bg-ink-line" />
          </div>
          <h2 className="display mt-4 text-[clamp(2.75rem,8vw,6.5rem)] text-paper">
            {titulo}
          </h2>
        </div>
        {bajada && (
          <p className="max-w-sm text-base leading-relaxed text-mist md:pb-3">
            {bajada}
          </p>
        )}
      </div>
    </Reveal>
  );
}
