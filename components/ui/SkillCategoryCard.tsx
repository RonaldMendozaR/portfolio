import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillCategoryCardProps = {
  title: string;
  skills: Skill[];
};

export default function SkillCategoryCard({
  title,
  skills,
}: SkillCategoryCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/40
      "
    >
      <h3 className="mb-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-800
                bg-slate-950/60
                px-4
                py-3
                text-gray-300
                transition-all
                duration-300
                hover:border-blue-500/50
                hover:text-blue-400
              "
            >
              <Icon size={22} />

              <span className="text-sm font-medium">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}