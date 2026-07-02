type HighlightCardProps = {
  emoji: string;
  title: string;
};

export default function HighlightCard({
  emoji,
  title,
}: HighlightCardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        px-5
        py-4
        transition-all
        duration-300
        hover:border-blue-500
        hover:-translate-y-1
      "
    >
      <span className="text-2xl">
        {emoji}
      </span>

      <p className="font-medium">
        {title}
      </p>
    </div>
  );
}