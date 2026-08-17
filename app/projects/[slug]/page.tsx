import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import Container from "@/app/components/layout/Container";
import { getProjectBySlug, projects } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Zakk Fast`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Zakk Fast`,
      description: project.description,
    },
  };
}

function ProjectSection({
  title,
  paragraphs = [],
  bullets = [],
}: {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}) {
  if (paragraphs.length === 0 && bullets.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl dark:text-white">
        {title}
        <span className="text-cyan-400">.</span>
      </h2>
      <div className="space-y-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-300">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {bullets.length > 0 && (
        <ul className="space-y-3 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="pt-36 pb-24 sm:pt-40">
      <Container>
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 dark:text-gray-300 dark:hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Project Case Study
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              {project.title}
              <span className="text-cyan-400">.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.projectLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-neutral-900 dark:text-gray-200"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:bg-cyan-300 dark:text-neutral-950 dark:hover:bg-cyan-200"
                >
                  <ExternalLink size={17} />
                  Live Site
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 transition hover:border-cyan-400 hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:border-white/15 dark:bg-neutral-900 dark:text-gray-100 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-neutral-900 dark:shadow-cyan-950/20">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 620px, 100vw"
              className={
                project.imageFit === "contain"
                  ? "object-contain bg-white p-5 sm:p-10"
                  : "object-cover"
              }
            />
          </div>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20">
          <article className="space-y-14">
            <ProjectSection title="The Problem" paragraphs={project.caseStudy.problem} />
            <ProjectSection title="How It Works" paragraphs={project.caseStudy.howItWorks} />
            <ProjectSection title="Decisions That Mattered" bullets={project.caseStudy.decisions} />
            <ProjectSection title="Challenges & Tradeoffs" paragraphs={project.caseStudy.challenges} />
            {project.caseStudy.testing && (
              <ProjectSection title="Testing & Reliability" paragraphs={project.caseStudy.testing} />
            )}
            <ProjectSection title="What I'd Change Today" bullets={project.caseStudy.nextSteps} />
          </article>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-32 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              At a glance
            </p>
            <div className="mt-5">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Stack</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {project.projectLabels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-5 dark:border-white/10">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Project links</h2>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-300"
                  >
                    <ExternalLink size={15} /> Live Site
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 transition hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-300"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
