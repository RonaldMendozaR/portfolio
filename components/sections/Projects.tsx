import SectionLayout from "@/components/layout/SectionLayout";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionLayout
      id="projects"
      title="Proyectos"
      subtitle="Una selección de proyectos en los que he trabajado y aplicado diferentes tecnologías."
    >
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </SectionLayout>
  );
}