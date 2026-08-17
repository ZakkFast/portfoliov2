import SectionTitle from "../ui/SectionTitle";
import Container from "../layout/Container";

const About = () => {
  return (
    <Container className="pt-28 lg:pt-32" id="about">
      <SectionTitle title="about" />

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="pb-4 text-3xl text-gray-950 lg:pb-6 lg:text-4xl dark:text-white">
          I like understanding how things actually work
          <span className="text-4xl text-cyan-400 lg:text-5xl">.</span>
        </h2>

        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
          <p>
            Most of my background is in web development, working across React
            and TypeScript frontends, Node backends, APIs, databases, and
            everything that has to connect them.
          </p>
          <p>
            I tend to gravitate toward problems that are messy, underspecified,
            or need to be simplified. I like getting under the hood, figuring
            out why something works the way it does, and finding an approach
            that&apos;s straightforward enough to maintain six months later.
          </p>
          <p>
            These days I&apos;m also spending more time with Python, backend
            systems, AI tooling, and game development. The technology changes,
            but the part I enjoy hasn&apos;t really changed: building things,
            solving problems, and making systems better.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl gap-8 sm:grid-cols-2 sm:gap-16">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Core
            </h3>
            <ul className="m-0 list-none space-y-2 p-0">
              <li className="text-gray-600 dark:text-gray-300">TypeScript</li>
              <li className="text-gray-600 dark:text-gray-300">JavaScript</li>
              <li className="text-gray-600 dark:text-gray-300">React / Next.js</li>
              <li className="text-gray-600 dark:text-gray-300">Node.js</li>
              <li className="text-gray-600 dark:text-gray-300">REST APIs</li>
              <li className="text-gray-600 dark:text-gray-300">PostgreSQL</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Also Working With
            </h3>
            <ul className="m-0 list-none space-y-2 p-0">
              <li className="text-gray-600 dark:text-gray-300">Python / FastAPI</li>
              <li className="text-gray-600 dark:text-gray-300">SQL</li>
              <li className="text-gray-600 dark:text-gray-300">Docker</li>
              <li className="text-gray-600 dark:text-gray-300">CI/CD</li>
              <li className="text-gray-600 dark:text-gray-300">AI Integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
