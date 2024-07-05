"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-themeColor text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://jadesibalde.com/" rel="noopener noreferrer">
            <img src="/logo_white.png" alt="Company Logo" className="h-10" />
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#section_atuacao" className="hover:underline">
            Atuação
          </a>
          <a href="#section_diferenciais" className="hover:underline">
            Diferenciais
          </a>
          <a href="#section_about" className="hover:underline">
            Sobre
          </a>
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
        <a href="#section_atuacao" className="hover:underline py-2">
          Atuação
        </a>
        <a href="#section_diferenciais" className="hover:underline py-2">
          Diferenciais
        </a>
        <a href="#section_about" className="hover:underline py-2">
          Sobre
        </a>
      </nav>
    </header>
  );
};

export default Header;
