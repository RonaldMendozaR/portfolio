import TechnologyTag from "./TechnologyTag";

type Technology = {
  name: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: Technology[];
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
      "
    >
      <div
        className="
          h-56
          bg-slate-800
          flex
          items-center
          justify-center
          text-gray-500
        "
      >
        Imagen del proyecto
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p
          className="
            mt-4
            text-gray-400
            leading-7
          "
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          {technologies.map((technology) => (

            <TechnologyTag
              key={technology.name}
              name={technology.name}
            />

          ))}

        </div>

      </div>
    </article>
  );
}