"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-themeColor p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="Jade Sibalde - Página inicial">
            <img
              src="/logo_white.webp"
              alt="Jade Sibalde Advocacia"
              className="h-10"
            />
          </Link>
        </div>

        <nav className="hidden space-x-4 md:flex" aria-label="Navegação principal">
          <Link href="/#section_atuacao" className="hover:underline">
            Atuação
          </Link>

          <Link href="/#section_diferenciais" className="hover:underline">
            Diferenciais
          </Link>

          <Link href="/#section_about" className="hover:underline">
            Sobre
          </Link>

          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-themeColor"
          >
            <Icon
              icon={
                isOpen
                  ? "material-symbols:close"
                  : "iconamoon:menu-burger-horizontal"
              }
              className="text-2xl"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Navegação móvel"
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center gap-4 py-8 text-lg text-white`}
      >
        <Link
          href="/#section_atuacao"
          className="py-2 hover:underline"
          onClick={toggleMenu}
        >
          Atuação
        </Link>

        <Link
          href="/#section_diferenciais"
          className="py-2 hover:underline"
          onClick={toggleMenu}
        >
          Diferenciais
        </Link>

        <Link
          href="/#section_about"
          className="py-2 hover:underline"
          onClick={toggleMenu}
        >
          Sobre
        </Link>

        <Link href="/blog" className="py-2 hover:underline" onClick={toggleMenu}>
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
