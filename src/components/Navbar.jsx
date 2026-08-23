import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo02.png";
import { menu, close } from "../assets";

const hoverGradientStyle = `
  @keyframes gradientHover {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .logo-glow {
    transition: all 0.3s ease;
  }
  .logo-glow:hover {
    background: linear-gradient(-45deg, #ff6b9d, #ffffff, #ff6b9d);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientHover 2s ease infinite;
    filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.6));
  }

  /* Стиль для навбара при скролле – градиент как у карточек */
  .navbar-scrolled {
    background: linear-gradient(135deg, #000000 0%, #000000 40%, #2a2a2a 100%);
  }
`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{hoverGradientStyle}</style>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="https://t.me/EvolveVpnBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            onClick={() => setActive("")}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex logo-glow">
              EVOLVE VPN &nbsp;
              <span className="sm:block hidden">| Connect</span>
            </p>
          </a>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => {
              if (nav.id === "youtube") {
                return (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a
                      href="https://lk.evolvevpn.org/cabinet/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nav.title}
                    </a>
                  </li>
                );
              }
              return (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => {
                  if (nav.id === "youtube") {
                    return (
                      <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                          active === nav.title ? "text-white" : "text-secondary"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a
                          href="https://lk.evolvevpn.org/cabinet/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {nav.title}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;