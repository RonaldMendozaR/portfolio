import { IconType } from "react-icons";
import SkillBadge from "./SkillBadge";

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
        hover:border-blue-500
        hover:-translate-y-2
      "
    >
      <h3
        className="
          text-2xl
          font-semibold
          text-blue-400
          mb-6
        "
      >
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}