import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`mx-4 sm:mx-6 md:mx-0 navbar px-5 py-6 mt-3 rounded-3xl text-white flex items-center justify-between transition-all duration-300 sticky top-0 z-50
       ${
         active
           ? "translate-y-4 shadow-lg bg-transparent backdrop-blur-md"
           : "translate-y-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222] shadow-md"
       }
      `}
    >
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-30 rounded-full blur-3xl z-0" />

      {/* Logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white focus:outline-none"
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>

      {/* Menu List */}
      <ul
        className={`
              menu flex flex-col md:flex-row items-end gap-4
        md:static absolute top-full right-4 
        transition-all duration-300 z-50 
        bg-black/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none
        py-4 px-6 
        rounded-xl md:rounded-none w-fit md:w-auto
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        md:opacity-100 md:pointer-events-auto
        `}
      >
        <li>
          <span
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`cursor-pointer text-lg font-normal px-4 py-2 rounded-full transition-all duration-300 ${
              activeMenu === "home"
                ? "bg-black/10 text-white"
                : "text-white hover:text-xl"
            }`}
          >
            Home
          </span>
        </li>

        <li>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="bg-white/10 text-white"
            className="cursor-pointer text-lg font-normal px-4 py-2 rounded-full transition-all duration-300 text-white hover:text-xl"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="bg-white/10 text-white"
            className="cursor-pointer text-lg font-normal px-4 py-2 rounded-full transition-all duration-300 text-white hover:text-xl"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="bg-white/10 text-white"
            className="cursor-pointer text-lg font-normal px-4 py-2 rounded-full transition-all duration-300 text-white hover:text-xl"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="bg-white/10 text-white"
            className="cursor-pointer text-lg font-normal px-4 py-2 rounded-full transition-all duration-300 text-white hover:text-xl"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
