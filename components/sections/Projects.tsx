import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { projects } from "@/data/projects";
import SectionContainer from "../layout/SectionContainer";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Proyectos"
          subtitle="Algunos proyectos personales y académicos que reflejan mi experiencia como desarrollador."
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
    </SectionContainer>
  );
}