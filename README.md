# auraboys

Landing page del equipo. Next.js 15 + TypeScript + Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## Agregar un jugador al roster

**1. Copiá la foto a `public/players/`**

No importa el tamaño ni la proporción. Puede ser una foto vertical de celular
o una horizontal: el sitio la recorta y la nivela sola.

```
public/players/nova.jpg
```

**2. Agregá su entrada en [`src/data/roster.ts`](src/data/roster.ts)**

```ts
{
  nick: "NOVA",
  nombre: "Benjamín Mardones",
  rol: "Duelista",
  foto: "/players/nova.jpg",
  redes: { twitch: "https://twitch.tv/nova", tracker: "https://tracker.gg/..." },
},
```

**3. Listo.** No hay paso 3.

### Si la cara queda mal encuadrada

Agregá `encuadre` a ese jugador. Acepta cualquier valor de CSS `object-position`
y por defecto es `"50% 20%"`:

```ts
encuadre: "50% 0%",    // sube la foto
encuadre: "30% 20%",   // la corre a la izquierda
```

### Un jugador sin foto

Dejá `foto` afuera. No rompe nada: muestra un estado diseñado con el escudo y
el sello `SIN FOTO`.

---

## Qué falta cargar

Todo lo marcado con ⚠️ en `src/data/`. Está vacío a propósito — la página está
hecha para verse bien vacía y llenarse después, sin inventar datos:

| Dónde | Qué |
|---|---|
| `src/data/roster.ts` | **Los 5 jugadores reales.** Hoy hay placeholders. |
| `src/data/team.ts` → `redes` | URLs reales de Twitch, Instagram, X y Discord. |
| `src/data/team.ts` → `equipo.contacto` | El correo real del equipo. |
| `src/data/team.ts` → `partidos` | Resultados y próximos partidos. Vacío = estado "todavía no hay partidos". |
| `src/data/team.ts` → `sponsors` | Marcas. Vacío = sección "cuatro lugares libres" con el contacto. |
| `src/data/team.ts` → `presentacion` | El texto de "El equipo". Reescribilo con la historia real. |

Borrar una red que no exista está bien: el diseño se acomoda, no quedan huecos.

---

## Estructura

```
src/
  app/           layout, página, tokens (globals.css), favicon
  components/    secciones y la card de jugador
  data/          👈 lo único que tocás para editar contenido
public/
  logo.svg       el escudo, redibujado como vector
  image.png      el dibujo original, conservado como referencia
  players/       las fotos van acá
```

Las decisiones de producto están en [PRODUCT.md](PRODUCT.md) y las de diseño en
[DESIGN.md](DESIGN.md).

---

## Deploy

Está pensado para Vercel: importás el repo y no hay nada que configurar.
`next/image` optimiza las fotos de los jugadores automáticamente (las reencodea
a AVIF/WebP y sirve el tamaño justo para cada pantalla), así que subir una foto
de 4 MB del celular no es un problema.
