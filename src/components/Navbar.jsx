import { useEffect, useState } from "react";
import logo from "../../src/assets/logo3.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = ["home", "about", "services", "contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Kuleyar Logo"
            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium text-[var(--primary)]">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`relative group capitalize transition-all duration-300 ${
                activeSection === item
                  ? "font-bold"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {item}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--primary)] transition-all duration-300 ${
                  activeSection === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[var(--primary)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white text-[var(--primary)]">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`block w-full text-left capitalize ${
                activeSection === item ? "font-bold" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}