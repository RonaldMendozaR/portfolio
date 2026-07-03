import { IconType } from "react-icons";

type SkillBadgeProps = {
  name: string;
  icon: IconType;
};

export default function SkillBadge({
  name,
  icon: Icon,
}: SkillBadgeProps) {
  return (
    <span
      className="
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-slate-900
        border
        border-slate-700
        text-gray-300
        hover:border-blue-500
        hover:text-blue-400
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-default
      "
    >
      <Icon size={18} />

      <span>{name}</span>
    </span>
  );
}