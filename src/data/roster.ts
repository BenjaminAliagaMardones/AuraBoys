/**
 * ============================================================
 *  EL ROSTER
 *  Este es el unico archivo que tenes que tocar para el equipo.
 * ============================================================
 *
 *  Para agregar o cambiar un jugador:
 *
 *   1. Copia la foto a  public/players/   (ej: public/players/nova.jpg)
 *   2. Agrega o edita su entrada en la lista de abajo
 *   3. Listo
 *
 *  La foto puede ser de cualquier tamano y proporcion: el sitio la
 *  recorta y la nivela sola. Si el recorte te deja la cara muy arriba
 *  o muy abajo, usa `encuadre` para moverla.
 *
 *  Un jugador SIN foto no rompe nada: muestra un estado disenado.
 */

export type Rol =
  | "Duelista"
  | "Controlador"
  | "Iniciador"
  | "Centinela"
  | "Flex"
  | "Suplente";

export type Jugador = {
  /** Como se lo conoce. Es lo que se ve grande en la card. */
  nick: string;
  /** Nombre real. Opcional. */
  nombre?: string;
  rol: Rol;
  /** Ruta dentro de public/. Ej: "/players/nova.jpg". Omitir si todavia no hay foto. */
  foto?: string;
  /**
   * Ajuste fino del recorte, por si la cara queda mal encuadrada.
   * Acepta cualquier valor de CSS object-position. Por defecto "50% 20%".
   * Ej: "50% 0%" sube la foto, "30% 20%" la corre a la izquierda.
   */
  encuadre?: string;
  /** Marca al capitan / IGL. Solo uno. */
  capitan?: boolean;
  redes?: {
    twitch?: string;
    x?: string;
    instagram?: string;
    tracker?: string;
  };
};

/**
 * ⚠️ QUEDA 1 PLACEHOLDER — REEMPLAZAR
 *
 * JUGADOR 5 sigue siendo de ejemplo. Cambia nick, nombre, rol y redes
 * por los reales, y suma su foto a public/players/.
 *
 * BENJA, MARTÍN, RICHI, DIEGOAT y LELI ya son datos reales.
 */
export const roster: Jugador[] = [
  {
    nick: "BENJA RUBIO",
    rol: "Duelista",
    foto: "/players/benja.png",
    encuadre: "85% 50%",
  },
  {
    nick: "MARTÍLIN",
    rol: "Controlador",
    capitan: true,
    foto: "/players/martin.jpeg",
    encuadre: "50% 46%",
  },
  {
    nick: "RICHIPRO",
    rol: "Iniciador",
    foto: "/players/richi.jpeg",
  },
  {
    nick: "DIEGOAT",
    rol: "Centinela",
    foto: "/players/diegoat.png",
  },
  {
    nick: "ELISADYOO",
    rol: "Flex",
    foto: "/players/eli.png"
  },
  {
    nick: "LELI",
    rol: "Suplente",
    foto: "/players/leli.jpeg",
    encuadre: "50% 8%",
  },
];

/** El roster titular: todos menos el suplente. */
export const titulares = roster.filter((j) => j.rol !== "Suplente");

/** El o los suplentes del equipo. */
export const suplentes = roster.filter((j) => j.rol === "Suplente");
