"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { equipo, redes } from "@/data/team";
import { SocialIcon } from "./icons";

const nav = [
  { label: "Roster", href: "#roster" },
  { label: "Equipo", href: "#equipo" },
  { label: "Partidos", href: "#partidos" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menu movil es a pantalla completa: bloquear el scroll de fondo.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ink-line bg-ink/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={`${equipo.nombre}, inicio`}>
          <Image
            src="/logo-original.png"
            alt=""
            width={1147}
            height={648}
            priority
            className="h-8 w-auto md:h-9"
          />
          <span className="display text-xl leading-none md:text-2xl">{equipo.nombre}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="stamp text-steel transition-colors duration-200 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={red.nombre}
                className="h-4.5 w-4.5 text-steel transition-colors duration-200 hover:text-aura-hot"
              >
                <SocialIcon nombre={red.nombre} />
              </a>
            ))}
          </div>

          <a
            href="#roster"
            className="stamp bevel-sm hidden bg-aura-hot px-5 py-2.5 text-ink transition-colors duration-200 hover:bg-paper md:inline-block"
          >
            Ver roster
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="stamp -mr-2 px-2 py-3 text-paper lg:hidden"
          >
            {open ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-ink-line bg-ink lg:hidden">
          <nav className="flex flex-col px-5 py-2" aria-label="Principal móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-b border-ink-line py-5 text-4xl text-paper last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-5 px-5 pb-7 pt-3">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={red.nombre}
                className="h-5 w-5 text-steel"
              >
                <SocialIcon nombre={red.nombre} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
