type SkillBadgeProps = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span
      className="
        px-4
        py-2
        rounded-full
        bg-slate-800
        border
        border-slate-700
        text-gray-300
        hover:border-blue-500
        hover:text-blue-400
        transition-all
        duration-300
      "
    >
      {name}
    </span>
  );
}