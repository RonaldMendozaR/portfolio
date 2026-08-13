import type { LucideIcon } from "lucide-react";

type HighlightCardProps = {
  title: string;
  icon: LucideIcon;
};

export default function HighlightCard({
  title,
  icon: Icon,
}: HighlightCardProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/50
        hover:bg-slate-900
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-blue-400
          transition-colors
          duration-300
          group-hover:bg-blue-500/20
        "
      >
        <Icon size={22} />
      </div>

      <span className="text-sm font-medium text-gray-300">
        {title}
      </span>
    </div>
  );
}