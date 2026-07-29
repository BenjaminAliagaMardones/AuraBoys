/** Glifos de redes, dibujados en la gramatica del sistema: trazo solido, sin relleno decorativo. */

type IconProps = { className?: string };

const base = "h-full w-full";

export function TwitchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
      <path d="M4.3 2 2.5 6.5V20h5v3h3l3-3h4l5-5V2H4.3Zm15.2 11-3 3h-4l-3 3v-3H5.5V4h14v9Z" />
      <path d="M15 7.5h2V13h-2zM10 7.5h2V13h-2z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );
}

export function XIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
      <path d="M17.6 3h3.3l-7.2 8.3L22 21h-6.6l-5.2-6.7L4.3 21H1l7.7-8.9L1.4 3H8l4.7 6.2L17.6 3Zm-1.2 16h1.8L7.7 4.9H5.8L16.4 19Z" />
    </svg>
  );
}

export function DiscordIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
      <path d="M19.3 5.4A16.6 16.6 0 0 0 15.2 4l-.3.6c1.4.3 2.5.8 3.6 1.5a13.4 13.4 0 0 0-11-.4c.4-.2.8-.4 1.3-.5l.7-.2.5-.1L9.7 4a16.4 16.4 0 0 0-4.9 1.5C2.2 9.3 1.5 13 1.9 16.6a16.7 16.7 0 0 0 5 2.6l1.1-1.7c-.6-.2-1.2-.5-1.7-.9l.4-.3a11.9 11.9 0 0 0 10.6 0l.4.3c-.5.4-1.1.7-1.8.9l1.1 1.7a16.6 16.6 0 0 0 5.1-2.6c.4-4.2-.7-7.9-2.8-11.2ZM8.5 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
    </svg>
  );
}

export function TrackerIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={`${base} ${className}`}>
      <path d="M3 3h2v16h16v2H3V3Zm5 11 3.5-4.5 3 3L20 6l1.5 1.3-6.2 7.4-3-3L8.6 16 8 14Z" />
    </svg>
  );
}

const registry: Record<string, (p: IconProps) => React.ReactElement> = {
  twitch: TwitchIcon,
  instagram: InstagramIcon,
  x: XIcon,
  discord: DiscordIcon,
  tracker: TrackerIcon,
};

/** Devuelve el glifo por nombre de red, o null si no hay uno definido. */
export function SocialIcon({ nombre, className }: { nombre: string; className?: string }) {
  const Glyph = registry[nombre.toLowerCase()];
  return Glyph ? <Glyph className={className} /> : null;
}
