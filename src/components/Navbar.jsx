import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--text-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-bold tracking-wide">
          KULEYAR OCEANIC ENTERPRISES
        </h1>

        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 space-y-3"
          style={{ backgroundColor: "var(--primary-light)" }}
        >
          <a href="#home" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}