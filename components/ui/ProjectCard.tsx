import TechnologyTag from "./TechnologyTag";
import Button from "./Button";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
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
          flex
          h-56
          items-center
          justify-center
          bg-slate-800
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
            leading-7
            text-gray-400
          "
        >
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <TechnologyTag
              key={technology}
              name={technology}
            />
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Button text="GitHub" />

          <Button
            text="Demo"
            variant="secondary"
          />
        </div>
      </div>
    </article>
  );
}