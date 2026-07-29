/**
 * ============================================================
 *  DATOS DEL EQUIPO
 *  Redes, texto de presentacion, partidos y sponsors.
 * ============================================================
 *
 *  Todo lo que este marcado con ⚠️ son datos que todavia no me
 *  pasaste. Estan vacios a proposito: la pagina esta hecha para
 *  verse bien vacia y llenarse despues, sin inventar nada.
 */

export const equipo = {
  nombre: "auraboys",
  juego: "Valorant",
  liga: "Premier",
  /** ⚠️ Cambiar por el correo real del equipo. */
  contacto: "contacto@auraboys.gg",
};

export type Red = {
  nombre: string;
  handle: string;
  url: string;
};

/**
 * ⚠️ REDES — reemplazar por las cuentas reales del equipo.
 * Borra las que no existan: el diseno se acomoda solo, no quedan huecos.
 */
export const redes: Red[] = [
  { nombre: "Twitch", handle: "auraboys", url: "https://twitch.tv/" },
  { nombre: "Instagram", handle: "auraboys", url: "https://www.instagram.com/aurabbboys/" },
  { nombre: "X", handle: "auraboys", url: "https://x.com/" },
  { nombre: "Discord", handle: "auraboys", url: "https://discord.gg/" },
];

/**
 * SOBRE NOSOTROS
 * Texto de presentacion. Escrito sin afirmar nada que no me confirmaste:
 * no hay fechas de fundacion, ni logros, ni posiciones de tabla.
 * Reescribilo con la historia real cuando quieras.
 */
export const presentacion = {
  titular: "Cinco tipos y un mismo objetivo.",
  cuerpo: [
    "auraboys es un equipo de Valorant que compite en Premier. No somos una organizacion con oficinas: somos un roster fijo que se junta a entrenar, revisa sus propios VODs y sale a jugar cada semana.",
    "El escudo lo dibujamos nosotros. La A y el aura que la sostiene son de puno y letra del equipo, y son lo que llevamos puesto cada vez que entramos a un servidor.",
  ],
};

export type Partido = {
  /** Formato ISO: "2026-08-14". */
  fecha: string;
  rival: string;
  /** Marcador propio y del rival. Dejar sin definir si el partido no se jugo. */
  marcador?: { propio: number; rival: number };
  /** Nombre del torneo o division. */
  torneo: string;
  /** Link a la transmision o al VOD. Opcional. */
  url?: string;
};

/**
 * ⚠️ PARTIDOS — vacio a proposito.
 *
 * No invento rivales, marcadores ni resultados. Cuando tengas partidos
 * reales, agregalos aca y la seccion se arma sola. Mientras el array
 * este vacio, la pagina muestra un estado disenado que dice que la
 * temporada todavia no arranco, en vez de una tabla falsa.
 *
 * Ejemplo de como se carga uno ya jugado y uno por jugar:
 *
 *   { fecha: "2026-08-14", rival: "NOMBRE RIVAL", torneo: "Premier · Division",
 *     marcador: { propio: 13, rival: 9 } },
 *   { fecha: "2026-08-21", rival: "NOMBRE RIVAL", torneo: "Premier · Division" },
 */
export const partidos: Partido[] = [];

export type Sponsor = {
  nombre: string;
  url: string;
  /** Ruta al logo dentro de public/. Ej: "/sponsors/marca.svg". */
  logo?: string;
  /** Proporcion real del archivo de logo, para que no se deforme. */
  logoAncho: number;
  logoAlto: number;
};

export const sponsors: Sponsor[] = [
  {
    nombre: "Clorox",
    url: "https://www.clorox.com/",
    logo: "/sponsors/clorox.webp",
    logoAncho: 2000,
    logoAlto: 2000,
  },
  {
    nombre: "McDonald's",
    url: "https://www.mcdonalds.com/",
    logo: "/sponsors/mcdonalds.png",
    logoAncho: 1280,
    logoAlto: 1120,
  },
  {
    // ⚠️ Confirmar la URL real de BelSport y reemplazar el "#".
    nombre: "BelSport",
    url: "https://www.belsport.cl/",
    logo: "/sponsors/images.jpeg",
    logoAncho: 447,
    logoAlto: 447,
  },
  {
    nombre: "Sponsor",
    url: "https://www.metro.cl",
    logo: "/sponsors/sponsor4.png",
    logoAncho: 447,
    logoAlto: 447,
  },
];
