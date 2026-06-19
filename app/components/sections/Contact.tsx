"use client";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:zakkfastpro@gmail.com",
      external: false,
      download: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zachary-fast",
      external: true,
      download: false,
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ZakkFast",
      external: true,
      download: false,
    },
    {
      icon: FileText,
      label: "Resume",
      href: "/api/resume",
      external: false,
      download: true,
    },
  ];

  return (
    <Container className="pt-64 pb-20 min-h-screen" id="contact">
      <SectionTitle title="contact" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Circle icon links */}
        <div className="flex justify-center gap-8 mb-12">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                download={link.download ? "Zachary-Fast-Resume.pdf" : undefined}
                className="group w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:border-2 hover:border-cyan-400 hover:scale-110 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:bg-neutral-900 dark:border dark:border-white/10 dark:shadow-cyan-950/20 dark:hover:border-cyan-300"
              >
                <IconComponent
                  size={20}
                  className="text-gray-600 group-hover:text-cyan-400 transition-colors dark:text-gray-300 dark:group-hover:text-cyan-300"
                />
              </a>
            );
          })}
        </div>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed dark:text-gray-300">
          I&apos;m always excited to connect with fellow developers and explore
          new opportunities. Whether you&apos;re looking to collaborate on an
          interesting project or discuss how my skills might fit your
          team&apos;s needs, I&apos;d love to hear from you.
        </p>

        <div className="text-center">
          <a
            href="mailto:zakkfastpro@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl transition-colors duration-200 font-medium shadow-lg shadow-cyan-400/20 inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-300 dark:text-neutral-950 dark:hover:bg-cyan-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
