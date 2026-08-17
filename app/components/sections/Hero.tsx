"use client";

import { Github, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import GeomotryShapes from "../ui/Geomotry";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frameId = 0;
    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frameId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Container
      className="relative flex min-h-screen flex-col justify-center py-28 sm:py-32"
      id="hero"
    >
      <GeomotryShapes scrollY={scrollY} />
      <div className="relative z-10">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
          Software engineer who likes
          <br />
          <span className="bg-gradient-to-r from-gray-800 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-cyan-300">
            solving the messy parts.
          </span>
        </h1>
        <p className="mx-auto max-w-3xl pt-8 text-center text-lg leading-8 text-gray-700 sm:text-xl dark:text-gray-300">
          I&apos;m Zakk, a full-stack software engineer with 4+ years of
          professional experience building web applications, APIs, and backend
          systems. I&apos;m good at taking a vague or messy problem, figuring out
          what actually matters, and getting it into a working product. I&apos;m
          comfortable moving between React and TypeScript frontends, Node or
          Python backends, databases, and all the glue in between—and I like
          owning a problem far enough to actually ship it.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-cyan-400/20 transition-colors duration-200 hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-300 dark:text-neutral-950 dark:hover:bg-cyan-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/ZakkFast"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-7 py-3.5 font-medium text-gray-800 backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-white/15 dark:bg-neutral-900/70 dark:text-gray-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="/api/resume"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-7 py-3.5 font-medium text-gray-800 backdrop-blur-sm transition hover:border-cyan-400 hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-white/15 dark:bg-neutral-900/70 dark:text-gray-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <FileText size={18} />
            Resume
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
