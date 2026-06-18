import { ProjectType } from "@/app/types/Project";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/project/ProjectCard";

interface ProjectProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  const [featuredProject, ...otherProjects] = projects;

  if (!featuredProject) {
    return null;
  }

  return (
    <Container id="projects" className="pt-28 lg:pt-32">
      <div className="mb-8 text-center lg:mb-10">
        <SectionTitle title="projects" className="mb-3" />
        <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
          Selected builds across AI tools, product interfaces, and polished web
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:h-[min(56vh,30rem)] lg:grid-cols-3 lg:items-stretch">
        <div className="lg:col-span-2 lg:min-h-0">
          <ProjectCard project={featuredProject} featured />
        </div>

        <div className="grid gap-4 lg:min-h-0 lg:grid-rows-2">
          {otherProjects
            .slice(0, 2)
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
