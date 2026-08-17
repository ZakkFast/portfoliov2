import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:zakkfastpro@gmail.com",
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ZakkFast",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/zachary-fast",
    external: true,
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/api/resume",
    external: false,
  },
];

const Contact = () => {
  return (
    <Container className="min-h-[70vh] pt-32 pb-24 lg:pt-40" id="contact">
      <SectionTitle title="contact" />

      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          I&apos;m currently looking for software engineering opportunities,
          particularly backend or product-focused roles where I can solve real
          problems and own meaningful pieces of a system.
        </p>
        <p className="mb-10 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          If you think I might be a good fit for your team, send me a message.
          I&apos;m always happy to talk shop.
        </p>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
          {contactLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-white/10 dark:bg-neutral-900 dark:text-gray-200 dark:shadow-cyan-950/20 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                aria-label={link.external ? `${link.label}, opens in a new tab` : link.label}
              >
                <IconComponent
                  size={18}
                  className="text-gray-500 transition-colors group-hover:text-cyan-500 dark:text-gray-400 dark:group-hover:text-cyan-300"
                  aria-hidden="true"
                />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        <a
          href="mailto:zakkfastpro@gmail.com"
          className="inline-block rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white shadow-lg shadow-cyan-400/20 transition-colors duration-200 hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-300 dark:text-neutral-950 dark:hover:bg-cyan-200"
        >
          Get In Touch
        </a>
      </div>
    </Container>
  );
};

export default Contact;
