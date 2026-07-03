import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        px-24
        py-32
      "
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="Proyectos"
          subtitle="Algunos de los proyectos en los que he trabajado."
        />

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}