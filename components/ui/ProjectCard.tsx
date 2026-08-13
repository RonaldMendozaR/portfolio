import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TechnologyTag from "./TechnologyTag";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Imagen */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
        <Image
          src={image}
          alt={`Vista previa de ${title}`}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p
          className="
            mt-4
            leading-7
            text-gray-400
          "
        >
          {description}
        </p>

        {/* Tecnologías */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <TechnologyTag
              key={technology}
              technology={technology}
            />
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              px-4
              py-2
              text-sm
              font-medium
              text-gray-300
              transition-all
              duration-300
              hover:border-blue-500
              hover:text-blue-400
            "
          >
            <SiGithub size={18} />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-500
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-600
            "
          >
            <ExternalLink size={18} />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}