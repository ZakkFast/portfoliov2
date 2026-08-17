import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
