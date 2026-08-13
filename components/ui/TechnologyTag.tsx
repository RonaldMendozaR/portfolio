type TechnologyTagProps = {
  technology: string;
};

export default function TechnologyTag({
  technology,
}: TechnologyTagProps) {
  return (
    <span
      className="
        rounded-full
        border
        border-slate-700
        bg-slate-950
        px-3
        py-1
        text-xs
        font-medium
        text-blue-400
      "
    >
      {technology}
    </span>
  );
}