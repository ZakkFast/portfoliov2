"use client";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-gray-400/20 rounded-xl px-6 py-4 max-w-6xl w-[calc(100%-3rem)] dark:bg-neutral-950/70 dark:border-white/10">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800 dark:text-white">
            zakk fast<span className="text-cyan-400">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors dark:text-gray-300 dark:hover:text-white">
                <a href="#about">About</a>
              </li>
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors dark:text-gray-300 dark:hover:text-white">
                <a href="#projects">Projects</a>
              </li>
              {/* <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
                <a href="#blog">Blog</a>
              </li> */}
              <li className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors dark:text-gray-300 dark:hover:text-white">
                <a href="#contact">Contact</a>
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <a
                  href="/api/resume"
                  className="w-full border-2 border-cyan-400 text-cyan-600 px-3 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors font-medium text-sm inline-block text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-neutral-950"
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 my-1 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel - positioned below nav */}
      {isOpen && (
        <div className="fixed top-24 right-6 z-50 md:hidden">
          <div
            className={`w-64 backdrop-blur-md bg-white/80 border border-gray-400/30 rounded-xl p-4 shadow-xl transition-all duration-300 dark:bg-neutral-950/90 dark:border-white/10 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="block text-gray-800 hover:text-cyan-500 transition-colors text-base font-medium py-2 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-gray-800 hover:text-cyan-500 transition-colors text-base font-medium py-2 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                {/* <a
                  href="#blog"
                  className="block text-gray-800 hover:text-cyan-500 transition-colors text-base font-medium py-2"
                  onClick={closeMenu}
                >
                  Blog
                </a> */}
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-gray-800 hover:text-cyan-500 transition-colors text-base font-medium py-2 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
              <li className="pt-2 border-t border-gray-400/30 dark:border-white/10">
                <ThemeToggle showLabel />
              </li>
              <li className="pt-2">
                <a
                  href="/api/resume"
                  className="w-full border-2 border-cyan-400 text-cyan-600 px-3 py-2 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors font-medium text-sm inline-block text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-neutral-950"
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
