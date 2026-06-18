"use client";
import SectionTitle from "../ui/SectionTitle";
import Container from "../layout/Container";

const About = () => {
  return (
    <Container className="pt-32" id="about">
      <SectionTitle title={"about"}></SectionTitle>

      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        {/* Left content */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl lg:text-4xl pb-4 lg:pb-6 text-gray-950 dark:text-white">
            Hello, I&apos;m a Full-Stack Developer
            <span className="text-cyan-400 text-4xl lg:text-5xl">.</span>
          </h2>
          <p className="pb-4 text-gray-600 leading-relaxed dark:text-gray-300">
            I&apos;m a passionate full-stack software engineer who specializes
            in creating seamless digital experiences that perform beautifully at
            every layer. I thrive on solving complex problems through clean,
            scalable code and thoughtful architecture, translating complex
            requirements into elegant solutions that drive real business impact
            and exceptional user experiences.
          </p>

          <div className="flex flex-col md:flex-row md:gap-12 lg:gap-16">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Design
              </h3>
              <ul className="list-none m-0 p-0 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">UI/UX Design</li>
                <li className="text-gray-600 dark:text-gray-300">Responsive Design</li>
                <li className="text-gray-600 dark:text-gray-300">Component Systems</li>
                <li className="text-gray-600 dark:text-gray-300">Data Visualization</li>
                <li className="text-gray-600 dark:text-gray-300">Performance Optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Development
              </h3>
              <ul className="list-none m-0 p-0 space-y-2">
                <li className="text-gray-600 dark:text-gray-300">React / Next.js</li>
                <li className="text-gray-600 dark:text-gray-300">TypeScript</li>
                <li className="text-gray-600 dark:text-gray-300">Node.js</li>
                <li className="text-gray-600 dark:text-gray-300">PostgreSQL</li>
                <li className="text-gray-600 dark:text-gray-300">REST APIs</li>
                <li className="text-gray-600 dark:text-gray-300">AI Integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side shapes */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2">
          <div className="relative w-[500px] h-[500px] bg-gray-50 rounded-xl border border-gray-200 shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-white/10 dark:shadow-cyan-950/20">
            <div className="blur-[2px]">
              {/* Large Triangle */}
              <div
                className="absolute top-12 rotate-12 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-cyan-300 opacity-40 dark:opacity-30"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  animation: "float-triangle 4s ease-in-out infinite",
                }}
              ></div>

              {/* Large Circle */}
              <div
                className="absolute top-64 right-62 w-48 h-48 bg-zinc-200 rounded-full opacity-40 dark:bg-zinc-700 dark:opacity-35"
                style={{
                  animation: "float-circle 3.5s ease-in-out infinite 1.5s",
                }}
              ></div>

              {/* Medium rectangle */}
              <div
                className="absolute top-48 rotate-45 right-20 w-20 h-32 bg-cyan-200 opacity-60 rounded-sm dark:bg-cyan-300 dark:opacity-35"
                style={{
                  animation: "float-rect 5s ease-in-out infinite 0.8s",
                }}
              ></div>

              {/* Small circle */}
              <div
                className="absolute top-24 right-20 w-18 h-18 bg-zinc-300 rounded-full opacity-50 dark:bg-zinc-600 dark:opacity-40"
                style={{
                  animation: "float-small 6s ease-in-out infinite 2.5s",
                }}
              ></div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float-triangle {
              0%,
              100% {
                transform: translateX(-50%) translateY(0px) rotate(0deg);
              }
              33% {
                transform: translateX(-50%) translateY(-25px) rotate(3deg);
              }
              66% {
                transform: translateX(-50%) translateY(-8px) rotate(-2deg);
              }
            }

            @keyframes float-circle {
              0%,
              100% {
                transform: translateY(0px) translateX(0px) scale(1);
              }
              30% {
                transform: translateY(-30px) translateX(-15px) scale(1.05);
              }
              70% {
                transform: translateY(-5px) translateX(8px) scale(0.98);
              }
            }

            @keyframes float-rect {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              40% {
                transform: translateY(18px) rotate(-5deg);
              }
              80% {
                transform: translateY(-12px) rotate(3deg);
              }
            }

            @keyframes float-small {
              0%,
              100% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-15px) translateX(10px);
              }
            }
          `}</style>
        </div>
      </div>
    </Container>
  );
};

export default About;
