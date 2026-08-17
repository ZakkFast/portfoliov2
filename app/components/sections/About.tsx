import SectionTitle from "../ui/SectionTitle";
import Container from "../layout/Container";

const About = () => {
  return (
    <Container className="pt-28 lg:pt-32" id="about">
      <SectionTitle title="about" />

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        <div className="lg:w-2/3">
          <h2 className="pb-4 text-3xl text-gray-950 lg:pb-6 lg:text-4xl dark:text-white">
            I like understanding how things actually work
            <span className="text-4xl text-cyan-400 lg:text-5xl">.</span>
          </h2>
          <div className="max-w-3xl space-y-4 text-gray-600 leading-relaxed dark:text-gray-300">
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

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16">
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

        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="relative h-[500px] w-[500px] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-neutral-900 dark:shadow-cyan-950/20">
            <div className="blur-[2px]">
              <div
                className="absolute top-12 left-1/2 h-48 w-48 -translate-x-1/2 rotate-12 bg-cyan-300 opacity-40 dark:opacity-30"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  animation: "float-triangle 4s ease-in-out infinite",
                }}
              />
              <div
                className="absolute top-64 right-62 h-48 w-48 rounded-full bg-zinc-200 opacity-40 dark:bg-zinc-700 dark:opacity-35"
                style={{ animation: "float-circle 3.5s ease-in-out infinite 1.5s" }}
              />
              <div
                className="absolute top-48 right-20 h-32 w-20 rotate-45 rounded-sm bg-cyan-200 opacity-60 dark:bg-cyan-300 dark:opacity-35"
                style={{ animation: "float-rect 5s ease-in-out infinite 0.8s" }}
              />
              <div
                className="absolute top-24 right-20 h-18 w-18 rounded-full bg-zinc-300 opacity-50 dark:bg-zinc-600 dark:opacity-40"
                style={{ animation: "float-small 6s ease-in-out infinite 2.5s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
