"use client";

import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 rounded-xl border border-gray-400/20 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md sm:px-6 dark:border-white/10 dark:bg-neutral-950/75"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-semibold text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-white"
            onClick={closeMenu}
          >
            zakk fast<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-gray-300 dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-gray-300 dark:hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-gray-300 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <a
                  href="/api/resume"
                  className="inline-block rounded-lg border-2 border-cyan-400 px-3 py-2 text-center text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-neutral-950"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`my-1 block h-0.5 w-6 bg-gray-600 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 dark:bg-gray-300 ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-24 right-6 z-50 md:hidden" id="mobile-navigation">
          <div className="w-64 rounded-xl border border-gray-400/30 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/95">
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="block py-2 text-base font-medium text-gray-800 transition-colors hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 text-base font-medium text-gray-800 transition-colors hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 text-base font-medium text-gray-800 transition-colors hover:text-cyan-500 dark:text-gray-200 dark:hover:text-cyan-300"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
              <li className="border-t border-gray-400/30 pt-3 dark:border-white/10">
                <ThemeToggle showLabel />
              </li>
              <li className="pt-1">
                <a
                  href="/api/resume"
                  className="inline-block w-full rounded-lg border-2 border-cyan-400 px-3 py-2 text-center text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-neutral-950"
                  onClick={closeMenu}
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
