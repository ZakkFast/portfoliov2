import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { ProjectType } from "@/app/types/Project";

interface ProjectCardProps {
  project: ProjectType;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
}) => {
  const {
    slug,
    title,
    description,
    image,
    imageAlt,
    imageFit,
    projectLabels,
    liveUrl,
    githubUrl,
  } = project;

  const hasLiveUrl = liveUrl.trim().length > 0;
  const hasGithubUrl = githubUrl.trim().length > 0;
  const primaryLabels = projectLabels.slice(0, featured ? 4 : 3);
  const eyebrow = featured ? "Featured Project" : "Project";
  const detailHref = `/projects/${slug}`;

  return (
    <article className="group relative isolate h-full min-h-56 w-full overflow-hidden rounded-2xl border border-gray-400/20 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.12)] aspect-[16/10] lg:aspect-auto lg:min-h-0 dark:border-white/10 dark:bg-neutral-900 dark:shadow-cyan-950/20">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 760px, 100vw"
              : "(min-width: 1024px) 360px, 100vw"
          }
          className={`${
            imageFit === "contain"
              ? "object-contain bg-white p-6 sm:p-8"
              : "object-cover"
          } transition duration-700 ease-out group-hover:scale-[1.03]`}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent lg:from-black/60" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 text-white transition duration-300 lg:p-5 lg:group-hover:opacity-0 lg:group-focus-within:opacity-0">
        <div className="min-w-0">
          <p className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
          <h3 className="text-xl font-bold leading-tight lg:text-2xl">
            {title}
          </h3>
        </div>

        <div className="flex shrink-0 gap-2 lg:hidden">
          <Link
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            href={detailHref}
            aria-label={`View ${title} case study`}
          >
            <ArrowUpRight size={17} />
          </Link>
          {hasGithubUrl && (
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
              aria-label={`${title} GitHub repository`}
            >
              <Github size={17} />
            </a>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 z-20 hidden flex-col justify-end bg-gradient-to-t from-black/92 via-black/55 to-black/10 text-white opacity-0 backdrop-blur-[1px] transition duration-300 lg:flex lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 ${
          featured ? "lg:p-7" : "lg:p-5"
        }`}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/90">
          {eyebrow}
        </p>
        <h3
          className={`text-2xl font-bold leading-tight ${
            featured ? "lg:text-3xl" : "lg:text-2xl"
          } ${featured ? "pb-3" : "pb-4"}`}
        >
          {title}
        </h3>
        <div className="flex flex-row flex-wrap gap-2 pb-4">
          {primaryLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white/90 shadow-sm backdrop-blur-md lg:text-sm"
            >
              {label}
            </span>
          ))}
        </div>
        {featured && (
          <p className="max-w-2xl pb-5 text-sm leading-6 text-white/85 lg:line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex flex-row flex-wrap gap-2">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            href={detailHref}
          >
            <ArrowUpRight size={15} />
            View Project
          </Link>
          {hasLiveUrl && (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
              href={liveUrl}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          {hasGithubUrl && (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
              href={githubUrl}
            >
              <Github size={15} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
