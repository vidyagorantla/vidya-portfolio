import { useState } from "react";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-500">
          VIDYA
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-purple-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#achievements" className="hover:text-purple-400 transition">
            Achievements
          </a>

          <a href="#certificates" className="hover:text-purple-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-purple-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 space-y-5">

          <a
            href="#about"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#experience"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>

          <a
            href="#projects"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#achievements"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Achievements
          </a>

          <a
            href="#certificates"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>

          <a
            href="#contact"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>

      )}

    </nav>

  );
}

export default Navbar;