"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import GeomotryShapes from "../ui/Geomotry";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="pt-48 min-h-screen" id="hero">
      <GeomotryShapes scrollY={scrollY} />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl text-center font-bold">
          Creating Digital
          <br /> Experiences That <br />
          <span className="bg-gradient-to-r from-gray-800 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-cyan-300">
            Inspire & Engage
          </span>
        </h1>
        <p className="text-xl text-center pt-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Turning complex problems into simple, elegant solutions. I craft web
          experiences that bridge the gap between what users need and the full
          potential of today&apos;s technology. From pixel-perfect designs to
          robust backend systems, every detail matters in creating something
          truly exceptional.
        </p>
        <div className="text-center mt-8">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl transition-colors duration-200 font-medium shadow-lg shadow-cyan-400/20 inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-300 dark:text-neutral-950 dark:hover:bg-cyan-200"
          >
            View My Work
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
