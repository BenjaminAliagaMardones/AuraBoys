# Design

Sistema visual de la landing de **auraboys**. La verdad de producto vive en [PRODUCT.md](PRODUCT.md); acá viven solo las decisiones visuales durables.

## Mundo

**La convención de esports latinoamericana de Valorant, ejecutada a máxima fidelidad.** El usuario tomó explícitamente esta puerta sobre una dirección de autor. El listón de acabado son **KRÜ, LOUD y Leviatán**.

Esto significa, sin ironía y sin colar rarezas de autor: suelo negro absoluto, un acento saturado muy presente, tipografía condensada en caja alta a escala grande, cortes angulares, jugadores recortados, ticker, energía de calle. Los dispositivos de la categoría se usan **porque son los correctos para esta audiencia**, no a pesar de serlo.

Lo que sí se prohíbe: ejecución a medias. Un componente genérico de librería dentro de esta forma es una falla.

## Color

Estrategia: **Committed** — negro absoluto como suelo, un solo color saturado cargando la señal.

El azul del logo `#7092BE` es un azul acero desaturado (`hsl(214 37% 59%)`). A escala de página no grita lo que la convención exige, así que el sistema define un **segundo paso caliente en la misma familia de matiz** (214°): saturado al máximo para señal, glow y estados activos. Es la misma marca subiendo de volumen, no un color nuevo.

| Token | Valor | Rol |
|---|---|---|
| `--ink` | `#000000` | Suelo. Negro absoluto, igual que la categoría. |
| `--ink-raised` | `#0A0C0F` | Superficies elevadas, cards. |
| `--ink-line` | `#1A1E24` | Bordes y divisiones. |
| `--aura` | `#7092BE` | **Azul de marca, del logo.** Campos grandes, la A del logo, texto de acento. |
| `--aura-hot` | `#4294FF` | `hsl(214 100% 63%)`. Señal: CTA, hover, glow, barras activas. |
| `--aura-deep` | `#16283F` | Fondos teñidos, gradientes, sombras de color. |
| `--steel` | `#7F7F7F` | **Gris del logo.** Texto secundario, metadatos. |
| `--paper` | `#F2F5F8` | Texto principal. Blanco frío, nunca crema. |

**Contraste verificado sobre negro:** `--aura` 6.5:1 · `--aura-hot` 7.5:1 · `--paper` 19:1 · `--steel` 4.6:1. Los tres primeros pasan AA para texto normal; `--steel` queda restringido a texto ≥16px o metadatos en caja alta con tracking.

Regla dura: **el blanco puro `#FFFFFF` no se usa.** El texto es `--paper`.

## Tipografía

Ambas familias son de **Omnibus-Type**, fundición argentina — misma región cultural que el equipo, y ambas diseñadas para titulares de alta energía.

- **Archivo** (variable, ejes `wght` + `wdth`). Display en `wdth 68` / `wght 800-900`, caja alta, tracking negativo. Es el motor tipográfico de la página. También cubre el texto de cuerpo en ancho normal.
- **Chivo Mono** (variable). Etiquetas, roles, números, sellos, metadatos. Siempre en caja alta con tracking positivo amplio.

Escala de display: los titulares de sección se fijan con `clamp()` y llegan a tamaños que sangran contra el borde del viewport. En esta convención un titular tímido es un error.

## Composición

- **Grilla:** 12 columnas, `max-width` 1440px, canaleta 24px. El contenido de borde a borde es intencional en hero, ticker y roster.
- **Corte angular:** el bisel a 45° en una esquina es el gesto estructural de la categoría. Se aplica con `clip-path` sobre cards, botones y sellos. Un único ángulo, siempre el mismo, siempre la misma esquina por familia de componente.
- **Ritmo de scroll:** denso (roster) → quieto (sobre nosotros) → denso (partidos) → cierre anclado. Más espacio arriba de un titular que abajo.

## Fotos de jugadores

El caso normal son fotos de celular disparejas. El sistema las unifica en vez de asumir retratos de estudio:

1. **Contenedor de proporción fija 3:4** con `object-cover` y `objectPosition` declarable por jugador, para corregir encuadres sin editar la imagen.
2. **Grado común:** la foto se satura y contrasta ligeramente y recibe un tinte de `--aura-deep` en las sombras, más una viñeta. Fotos con luces distintas se leen como una misma serie.
3. **Sin foto es un estado diseñado**, no un hueco: la marca A al 8% de opacidad sobre el fondo elevado y el sello `SIN FOTO` en mono. Nunca un ícono roto.

## Movimiento

Un sistema, no efectos sueltos.

- **Entrada de sección:** `opacity` + `translateY(16px)`, escalonada, 500ms, `cubic-bezier(.16,1,.3,1)`. Vía `IntersectionObserver`, una sola vez.
- **Hover de card:** la foto escala a 1.04, la barra de acento barre de 0 a 100% de ancho, el nick sube 2px. 240ms.
- **Ticker:** desplazamiento lineal continuo, sin easing.
- **El contenido nunca depende de JS para ser visible.** Todo parte visible y la animación solo lo mejora.
- `prefers-reduced-motion: reduce` anula todo: sin transform, sin ticker, sin transiciones.

## Reglas durables

1. El roster es el componente más caro de la página. Nada compite con él.
2. Un solo ángulo de bisel en todo el sistema.
3. `--aura-hot` es señal, no decoración: marca lo accionable y lo activo.
4. Ningún dato comercial inventado: sponsors, resultados y logros solo aparecen si el equipo los entrega. Los espacios vacíos se diseñan como vacíos honestos.
5. Los datos editables por el equipo viven en `src/data/` y en ningún otro lado.
