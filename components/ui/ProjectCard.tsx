import SkillBadge from "./SkillBadge";

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
      {/* Imagen temporal */}
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

        <h3
          className="
            text-2xl
            font-bold
            text-white
          "
        >
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

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
        >
          {technologies.map((technology) => (
            <SkillBadge
              key={technology.name}
              name={technology.name}
            />
          ))}
        </div>

        <div
          className="
            mt-8
            flex
            gap-4
          "
        >
          <button
            className="
              rounded-xl
              bg-blue-500
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-600
            "
          >
            GitHub
          </button>

          <button
            className="
              rounded-xl
              border
              border-blue-500
              px-5
              py-3
              font-semibold
              text-blue-400
              transition
              hover:bg-blue-500/10
            "
          >
            Demo
          </button>
        </div>

      </div>
    </article>
  );
}