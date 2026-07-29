# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Visitante principal:** alguien que ya escuchó el nombre auraboys — por un stream, un clip, un conocido dentro del equipo, o un rival de Premier — y llega a la página para responder una sola pregunta: *¿quiénes son estos?* Llega casi siempre desde el celular, desde un enlace en la bio de una red social o en Discord, con poca paciencia y sin contexto previo sobre el equipo.

**Audiencias secundarias confirmadas:**
- **Jugadores potenciales** evaluando si quieren entrar al equipo. Miran el roster para ver quiénes son, qué roles hay y si falta el suyo.
- **Marcas o sponsors chicos** que necesitan un lugar formal al que mirar antes de conversar. Existe un bloque de sponsors/contacto por eso.
- **El propio equipo.** La página es también un objeto de identidad para sus miembros: la quieren mostrar.

## Product Purpose

Una landing page única que presenta a auraboys como equipo de esports y pone su **roster de jugadores con foto** en el centro.

Éxito: un visitante que nunca oyó del equipo sale sabiendo quién es auraboys, reconociendo las caras y nicks del roster, y con una vía clara para seguirlos. Éxito secundario: que el equipo pueda agregar o cambiar un jugador sin ayuda técnica.

## Positioning

auraboys es un equipo real y activo de Valorant Premier, no una organización de esports con estructura corporativa. Lo que la página puede decir con verdad y una organización grande no: que son un grupo identificable de personas con nombre y cara, no un logo con un roster intercambiable detrás. La identidad del equipo es **dibujada a mano por ellos mismos** — el logo lo hicieron, no lo encargaron.

Referencia estructural que el usuario aportó: [kruesports.gg](https://www.kruesports.gg) (equipo → roster → redes). Es referencia de estructura y energía, **no** de identidad visual.

## Operating Context

- **Valorant Premier** es la liga de Riot para equipos amateur/semi-pro: los equipos se inscriben, juegan una temporada corta de partidos semanales y clasifican a un playoff. El roster es de 5 titulares y los roles del juego son Duelista, Controlador, Iniciador y Centinela.
- La página se consume mayoritariamente **en celular**, compartida como enlace en redes y Discord.
- **Las fotos de los jugadores las toman ellos mismos**, con celular. Van a llegar en proporciones, encuadres, resoluciones y condiciones de luz inconsistentes. Este es un hecho operativo del producto, no un detalle de implementación: el diseño tiene que sostener fotos disparejas.

## Capabilities and Constraints

**Confirmado:**
- Sitio estático de una sola página. Sin backend, sin base de datos, sin autenticación.
- **Gestión de contenido por archivo:** las fotos se copian a `public/players/` y el roster vive en un único archivo de datos tipado. Agregar un jugador = copiar una imagen y editar una entrada.
- Secciones confirmadas: sobre nosotros, roster, resultados/partidos, redes sociales, sponsors/contacto.
- Un solo juego (Valorant), un solo equipo. Sin selector de divisiones.

**Sin decidir / no inventable:**
- **Datos reales del roster** (nicks, roles, nombres, redes): el usuario los va a entregar. Hasta entonces se usan entradas de ejemplo marcadas explícitamente como placeholder.
- **Sponsors reales**: no hay ninguno confirmado. No se inventan marcas.
- **Resultados y marcadores de partidos**: no hay datos reales entregados. No se inventan resultados, rivales ni posiciones de tabla.
- Cuentas de redes sociales del equipo: pendientes de entrega.
- Dominio y hosting: sin definir.

## Brand Commitments

- **Nombre:** auraboys.
- **Logo:** `public/image.png` — una "A" azul sobre dos formas grises redondeadas, con contorno negro. Dibujado a mano por el equipo. El usuario aprobó **redibujarlo como SVG vectorial limpio** preservando la misma forma y los mismos colores; el PNG original se conserva como referencia.
- **Colores del logo, vinculantes** (extraídos del archivo): azul acero `#7092BE`, gris `#7F7F7F`, contorno negro `#000000`. El blanco del PNG es fondo opaco, no color de marca.
- **Idioma:** español.
- **Preferencia visual permanente (elegida por el usuario):** la convención de la categoría, ejecutada en serio. El equipo quiere una web que se pare junto a **KRÜ, LOUD y Leviatán** — el registro latinoamericano de Valorant: fondo negro, acento saturado muy presente, tipografía condensada en caja alta, jugadores recortados, energía de calle. El nivel de acabado de esos tres sitios es el listón. Se ejecuta a máxima fidelidad, sin ironía y sin colar rarezas de autor.

## Evidence on Hand

- `public/image.png` — el logo, 1147×648, PNG sin canal alfa, con fondo blanco opaco y amplio espacio vacío alrededor de la marca.
- **No hay** fotos de jugadores todavía.
- **No hay** sponsors, resultados, testimonios, prensa ni logros documentados. Ninguno de estos puede fabricarse.

## Product Principles

1. **El roster es el producto.** Toda otra sección existe para enmarcarlo. Si algo compite con las caras de los jugadores por atención, sobra.
2. **Fotos disparejas son el caso normal, no el borde.** El diseño se juzga con fotos de celular mal encuadradas, no con retratos de estudio.
3. **Editar el equipo no puede requerir saber programar.** Un archivo, una entrada por jugador.
4. **Hecho a mano es la verdad del equipo, no una carencia.** La identidad viene de un dibujo propio; el sitio no debe aparentar una organización que no son.
5. **Lo que no existe se marca, no se inventa.** Sponsors, resultados y logros van como espacios declarados hasta que haya datos reales.

## Accessibility & Inclusion

Español como único idioma. Consumo primario en móvil, por lo que el rendimiento y los objetivos táctiles en pantallas chicas son requisitos, no mejoras. El azul de marca `#7092BE` no alcanza contraste AA para texto de cuerpo sobre blanco (~3.1:1): es color de superficie y acento, no de texto pequeño.
