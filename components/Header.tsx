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
    <header className="bg-themeColor text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="https://jadesibalde.com/" rel="noopener noreferrer">
            <img src="/logo_white.png" alt="Company Logo" className="h-10" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/#section_atuacao" className="hover:underline">
            Atuação
          </Link>
          <Link href="/#section_diferenciais" className="hover:underline">
            Diferenciais
          </Link>
          <Link href="/#section_about" className="hover:underline">
            Sobre
          </Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Icon
              icon={
                isOpen
                  ? "material-symbols:close"
                  : "iconamoon:menu-burger-horizontal"
              }
              className="text-2xl"
            />
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } text-white flex flex-col items-center py-8 gap-4 text-lg`}
      >
        <Link href="/#section_atuacao" className="hover:underline py-2" onClick={toggleMenu}>
          Atuação
        </Link>
        <Link href="/#section_diferenciais" className="hover:underline py-2" onClick={toggleMenu}>
          Diferenciais
        </Link>
        <Link href="/#section_about" className="hover:underline py-2" onClick={toggleMenu}>
          Sobre
        </Link>
        <Link href="/blog" onClick={toggleMenu}>Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
